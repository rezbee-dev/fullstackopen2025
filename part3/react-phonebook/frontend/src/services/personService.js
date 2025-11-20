import axios from 'axios'

const baseURL = "http://localhost:3001/persons"

const getAll = () => axios.get(baseURL)

const create = (newPerson) => axios.post(baseURL, newPerson)

const remove = (id) => axios.delete(`${baseURL}/${id}`)

const update = (id, newPerson) => axios.put(`${baseURL}/${id}`, newPerson)

const PersonService = { getAll, create, remove, update }
export default PersonService 