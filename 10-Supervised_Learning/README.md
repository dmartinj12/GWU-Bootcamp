# Module 12 Report Template

## Overview of the Analysis
This analysis focused on developing and evaluating machine learning models to predict the risk level of loans based on financial data. The 
dataset included various financial variables related to loan applicants, with the primary goal of predicting whether each loan was 0 (healthy) or 1 
(high-risk). We analyzed the distribution of these labels using value_counts, revealing a class imbalance that required consideration in model selection 
and evaluation.

The machine learning process included data preparation, splitting data into training and testing sets, and applying the LogisticRegression model.
The model was evaluated using metrics like accuracy, precision, and recall to understand its effectiveness in predicting both healthy and high-risk loans.

## Results

Machine Learning Model 1: Logistic Regression
-Accuracy: 99%
-Precision:
-Class 0 (Healthy Loan): 1.00
-Class 1 (High-Risk Loan): 0.85
-Recall:
-Class 0 (Healthy Loan): 0.99
-Class 1 (High-Risk Loan): 0.95


## Summary

The logistic regression model performs best, achieving high accuracy, precision, and recall, especially in identifying healthy loans (0).
However, if predicting high-risk loans (1) is more critical, the model may require adjustments to increase precision for this class. Given the model’s
strong recall for high-risk loans, it’s a suitable choice for minimizing missed high-risk cases, with some trade-off in precision.
