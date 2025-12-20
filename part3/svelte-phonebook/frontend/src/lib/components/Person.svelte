<script>
    import PersonService from "$lib/personService";

    let { persons, person, notification } = $props()

    async function onclick() {
        if(window.confirm(`Delete "${person.name}"?`)) {
            try {
                const response = await PersonService.remove(person.id)
                if(!response.ok) {
                    throw new Error("404", {cause: response})
                }
                const deletedPersonIndex = persons.findIndex(p => p.id === person.id)
                persons.splice(deletedPersonIndex, 1)
                notification.message = "Entry successfully deleted!"
                notification.error = false
            } catch (err) {
                console.error(`Error: ${err}`)
                notification.message = `${person.name} was already removed!`
                notification.error = true
            }
        }
    }
</script>

<div class="person">
    <p><span style="text-decoration: underline">{person.name}</span>: {person.number}</p>
    <div><button {onclick}>Delete</button></div>
</div>

<style>
    .person {
        display:flex;
        justify-content:space-between;
        align-items: center;
        gap: 1em;
        margin: 1em 0;
    }

    .person button {
        padding: 0.6em 1.2em;
        color: white;
        background-color: black;
    }
</style>