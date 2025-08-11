<script>
    import data from '$lib/anecdotes'

    let selected = $state(0)
    let votes = $state(new Array(data.length).fill(0))

    const handleNext = () => selected = Math.floor(Math.random() * data.length)
    const handleVotes = () => votes[selected]++
</script>

<h2>Ancedote of the Day</h2>
<p>{data[selected]}</p>
<p>has {votes[selected]} votes</p>
<button onclick={handleVotes}>vote</button>
<button onclick={handleNext}>next anecdote</button>

<h2>Ancedote with most votes</h2>
<p>{data[votes.indexOf(Math.max(...votes))]}</p>
<p>has {votes[votes.indexOf(Math.max(...votes))]} votes</p>





































