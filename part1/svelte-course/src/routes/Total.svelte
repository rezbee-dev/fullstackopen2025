<script>
    let { parts } = $props()
</script>

<p>Number of exercises: { parts.map(p => p.exercises).reduce((prev, curr) => prev+curr, )}</p>
