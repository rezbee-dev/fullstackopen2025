<script>
    import Filter from "./Filter.svelte";
    import PersonForm from "./PersonForm.svelte";
    import Persons from "./Persons.svelte";

    let { data, } = $props() // returns object from load() in +page.js
    let persons = $state(data.persons)
    let search = $state("")

    let filteredPersons = $derived.by(() => {
        if(search == "")
            return persons
        
        return persons.filter(p => p.name.toLowerCase().startsWith(search.toLowerCase()))
    })

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


<main>
    <section>
        <h2>Phonebook</h2>
         <Filter bind:search={search} />
    </section>
    <section>
        <h2>Add new</h2>
        <PersonForm {persons} />
    </section>
    <section>
        <h2>Numbers</h2>
        <Persons persons = {filteredPersons} />
    </section>
</main>