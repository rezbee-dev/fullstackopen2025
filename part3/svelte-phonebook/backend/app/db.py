from typing import List, Optional
from app.error import MissingRequiredFieldsError, DuplicateEntryError
from app.model import PersonModel, PersonRaw

data: List[PersonModel] = []

def get_persons() -> List[PersonModel]:
    return data

def get_person(id: int) -> Optional[PersonModel]:
    for p in data:
        if p.id == id:
            return p
    return None

def get_person_by_name(name: str) -> Optional[PersonModel]:
    for p in data:
        if p.name == name:
            return p
        
    return None

def get_persons_info():
    phonebook_length = len(data)
    
    
def add_person(person: PersonRaw):
    # Due to the nature of Pydantic, error handling will be done in API layer
    #  so the code below is not used
    # if not person.get("name") or not person.get("number"):
    #     raise MissingRequiredFieldsError("Missing name or number")
    
    # if get_person_by_name(person):
    #     raise DuplicateEntryError("Name already exists")
    
    new_id = data[-1].id + 1
    # new_entry: PersonModel = {**person, "id": new_id}
    data.append(PersonModel(id=new_id, name=person.name, number=person.number))

def delete_person(id: int):
    for person in data:
        if person.id == id:
            data.remove(person)
            return person
        
    return None

    