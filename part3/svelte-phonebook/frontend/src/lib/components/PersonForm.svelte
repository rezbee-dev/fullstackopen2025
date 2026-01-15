<script>
    import PersonService from "$lib/personService";

    let {persons, notification} = $props()

    async function onsubmit(e) {
        e.preventDefault()
        let newName = e.target.elements.name.value
        let newNumber = e.target.elements.number.value

        const matchedPerson = persons.find(p => p.name.toLowerCase() == newName.toLowerCase())

        if(matchedPerson){
            if(!window.confirm(`${newName} is already present in the phonebook. \nUpdate phone number?`))
                return
            else {
                await PersonService.update(matchedPerson.id, {...matchedPerson, number: newNumber})
                notification.message = "Entry successfully updated"
                notification.error = false
                
                // unable to find how to reload data w/o reloading page, so am just manually update persons rune instead
                const updatedPersonIndex = persons.findIndex(p => p.id === matchedPerson.id)
                persons[updatedPersonIndex] = {...matchedPerson, number: newNumber}

                e.target.elements.name.value = ""
                e.target.elements.number.value = ""
                return
            }
        }

        const newPerson = {name: newName, number: newNumber}
        const response = await PersonService.create(newPerson)
        const data = await response.json()

        notification.message = "Entry successfully added!"
        notification.error = false
        persons.push(data)

        e.target.elements.name.value = ""
        e.target.elements.number.value = ""
    }
</script>

<form {onsubmit}>
    <label>name:  <input name="name" /></label>
    <label>phone: <input name="number"/></label>
    <div><button type="submit">add</button></div>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
</style>