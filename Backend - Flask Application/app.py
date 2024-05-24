from flask import Flask, jsonify, request
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

app = Flask(__name__)
cors = CORS(app, recources={r'/recommendation/*':{'origins': 'http://localhost:5173'}})
cors = CORS(app, recources={r'/diabetes-prediction/*':{'origins':'http://localhost:5173'}})
cors = CORS(app, resources={r'/heart-prediction/*':{'origins':'http://localhost:5173'}})

######################### For Gestational Diabetes Model Training ######################################

df = pd.read_csv('../diabetes.csv')
X = df.drop('Outcome', axis=1)
y = df['Outcome']
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=0)

# Creating a random forest model
model = RandomForestClassifier(n_estimators=20)
model.fit(X_train, y_train)
# Creating a joblib file for the classifier
joblib.dump(model, 'diabetes_pred.joblib')

############################# Gestational Diabetes API ##################################################

@app.route('/diabetes-prediction', methods=['POST'])
def diabetes():
    features_values = request.json.values()
    features = np.array([[list(features_values)]])
    #make prediction
    prediction = model.predict(features[0])
    return jsonify({'result': int(prediction)})

############################ For Normal Diabetes Model Training #####################################

df2 = pd.read_csv('../normalDiabetes.csv')
A = df2.drop('Result', axis = 1)
b = df2['Result']
A_train, A_test, b_train, b_test = train_test_split(
    A, b, test_size=0.2, random_state=0)
# Creating random forest model
modelll = RandomForestClassifier(n_estimators=20)
modelll.fit(A_train, b_train)
# Creating joblib file for the classifier
joblib.dump(modelll, '../normal_diabetes.joblib')

############################ Normal Diabetes API ##################################################

@app.route('/recommendation', methods=['POST'])
def recommendation():
    print(request.json.values());
    feature_value = request.json.values()
    featuress = np.array([[list(feature_value)]])
    # make prediction
    print(featuress[0])
    predicttt = modelll.predict(featuress[0])
    print(predicttt);
    return jsonify({'result': int(predicttt)})

############################ For Heart Model Training ########################################

df1 = pd.read_csv('../heart.csv')
X = df1.drop('target', axis = 1)
y = df1['target']
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=0)

# Creating a Random Forest Model
modell = RandomForestClassifier(n_estimators=20)
modell.fit(X_train, y_train)
# Creating a pickle file for the classifier
joblib.dump(modell, 'heart_prediction.joblib')

############################ Heart API #######################################################

@app.route('/heart-prediction', methods =['POST'])
def heart():
    feature_values = request.json.values()
    feature = np.array([[list(feature_values)]])
    predict = modell.predict(feature[0])
    return jsonify({'result': int(predict)})  

######################## Run Flask App ######################################################
 
if __name__ == '__main__':
    app.run(debug=True)