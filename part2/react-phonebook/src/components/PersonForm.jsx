import PersonService from '../services/personService'

const PersonForm = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons}) => {
    async function onSubmit(event){
      event.preventDefault()

      let matchedPerson = persons.find(p => p.name.toLowerCase() === newName.toLowerCase())

      if(matchedPerson){
        if(!window.confirm(`${newName} is already present in the phonebook. \nUpdate phone number?`))
          return
        else {
          await PersonService.update(matchedPerson.id, {...matchedPerson, number: newNumber})
          window.location.reload()
          return
        }
      }

      const newPerson = {name: newName, number: newNumber}

      const response = await PersonService.create(newPerson)

      setPersons(persons.concat(response.data))
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