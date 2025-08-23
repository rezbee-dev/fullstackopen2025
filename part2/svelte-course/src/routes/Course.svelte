<script>
    import Content from "./Content.svelte";
    import Header from "./Header.svelte";
    import Total from "./Total.svelte";

    let { courses } = $props()
</script>

<div>
    {#each courses as course (course.id)}
        <Header course = { course.name } />
        <Content parts = { course.parts } />
        <Total parts = { course.parts } />
    {/each}
</div>