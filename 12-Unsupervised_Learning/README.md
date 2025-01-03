# CryptoClustering

## Overview

This project aims to explore cryptocurrency clustering by analyzing price change percentages over the last 24 hours and 7 days using unsupervised machine learning techniques. K-means clustering is employed to segment cryptocurrencies into groups, while Principal Component Analysis (PCA) is used to reduce dimensionality for better visualization and more effective analysis.

## Project Focus

The focus of the project is to uncover hidden patterns within the cryptocurrency market by grouping similar cryptocurrencies together. The dataset, which contains price change data, is analyzed to determine which coins exhibit similar price movements over different time frames. By clustering the data, users can identify trends and groupings in the cryptocurrency market, leading to more informed investment and trading decisions.

## Data Analysis Process

**Data Loading and Exploration**

The cryptocurrency dataset (crypto_market_data.csv) is initially loaded into a Pandas DataFrame, where summary statistics and visualizations help in understanding the distribution and trends across the data points. The primary columns analyzed are:

coin_id: Unique identifier for each cryptocurrency.
price_change_percentage_24h: Price change percentage over the last 24 hours.
price_change_percentage_7d: Price change percentage over the last 7 days.
Data Preparation
The data is standardized using a scaling technique (StandardScaler) to make the different features comparable. This step ensures that all features are treated equally when applying clustering algorithms.

**Determining the Optimal Number of Clusters**

The elbow method is used to identify the optimal number of clusters (k). This involves calculating the inertia for various values of k (from 1 to 11) and plotting the results to identify the point where inertia starts to decrease more slowly.

**Clustering with K-means**

After determining the optimal k, K-means clustering is applied to the scaled data, grouping the cryptocurrencies based on price change patterns. The results are visualized in a scatter plot where cryptocurrencies are represented by their 24-hour and 7-day price changes.

**Dimensionality Reduction via PCA**

PCA is applied to the scaled data to reduce its dimensions while retaining as much information as possible. The principal components are analyzed to assess how well they capture the variance in the original dataset.

**Clustering on PCA-Transformed Data**

K-means clustering is performed again on the PCA-transformed data, and the results are visualized using the first two principal components (PC1 and PC2). This step allows for clustering with reduced complexity.

**Comparison and Analysis**

Two composite plots are created to compare the results from the original scaled data and the PCA-transformed data. These include elbow curves and clustering visualizations, providing a comprehensive view of the clustering impact when dimensionality is reduced.

## Key Findings

The optimal number of clusters (k) for the original data and PCA data.
The explained variance of the principal components and their effectiveness in capturing data patterns.
Insights gained from reducing dimensionality with PCA and how it affects clustering results.

## Conclusion
The project uses unsupervised learning to segment the cryptocurrency market into meaningful clusters, providing a clearer picture of how coins behave over different time periods. The use of PCA helps reduce complexity without sacrificing critical information, allowing for more efficient analysis and visualization. This project enables users to make better-informed decisions based on the dynamic behavior of the cryptocurrency market.

## GitHub Repository Structure

Crypto_Clustering.ipynb: The main Jupyter notebook that includes all code for data preprocessing, K-means clustering, PCA, and visualizations.
crypto_market_data.csv: The raw dataset used for clustering.
requirements.txt: A file listing the necessary libraries for the project, such as pandas, scikit-learn, and hvplot.

*Deployment and Results*

Once the analysis is complete, the project provides interactive visualizations to explore the clustering results and the impact of PCA. The findings can be accessed through the Jupyter notebook and used to understand how different cryptocurrencies cluster based on price fluctuations.
