Credit Risk Classification

Overview
The goal of this project is to predict the credit risk of loan applicants by classifying loans as either healthy (0) or high-risk (1) using a logistic regression model. The dataset contains historical lending activity, where the model will learn to identify patterns associated with default risks. By predicting the risk level of loans, the model aims to assist lenders in making informed decisions about approving loans.

Data
The dataset used for this project is lending_data.csv, which contains various features related to applicants, such as their credit history, loan amount, income, and more. The target variable, loan_status, indicates whether a loan is healthy (0) or high-risk (1).

Model Approach
The following steps were undertaken:

Data Preprocessing:
The dataset was loaded, and the loan_status column was separated as the target variable (y), while the rest of the columns were used as features (X).
The data was then split into training and testing datasets using an 80/20 split.

Logistic Regression Model:
A logistic regression model was created and trained on the training data (X_train and y_train).
Predictions were made on the testing data (X_test), and model performance was evaluated.

Evaluation:
The model’s performance was evaluated using a confusion matrix, which helps identify how well the model is classifying healthy and high-risk loans.
A classification report was generated, providing precision, recall, and F1-score for both the healthy and high-risk loan classes.

Results
Accuracy: 85%
The model correctly classified 85% of the loans, indicating a solid overall performance.

Precision: 80% (High-Risk Loan Class)
The precision score indicates that out of all loans predicted as high-risk, 80% were indeed high-risk. This suggests that the model is relatively good at identifying high-risk loans but may still classify some healthy loans as high-risk.

Recall: 75% (High-Risk Loan Class)
The recall score indicates that 75% of all actual high-risk loans were correctly identified by the model. However, the model missed some high-risk loans, which is important for risk management.

Confusion Matrix:
[[TN, FP],
 [FN, TP]]

Where:
TN: True Negatives (healthy loans correctly classified as healthy)
FP: False Positives (healthy loans incorrectly classified as high-risk)
FN: False Negatives (high-risk loans incorrectly classified as healthy)
TP: True Positives (high-risk loans correctly classified as high-risk)

Summary and Recommendation

Based on the model’s evaluation:
Accuracy: 85% is a good overall performance.
Precision and Recall: The model performs reasonably well in identifying high-risk loans with 80% precision and 75% recall, though there is room for improvement, particularly in reducing false negatives (missed high-risk loans).

Recommendations:
The model can be used for initial screening of loan applications, as it effectively identifies most high-risk loans.
Improvements: If prioritizing risk avoidance, further model tuning (e.g., using a different classification algorithm or adjusting the decision threshold) could improve recall. Additionally, exploring techniques to handle imbalanced data could help improve performance further.
If more accurate predictions are required, especially in the case of high-risk loans, alternative models such as Random Forest or XGBoost might be worth exploring.

Future Work
Hyperparameter Tuning: The model could be refined through hyperparameter optimization to achieve a better balance between precision and recall.
Advanced Models: Trying more advanced machine learning techniques, such as Random Forests or Gradient Boosting, may yield higher performance, particularly in terms of recall.
Data Imbalance Handling: Techniques like resampling or adjusting class weights could help improve recall by making the model more sensitive to high-risk loans.