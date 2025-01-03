# Pandas Challenge - School District Analysis

## Project Overview

This project involves analyzing standardized test results and school performance metrics within a district using Python and the Pandas library. The primary objective is to aggregate and interpret the data to uncover trends in school performance, provide strategic insights, and guide decision-making regarding budgets and priorities.

---

## Initial Setup

### Repository Setup:
1. Create a new repository named `pandas-challenge` on GitHub or GitLab.  
2. Clone the repository to your local machine.  
3. Inside your repository, create a folder named `PyCitySchools`.  
4. Add a Jupyter notebook for the analysis and push all files to GitHub/GitLab.  

---

## Tasks & Instructions

### 1. District Summary:
Calculate the following metrics for the district as a whole:  
- **Total number of unique schools**  
- **Total number of students**  
- **Total budget**  
- **Average math score**  
- **Average reading score**  
- **Percentage of students passing math**  
- **Percentage of students passing reading**  
- **Percentage of students passing both math and reading**  

Create a DataFrame named `district_summary` to present these metrics.  

---

### 2. School Summary:
For each school, calculate the following metrics:  
- **School name**  
- **School type**  
- **Total students**  
- **Total budget**  
- **Per student budget**  
- **Average math score**  
- **Average reading score**  
- **Percentage of students passing math**  
- **Percentage of students passing reading**  
- **Percentage of students passing both math and reading**  

Create a DataFrame named `per_school_summary` with these results.  

---

### 3. Top and Bottom Performing Schools:
- Sort schools by the **percentage of students passing both math and reading**.  
- Create a DataFrame named `top_schools` for the highest-performing schools.  
- Create a DataFrame named `bottom_schools` for the lowest-performing schools.  

---

### 4. Math and Reading Scores by Grade:
- Calculate **average math and reading scores** for each grade (9th, 10th, 11th, 12th) at each school.  
- Create two DataFrames: `math_scores_by_grade` and `reading_scores_by_grade`.  

---

### 5. Scores by School Spending:
- Group schools by **per-student spending ranges**, using the provided bins.  
- Use `pd.cut` to categorize school spending.  
- Calculate average math scores, reading scores, and passing percentages within each spending range.  
- Create a DataFrame named `spending_summary` with these statistics.  

---

### 6. Scores by School Size:
- Group schools by **size** (small, medium, large) based on student count.  
- Use `pd.cut` to categorize school sizes.  
- Calculate average math scores, reading scores, and passing percentages for each size category.  
- Create a DataFrame named `size_summary` for this analysis.  

---

### 7. Scores by School Type:
- Group schools by **type** (e.g., charter, district).  
- Calculate the average test scores and passing rates for each school type.  
- Create a DataFrame named `type_summary` based on these results.  

---

### 8. Written Report:
Summarize the findings of the analysis in a cohesive report:  
- Provide two conclusions or comparisons based on the data.  
- Include actionable insights to guide decision-making.  

---

## Requirements

### Data Analysis:
- Perform all calculations using Pandas, including data aggregation, filtering, and grouping.  

### DataFrames:
- Present each result in a well-structured DataFrame.  

### Visualization:
- Clearly present the results with trends and comparisons highlighted.  

### Reporting:
- The final Jupyter notebook should include:  
  - All calculations.  
  - A written description of the results, trends, and insights.  

### Code Organization:
- Ensure code is clean, well-commented, and organized into logical segments for readability and maintainability.  
