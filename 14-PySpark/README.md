# Home Sales Analysis

This project uses **PySpark SQL** to analyze a home sales dataset, uncover patterns, and assess the impact of performance optimizations. The analysis explores relationships between various home features—such as bedrooms, bathrooms, square footage, and view ratings—and market trends. Additionally, it evaluates the role of caching, partitioning, and query optimization in improving runtime performance.

## Project Highlights

### Repository Setup
- **Purpose**: Create a structured repository for analyzing home sales data using PySpark.
- **Setup**: All work is version-controlled for future enhancements and evaluations.

### Data Loading and Preparation
1. **Spark Session**: A Spark session is initialized to perform PySpark operations and execute SQL queries.
2. **Data Import**: The dataset `home_sales_revised.csv` is loaded into a Spark DataFrame and registered as a temporary table (`home_sales`) for SQL-based querying.

---

## Analytical Queries and Insights

### 1. Average Price of Four-Bedroom Homes Per Year
- **Objective**: Analyze yearly price trends for homes with four bedrooms.
- **Insights**: Identifies market fluctuations for this specific subset of homes.

### 2. Average Price for Three-Bedroom, Three-Bathroom Homes Per Year Built
- **Objective**: Examine pricing trends for homes with consistent features over time.
- **Insights**: Reveals the market value trajectory for similarly structured homes.

### 3. Filtered Analysis: Homes with Specific Features
- **Criteria**: Three bedrooms, three bathrooms, two floors, and ≥2,000 square feet.
- **Objective**: Explore trends in larger homes and their value over time.

### 4. Price vs. View Ratings for High-Value Homes
- **Criteria**: Homes with an average price ≥ $350,000.
- **Objective**: Investigate the correlation between view ratings and pricing for premium properties.
- **Performance Evaluation**: Runtime for this query is measured before and after applying caching optimizations.

---

## Performance Optimization Techniques

### 1. Caching
- **Purpose**: Reduce query execution time by storing the `home_sales` table in memory.
- **Validation**: Verified caching effectiveness and evaluated its impact on query performance.

### 2. Partitioning
- **Purpose**: Organize data by key fields (e.g., `date_built`) to reduce scan size for specific queries.
- **Implementation**: Partitioned data saved in Parquet format and reloaded for optimized querying.
- **Impact**: Significant runtime improvements for operations involving partitioned fields.

### 3. Uncaching
- **Objective**: Clear cached data after analysis to free memory resources.
- **Validation**: Confirmed successful uncaching using PySpark’s methods.

---

## Key Takeaways
- **Caching**: Significantly reduces query execution time for repeated analyses.
- **Partitioning**: Enhances performance for operations on specific data subsets.
- **Efficient Data Handling**: Crucial for scaling large dataset analysis and managing memory effectively.
- **Optimization Trade-offs**: Balancing memory usage and computation time is key when working with big data.

## Conclusion
This project demonstrates practical techniques for handling and analyzing large datasets using PySpark. By leveraging SQL queries, performance optimization techniques like caching and partitioning, and evaluating runtime performance, we gain actionable insights into the home sales data while improving efficiency in large-scale data analysis.
