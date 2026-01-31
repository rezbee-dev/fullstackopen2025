from pydantic import BaseModel

# Todo: need to set custom error message when name or number is missing
class PersonRaw(BaseModel):
    name: str
    number: str

class PersonModel(PersonRaw):
    id: int