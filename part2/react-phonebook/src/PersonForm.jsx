const PersonForm = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons}) => {
    function onSubmit(event){
    event.preventDefault()

    if(persons.find(p => p.name === newName)){
      alert(`${newName} is already present in the phonebook!`)
      return
    }

    const newPerson = {name: newName, number: newNumber}
    setPersons(persons.concat(newPerson))
    setNewName("")
    setNewNumber("")

    console.log("debug: Form submitted!")
  }

    return (
        <form onSubmit={onSubmit}>
          <label>name:  <input value={newName} onChange={ e => setNewName(e.target.value)}/></label>
          <label>phone: <input value={newNumber} onChange={e => setNewNumber(e.target.value)}/></label>
          <div><button type="submit">add</button></div>
        </form>
    )
}

export default PersonForm