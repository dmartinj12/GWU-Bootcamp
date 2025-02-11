// Fetch data from the provided JSON file
d3.json("samples.json").then(function(data) {
  console.log(data); // Log the entire data for debugging

  // Extract and log key parts of the dataset
  let names = data.names;       // Store and log IDs (sample names)
  console.log(names);
  let metadata = data.metadata; // Store and log metadata information
  console.log(metadata);
  let samples = data.samples;   // Store and log sample data
  console.log(samples);

  // Populate the dropdown menu with sample IDs
  let dropdown = d3.select("#selDataset");
  names.forEach(id => {
    dropdown.append("option").text(id).property("value", id);
  });

  // Set up the default view for the first subject (ID 940)
  updateChartsAndInfo(names[0]);

  // Event listener for dropdown menu changes
  d3.selectAll("#selDataset").on("change", function() {
    let selectedId = dropdown.property("value"); // Get the selected ID
    updateChartsAndInfo(selectedId); // Update charts and info dynamically
  });

  // Function to update bar chart, bubble chart, and demographic info
  function updateChartsAndInfo(selectedId) {
    // Find the selected sample data and metadata
    let selectedSample = samples.find(sample => sample.id == selectedId);
    let selectedMetadata = metadata.find(meta => meta.id == selectedId);

    // Get the top 10 OTUs for the selected sample
    let otuIds = selectedSample.otu_ids.slice(0, 10).map(id => `OTU ${id}`);
    let sampleValues = selectedSample.sample_values.slice(0, 10);
    let otuLabels = selectedSample.otu_labels.slice(0, 10); // Optional: for hover text

    // Update demographic information
    let demographicBox = d3.select("#sample-metadata");
    demographicBox.html(
      `ID: ${selectedMetadata.id} <br> 
       ETHNICITY: ${selectedMetadata.ethnicity} <br>
       GENDER: ${selectedMetadata.gender} <br>
       AGE: ${selectedMetadata.age} <br>
       LOCATION: ${selectedMetadata.location} <br>
       BBTYPE: ${selectedMetadata.bbtype} <br>
       WFREQ: ${selectedMetadata.wfreq}`
    );

    // Update bar chart
    let barTrace = {
      x: sampleValues.reverse(),
      y: otuIds.reverse(),
      text: otuLabels.reverse(), // Add hover text
      type: "bar",
      orientation: "h"
    };
    let barData = [barTrace];
    let barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      xaxis: { title: { text: "Number of Bacteria" } }
    };
    Plotly.newPlot("bar", barData, barLayout); // Re-render the bar chart

    // Update bubble chart
    let bubbleTrace = {
      x: selectedSample.otu_ids,
      y: selectedSample.sample_values,
      mode: "markers",
      marker: {
        size: selectedSample.sample_values,
        color: selectedSample.otu_ids,
        colorscale: "Viridis"
      },
      type: "scatter"
    };
    let bubbleData = [bubbleTrace];
    let bubbleLayout = {
      title: "Bacteria Cultures per Sample",
      xaxis: { title: { text: "OTU ID" } },
      yaxis: { title: { text: "Number of Bacteria" } }
    };
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); // Re-render the bubble chart
  }

});