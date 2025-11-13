<script>
    import Country from "./Country.svelte";
    import CountryRow from "./CountryRow.svelte";

    let { countries, filter } = $props()

    let matchedCountries = $derived.by(() => {
        if(filter == "")
            return

        return countries.filter(c => c.name.common.toLowerCase().startsWith(filter.toLowerCase()))
    })

</script>

<div>
    {#if filter== ""}
        {#each countries as c, index (index)}
            <CountryRow country={c} />
        {/each}
    {:else if matchedCountries.length == 0}
            <p>No results found.</p>
    {:else if matchedCountries.length > 10}
        <p>Too many matches, specify your search.</p>
    {:else if matchedCountries.length <= 10 && matchedCountries.length > 1}
        {#each matchedCountries as c, index (index)}
            <CountryRow country={c} />
        {/each}
    {:else if matchedCountries.length == 1}
        <Country country={matchedCountries[0]} />
         <!-- <p>poop</p> -->
    {:else}
        {#each matchedCountries as c, index (index)}
            <CountryRow country={c} />
        {/each}
    {/if}
</div>

<style>

</style>