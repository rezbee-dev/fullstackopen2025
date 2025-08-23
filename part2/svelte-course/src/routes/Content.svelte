<script>
    import Part from "./Part.svelte";

    let { parts } = $props()
</script>

<div>
    {#each parts as part (part.id)}
        <Part part={part.name} exercises={part.exercises} />
    {/each}
</div>

