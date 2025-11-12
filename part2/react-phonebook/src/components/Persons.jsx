import Person from "./Person"

const Persons = ({persons, search, setMessage, setError}) => {

    function displayPersons() {
        if (search == "")
            return persons.map(p => <Person key={p.id} person={p} setMessage={setMessage} setError={setError} />)
        
        let matchedPersons = persons.filter(p => p.name.toLowerCase().startsWith(search.toLowerCase()))

        // debug
        // console.log(`Matched persons: ${matchedPersons}, Matched persons length: ${matchedPersons.length}`)

        if(matchedPersons.length === 0)
            return <p>No matches found</p>
        else
            return matchedPersons.map(p => <Person key={p.id} person={p} setMessage={setMessage} setError={setError}/>)
    }

    return ( <>{displayPersons()}</>)
}

export default Persons