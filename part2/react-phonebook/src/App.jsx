import { useState, useEffect } from 'react'
import './App.css'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PersonService from './services/personService'

function App() {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  // Not using .thenables as shown in Part 2C
  useEffect(() => {
    const fetchData = async () => {
      const response = await PersonService.getAll()
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
