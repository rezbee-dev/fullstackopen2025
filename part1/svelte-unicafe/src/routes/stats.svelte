<script>
    let { good, bad, neutral } = $props()
    const all = $derived(good + bad + neutral)
    const avg = $derived((good + (bad * -1))/all)
    const pos = $derived((good/all) * 100)

    // $inspect(all, avg, pos)
</script>

<h2>Statistics</h2>

{#if (good + bad + neutral) == 0}
    <p>No feedback given</p>
{:else}
    <table>
        <tbody>
            <tr><td>good</td><td>{good}</td></tr>
            <tr><td>neutral</td><td>{neutral}</td></tr>
            <tr><td>bad</td><td>{bad}</td></tr>
            <tr><td>all</td><td>{all}</td></tr>
            <tr><td>average</td><td>{avg.toFixed(2)}</td></tr>
            <tr><td>positive</td><td>{pos.toFixed(2)}%</td></tr>
        </tbody>
    </table>
{/if}