<script>
    import Country from "./Country.svelte";

    let { country } = $props()
    let show = $state(false)
</script>

<div class="row">
    <p>{country.name.common}</p>
    <button onclick={() => show = !show}>{show ? "Hide":"Show"}</button>
</div>
{#if show}
    <Country {country} />
{:else}
    <div></div>
{/if}

<style>
    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1em;
        margin: 1em;
        padding: 1em;
        border-bottom: 1px solid black;
    }
</style>
