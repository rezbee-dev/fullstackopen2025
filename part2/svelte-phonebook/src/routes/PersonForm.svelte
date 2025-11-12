<script>
    import PersonService from "$lib/personService";

    let {persons} = $props()

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
                window.location.reload()
                return
            }
        }

        const newPerson = {name: newName, number: newNumber}
        await PersonService.create(newPerson)

        window.location.reload()

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