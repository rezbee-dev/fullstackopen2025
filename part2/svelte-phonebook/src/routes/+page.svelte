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