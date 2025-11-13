<script>
    import Countries from './Countries.svelte';

    let { data } = $props()
    let filter = $state("")

</script>

<main>
    <div>
        <label for="filter">Filter Countries: <input name="filter" type="text" value={filter} oninput={(e) => filter = e.target.value}></label>
    </div>
    <Countries countries = {data.countries} {filter} />
</main>