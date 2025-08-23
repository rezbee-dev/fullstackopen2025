<script>
    let { parts } = $props()
</script>

<p><strong>Number of exercises: { parts.map(p => p.exercises).reduce((prev, curr) => prev+curr, )}</strong></p>
