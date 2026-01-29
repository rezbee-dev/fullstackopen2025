from typing import List, Optional
from app.error import MissingRequiredFieldsError

data: List[dict] = []

def get_persons() -> List[dict]:
    return data

def get_person(id: int) -> Optional[dict]:
    result = [person for person in data if person["id"] == id]
    return next(result, None)

def add_person(person):
    if not person.get("name") or not person.get("number"):
        raise MissingRequiredFieldsError("Missing name or number")
    