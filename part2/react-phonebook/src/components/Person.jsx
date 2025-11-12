import PersonService from "../services/personService"

const Person = ({person, setMessage, setError }) => {

    async function onClick(){
        if(window.confirm(`Delete "${person.name}"?`)) {
            try {
                await PersonService.remove(person.id)
                // window.location.reload() // to allow re-fetching data from backend
                setMessage("Entry successfully deleted!")
                setError(false)
            } catch(error){
                console.error(`Error: ${error}`)
                setMessage(`"${person.name}" was already removed`)
                setError(true)
            }
        }
            
    }

    return (
        <div className="person">
            <p><span style={{textDecoration: 'underline'}}>{person.name}</span>: {person.number}</p> 
            <div><button onClick={onClick}>delete</button></div>
        </div>
    )
}

export default Person