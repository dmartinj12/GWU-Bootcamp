## CryptoClustering

### Overview
The objective of this project is to cluster cryptocurrencies based on their price change percentages over the last 24 hours and 7 days using unsupervised learning techniques. **K-means clustering** is used to identify groups within the data, and **Principal Component Analysis (PCA)** is applied to reduce dimensionality for better visualization and analysis.

---

### Data
The dataset **crypto_market_data.csv** contains the following columns:
- **coin_id**: The unique identifier of each cryptocurrency.
- **price_change_percentage_24h**: The percentage change in the cryptocurrency's price over the last 24 hours.
- **price_change_percentage_7d**: The percentage change in the cryptocurrency's price over the last 7 days.

---

### Steps

#### 1. Load and Inspect the Data
- The data was loaded into a Pandas DataFrame for inspection.
- Summary statistics and visualizations were created to understand the distribution of data points.

#### 2. Data Preparation
- **Standardization**: The data was scaled using **StandardScaler()** to normalize the features and make them comparable. The scaled data was then used for clustering, with **coin_id** serving as the index.

#### 3. Finding the Optimal Number of Clusters (k)
- The **elbow method** was implemented to determine the optimal value for **k** (number of clusters). This method involved computing inertia (sum of squared distances from centroids) for a range of **k** values (from 1 to 11) and plotting the elbow curve to visually identify the ideal **k**.

#### 4. K-means Clustering on the Scaled Data
- Using the optimal **k**, **K-means clustering** was applied to the scaled data to group cryptocurrencies into clusters.
- A scatter plot was created to visualize the clusters using **hvPlot**, with the x-axis representing **price_change_percentage_24h** and the y-axis representing **price_change_percentage_7d**. The cryptocurrency names were included in hover tooltips.

#### 5. Optimization with Principal Component Analysis (PCA)
- **PCA** was performed to reduce the features to three principal components (PCs), which helped in reducing dimensionality while retaining as much information as possible.
- The explained variance of the PCA was computed to understand the amount of variance captured by each principal component.

#### 6. K-means Clustering on the PCA Data
- The elbow method was applied again to the scaled **PCA** data to determine the best value for **k**.
- **K-means clustering** was applied to the PCA-transformed data, and the results were visualized using a scatter plot with **PC1** and **PC2**.

#### 7. Comparison of Results
- Two composite plots were created using **hvPlot**:
    - One comparing the elbow curves from the original scaled data and the scaled PCA data.
    - One comparing the clustering results from the original scaled data and the PCA data.

#### 8. Analysis
- The impact of using fewer features (via PCA) for clustering was analyzed by comparing the clustering results and evaluating the interpretability of the clusters.

---

### Key Findings
- **Best k from original data**
- **Best k from PCA data**
- **Explained Variance**
- **Impact of PCA**

---

### Evaluation Criteria

- **Finding the Optimal Value for k**:  
    Use the elbow method with a range from 1 to 11 and plot the inertia values.  
    **Answer**: What is the best value for **k**?

- **Clustering with K-means on the Scaled Data**:  
    Apply K-means with the best **k** and plot a scatter plot with **price_change_percentage_24h** vs **price_change_percentage_7d**.

- **Optimization with PCA**:  
    Perform PCA to reduce the features to three components, calculate the explained variance, and create a new DataFrame with the scaled PCA data.

- **K-means Clustering with PCA Data**:  
    Apply K-means clustering on the scaled PCA data and visualize the results.

- **Visualization and Comparison**:  
    Create composite plots comparing the elbow curves and clustering results from both the scaled data and the PCA-transformed data.

---
