from fastapi import APIRouter
from fastapi.responses import JSONResponse

import joblib
import numpy as np

api = APIRouter()
model = joblib.load('app/routers/random_forest_heart_disease.joblib')


@api.get("/")
def predict_heart_disease(age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak,
                          slope, ca, thal):
    """
    https://github.com/MitanshuShaBa/Basic-ML-Projects/blob/master/Heart%20Disease%20UCI/heart-disease-predictor.ipynb
    Go to this link for reference to arguments
    """
    heart_reading = np.array([[age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak,
                               slope, ca, thal]])
    return JSONResponse({"prediction": model.predict(heart_reading).tolist()})
