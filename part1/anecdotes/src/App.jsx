import { useState } from 'react'
import './App.css'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const getNumberRandom = () => Math.floor(Math.random() * (anecdotes.length - 0) + 0)

  const handleNext = () => setSelected(getNumberRandom)

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes (newVotes)
  }

  return (
    <main>
      <h3>{anecdotes[selected]}</h3>
      <h4>has {votes[selected]} votes</h4>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNext}>Next anecdote</button>
    </main>
  )
}



export default App
