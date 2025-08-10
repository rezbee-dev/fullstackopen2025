import { useState } from "react"
import Feedback from "./Feedback"
import Stats from "./Stats"

function App() {

  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const onClickIncrementGood = () => setGood(good + 1)
  const onClickIncrementNeutral = () => setNeutral(neutral + 1)
  const onClickIncrementBad = () => setBad(bad + 1)


  return (
    <>
      <Feedback onClickGood = { onClickIncrementGood } onClickNeutral = { onClickIncrementNeutral } onClickBad = { onClickIncrementBad }  />
      <Stats good = {good} neutral = {neutral} bad = {bad} />
    </>
  )
}

export default App
