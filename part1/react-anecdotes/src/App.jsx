import { useState } from "react"

function App() {
  const anecdotes = [
      'If it hurts, do it more often.',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      'The only way to go fast, is to go well.'
  ]

  const [ selected, setSelected ] = useState(0)
  const [ votes, setVotes ] = useState(Array(anecdotes.length).fill(0))
  const [ mostVotes, setMostVotes ] = useState(0)

  const getRandomInt = (maxNotIncluded) => Math.floor(Math.random() * maxNotIncluded)

  const handleVote = () => {
    const newVotes = votes.map((currValue, index) => {
      if(index == selected)
        return currValue + 1
      else
        return currValue
    })

    const maxVotes = Math.max(...newVotes)
    const maxVotesIndex = newVotes.indexOf(maxVotes)
    setMostVotes(maxVotesIndex)
    setVotes(newVotes)
  }

  const handleNext = () => setSelected(getRandomInt(anecdotes.length))


  return (
    <>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      {votes[selected] > 0 ? <p>Has {votes[selected]} votes</p> : <p>Has no votes</p> }
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVotes]}</p>
      {votes[mostVotes] > 0 ? <p>Has {votes[mostVotes]} votes</p> : <p>Has no votes</p> }
    </>
  )
}

export default App
