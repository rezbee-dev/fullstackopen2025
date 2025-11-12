<script>
    import Person from "./Person.svelte";

    let { persons } = $props()
</script>

<div>
    {#if persons.length === 0}
        <p>No results found.</p>
    {:else}
        {#each persons as person, index (index)}
            <Person {person} />
        {/each}
    {/if}
</div>