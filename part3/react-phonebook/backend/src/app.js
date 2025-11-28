import express from 'express'
import morgan from 'morgan'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
// src: https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/
import db from "../db.json" with {type: "json"}

const PORT = 3000
const DIST = join(dirname(fileURLToPath(import.meta.url)), "..", "dist")
morgan.token("reqbody", (req, res) => JSON.stringify(req.body))
const tokens = ":method :url :status :res[content-length] - :response-time ms :reqbody"
let data = [...db.persons]

const app = express()
app.use(express.json())
app.use(morgan(tokens))
app.use(express.static(DIST))
console.log()

app.get("/", (req, res) => {
    return res.send("Bye World!")
})

app.get("/api/persons", (req, res) => {
    return res.json(data)
})

app.get("/api/persons/:id", (req, res) => {
    const result = data[req.params.id]
    return result ? res.json(result) : res.status(404).json({error: `Phonebook entry with id# ${req.params.id} not found!`})
})

app.post("/api/persons", (req, res) => {
    const rawPerson = req.body

    if(!rawPerson.name || !rawPerson.number)
        return res.status(400).json({error: "content missing"})

    if(data.find(p => p.name.toLowerCase() == rawPerson.name))
        return res.status(409).json({error: `${rawPerson.name} already exists in phonebook`})

    const newId = data.length == 0 ? 0:(Math.max(...data.map(p=>Number(p.id)))+1)
    const person = {...rawPerson, id: newId}
    data.push(person)

    return res.status(201).json(person)
})

app.delete("/api/persons/:id", (req, res) => {
    data = data.filter(p => p.id !== req.params.id)
    return res.status(204).json({})
})

app.get("/api/persons/info", (req, res) => {
    return res.send(`Phonebook has info for ${data.length} people<br/>${new Date()}`)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})