import { useState } from 'react'
import './App.css'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  

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
        {/* <form onSubmit={onSubmit}>
          <label>name:  <input value={newName} onChange={ e => setNewName(e.target.value)}/></label>
          <label>phone: <input value={newNumber} onChange={e => setNewNumber(e.target.value)}/></label>
          <div><button type="submit">add</button></div>
        </form> */}
      </div>
      <div>
        <h2>Numbers</h2>
        <Persons persons={persons} search={search} />
      </div>
    </div>
  )
}

export default App
