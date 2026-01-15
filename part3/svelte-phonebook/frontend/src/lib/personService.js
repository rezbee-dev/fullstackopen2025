const baseURL = "http://localhost:3001/persons"

const create = (newPerson) => fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(newPerson),
    headers: {
        'Content-Type': 'application/json'
    }
})

const remove = (id) => fetch(`${baseURL}/${id}`, {method: 'DELETE'})

const update = (id, newPerson) => fetch(`${baseURL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(newPerson),
    headers: {
        'Content-Type': 'application/json'
    }
})

const PersonService = {create, remove, update}
export default PersonService