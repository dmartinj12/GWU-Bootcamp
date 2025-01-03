# Food Hygiene Ratings Analysis

## Project Overview

This project focuses on analyzing **food hygiene ratings** for establishments across the UK. We work with a **MongoDB NoSQL database** to import, update, and query data, providing actionable insights for a **food magazine**. The objective is to prepare, clean, and explore the data to help magazine editors and food critics make informed decisions about which establishments to feature.

---

## Database Setup and Data Import

### Importing Data

The first step is to load the establishments data into a **MongoDB** database named `uk_food`. The `mongoimport` command is used to ensure that the data is correctly formatted and imported without conflicts with any previous datasets.

### Initial Validation

Once the data is imported, I confirm that the `uk_food` database and the `establishments` collection are created. I use queries like `find_one()` to ensure the data was loaded correctly, verifying that no entries are missing or corrupted.

### Document Assignment

The `establishments` collection is then assigned to a variable, making it easy to interact with the data during the analysis.

---

## Data Updates and Cleaning

### Adding New Data

A new entry for a halal restaurant, **"Penang Flavours"**, located in **Greenwich**, is added to the database. Since it is a new restaurant, it doesn’t yet have a rating, so it is flagged as `NewRatingPending` in the database.

### BusinessTypeID Lookup and Update

For consistency, I look up the `BusinessTypeID` for the type **“Restaurant/Cafe/Canteen”** and update the new entry accordingly.

### Filtering Out Unwanted Data

To adhere to the magazine's request, I remove all establishments in the **Dover Local Authority**. I use `count_documents` before and after the removal to verify the successful deletion of the data.

### Data Type Conversion

Inconsistent data types are corrected, such as latitude and longitude fields which are stored as strings but need to be numeric for **geospatial analysis**. Similarly, the `RatingValue` field is updated to integers where applicable.

---

## Exploratory Data Analysis

### Hygiene Score of 20

I query the data to identify establishments with a **hygiene score of 20**. This could help flag places with consistently poor hygiene standards, which may be of interest to the magazine.

### London Establishments with High Ratings

The magazine wants to know which establishments in **London** have a hygiene rating of 4 or higher. Since the full name of the **Local Authority** in London is longer than just "London", I use **regex** to filter based on the full name.

### Top 5 Establishments Near Penang Flavours

To identify nearby high-rated establishments, I perform **geospatial queries** to find places within **0.01 degrees** of latitude and longitude from **"Penang Flavours"**. The results are sorted by **hygiene score** to highlight the best-rated establishments nearby.

### Establishments with Hygiene Score of 0

The magazine is interested in understanding hygiene issues at a local level, so I aggregate data to find the number of establishments with a **hygiene score of 0** across different local authorities. This helps identify areas that may need further investigation.

---

## Data Handling and Submission

### Database Cleanup and Checks

I ensure that all data modifications are done programmatically, keeping the database up to date with the latest information.

### GitHub Repository

After completing the necessary updates and analysis, I push the work to a **GitHub repository**. Each step is documented with clear **commit messages** to track changes and facilitate collaboration.

---

## Real-World Insights

In a real-world setting, this type of analysis could be instrumental in guiding decisions for **food critics** and **journalists**. By focusing on local authority areas with poor hygiene ratings or areas where new establishments are opening, the magazine can make targeted recommendations for features, reviews, and consumer alerts. This also highlights the importance of maintaining **clean, structured, and up-to-date data** for effective decision-making.
