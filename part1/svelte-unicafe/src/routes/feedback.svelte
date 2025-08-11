<script>
    let {handleGood, handleNeutral, handleBad } = $props()
</script>

<h2>Give Feedback</h2>
<button onclick={handleGood}>good</button>
<button onclick={handleNeutral}>neutral</button>
<button onclick={handleBad}>bad</button>