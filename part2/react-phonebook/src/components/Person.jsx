import PersonService from "../services/personService"

const Person = ({person}) => {

    async function onClick(){
        if(window.confirm(`Delete "${person.name}"?`)) {
            await PersonService.remove(person.id)
            window.location.reload() // to allow re-fetching data from backend
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