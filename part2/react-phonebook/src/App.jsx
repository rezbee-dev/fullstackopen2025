import { useState } from 'react'
import './App.css'

function App() {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]) 
  const [newName, setNewName] = useState('')

  function onSubmit(event){
    event.preventDefault()

    if(persons.find(p => p.name === newName)){
      alert(`${newName} is already present in the phonebook!`)
      return
    }

    const newPerson = {name: newName}
    setPersons(persons.concat(newPerson))
    setNewName("")

    console.log("debug: Form submitted!")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onSubmit}>
        <div>
          name: <input value={newName} onChange={ e => setNewName(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>
        <h2>Numbers</h2>
        {persons.map((p, i) => <p key={i}>{p.name}</p>)}
      </div>
    </div>
  )
}

export default App
