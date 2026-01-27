from fastapi import FastAPI

app = FastAPI(title="FSO Phonebook Backend")

@app.get("/")
async def root():
    return {"message": "Hello World!"}