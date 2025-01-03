# Python-Challenge

This repository contains Python scripts designed to solve two challenges: **PyBank** and **PyPoll**. These tasks apply Python programming skills to real-world scenarios, focusing on data analysis and automation. The goal is to use Python to process large datasets, analyze trends, and produce meaningful insights efficiently.

---

## Overview

### PyBank
**Objective**: Analyze the financial records of a company using the dataset `budget_data.csv`.  
The script generates the following financial insights:
- Total number of months included in the dataset.
- Net total profit/losses over the entire period.
- Changes in profit/losses over the period and the average of those changes.
- The greatest increase in profits (date and amount).
- The greatest decrease in profits (date and amount).

### PyPoll
**Objective**: Analyze election poll data using the dataset `election_data.csv`.  
The script calculates:
- Total number of votes cast.
- List of candidates who received votes.
- Percentage of votes each candidate won.
- Total votes each candidate received.
- The winner of the election based on popular vote.

---

## Files

### PyBank
- **`main.py`**: Python script for analyzing financial records.
- **`budget_data.csv`**: Dataset containing financial records (Date, Profit/Losses).
- **`analysis/pybank_analysis.txt`**: Results of the financial analysis.

### PyPoll
- **`main.py`**: Python script for analyzing election data.
- **`election_data.csv`**: Dataset containing election results (Voter ID, County, Candidate).
- **`analysis/pypoll_analysis.txt`**: Results of the election analysis.

---

## Instructions for Use

1. **Set Up Repository**:
   - Clone the repository and ensure the following structure:
     ```
     python-challenge/
     ├── PyBank/
     │   ├── main.py
     │   ├── budget_data.csv
     │   └── analysis/
     │       └── pybank_analysis.txt
     ├── PyPoll/
     │   ├── main.py
     │   ├── election_data.csv
     │   └── analysis/
     │       └── pypoll_analysis.txt
     ```

2. **Run the Scripts**:
   - Run `main.py` in the **PyBank** folder to analyze financial data.
   - Run `main.py` in the **PyPoll** folder to analyze election data.

3. **Review Results**:
   - Each script prints results to the terminal and exports them to a text file in the `analysis` folder.

---

## Features

### PyBank
- Reads and processes financial data from a CSV file.
- Calculates key financial metrics:
  - Total months, net profit/loss, average changes in profits/losses.
  - Greatest increase and decrease in profits (with dates).
- Exports results to a text file.

### PyPoll
- Reads and processes election data from a CSV file.
- Computes:
  - Total votes cast, vote percentages, and total votes for each candidate.
  - Identifies the election winner based on the popular vote.
- Exports results to a text file.

---

## Example Output

### PyBank

**Financial Analysis**  
----------------------------
- **Total Months**: 86  
- **Total**: $22,564,198  
- **Average Change**: $-8,311.11  
- **Greatest Increase in Profits**: Aug-16 ($1,862,002)  
- **Greatest Decrease in Profits**: Feb-14 ($-1,825,558)  

#### PyPoll

**Election Results**  
----------------------------
- **Total Votes**: 369,711  
- Charles Casper Stockham: 23.049% (85,213)  
- Diana DeGette: 73.812% (272,892)  
- Raymon Anthony Doane: 3.139% (11,606)  
----------------------------
- **Winner**: Diana DeGette
