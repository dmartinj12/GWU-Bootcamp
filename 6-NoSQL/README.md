# UK Food Hygiene Rating Analysis

## Project Overview

This project analyzes food hygiene ratings for establishments across the UK. The objective is to work with a MongoDB NoSQL database to import, update, and query data, ultimately delivering actionable insights to food critics and editors. These insights will assist in making informed decisions about which food establishments to feature in a food magazine.

By preparing, cleaning, and exploring the data, the goal is to uncover trends that can guide feature selections, consumer alerts, and potential areas for further investigation into food hygiene standards.

## Key Steps and Analysis

### 1. Database Setup and Data Import

#### Importing Data:
The first step involves importing the food hygiene data into a MongoDB database named `uk_food`. The `mongoimport` command ensures that the data is formatted properly and imported without conflicts with previous datasets.

#### Initial Validation:
After importing, the database and collection are validated by running `find_one()` queries. This checks for missing or corrupted entries, ensuring the data is correct and complete.

#### Document Assignment:
The `establishments` collection is assigned to a variable, making it easier to interact with the data throughout the analysis.

**Why it matters:** Properly setting up and validating the database ensures that the data is ready for in-depth analysis and decision-making. Any issues at this stage could affect the quality and accuracy of the insights.

### 2. Data Updates and Cleaning

#### Adding New Data:
A new entry for a halal restaurant, "Penang Flavours" in Greenwich, is added. Since it is a new restaurant, it doesn’t have a rating yet, and it is flagged as `NewRatingPending` in the database.

#### Business Type Update:
For consistency, the `BusinessTypeID` for "Restaurant/Cafe/Canteen" is looked up and updated for the new entry.

#### Filtering Unwanted Data:
To meet the magazine's request, all establishments in the Dover Local Authority are removed. Before and after the deletion, `count_documents` is used to confirm that the removal was successful.

#### Data Type Conversion:
Inconsistent data types are cleaned. Latitude and longitude fields are converted to numeric types for geospatial analysis, and the `RatingValue` field is updated to integers where applicable.

**Why it matters:** Ensuring the data is clean and consistent is critical for accurate analysis. Inconsistent or missing data could lead to faulty insights or biased results.

### 3. Exploratory Data Analysis

#### Hygiene Score of 20:
The database is queried to identify establishments with a hygiene score of 20. These establishments may be flagged for potential issues and could be a point of interest for the magazine.

#### London Establishments with High Ratings:
The magazine is interested in identifying establishments in London with a rating of 4 or higher. Since the full name of the Local Authority exceeds just "London", a regex filter is used based on the full name to ensure no establishments are overlooked.

#### Top 5 Establishments Near Penang Flavours:
Geospatial queries are used to find establishments within 0.01 degrees of latitude and longitude from "Penang Flavours" in Greenwich. These establishments are sorted by hygiene score to identify nearby, high-rated establishments.

#### Hygiene Score of 0:
To help the magazine understand hygiene issues at a local level, the data is aggregated to find the number of establishments with a hygiene score of 0 across different local authorities. This can highlight areas in need of improvement or attention.

**Why it matters:** These queries provide essential insights for the magazine. By identifying problematic areas, highlighting top-rated establishments, and recognizing local patterns, the magazine can make informed decisions about where to focus their reviews, features, and consumer alerts.

### 4. Data Handling and Submission

#### Database Cleanup and Checks:
Throughout the analysis, all changes are made programmatically to ensure that the database is updated with the latest information. This step ensures consistency and avoids manual errors.

#### GitHub Repository:
After completing the necessary updates and analysis, the work is pushed to a GitHub repository. Each step is documented with clear commit messages to track changes and facilitate collaboration.

**Why it matters:** Clean, up-to-date, and well-organized data helps ensure the quality of insights. The use of GitHub helps facilitate version control and collaboration.

### 5. Real-World Insights

In a real-world setting, this analysis provides valuable guidance for food critics and journalists. By focusing on areas with poor hygiene ratings or newly opening establishments, the magazine can tailor its recommendations, highlight potential health risks, and direct attention to promising establishments. It also underscores the importance of maintaining a structured and up-to-date database for effective decision-making.

**Why it matters:** By providing targeted insights, the magazine can make data-driven decisions to better inform the public, highlight both successes and concerns in the food industry, and keep readers engaged with timely and relevant content.

## Final Result
- **Database Setup:** MongoDB database with imported and cleaned data.
- **Data Exploration:** Queries to uncover key insights, such as high-rated establishments and those with hygiene issues.
- **Data Updates:** Addition and updates of data for new businesses, ensuring accuracy.
- **Visualizations and Reports:** Insights into food hygiene standards, local authority areas of concern, and geographical relationships.
- **GitHub Repository:** Repository with all project files, detailed commit history, and code for reproducibility.

## Requirements
- **Database Setup:** MongoDB, `mongoimport`, and basic query operations.
- **Data Cleaning:** Handling missing or inconsistent data, type conversions, and data updates.
- **Data Exploration:** Geospatial queries, regular expressions for filtering, and aggregation for insights.
- **Version Control:** GitHub for tracking changes and collaboration.