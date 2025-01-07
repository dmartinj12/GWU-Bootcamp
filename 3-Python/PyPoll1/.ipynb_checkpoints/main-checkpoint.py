# Import necessary modules for file handling and CSV operations
import os
import csv

# Initialize variables to store the total number of votes and individual candidate vote counts
Total_Votes = 0
Charles_Count = 0
Diana_Count = 0
Raymon_Count = 0

# Define the path to the CSV file containing election data
csvpath = os.path.join('Resources', 'election_data.csv')

# Open the CSV file
with open(csvpath) as csvfile:
    csvreader = csv.reader(csvfile, delimiter=',') 
    csvheader = next(csvreader) 
    
    # Loop through each row in the CSV file
    for row in csvreader:
        Total_Votes += 1
        
        # Increase the count for the corresponding candidate
        if row[2] == "Charles Casper Stockham":
            Charles_Count += 1
        elif row[2] == "Diana DeGette":
            Diana_Count += 1
        elif row[2] == "Raymon Anthony Doane":
            Raymon_Count += 1

# Calculate the percentage of votes each candidate received
Charles_PCT = Charles_Count / Total_Votes
Diana_PCT = Diana_Count / Total_Votes
Raymon_PCT = Raymon_Count / Total_Votes

# Format percentages
Charles_PCT1 = "{:.3%}".format(Charles_PCT)
Diana_PCT1 = "{:.3%}".format(Diana_PCT)
Raymon_PCT1 = "{:.3%}".format(Raymon_PCT)

# Print election results to the console
print("Election Results")
print("------------------------")
print("Total Votes:", Total_Votes)
print("------------------------")
print("Charles Casper Stockham:", "{:.3%}".format(Charles_PCT), "(", Charles_Count, ")")
print("Diana DeGette:", "{:.3%}".format(Diana_PCT), "(", Diana_Count, ")")
print("Raymon Anthony Doane:", "{:.3%}".format(Raymon_PCT), "(", Raymon_Count, ")")

# Define the path for the output file
output_path = os.path.join("analysis", "analysis.txt")

# Write election results to a text file
with open(output_path, 'w') as f:
    f.writelines("Election Results\n")
    f.writelines("------------------------\n")
    f.writelines(f'Total Votes: {Total_Votes}\n') 
    f.writelines("------------------------\n") 
    # Write results for each candidate
    f.writelines(f'Charles Casper Stockham: {Charles_PCT1} ({Charles_Count})\n')
    f.writelines(f'Diana DeGette: {Diana_PCT1} ({Diana_Count})\n')
    f.writelines(f'Raymon Anthony Doane: {Raymon_PCT1} ({Raymon_Count})\n')
