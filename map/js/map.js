// Initialize the map
const map = L.map('map').setView([20, 0], 2);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors | HEMPIN/INOS SSOT',
    maxZoom: 19
}).addTo(map);

// Simple CSV parser for our specific format
function parseCSV(text) {
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
        // Handle values that may contain commas (simple approach)
        const values = [];
        let current = '';
        let inQuotes = false;
        
        for (let char of lines[i]) {
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                values.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        values.push(current.trim());
        
        const obj = {};
        headers.forEach((header, index) => {
            obj[header] = values[index] || '';
        });
        data.push(obj);
    }
    return data;
}

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

// Load both GeoJSON and CSV data, then merge them
Promise.all([
    fetch('../data/countries.geo.json'),
    fetch('../data/cannapeace-data.csv')
])
.then(async ([geoResponse, csvResponse]) => {
    if (!geoResponse.ok) {
        throw new Error(`GeoJSON HTTP error! status: ${geoResponse.status}`);
    }
    if (!csvResponse.ok) {
        throw new Error(`CSV HTTP error! status: ${csvResponse.status}`);
    }
    
    const geoData = await geoResponse.json();
    const csvText = await csvResponse.text();
    const csvData = parseCSV(csvText);
    
    // Create lookup map by country name (normalized for matching)
    const csvLookup = {};
    csvData.forEach(row => {
        const key = row.country.trim().toLowerCase();
        csvLookup[key] = row;
    });
    
    // Merge CSV data into GeoJSON features
    geoData.features.forEach(feature => {
        const countryName = feature.properties.name;
        const lookupKey = countryName ? countryName.toLowerCase() : '';
        
        if (csvLookup[lookupKey]) {
            // Merge CSV data into feature properties
            feature.properties.positive_category = csvLookup[lookupKey].positive_category;
            feature.properties.notes = csvLookup[lookupKey].notes;
            feature.properties.iso_code = csvLookup[lookupKey].iso_code;
        }
    });
    
    // Create the geoJSON layer with merged data
    geoJsonLayer = L.geoJSON(geoData, {
        style: getStyle,
        onEachFeature: function(feature, layer) {
            const countryName = feature.properties.name || 'Unknown';
            const category = feature.properties.positive_category || 'No data';
            const notes = feature.properties.notes || '';
            const isoCode = feature.properties.iso_code || '';
            
            // Determine status class for styling
            const statusClass = category.includes('Positive') || category.includes('Legalization') || category.includes('Allowed') 
                ? 'status-positive' 
                : category.includes('Reform') || category.includes('Decriminalized') || category.includes('Medical')
                    ? 'status-neutral' 
                    : '';
            
            // Add popup with enriched data
            layer.bindPopup(`
                <strong>${countryName}</strong>${isoCode ? `<br><small>ISO: ${isoCode}</small>` : ''}<br>
                <span class="${statusClass}">
                    ${category}
                </span><br>
                <small>${notes}</small>
            `);
            
            // Add click handler to update info panel
            layer.on('click', function() {
                updateCountryInfo(countryName, category, notes, isoCode);
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
    geoData.features.forEach(feature => {
        if (feature.properties.name) {
            countries.add(feature.properties.name);
        }
    });
    document.getElementById('country-count').textContent = countries.size;
    
    // Fit bounds to show all countries
    map.fitBounds(geoJsonLayer.getBounds());
    
})
.catch(error => {
    console.error('Error loading map data:', error);
    document.getElementById('country-details').innerHTML = 
        '<span style="color: red;">Error loading map data. Please check the console.</span>';
});

// Function to update country info panel (now accepts isoCode)
function updateCountryInfo(name, category, notes, isoCode = '') {
    const detailsDiv = document.getElementById('country-details');
    const statusClass = category.includes('Positive') || category.includes('Legalization') || category.includes('Allowed')
        ? 'status-positive' 
        : category.includes('Reform') || category.includes('Decriminalized') || category.includes('Medical')
            ? 'status-neutral' 
            : '';
    
    detailsDiv.innerHTML = `
        <h3>${name}</h3>
        ${isoCode ? `<p><small><strong>ISO Code:</strong> ${isoCode}</small></p>` : ''}
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

// Optional: Add a legend control
const legend = L.control({position: 'bottomright'});

legend.onAdd = function() {
    const div = L.DomUtil.create('div', 'legend');
    div.style.background = 'white';
    div.style.padding = '10px';
    div.style.borderRadius = '5px';
    div.style.boxShadow = '0 1px 5px rgba(0,0,0,0.4)';
    div.innerHTML = `
        <strong>Cannabis Policy</strong><br>
        <i style="background:#22c55e;opacity:0.7;width:18px;height:18px;display:inline-block;margin:2px"></i> Positive/Legal<br>
        <i style="background:#f59e0b;opacity:0.7;width:18px;height:18px;display:inline-block;margin:2px"></i> Reform/Medical<br>
        <i style="background:#6b7280;opacity:0.5;width:18px;height:18px;display:inline-block;margin:2px"></i> Other/No data
    `;
    return div;
};

legend.addTo(map);
