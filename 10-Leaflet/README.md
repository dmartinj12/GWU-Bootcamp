Earthquake Visualization Project: USGS Data Analysis and Map Design

Objective:
Create an interactive map using Leaflet.js to visualize earthquake data provided by the USGS. The map will plot earthquakes based on their geographic coordinates (latitude, longitude), with markers reflecting earthquake magnitude (size) and depth (color).

Part 1: Creating the Earthquake Visualization

Step 1: Setting Up the Project

Create a GitHub Repository:
I’ll start by creating a new repository called leaflet-challenge and clone it to my local machine.
I’ll structure the folder to include Leaflet-Part-1 and Leaflet-Part-2 as suggested.

Required Files:
Download the necessary files such as HTML and JavaScript templates to set up the Leaflet environment.
Link the Leaflet.js and D3.js libraries within the index.html file for mapping and data handling.

Step 2: Data Acquisition
Obtain the Earthquake Data:
I’ll use the USGS GeoJSON Feed to fetch real-time earthquake data. The dataset is updated every 5 minutes.
A sample URL for earthquake data is: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson.

Understanding the Data:
The earthquake data will include longitude, latitude, magnitude, and depth for each earthquake.
Depth is crucial for determining the color of each marker, while the magnitude will affect the size.

Step 3: Building the Map

Initialize the Leaflet Map:
Create a basic map using Leaflet, set the initial view to a global perspective (e.g., centered at [0, 0]), and zoom out to show global data.

javascript
var map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
Add Earthquake Data as Markers:

Use D3.js to fetch the GeoJSON data and plot each earthquake's latitude and longitude.
Each marker should represent an earthquake, with its size based on magnitude and color based on depth.
Example code to add the data:

javascript
d3.json(earthquakeDataUrl).then(function(data) {
    L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {
            var depth = feature.geometry.coordinates[2];
            var magnitude = feature.properties.mag;

            var markerColor = getDepthColor(depth);
            var markerSize = getMagnitudeSize(magnitude);

            return L.circleMarker(latlng, {
                radius: markerSize,
                fillColor: markerColor,
                color: markerColor,
                weight: 1,
                opacity: 1,
                fillOpacity: 0.7
            }).bindPopup(`<h3>Magnitude: ${magnitude}</h3><p>Location: ${feature.properties.place}</p><p>Depth: ${depth} km</p>`);
        }
    }).addTo(map);
});

Color by Depth:

Define a color scale function to assign colors based on depth. For instance:

javascript
function getDepthColor(depth) {
    if (depth < 10) return "#ffffb2";
    else if (depth < 30) return "#fed976";
    else if (depth < 50) return "#feb24c";
    else if (depth < 70) return "#fd8d3c";
    else if (depth < 90) return "#f03b20";
    else return "#bd0026";
}

Size by Magnitude:

Define a function to determine the size of each marker based on the earthquake's magnitude:

javascript
function getMagnitudeSize(magnitude) {
    return magnitude * 4;  // Example scale, adjust as needed
}

Step 4: Adding a Legend

Create a Legend:
Add a legend to provide context for the depth values and their corresponding colors.

javascript
var legend = L.control({position: 'bottomright'});

legend.onAdd = function() {
    var div = L.DomUtil.create('div', 'info legend');
    var depthLabels = ["<10 km", "10-30 km", "30-50 km", "50-70 km", "70-90 km", ">90 km"];
    var depthColors = ["#ffffb2", "#fed976", "#feb24c", "#fd8d3c", "#f03b20", "#bd0026"];

    for (var i = 0; i < depthLabels.length; i++) {
        div.innerHTML += `<i style="background: ${depthColors[i]}"></i> ${depthLabels[i]}<br>`;
    }
    return div;
};

legend.addTo(map);

Step 5: Tooltips and Interactivity

Popup Tooltips:

When a user clicks on a marker, a popup will display the earthquake’s magnitude, location, and depth, as shown in the above bindPopup method.
Data Points and Tooltips:
Each marker will display data when clicked, providing more context to users about the event.

Step 6: Testing and Debugging
Check Data Loading: Verify that the data loads correctly by logging the data to the console and checking for any issues with marker placement or size.
Validate Map Interaction: Ensure that zoom, pan, and popup interactions work smoothly.

Part 2: (Optional) Tectonic Plates Visualization

Overlay Tectonic Plates Data:
Plot the tectonic plate boundaries on the map to show seismic activity related to plate movements.
The dataset can be found on the Tectonic Plates GitHub.
Add Layer Controls:
Allow users to toggle between different data layers (earthquakes, tectonic plates) using Leaflet's L.control.layers.

javascript
var tectonicLayer = L.geoJSON(tectonicPlatesData).addTo(map);

var overlays = {
    "Tectonic Plates": tectonicLayer
};

L.control.layers(null, overlays).addTo(map);

Final Result:

Interactive Earthquake Map with:

Markers reflecting earthquake magnitude and depth.
Popups showing earthquake details.
A legend explaining depth color coding.
Optional tectonic plate overlays and layer controls.

GitHub Repository:
With properly committed code, a structured README.md, and deployment instructions.

Deployed Map:
The map will be hosted on GitHub Pages for public access and shared with relevant organizations for educational purposes.

Real-World Impact:
This tool will allow the public and government organizations to easily visualize and interpret earthquake data. By displaying the data interactively and with meaningful visual context, the map can aid in disaster preparedness, scientific research, and educational outreach, potentially securing further funding for USGS projects.