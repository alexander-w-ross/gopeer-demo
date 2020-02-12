import sys, json
import pandas as pd
import psycopg2
import numpy as np
import pickle
from joblib import dump, load
from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from sklearn import model_selection
from sklearn.metrics import accuracy_score
from sklearn.linear_model import LogisticRegression


fitted_clf = load('log_clf_model.joblib')

new_data = [
    {
        "id": 1,
        "gender": "female",
        "married": "yes",
        "dependents": "1",
        "education": "graduate",
        "self_employed": "no",
        "applicant_income": 10000,
        "coapplicant_income": 5000,
        "loan_amount": 1000,
        "loan_amount_term": 360,
        "property_area": "semiurban",
        "name": "Alextests"
    }
]


dta = pd.DataFrame(new_data)

def newfile_data_proc_predict(df):
    mapping = {'male': 0, 'female': 1, 'no': 0, 'yes': 1, 'not_graduate': 0,
           'graduate': 1, 'urban': 0, 'semiurban': 1, 'Rural': 2}
    X1 = df.drop(['id', 'name', 'dependents'],axis=1)
    X_enc = X1.replace({'gender': mapping, 'married': mapping, 'education': mapping, 'self_employed': mapping,
                          'property_area': mapping})

    prediction = fitted_clf.predict(X_enc)


    return prediction

if newfile_data_proc_predict(dta)[0] == 'N':
    PREDICTION = "Don't Give Loan"
else:
    PREDICTION = "Give Loan"

print(PREDICTION)

#Read data from stdin
# def read_in():
#     lines = sys.stdin.readlines()
#     # Since our input would only be having one line, parse our JSON data from that
#     dta = pd.DataFrame(lines)
#     return dta

# def main():
#     #get our data as an array from read_in()
#     dta = read_in()

#     if newfile_data_proc_predict(dta)[0] == 'N':
#         PREDICTION = 0
#     elif newfile_data_proc_predict(dta)[0] == 'Y':
#         PREDICTION = 1

#     print(PREDICTION)
# # Start process
# if __name__ == '__main__':
#     main()