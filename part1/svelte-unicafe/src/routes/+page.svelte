<script>
    import Feedback from "./feedback.svelte";
    import Stats from "./stats.svelte";

    let good = $state(0)
    let neutral = $state(0)
    let bad = $state(0)

    const handleGood = () => good++
    const handleNeutral = () => neutral++
    const handleBad = () => bad++

    // $inspect(good, neutral, bad)
</script>

<Feedback { handleGood } { handleNeutral } { handleBad } />
<Stats {good} {neutral} {bad} />
