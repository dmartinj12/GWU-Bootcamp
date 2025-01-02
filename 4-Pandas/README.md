Project Overview: Pandas Challenge - School District Analysis

Objective: You will utilize Python and the Pandas library to analyze standardized test results and school performance metrics within a district. The goal is to aggregate and interpret the data to highlight trends in school performance, provide strategic insights, and support decision-making processes regarding budgets and priorities.

Initial Setup

Repository Setup:
Create a new repository called pandas-challenge on GitHub or GitLab.
Clone the repository to your local machine.
Inside your repository, create a folder called PyCitySchools.
Add a Jupyter notebook for the analysis and push all files to GitHub/GitLab.

Tasks & Instructions
1. District Summary:
Calculate the following metrics for the district as a whole:
Total number of unique schools
Total number of students
Total budget
Average math score
Average reading score
Percentage of students passing math
Percentage of students passing reading
Percentage of students passing both math and reading
Create a DataFrame district_summary to present these metrics.

2. School Summary:
For each school, calculate the following metrics:
School name
School type
Total students
Total budget
Per student budget
Average math score
Average reading score
Percentage of students passing math
Percentage of students passing reading
Percentage of students passing both math and reading
Create a DataFrame per_school_summary with these results.

3. Top and Bottom Performing Schools:
Sort schools by the percentage of students passing both math and reading.
Create a DataFrame top_schools for the highest-performing schools.
Create a DataFrame bottom_schools for the lowest-performing schools.

4. Math and Reading Scores by Grade:
Calculate average math and reading scores for each grade (9th, 10th, 11th, 12th) at each school.
Create two DataFrames: math_scores_by_grade and reading_scores_by_grade.

5. Scores by School Spending:
Group schools by per-student spending ranges, using the provided bins.
Use pd.cut to categorize school spending.
Calculate average math scores, reading scores, and passing percentages within each spending range.
Create a DataFrame spending_summary with these statistics.

6. Scores by School Size:
Group schools by size (small, medium, large) based on student count.
Use pd.cut to categorize school sizes.
Calculate average math scores, reading scores, and passing percentages for each size category.
Create a DataFrame size_summary for this analysis.

7. Scores by School Type:
Group the schools by type (e.g., charter, district).
Calculate the average test scores and passing rates for each school type.
Create a DataFrame type_summary based on these results.

8. Written Report:
Summarize the findings of the analysis in a cohesive report.
Draw two conclusions or comparisons based on the data, providing actionable insights.

Requirements:
Data Analysis: Perform all necessary calculations using Pandas, including handling data aggregation, filtering, and grouping.
DataFrames: Present each result in a well-structured DataFrame.
Visualization: Ensure the results are presented clearly, with trends and comparisons highlighted.
Reporting: The final Jupyter notebook should include both the calculations and a written description of the results, discussing observable trends and insights.
Code Organization: Code should be clean, well-commented, and organized into logical segments for readability and maintainability.

Final Result:
A Jupyter notebook with your analysis, including all DataFrame outputs and calculations.
The results of the analysis, presented in DataFrames, summarizing the district and school performance.
A written report with insights and recommendations based on your findings.
A GitHub or GitLab repository with the project files, including the notebook and supporting data files.
