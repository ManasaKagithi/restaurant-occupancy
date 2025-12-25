from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
from sklearn.linear_model import LinearRegression

app = FastAPI()

# Input schema
class PredictionRequest(BaseModel):
    history: list  # e.g. [{"hour": 12, "occupancy": 30}, {"hour": 13, "occupancy": 45}]
    hour: int      # hour you want to predict for

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/predict")
def predict(request: PredictionRequest):
    # Convert history into DataFrame
    df = pd.DataFrame(request.history)

    # Train simple regression model
    model = LinearRegression()
    model.fit(df[["hour"]], df["occupancy"])

    # Predict occupancy for requested hour
    prediction = model.predict([[request.hour]])
    return {"predicted_occupancy": float(prediction[0])}
