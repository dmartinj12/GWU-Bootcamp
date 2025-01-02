VBA-Challenge
This repository contains a VBA-based solution designed to automate the analysis of stock market data across multiple quarters. By leveraging VBA scripting, the goal is to extract key performance metrics from stock data to identify trends, calculate changes, and provide insights into stock performance.

Overview
The analysis focuses on stock data for each quarter and generates the following metrics for each stock:

Ticker symbol
Quarterly price change (open to close)
Percentage change (open to close)
Total stock volume
Additionally, the analysis highlights:
The stock with the greatest percentage increase
The stock with the greatest percentage decrease
The stock with the greatest total volume

Key Features

Data Retrieval
The script processes each stock row for each quarter and extracts the following data:
Ticker symbol – The identifier for the stock.
Volume – The total trading volume for that stock.
Open price – The stock price at the beginning of the quarter.
Close price – The stock price at the end of the quarter.

Metrics Generation
For each stock, the script calculates:
Quarterly Change – The difference between the open price at the start of the quarter and the close price at the end.
Percentage Change – The percentage change from the open to the close price.
Total Volume – The total trading volume for that stock over the quarter.

Conditional Formatting
To enhance the readability of the results, conditional formatting is applied:
Quarterly Change: Positive changes are highlighted in green, while negative changes are highlighted in red.
Percentage Change: Similarly, positive changes are marked in green and negative ones in red.

Performance Insights
The script also identifies and outputs:
Greatest Percentage Increase – The stock with the highest percentage increase during the quarter.
Greatest Percentage Decrease – The stock with the largest percentage decrease.
Greatest Total Volume – The stock with the highest total volume during the quarter.

Multi-Sheet Functionality
The VBA script is designed to run across all worksheets in the workbook, each representing data from a different quarter. This allows for seamless analysis of multiple quarters of data at once.

Instructions for Use
Set Up Repository: Clone the repository and download the relevant stock data files.
Run VBA Script: Execute the VBA script in Excel to analyze the stock data. The script will process each quarter's data and generate the desired metrics.
Review Results: The results will be displayed in a structured format with appropriate conditional formatting applied to the quarterly and percentage change columns.
Analyze Insights: Based on the output, review the stocks with the highest increases, decreases, and volumes to identify key trends or opportunities.
Files
VBA Script: Contains the code for analyzing the data and generating the metrics.
Stock Data: Contains quarterly stock data that the script processes.
Output: The results will be displayed in the same Excel workbook or a new sheet with the calculated metrics.
Conclusion
This VBA-based solution automates the analysis of stock data, helping identify performance trends and making it easier to track stock movements across multiple quarters. The ability to run this script across various sheets makes it efficient for handling large datasets, and the added insights—such as the greatest percentage increase, decrease, and volume—provide useful information for making data-driven decisions.

License
This project is licensed under the MIT License - see the LICENSE file for details.