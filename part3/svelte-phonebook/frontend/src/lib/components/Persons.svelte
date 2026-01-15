<script>
    import Person from "./Person.svelte";

    let { persons, notification } = $props()
</script>

<div>
    {#if persons.length === 0}
        <p>No results found.</p>
    {:else}
        {#each persons as person, index (index)}
            <Person {persons} {person} bind:notification={notification} />
        {/each}
    {/if}
</div>