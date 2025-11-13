<script>
    let { country } = $props()
</script>

<div class="country">
    <h1>{country.name.common}</h1>
    <p>Capital {country.capital}</p>
    <p>Area {country.area}</p>
    <h2>Languages</h2>
    <ul>
        {#each Object.keys(country.languages) as key, index (index)}
            <li>{country.languages[key]}</li>
        {/each}
    </ul>
    <img src={country.flags.png} alt={country.flags.alt}>
</div>

<style>
    .country {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>