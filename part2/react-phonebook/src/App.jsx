import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

function App() {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  // Not using .thenables as shown in Part 2C
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/persons")
      setPersons(response.data)
    }
    
    fetchData()
  }, [])

  return (
    <div>
      <div>
        <h2>Phonebook</h2>
        <Filter search={search} setSearch={setSearch} />
      </div>
      <div>
        <h2>Add new</h2>
        <PersonForm 
          newName={newName} 
          setNewName={setNewName}
          newNumber={newNumber}
          setNewNumber={setNewNumber}
          persons={persons}
          setPersons={setPersons}
        />
      </div>
      <div>
        <h2>Numbers</h2>
        <Persons persons={persons} search={search} />
      </div>
    </div>
  )
}

export default App
