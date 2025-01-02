Belly Button Biodiversity Dashboard: Interactive Data Exploration

Objective:
Create a dynamic and interactive dashboard to visualize microbial diversity in human navels, using D3.js for data visualization and Plotly.js for the charts. The dashboard will include two main visualizations:

A horizontal bar chart to display the top 10 OTUs found in an individual.
A bubble chart to visualize each sample’s diversity.
Additionally, the dashboard will show demographic information about the individual and allow for data updates when a new sample is selected.

Process:
Step 1: Set Up Repository and Clone to Local Machine
Create a new GitHub repository: I’ll create a fresh repo named belly-button-challenge to maintain clear version control.
Clone the repository to my local machine and set up the necessary files by copying the provided index.html, samples.json, and static resources from the StarterCode folder.
Step 2: Data Loading and Parsing
Load the data using D3.js: The dataset is in JSON format, which contains demographic data and microbiome details. I will use D3’s d3.json() method to fetch the data from the provided URL:

javascript
d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then(function(data) {
    console.log(data);  // Check the data structure
    processData(data);
});

Step 3: Building the Bar Chart

Data Handling:
Extract the necessary data from the JSON: otu_ids, sample_values, and otu_labels.
Sort the data to display the top 10 OTUs based on sample_values to show the most prevalent microbes.
Bar Chart Construction:
Use Plotly.js to create a horizontal bar chart. The bar chart will represent the top 10 OTUs by sample_values, with otu_ids as the labels and otu_labels as the hovertext.
Example code snippet for the bar chart:

javascript
var trace = {
    x: top10SampleValues,
    y: top10OtuIds.map(id => `OTU ${id}`),
    text: top10OtuLabels,
    type: 'bar',
    orientation: 'h'
};

var layout = {
    title: 'Top 10 OTUs',
    xaxis: { title: 'Sample Value' },
    yaxis: { title: 'OTU ID' }
};

Plotly.newPlot('bar', [trace], layout);

Step 4: Building the Bubble Chart

Bubble Chart Data Handling:
Use otu_ids for the x-axis.
Use sample_values for the y-axis and marker size.
Color the bubbles based on otu_ids and display otu_labels as the hover text.
Bubble Chart Construction:
Construct the bubble chart using Plotly.js to visualize the microbial diversity for each sample.
Example code snippet for the bubble chart:

javascript
var trace = {
    x: otuIds,
    y: sampleValues,
    text: otuLabels,
    mode: 'markers',
    marker: {
        size: sampleValues,
        color: otuIds,
        colorscale: 'Earth'
    }
};

var layout = {
    title: 'OTU Bubble Chart',
    xaxis: { title: 'OTU ID' },
    yaxis: { title: 'Sample Value' }
};

Plotly.newPlot('bubble', [trace], layout);

Step 5: Displaying Metadata

Metadata Extraction:
Extract the individual’s demographic data from the JSON (age, gender, ethnicity, etc.).
Loop through the metadata and append it to the #sample-metadata panel.

Example code to display metadata:
javascript
function displayMetadata(metadata) {
    var metadataPanel = d3.select("#sample-metadata");
    metadataPanel.html("");  // Clear previous metadata

    Object.entries(metadata).forEach(([key, value]) => {
        metadataPanel.append("p").text(`${key}: ${value}`);
    });
}

Step 6: Updating Visualizations on Sample Change

Dropdown Menu Setup:
Create a dropdown menu where users can select a sample.
When a sample is selected, the bar chart, bubble chart, and metadata should update dynamically to reflect the new sample’s data.
Example code for updating charts:

javascript
function updateCharts(selectedSample) {
    var sampleData = data.samples.filter(sample => sample.id == selectedSample)[0];
    var metadata = data.metadata.filter(sample => sample.id == selectedSample)[0];

    // Update bar chart
    updateBarChart(sampleData);

    // Update bubble chart
    updateBubbleChart(sampleData);

    // Update metadata
    displayMetadata(metadata);
}

Step 7: Deployment and Testing
Deployment on GitHub Pages:
Push the code to GitHub and deploy the dashboard on GitHub Pages for easy access and sharing.

Testing the dashboard to ensure that:

The bar chart and bubble chart render correctly.
The metadata updates when a new sample is selected.
The dropdown functions properly.
Key Deliverables:
Interactive Dashboard with:
Horizontal bar chart for the top 10 OTUs.
Bubble chart for sample diversity visualization.
Metadata panel displaying individual demographic information.
Github Pages Deployment for easy access to the dashboard.
GitHub repository with proper version control and detailed README.md.
Outcomes and Real-World Application:

This dashboard will allow researchers and microbiologists to explore the diversity of microbes in human navels. By visualizing the data in an interactive format, they can quickly identify patterns, track changes over time, and gain insights into the microbial communities that are most prevalent in the population.