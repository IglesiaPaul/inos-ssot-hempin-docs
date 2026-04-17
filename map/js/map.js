// map/js/map.js
// Cannabis/Hemp Policy World Map - Leaflet Implementation

document.addEventListener('DOMContentLoaded', function() {
    initMap();
});

function initMap() {
    // Initialize map centered on world view
    const map = L.map('map').setView([20, 0], 2);
    
    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors | Cannabis Policy Data 2026',
        maxZoom: 6,
        minZoom: 1
    }).addTo(map);
    
    // Color scheme for policy categories
    const categoryColors = {
        'Full Legalization': '#2ecc71',
        'Decriminalized': '#3498db',
        'Medical Positive': '#9b59b6',
        'Medical Only': '#34495e',
        'Home Grow Allowed': '#27ae60',
        '2026 Reform': '#e67e22',
        'Future Positive (2027)': '#f39c12',
        'Future Positive (Discussion)': '#f1c40f',
        'Decriminalized / Future Positive': '#5dade2',
        'Medical Positive / Future Positive': '#9b59b6',
        'Medical Only / Future Positive': '#7f8c8d',
        'Tolerated': '#95a5a6',
        'No Data': '#bdc3c7'
    };
    
    // Legend control
    const legend = L.control({position: 'bottomright'});
    legend.onAdd = function() {
        const div = L.DomUtil.create('div', 'legend');
        div.innerHTML = `
            <h4>Policy Status</h4>
            ${Object.entries(categoryColors).map(([cat, color]) => 
                `<div><span style="background:${color};width:20px;height:20px;display:inline-block;margin-right:5px;border:1px solid #333;"></span>${cat}</div>`
            ).join('')}
        `;
        return div;
    };
    legend.addTo(map);
    
    // Style function for countries
    function styleFeature(feature) {
        const policyData = window.policyData[feature.id] || {};
        const category = policyData.positive_category || 'No Data';
        return {
            fillColor: categoryColors[category] || '#bdc3c7',
            weight: 1,
            opacity: 1,
            color: '#333',
            fillOpacity: 0.7
        };
    }
    
    // Popup content generator
    function getPopupContent(feature) {
        const policyData = window.policyData[feature.id] || {};
        const name = feature.properties.name || 'Unknown';
        
        return `
            <div class="popup-content">
                <h3>${name}</h3>
                <p><strong>Category:</strong> ${policyData.positive_category || 'No Data'}</p>
                ${policyData.status_2026_update ? `<p><strong>2026 Update:</strong> ${policyData.status_2026_update}</p>` : ''}
                ${policyData.planned_reform_2027 ? `<p><strong>2027 Reform:</strong> ${policyData.planned_reform_2027}</p>` : ''}
                <hr style="margin:8px 0;">
                <p style="font-size:12px;">
                    🏠 Home: ${policyData.home_grow_allowed === 'Yes' ? '✅' : policyData.home_grow_allowed === 'No' ? '❌' : '⚪'}<br>
                    🎉 Recreational: ${policyData.recreational_allowed === 'Yes' ? '✅' : policyData.recreational_allowed === 'No' ? '❌' : '⚪'}<br>
                    🏥 Medical: ${policyData.medical_allowed === 'Yes' ? '✅' : policyData.medical_allowed === 'No' ? '❌' : '⚪'}<br>
                    🌿 Hemp: ${policyData.hemp_allowed === 'Yes' ? '✅' : policyData.hemp_allowed === 'No' ? '❌' : '⚪'}<br>
                    ⚖️ Decriminalized: ${policyData.decriminalized === 'Yes' ? '✅' : policyData.decriminalized === 'No' ? '❌' : '⚪'}
                </p>
                ${policyData.notes ? `<p style="font-size:11px;color:#666;"><em>${policyData.notes}</em></p>` : ''}
            </div>
        `;
    }
    
    // Highlight functions
    function highlightFeature(e) {
        const layer = e.target;
        layer.setStyle({
            weight: 3,
            color: '#fff',
            fillOpacity: 0.9
        });
        layer.bringToFront();
    }
    
    function resetHighlight(e) {
        geojson.resetStyle(e.target);
    }
    
    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    }
    
    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: function(e) {
                zoomToFeature(e);
                layer.bindPopup(getPopupContent(feature)).openPopup();
            }
        });
    }
    
    // Load and process data
    let geojson;
    
    // Load CSV data first, then GeoJSON
    Papa.parse('/map/data/cannapeace-data-new.csv', {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(csvResults) {
            // Convert CSV to lookup object by country code
            window.policyData = {};
            csvResults.data.forEach(row => {
                if (row.id) {
                    window.policyData[row.id] = row;
                }
            });
            
            // Now load GeoJSON
            fetch('/map/data/cannabis-worldmap.geojson.json')
                .then(response => response.json())
                .then(geojsonData => {
                    geojson = L.geoJSON(geojsonData, {
                        style: styleFeature,
                        onEachFeature: onEachFeature
                    }).addTo(map);
                    
                    // Add title overlay
                    const title = L.control({position: 'topleft'});
                    title.onAdd = function() {
                        const div = L.DomUtil.create('div', 'map-title');
                        div.innerHTML = '<h3>🌿 Global Cannabis & Hemp Policy Map 2026</h3>';
                        return div;
                    };
                    title.addTo(map);
                    
                    // Add info control
                    const info = L.control();
                    info.onAdd = function() {
                        this._div = L.DomUtil.create('div', 'info');
                        this.update();
                        return this._div;
                    };
                    info.update = function(props) {
                        this._div.innerHTML = props ? 
                            `<strong>${props.name}</strong><br/>${window.policyData[props.id]?.positive_category || 'No Data'}` : 
                            'Hover over a country';
                    };
                    info.addTo(map);
                    
                    // Update info on mouseover
                    geojson.on('mouseover', function(e) {
                        info.update(e.target.feature.properties);
                    });
                    geojson.on('mouseout', function() {
                        info.update();
                    });
                })
                .catch(error => {
                    console.error('Error loading GeoJSON:', error);
                    document.getElementById('map').innerHTML = 
                        '<div style="padding:20px;text-align:center;color:#c00;">Error loading map data. Please check file paths.</div>';
                });
        },
        error: function(err) {
            console.error('Error loading CSV:', err);
            document.getElementById('map').innerHTML = 
                '<div style="padding:20px;text-align:center;color:#c00;">Error loading policy data. Please check /map/data/cannapeace-data-new.csv</div>';
        }
    });
}
