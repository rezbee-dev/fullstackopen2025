<script>
    import Filter from "$lib/components/Filter.svelte";
    import Notification from "$lib/components/Notification.svelte";
    import PersonForm from "$lib/components/PersonForm.svelte";
    import Persons from "$lib/components/Persons.svelte";

    let { data, } = $props() // returns object from load() in +page.js
    let persons = $state(data.persons)
    let search = $state("")
    let notification = $state({
        message: '',
        error: true
    })

    let filteredPersons = $derived.by(() => {
        if(search == "")
            return persons
        
        return persons.filter(p => p.name.toLowerCase().startsWith(search.toLowerCase()))
    })

    $effect(() => {
        setTimeout(() => notification.message = '', 15000)
    })
</script>


<main>
    <!-- bind:notification recommended when mutating props (idk why tho) -->
    <Notification {notification} />
    <section>
        <h2>Phonebook</h2>
        <Filter bind:search={search} />
    </section>
    <section>
        <h2>Add new</h2>
        <PersonForm bind:persons={persons} bind:notification={notification}/>
    </section>
    <section>
        <h2>Numbers</h2>
        <Persons bind:persons = {filteredPersons} bind:notification={notification} />
    </section>
</main>