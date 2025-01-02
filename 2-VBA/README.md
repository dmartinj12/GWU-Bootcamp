Python-Challenge
This repository contains Python scripts designed to solve two challenges: PyBank and PyPoll. These tasks allow for the application of Python programming skills to real-world scenarios, focusing on data analysis and automation. The goal is to use Python's capabilities to handle large datasets, analyze trends, and produce meaningful insights that would otherwise be time-consuming to process manually in Excel.

Overview
PyBank
In PyBank, the goal is to analyze the financial records of a company. The dataset, budget_data.csv, contains monthly profit and loss data. The script processes this data to generate the following financial insights:

Total number of months included in the dataset
Net total amount of profit/losses over the entire period
The changes in profit/losses over the entire period and the average of those changes
The greatest increase in profits (date and amount)
The greatest decrease in profits (date and amount)

PyPoll
In PyPoll, the task is to analyze election poll data from a small town. The dataset, election_data.csv, contains information about voters, their counties, and the candidates they voted for. The script processes the data to calculate the following:

Total number of votes cast
A list of candidates who received votes
The percentage of votes each candidate won
The total number of votes each candidate won
The winner of the election based on popular vote

Files

PyBank
main.py: The Python script for analyzing financial records.
budget_data.csv: The dataset containing financial records (Date and Profit/Losses).
analysis/pybank_analysis.txt: A text file that contains the results of the financial analysis.

PyPoll
main.py: The Python script for analyzing election data.
election_data.csv: The dataset containing election results (Voter ID, County, Candidate).
analysis/pypoll_analysis.txt: A text file that contains the results of the election analysis.

Instructions for Use
Set Up Repository: Clone the python-challenge repository and ensure the following structure:
PyBank folder with main.py, budget_data.csv, and an analysis folder.
PyPoll folder with main.py, election_data.csv, and an analysis folder.
Run the Scripts:
Run the main.py script in the PyBank folder to analyze the financial data.
Run the main.py script in the PyPoll folder to analyze the election data.
Review Results:
Each script will print the analysis results to the terminal.
The results will also be exported to a text file within the analysis folder.
Output Format:
PyBank: Includes total months, total profit/loss, average change, greatest increase/decrease in profits.
PyPoll: Includes total votes, candidate vote percentages, total votes for each candidate, and the election winner.

Features
PyBank
Reads and processes financial data from a CSV.
Calculates key financial metrics like the total number of months, net profit, and changes in profits.
Identifies the greatest profit increase and decrease, along with the respective dates.
Prints results to the terminal and exports them to a text file.

PyPoll
Reads and processes election data from a CSV.
Computes the total number of votes, vote percentages, and total votes for each candidate.
Identifies the election winner based on the popular vote.
Prints results to the terminal and exports them to a text file.


Example Output
PyBank

Financial Analysis
----------------------------
Total Months: 86
Total: $22564198
Average Change: $-8311.11
Greatest Increase in Profits: Aug-16 ($1862002)
Greatest Decrease in Profits: Feb-14 ($-1825558)

PyPoll

Election Results
-------------------------
Total Votes: 369711
-------------------------
Charles Casper Stockham: 23.049% (85213)
Diana DeGette: 73.812% (272892)
Raymon Anthony Doane: 3.139% (11606)
-------------------------
Winner: Diana DeGette
-------------------------
Conclusion
This Python solution automates the process of analyzing both financial records and election data. The scripts provide a more scalable and efficient approach than using Excel for large datasets, allowing for easy extraction of valuable insights. The results are presented in both the terminal and a text file for easy reference.

License
This project is licensed under the MIT License - see the LICENSE file for details.