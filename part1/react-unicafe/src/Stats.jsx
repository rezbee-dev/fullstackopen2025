import StatsLine from "./StatsLine"

const Stats = ({ good, neutral, bad }) => {

    const all = good + neutral + bad
    const avg =  (good + (bad * -1))/all || 0
    const pos = (good / all * 100) || 0

    if (all == 0)
        return (
            <>
                <h2>Statistics</h2>
                <p>No feedback given</p>
            </>
        )
    else 
        return (
            <>
                <h2>Statistics</h2>
                <table>
                    <tbody>
                        <StatsLine label={"good"} stat={good} />
                        <StatsLine label={"neutral"} stat={neutral} />
                        <StatsLine label={"bad"} stat={bad} />
                        <StatsLine label={"all"} stat={all} />
                        <StatsLine label={"average"} stat={avg.toFixed(2)} />
                        <StatsLine label={"positive"} stat={pos.toFixed(2) + "%"} />
                    </tbody>
                </table>
            </>
        )
}

export default Stats