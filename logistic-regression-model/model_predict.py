import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import pickle
    

breast_cancer_dataset = pd.read_csv('logistic-regression-model\data.csv')
breast_cancer_dataset = breast_cancer_dataset.drop(['id'], axis=1)
    # print(breast_cancer_dataset)
    # print(breast_cancer_dataset.shape)

    # ####################### check for missing values ######################
    # if it prints non-null for any of the features, it means there is some missing value for that feature
    # print(breast_cancer_dataset.info())

    # checking if there are any missing values in the dataset
    # 0 implies that there are no missing values for a feature
    # print(breast_cancer_dataset.isnull().sum())

    # ######################## statistical measures on the data ##################

    # print(breast_cancer_dataset.describe())

    # checking the distribution of target variables( no. of benign and malignant cases)
    # M represents Malignant and B represents Benign

    # print(breast_cancer_dataset['diagnosis'].value_counts())

    # mean value is computed for all the features for benign and malignant outcomes
    # in case of 'M' all the mean values are slightly higher than 'B'

    #print(breast_cancer_dataset.groupby('diagnosis').mean())

    ######################## separating input features and target labels for training the model##############

X = breast_cancer_dataset.drop(columns=['diagnosis', 'Unnamed: 32'], axis=1)
Y = breast_cancer_dataset['diagnosis']
    #print(X)
    #print(Y)

    # Standardizing the data
    # standardization is done to convert these values in same range to build a efficient ML model
scaler = StandardScaler()
scaler.fit(X)
standardized_data = scaler.transform(X)
X = standardized_data

    # splitting data into training and testing data
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)
    #print(X.shape, X_train.shape, X_test.shape)
    ######################### model training ################################
    # loading an instance of logistic regression into model
model = LogisticRegression()
    # training logistic regression model using Training data
model.fit(X_train, Y_train)
    # accuracy score is evaluated to make sure the model does not over-fit
    # incase of overfitting, model can predict accurate output only for training data
    # as a result, accuracy score on training data will be very high while it will be very low on test data
    # evaluating the model on training data
X_train_prediction = model.predict(X_train)
training_data_accuracy = accuracy_score(Y_train, X_train_prediction)
print('Accuracy=', training_data_accuracy)

    # evaluating the model on test data
X_test_prediction = model.predict(X_test)
test_data_accuracy = accuracy_score(Y_test, X_test_prediction)
print('Accuracy=', test_data_accuracy)


pickle.dump(model,open('model.pkl', 'wb'))
new_model = pickle.load(open('model.pkl', 'rb'))
###################### building a predictive system ############################

    # input_data = (14.25,21.72,93.63,633,0.09823,0.1098,0.1319,0.05598,0.1885,0.06125,0.286,1.019,2.657,24.91,0.005878,0.02995,0.04815,0.01161,0.02028,0.004022,15.89,30.36,116.2,799.6,0.1446,0.4238,0.5186,0.1447,0.3591,0.1014)
    # input_data_as_numpy_array = np.asarray(input_data)

    # reshape the numpy array as we are predicting for one data point
    # we cannot reshape in case of tuple datatype. That's why we are converting it to numpy array
    # print(input_array)
    # input_data_reshaped = input_array.reshape(1, -1)

    # prediction = model.predict(input_data_reshaped)
    # print(prediction[0])

    # if prediction[0] == 'M':
    #     return 'The tumor is malignant'
    # elif prediction[0] == 'B':
    #     return "The tumor is benign"
    # return "i ran"