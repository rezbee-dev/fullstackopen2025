const Persons = ({persons, search}) => {

    function displayPersons() {
        if (search == "")
            return persons.map((p, i) => <p key={i}>{p.name} - {p.number}</p>)
        
        let matchedPersons = persons.filter(p => p.name.toLowerCase().startsWith(search.toLowerCase()))

        // debug
        // console.log(`Matched persons: ${matchedPersons}, Matched persons length: ${matchedPersons.length}`)

        if(matchedPersons.length === 0)
            return <p>No matches found</p>
        else
            return matchedPersons.map((p,i) => <p key={i}>{p.name} = {p.number}</p>)
    }

    return ( <>{displayPersons()}</>)
}

export default Persons