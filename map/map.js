// Initialize the map
const map = L.map('map').setView([20, 0], 2);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors | HEMPIN/INOS SSOT',
    maxZoom: 19
}).addTo(map);

// Style function based on cannabis policy
function getStyle(feature) {
    const category = feature.properties.positive_category || '';
    
    if (category.includes('Positive') || category.includes('Legalization') || category.includes('Allowed')) {
        return {
            fillColor: '#22c55e',
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    } else if (category.includes('Reform') || category.includes('Decriminalized') || category.includes('Medical')) {
        return {
            fillColor: '#f59e0b',
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    } else {
        return {
            fillColor: '#6b7280',
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.5
        };
    }
}

// Create geoJSON layer
let geoJsonLayer;

// Load the GeoJSON data
fetch('../data/countries.geo.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        geoJsonLayer = L.geoJSON(data, {
            style: getStyle,
            onEachFeature: function(feature, layer) {
                // Add popup
                const countryName = feature.properties.name;
                const category = feature.properties.positive_category || 'No data';
                const notes = feature.properties.notes || '';
                
                layer.bindPopup(`
                    <strong>${countryName}</strong><br>
                    <span class="${category.includes('Positive') || category.includes('Legalization') ? 'status-positive' : category.includes('Reform') ? 'status-neutral' : ''}">
                        ${category}
                    </span><br>
                    <small>${notes}</small>
                `);
                
                // Add click handler to update info panel
                layer.on('click', function() {
                    updateCountryInfo(countryName, category, notes);
                });
                
                // Add hover effects
                layer.on('mouseover', function() {
                    this.setStyle({
                        weight: 3,
                        color: '#2d5016',
                        fillOpacity: 0.9
                    });
                });
                
                layer.on('mouseout', function() {
                    geoJsonLayer.resetStyle(this);
                });
            }
        }).addTo(map);
        
        // Update country count
        const countries = new Set();
        data.features.forEach(feature => {
            if (feature.properties.name) {
                countries.add(feature.properties.name);
            }
        });
        document.getElementById('country-count').textContent = countries.size;
        
        // Fit bounds to show all countries
        map.fitBounds(geoJsonLayer.getBounds());
    })
    .catch(error => {
        console.error('Error loading GeoJSON:', error);
        document.getElementById('country-details').innerHTML = 
            '<span style="color: red;">Error loading map data. Please check the console.</span>';
    });

// Function to update country info panel
function updateCountryInfo(name, category, notes) {
    const detailsDiv = document.getElementById('country-details');
    const statusClass = category.includes('Positive') || category.includes('Legalization') ? 'status-positive' : 
                       category.includes('Reform') ? 'status-neutral' : '';
    
    detailsDiv.innerHTML = `
        <h3>${name}</h3>
        <p class="${statusClass}"><strong>${category}</strong></p>
        <p><small>${notes}</small></p>
        <hr>
        <p><small><em>Part of HEMPIN's verified global network</em></small></p>
    `;
}

// Add a scale control
L.control.scale({
    imperial: true,
    metric: true,
    position: 'bottomleft'
}).addTo(map);
