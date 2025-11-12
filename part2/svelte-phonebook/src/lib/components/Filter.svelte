<script>
    let { search = $bindable() } = $props()
</script>

<label>Filter: <input bind:value={search} /></label>