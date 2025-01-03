# Mars Data Scraping and Analysis

## Part 1: Scraping Mars News Titles and Previews

### Objective
The goal of this part is to extract titles and preview text from Mars-related news articles to monitor and track ongoing developments in Mars exploration and research.

### Process

#### Data Storage
Structure the extracted data as a **list of dictionaries**, where each dictionary contains two key-value pairs: **title** and **preview**. This format makes it easy to access and analyze the data.

#### Optional Step (Exporting Data)
Optionally, export the collected data to a **JSON** file for easier sharing or future reference.

### Outcome
The final product will be a comprehensive, easily accessible list of recent Mars news articles, which can be used to monitor the latest trends and discoveries in Mars exploration.

---

## Part 2: Scraping and Analyzing Mars Weather Data

### Objective
The goal of this part is to extract and analyze **Mars weather data**, specifically the **Curiosity rover’s temperature** and **pressure** readings. This will help assess long-term weather patterns on Mars.

### Process

#### Automated Browsing & Data Extraction
Using **Splinter**, automate the browsing to the Mars Temperature Data site and use **BeautifulSoup** to parse the HTML table containing weather data. Since the data is in tabular format, it can be directly scraped and analyzed.

#### Data Cleaning & Structuring
After scraping, clean the data and load it into a **Pandas DataFrame**. The dataset will include columns like **terrestrial_date**, **sol**, **min_temp**, and **pressure**, ensuring that each column has the correct data type (e.g., date, integer, float) for proper analysis.

Example Dataset:

| id | terrestrial_date | sol | min_temp | pressure |
|----|------------------|-----|----------|----------|
| 1  | 2021-07-01       | 1000| -80.0    | 800      |
| 2  | 2021-07-02       | 1001| -78.2    | 820      |

#### Data Analysis
With the structured dataset, perform various analyses using **Pandas** to answer key questions:

- **How many months exist on Mars?** Group the data by month and count the unique months.
- **How many Martian days of data are available?** Count the number of rows in the dataset to track the duration of data collection.

#### Insights and Visualizations
- **Temperature Trends**: Calculate the average **minimum temperature** for each Martian month to identify the coldest and warmest months. A bar chart will help visualize this.
- **Pressure Analysis**: Calculate the average **atmospheric pressure** per Martian month to understand how pressure fluctuates. A bar chart will visualize these trends.
- **Estimating Martian Year Length**: Estimate the number of **Earth days** in a Martian year by plotting temperature data over time, identifying cyclical patterns, and calculating the average length of a Martian year in Earth days.

#### Data Export
Finally, export the cleaned and analyzed data to a **CSV** file for sharing or further analysis.

### Outcome
A fully analyzed dataset providing insights into Martian weather patterns, including:

- The **number of months on Mars**.
- The **average temperature per month**, identifying the coldest and warmest months.
- **Pressure trends** that could affect Mars missions.
- A **visual estimate** of the length of a Martian year in Earth days.

These insights are crucial for future Mars exploration missions.

---

## Summary of Findings

### Mars News
The **Mars News** data offers an overview of ongoing research and exploration on Mars, tracking important updates such as mission milestones and scientific discoveries.

### Mars Weather Data
The weather data analysis provides critical insights into long-term weather patterns on Mars, including:

- The **number of months** on Mars.
- The **coldest and warmest months** based on average temperatures.
- **Pressure trends** that could affect rover operations and mission planning.
- A **visual estimate** of the length of a Martian year.

### Real-World Application

- The **Mars News** data is useful for staying up-to-date on Mars missions and discoveries.
- The **Mars Weather Data** is vital for the long-term planning of Mars missions. Insights into temperature and pressure trends influence equipment design, resource management, and mission scheduling, as well as considerations for potential human exploration on Mars.
