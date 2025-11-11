<script>
    let { persons } = $props()
</script>

{#if persons.length === 0}
    <p>No results found.</p>
{:else}
    {#each persons as person, index (index)}
        <p>{person.name} - {person.number}</p>
    {/each}
{/if}