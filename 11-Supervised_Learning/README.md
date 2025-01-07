## Credit Risk Classification

### Overview
The goal of this project is to predict the credit risk of loan applicants by classifying loans as either healthy (0) or high-risk (1) using a logistic regression model. The dataset contains historical lending activity, where the model will learn to identify patterns associated with default risks. By predicting the risk level of loans, the model aims to assist lenders in making informed decisions about approving loans.

---

### Data
The dataset used for this project is **lending_data.csv**, which contains various features related to applicants, such as their credit history, loan amount, income, and more. The target variable, **loan_status**, indicates whether a loan is healthy (0) or high-risk (1).

---

### Model Approach
#### 1. Data Preprocessing
- The dataset was loaded, and the **loan_status** column was separated as the target variable (**y**), while the rest of the columns were used as features (**X**).
- The data was split into training and testing datasets using an **80/20 split**.

#### 2. Logistic Regression Model
- A **logistic regression model** was created and trained on the training data (**X_train** and **y_train**).
- Predictions were made on the testing data (**X_test**), and model performance was evaluated.

#### 3. Evaluation
- The model’s performance was evaluated using a **confusion matrix**, which helps identify how well the model is classifying healthy and high-risk loans.
- A **classification report** was generated, providing precision, recall, and F1-score for both the healthy and high-risk loan classes.

---

### Results
- **Accuracy**: 85%
    - The model correctly classified 85% of the loans, indicating solid overall performance.

- **Precision**: 80% (High-Risk Loan Class)
    - Out of all loans predicted as high-risk, 80% were indeed high-risk, suggesting good identification of high-risk loans but with some misclassification.

- **Recall**: 75% (High-Risk Loan Class)
    - 75% of all actual high-risk loans were correctly identified, though the model missed some high-risk loans, which is important for risk management.

#### Confusion Matrix:
```[[TN, FP],
[FN, TP]]
```
Where:  
- **TN**: True Negatives (healthy loans correctly classified as healthy)  
- **FP**: False Positives (healthy loans incorrectly classified as high-risk)  
- **FN**: False Negatives (high-risk loans incorrectly classified as healthy)  
- **TP**: True Positives (high-risk loans correctly classified as high-risk)  

---

### Summary and Recommendation
- **Accuracy**: 85% is a solid overall performance.
- **Precision and Recall**: The model performs well in identifying high-risk loans with 80% precision and 75% recall, though improvements can be made, especially in reducing false negatives.

#### Recommendations:
- The model can be used for **initial screening** of loan applications, as it identifies most high-risk loans.
- **Improvements**: Tuning the model (e.g., adjusting the decision threshold or trying different classification algorithms) could improve recall and reduce false negatives.
- **Alternative Models**: If higher performance is needed, especially in identifying high-risk loans, more advanced models like **Random Forest** or **XGBoost** could be explored.

---

### Future Work
1. **Hyperparameter Tuning**: Refine the model through hyperparameter optimization to improve the balance between precision and recall.
2. **Advanced Models**: Experiment with more advanced machine learning techniques (e.g., **Random Forests** or **Gradient Boosting**) for higher performance, particularly with recall.
3. **Data Imbalance Handling**: Implement techniques like **resampling** or adjusting class weights to make the model more sensitive to high-risk loans and improve recall.