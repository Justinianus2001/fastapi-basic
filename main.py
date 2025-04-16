from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel

app = FastAPI()

class Calculation(BaseModel):
    num1: float
    num2: float
    operation: str

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
async def read_root():
    return FileResponse("static/index.html")

@app.post("/calculate")
async def calculate(calc: Calculation):
    result = 0
    if calc.operation == "add":
        result = calc.num1 + calc.num2
    elif calc.operation == "subtract":
        result = calc.num1 - calc.num2
    return {"result": result} 