CryptoClustering

Overview
The objective of this project is to cluster cryptocurrencies based on their price change percentages over the last 24 hours and 7 days using unsupervised learning techniques. K-means clustering is employed to identify groups within the data, and Principal Component Analysis (PCA) is used to reduce dimensionality for improved visualization and analysis.

Data
The dataset crypto_market_data.csv contains the following columns:

coin_id: The unique identifier of each cryptocurrency.
price_change_percentage_24h: The percentage change in the cryptocurrency's price over the last 24 hours.
price_change_percentage_7d: The percentage change in the cryptocurrency's price over the last 7 days.

Steps

1. Load and Inspect the Data
The data was loaded into a Pandas DataFrame for inspection.
Summary statistics and visualizations were created to understand the distribution of data points.

2. Data Preparation
Standardization: Data was scaled using StandardScaler() to normalize the features and make them comparable.
The scaled data was then used for clustering, with coin_id serving as the index.

3. Finding the Optimal Number of Clusters (k)
The elbow method was implemented to determine the optimal value for k, the number of clusters. The method involved computing inertia (sum of squared distances from centroids) for a range of k values (from 1 to 11) and plotting the elbow curve to visually identify the ideal k.

4. K-means Clustering on the Scaled Data
Using the optimal k, K-means clustering was applied to the scaled data to group cryptocurrencies into clusters.
A scatter plot was created to visualize the clusters using hvPlot, with the x-axis set to price_change_percentage_24h and the y-axis to price_change_percentage_7d. The cryptocurrency names were included in hover tooltips.

5. Optimization with Principal Component Analysis (PCA)
PCA was performed to reduce the features to three principal components (PCs), which helped in reducing dimensionality while retaining as much information as possible.
The explained variance of the PCA was computed to understand the amount of variance captured by each principal component.

6. K-means Clustering on the PCA Data
The elbow method was again applied to the scaled PCA DataFrame to determine the best value for k.
K-means clustering was applied to the PCA-transformed data, and the results were visualized with a scatter plot using PC1 and PC2.

7. Comparison of Results
Two composite plots were created using hvPlot:
One comparing the elbow curves from the original scaled data and the scaled PCA data.
One comparing the clustering results from the original scaled data and the PCA data.

8. Analysis
The impact of using fewer features (PCA) for clustering was analyzed by comparing the clustering results and evaluating the interpretability of the clusters.
Key Findings
Best k from original data: [Insert best k value].

Best k from PCA data: [Insert best k value].

Explained Variance: [Insert total explained variance of the three principal components].

Impact of PCA: Using PCA reduced the complexity of the data while preserving most of the important variance, which resulted in [insert the impact].

Evaluation Criteria
Finding the Optimal Value for k:
Use the elbow method with a range from 1 to 11 and plot the inertia values.
Answer: What is the best value for k?

Clustering with K-means on the Scaled Data:
Apply K-means with the best k and plot a scatter plot with price_change_percentage_24h vs price_change_percentage_7d.

Optimization with PCA:
Perform PCA to reduce the features to three components, calculate the explained variance, and create a new DataFrame with the scaled PCA data.

K-means Clustering with PCA Data:
Apply K-means clustering on the scaled PCA data and visualize the results.

Visualization and Comparison:
Create composite plots comparing the elbow curves and clustering results from both the scaled data and the PCA-transformed data.

Code Structure
Crypto_Clustering.ipynb: The main Jupyter notebook containing all code for data preprocessing, K-means clustering, PCA, and visualizations.
crypto_market_data.csv: The raw dataset containing cryptocurrency market data.
requirements.txt: A file listing the necessary libraries for this project (e.g., pandas, scikit-learn, hvplot).