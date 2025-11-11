<script>
    let {persons} = $props()

    function onsubmit(e) {
        e.preventDefault()
        let newName = e.target.elements.name.value
        let newNumber = e.target.elements.number.value

        if(persons.find(p => p.name.toLowerCase() == newName.toLowerCase())){
            alert(`${newName} already present in phonebook!`)
            return
        }

        persons.push({name: newName, number: newNumber})

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