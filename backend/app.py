from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import joblib


app = FastAPI()
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
model = joblib.load("model/churn_model.pkl")
encoders = joblib.load("model/encoders.pkl")


class CustomerData(BaseModel):
    gender: str
    SeniorCitizen: int
    Partner: str
    Dependents: str
    tenure: int
    PhoneService: str
    MultipleLines: str
    InternetService: str
    OnlineSecurity: str
    OnlineBackup: str
    DeviceProtection: str
    TechSupport: str
    StreamingTV: str
    StreamingMovies: str
    Contract: str
    PaperlessBilling: str
    PaymentMethod: str
    MonthlyCharges: float
    TotalCharges: float


@app.get("/")
def home():
    return {"message": "Customer Churn Prediction API Running"}


@app.post("/predict")
def predict_churn(data: CustomerData):
    input_data = pd.DataFrame([data.dict()])

    for column, encoder in encoders.items():
        if column != "Churn":
            input_data[column] = encoder.transform(input_data[column])

    prediction = model.predict(input_data)[0]
    probability = model.predict_proba(input_data)[0][1] * 100

    if probability < 40:
        risk_level = "Low"
    elif probability < 70:
        risk_level = "Medium"
    else:
        risk_level = "High"

    result = "Likely to Churn" if prediction == 1 else "Not Likely to Churn"

    return {
        "prediction": result,
        "churn_probability": round(probability, 2),
        "risk_level": risk_level
    }