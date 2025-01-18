from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle

app = Flask(__name__)
CORS(app, origins="*",supports_credentials=True)

@app.route('/')
def home():
    return "Hello, World!"

@app.route('/test', methods=['POST'])
def test():
    print("hi")
    data = request.get_json()
    age = int(data['age'])
    sports_hours = int(data['sportshr'])
    screen_time = int(data['screentime'])
    study_hours = int(data['studyHr'])
    genetics_score = int(data['genetics'])
    snellens_score = int(data['snellScore'])
    astigmatism_score = int(data['astScore'])
    blur_score = int(data['blurScore'])
    sleep_quality_score = int(data['sleepQualityScore'])
    chronic_disease_in_parents = int(data['presenceofChronicdiseaseinParents'])

    model = pickle.load(open('./catboost_model.pkl', 'rb'))
    arr = np.array([age,sports_hours,screen_time,study_hours,genetics_score,snellens_score,astigmatism_score,chronic_disease_in_parents,sleep_quality_score,blur_score]).reshape(1,-1)
    ans = model.predict_proba(arr)
    ans = ans[0][1];
    print(ans);
    return jsonify({'score': ans});


if __name__ == '__main__':
    app.run(debug=True)
