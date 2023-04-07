from flask import Flask, request
from flask import jsonify
from flask_cors import CORS
import numpy as np
import pickle

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

model = pickle.load(open('model.pkl', 'rb'))
@app.route("/", methods=['GET','POST'])
def display():
    if request.method == "GET":
        return "hi"
    elif request.method == "POST":
        format = request.json
        # final = jsonify(format)
        features = [float(x) for x in format.values()]
        final = np.array(features)
        input_data_reshaped = final.reshape(1, -1)
        prediction = model.predict_proba(input_data_reshaped)
        output = '{0:.{1}f}'.format(prediction[0][1], 2)
        
        if output > str(0.5):
            return "The tumor is malignant"
        else:
            return "The tumor is benign"
    else:
        return "oops"

if __name__ == "__main__":
    app.run(debug= True, port=5000)