## Belly Button Biodiversity Dashboard: Interactive Data Exploration

### Objective:
- Create a dynamic and interactive dashboard to visualize microbial diversity in human navels, using **D3.js** for data visualization and **Plotly.js** for the charts. The dashboard will include two main visualizations:
  1. A horizontal bar chart to display the top 10 OTUs found in an individual.
  2. A bubble chart to visualize each sample’s diversity.
- Additionally, the dashboard will show demographic information about the individual and allow for data updates when a new sample is selected.

---

### Process:

#### Step 1: Set Up Repository and Clone to Local Machine
- Create a new GitHub repository: A fresh repo named `belly-button-challenge` will be created to maintain clear version control.
- Clone the repository to the local machine and set up the necessary files by copying the provided `index.html`, `samples.json`, and static resources from the StarterCode folder.

#### Step 2: Data Loading and Parsing
- **Load the data using D3.js**: The dataset is in JSON format, containing demographic data and microbiome details. Use D3’s `d3.json()` method to fetch the data from the provided URL.

#### Step 3: Building the Bar Chart
- **Data Handling**:
  - Extract the necessary data from the JSON: `otu_ids`, `sample_values`, and `otu_labels`.
  - Sort the data to display the top 10 OTUs based on `sample_values` to show the most prevalent microbes.
  
- **Bar Chart Construction**:
  - Use **Plotly.js** to create a horizontal bar chart that represents the top 10 OTUs by `sample_values`, with `otu_ids` as the labels and `otu_labels` as the hovertext.

#### Step 4: Building the Bubble Chart
- **Bubble Chart Data Handling**:
  - Use `otu_ids` for the x-axis.
  - Use `sample_values` for the y-axis and marker size.
  - Color the bubbles based on `otu_ids` and display `otu_labels` as the hover text.

- **Bubble Chart Construction**:
  - Construct the bubble chart using **Plotly.js** to visualize the microbial diversity for each sample.

#### Step 5: Displaying Metadata
- **Metadata Extraction**:
  - Extract the individual’s demographic data from the JSON (age, gender, ethnicity, etc.).
  - Loop through the metadata and append it to the `#sample-metadata` panel.

#### Step 6: Updating Visualizations on Sample Change
- **Dropdown Menu Setup**:
  - Create a dropdown menu where users can select a sample.
  - When a sample is selected, the bar chart, bubble chart, and metadata should update dynamically to reflect the new sample’s data.

#### Step 7: Deployment and Testing
- **Deployment on GitHub Pages**:
  - Push the code to GitHub and deploy the dashboard on GitHub Pages for easy access and sharing.
  
- **Testing the dashboard** to ensure:
  - The bar chart and bubble chart render correctly.
  - The metadata updates when a new sample is selected.
  - The dropdown functions properly.

---

### Key Deliverables:
- Interactive Dashboard with:
  - Horizontal bar chart for the top 10 OTUs.
  - Bubble chart for sample diversity visualization.
  - Metadata panel displaying individual demographic information.
- **GitHub Pages Deployment** for easy access to the dashboard.
- **GitHub repository** with proper version control and detailed `README.md`.

---

### Outcomes and Real-World Application:

- This dashboard will allow researchers and microbiologists to explore the diversity of microbes in human navels. By visualizing the data in an interactive format, they can quickly identify patterns, track changes over time, and gain insights into the microbial communities that are most prevalent in the population.