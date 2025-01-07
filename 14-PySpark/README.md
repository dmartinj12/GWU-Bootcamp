# Home Sales Analysis: Project Overview and Approach

This project utilizes **PySpark SQL** to analyze a home sales dataset, running various queries to uncover trends and insights. By focusing on features such as home attributes (bedrooms, bathrooms, square footage) and other variables like view ratings, year built, and more, the aim is to process large datasets efficiently, examining the impact of performance optimizations such as **caching**, **partitioning**, and other runtime optimizations.

## 1. Repository Setup

### Purpose:
The goal of this project is to analyze home sales data using **PySpark**, so a dedicated repository is created to ensure clean version control and organized future development. Cloning this repository allows for better version tracking and easier enhancements.

## 2. Data Loading and Initial Setup

### Spark Session:
To begin, a **Spark session** is established, which is essential for interacting with Spark and executing SQL queries effectively.

### Data Import:
The dataset, `home_sales_revised.csv`, is loaded into a **Spark DataFrame**. This conversion allows us to work with structured data, making it ready for SQL-style querying. The DataFrame is registered as a temporary table called `home_sales`, enabling seamless SQL operations.

## 3. SQL Queries for Insights

### Query 1: Average Price of a Four-Bedroom House per Year
- **Objective**: Filter homes with exactly four bedrooms and compute their average price for each year sold.
- **Analysis**: We track price fluctuations over the years, using **GROUP BY** to break down the data by sale year and understand pricing trends for four-bedroom homes.

### Query 2: Average Price for Homes with Three Bedrooms and Three Bathrooms
- **Objective**: Focus on homes with exactly three bedrooms and three bathrooms, calculating the average price for each year built.
- **Analysis**: This query provides insight into how the market values homes with consistent features, looking at price trends over time.

### Query 3: Homes with Three Bedrooms, Three Bathrooms, Two Floors, and ≥ 2000 Square Feet
- **Objective**: Apply a more specific filter—homes with at least three bedrooms, three bathrooms, two floors, and ≥ 2000 square feet.
- **Analysis**: The goal is to understand the market performance of larger homes over time, filtering based on construction year and other characteristics.

### Query 4: Average Price per View Rating for Homes with Average Price ≥ $350,000
- **Objective**: Focus on homes priced above $350,000 and calculate the average price based on view ratings.
- **Analysis**: This query segments the data by view ratings, exploring whether higher-end homes correlate with better views. The runtime of this query is also measured to assess performance.

## 4. Performance Optimization with Caching and Partitioning

### Caching the `home_sales` Table:
- **Purpose**: Caching improves query performance by storing intermediate data in memory. This is especially beneficial for repeated queries, as it avoids re-reading the dataset for every query.

- **Validation**: To ensure caching is effective, we confirm that the `home_sales` table is cached, leading to faster query execution for subsequent analyses.

### Evaluating Cache Impact on Query Performance:
- **Objective**: Run an expensive query (e.g., Query 4) both before and after caching the `home_sales` table. By comparing runtimes, we can assess the performance improvement from caching.

### Partitioning the Data by `date_built`:
- **Purpose**: Partitioning organizes data by specific fields, such as `date_built`, to optimize query performance by reducing the volume of data Spark needs to scan.

- **Temporary Table for Parquet Data**: The partitioned data is saved in Parquet format and loaded into a temporary table for further analysis. This allows for more efficient querying.

- **Impact on Performance**: By comparing query performance before and after partitioning by `date_built`, we evaluate the performance improvements for large datasets.

## 5. Uncaching and Final Validation

### Uncaching:
Once optimizations like caching and partitioning are applied, the `home_sales` table is uncached to ensure it is not stored in memory. This allows us to validate the uncaching process and confirm proper system functionality.

### Validation:
We verify that the table is no longer cached using PySpark’s caching methods, ensuring that the system is functioning as expected.

## 6. Performance Considerations

By running these queries and evaluating the performance impact of caching, partitioning, and query optimizations, we gain deeper insights into how to efficiently analyze large datasets. This exercise demonstrates that:
- Caching significantly reduces query time for repeated analyses.
- Partitioning by key fields improves query performance for specific analyses.
- Efficient data organization and optimization strategies are crucial when working with big data.

## 7. Conclusion

This project demonstrates practical techniques for handling and analyzing large datasets using **PySpark**. By leveraging SQL queries, performance optimization techniques like caching and partitioning, and evaluating runtime performance, we not only gain insights into the home sales data but also enhance our skills in managing data at scale. The exercises highlight the importance of efficient data handling and the trade-offs between computation and memory usage when working with big data.
