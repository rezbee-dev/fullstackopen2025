<script>
    import Content from "./Content.svelte";
    import Header from "./Header.svelte";
    import Total from "./Total.svelte";

    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
            },
            {
                name:'Using props to pass data',
                exercises: 7,
            },
            {
                name: 'State of a component',
                exercises: 14,
            }
        ]
    }
</script>

<Header course = { course.name } />
<Content parts = { course.parts } />
<Total parts = { course.parts } />
