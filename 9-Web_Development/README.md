# Belly Button Biodiversity Dashboard: Interactive Data Exploration
### Objective
Create a dynamic and interactive dashboard to visualize microbial diversity in human navels. The dashboard will utilize D3.js for data loading and Plotly.js for visualizations, offering the following features:

A horizontal bar chart displaying the top 10 OTUs (Operational Taxonomic Units) found in an individual.
A bubble chart visualizing each sample's microbial diversity.
Demographic information about the individual.
Data updates when a new sample is selected.
## Process
#### Step 1: Set Up Repository and Clone to Local Machine
Create a new GitHub repository named belly-button-challenge to maintain version control.
Clone the repository to your local machine and set up necessary files by copying the provided index.html, samples.json, and static resources from the StarterCode folder.
#### Step 2: Data Loading and Parsing
Load the data using D3.js. The dataset is in JSON format, containing demographic data and microbiome details. We will use D3's d3.json() method to fetch the data from the provided URL.

#### Step 3: Building the Bar Chart
**Data Handling:**

Extract the necessary data from the JSON: otu_ids, sample_values, and otu_labels.
Sort the data to display the top 10 OTUs based on sample_values to highlight the most prevalent microbes.
**Bar Chart Construction:**

Use Plotly.js to create a horizontal bar chart, with otu_ids as labels and otu_labels for hover text.
Example code for the bar chart:

javascript
Copy code
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
#### Step 4: Building the Bubble Chart
**Bubble Chart Data Handling:**

Use otu_ids for the x-axis.
Use sample_values for both the y-axis and marker size.
Color the bubbles based on otu_ids and display otu_labels as hover text.
Bubble Chart Construction:

Use Plotly.js to construct the bubble chart and visualize microbial diversity for each sample.
Example code for the bubble chart:

javascript
Copy code
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
**Step 5: Displaying Metadata**
### Metadata Extraction:

Extract the individual's demographic data from the JSON (e.g., age, gender, ethnicity, etc.).
Loop through the metadata and append it to the #sample-metadata panel.
Example code to display metadata:

javascript
Copy code
function displayMetadata(metadata) {
    var metadataPanel = d3.select("#sample-metadata");
    metadataPanel.html(""); // Clear previous metadata

    Object.entries(metadata).forEach(([key, value]) => {
        metadataPanel.append("p").text(`${key}: ${value}`);
    });
}
#### Step 6: Updating Visualizations on Sample Change
**Dropdown Menu Setup:**

Create a dropdown menu to select a sample. When a sample is selected, the bar chart, bubble chart, and metadata should update dynamically to reflect the new sample’s data.
Example code for updating charts:

javascript
Copy code
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
#### Step 7: Deployment and Testing
Deployment on GitHub Pages:

Push the code to GitHub and deploy the dashboard on GitHub Pages for easy access and sharing.
Testing the dashboard to ensure that:

The bar chart and bubble chart render correctly.
The metadata updates when a new sample is selected.
The dropdown functions properly.

### Results: 
#### Interactive Dashboard:
    Horizontal bar chart for the top 10 OTUs.
    Bubble chart for sample diversity visualization.
    Metadata panel displaying individual demographic information.
#### GitHub Pages Deployment for easy access to the dashboard.
#### GitHub repository with proper version control and a detailed README.md file.
### Outcomes and Real-World Application
This dashboard allows researchers and microbiologists to explore the diversity of microbes in human navels. By visualizing the data interactively, they can identify patterns, track changes over time, and gain insights into the microbial communities prevalent in the population.
