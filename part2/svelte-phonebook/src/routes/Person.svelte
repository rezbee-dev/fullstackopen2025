<script>
    import PersonService from "$lib/personService";

    let { person } = $props()

    async function onclick() {
        if(window.confirm(`Delete "${person.name}"?`)) {
            await PersonService.remove(person.id)
            window.location.reload()
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