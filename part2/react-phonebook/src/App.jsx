import { useState, useEffect } from 'react'
import './App.css'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PersonService from './services/personService'
import Notification from './components/Notification'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(false)

  // Not using .thenables as shown in Part 2C
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PersonService.getAll()
        setPersons(response.data)
      } catch (error) {
        console.error(`Error: ${error}`)
        setMessage("Error displaying data")
        setError(true)
      }
    }
    
    fetchData()
  }, [message])

  return (
    <div>
      <Notification message={message} setMessage={setMessage} error={error} />
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
          setMessage={setMessage}
          setError={setError}
        />
      </div>
      <div>
        <h2>Numbers</h2>
        <Persons persons={persons} search={search} setMessage={setMessage} setError={setError} />
      </div>
    </div>
  )
}

export default App
