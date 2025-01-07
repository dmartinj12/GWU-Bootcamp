# Mars News and Weather Data Analysis

## Part 1: Scraping Mars News Titles and Previews

### Objective:
Extract titles and preview text from news articles about Mars to monitor and track ongoing developments.

### Process:

#### Automated Browsing & Data Extraction:
- Use **Splinter** to automate browsing and gather the raw HTML from the Mars News website.
- Inspect the page to identify key HTML elements—specifically the article titles and preview text.
- Parse the page using **Beautiful Soup** to extract the title and preview text for each article. These elements are key for quickly understanding the nature of each article and staying updated on Mars exploration.

#### Data Storage:
- Structure the data as a list of dictionaries, with each dictionary containing two key-value pairs: `title` (the article’s headline) and `preview` (a brief summary or teaser of the article).

Example:
```python
{
  'title': "NASA's MAVEN Observes Martian Light Show Caused by Major Solar Storm", 
  'preview': "For the first time in its eight years orbiting Mars, NASA’s MAVEN mission witnessed two different types of ultraviolet aurorae simultaneously, the result of solar storms that began on Aug. 27."
}
```
### Optional Step (Exporting Data):
- Optionally, export the collected data to a **JSON** file, making it easier to share with colleagues or incorporate into larger projects.

### Outcome:
- A comprehensive, easily accessible list of recent Mars news articles, which can be used to track the latest trends and discoveries in Mars exploration.

---

## Part 2: Scraping and Analyzing Mars Weather Data

### Objective:
- Extract and analyze Mars weather data, specifically the Curiosity rover's temperature and pressure readings, to assess long-term weather patterns on Mars.

### Process:

#### Automated Browsing & Data Extraction:
- Use **Splinter** to automate browsing to the Mars Temperature Data site.
- Use **Beautiful Soup** to parse the HTML table containing Mars weather data, specifically the temperature and pressure records associated with each Martian day (sol).

#### Data Cleaning & Structuring:
- Clean the data and load it into a **Pandas DataFrame** with columns such as `terrestrial_date`, `sol`, `min_temp`, and `pressure`.
- Ensure that data is properly formatted with the correct data types (e.g., date, integer, float).

Example of the dataset:

| id  | terrestrial_date | sol  | min_temp | pressure |
| --- | ---------------- | ---- | -------- | -------- |
| 1   | 2021-07-01       | 1000 | -80.0    | 800      |
| 2   | 2021-07-02       | 1001 | -78.2    | 820      |

#### Data Analysis:
- **How many months exist on Mars?**  
  Group the data by the `month` column and count the unique months.
  
- **How many Martian days of data do we have?**  
  Count the number of rows in the dataset to determine how many Martian days of data are captured.

#### Insights and Visualizations:

- **Temperature Trends:**
  - Calculate the average minimum temperature for each Martian month to identify the coldest and warmest months. Visualize this with a bar chart.

- **Pressure Analysis:**
  - Calculate the average atmospheric pressure for each Martian month to understand pressure trends. Create a bar chart to visualize this.

- **Estimating Martian Year Length:**
  - Use temperature data over time to estimate the number of Earth days in a Martian year. Plot the data and calculate the average length of a Martian year.

#### Data Export:
- Export the cleaned and analyzed data to a **CSV** file for further use or sharing with others in the space exploration community.

### Outcome:
- A fully analyzed dataset providing insights into Martian weather patterns, including:
  - The number of months on Mars.
  - The average temperature per month (coldest and warmest months).
  - Pressure trends that could affect Mars missions.
  - A visual estimate of the length of a Martian year in Earth days.

---

## Summary of Findings

### Mars News:
- The list of Mars news articles provides a high-level overview of ongoing research and exploration, helping track important updates such as mission milestones and scientific discoveries.

### Mars Weather Data:
- The weather analysis will provide critical insights into long-term weather patterns on Mars, including:
  - The number of months on Mars.
  - The average temperature per month (coldest and warmest months).
  - Pressure trends that could affect Mars missions.
  - A visual estimate of the length of a Martian year in Earth days.

---

## Real-World Application:

- **Mars News:**  
  Useful for staying updated with the latest missions and discoveries related to Mars exploration.

- **Mars Weather Data:**  
  Essential for long-term planning of Mars missions, including rover operations, resource management, and human exploration considerations. Temperature and pressure trends influence equipment design, mission scheduling, and exploration feasibility.