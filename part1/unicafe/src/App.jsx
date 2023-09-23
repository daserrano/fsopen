import { useState } from 'react'
import './App.css'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Head = ({ text }) => <h1>{text}</h1>

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    const updateGood = good + 1;
    setGood(updateGood)

    const total = all + 1;
    setAll(total)
    setAverage((updateGood-bad)/total)

    setPositive((updateGood/total)*100)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)

    const total = all + 1;
    setAll(total)
    setAverage((good-bad)/total)

    setPositive((good/total)*100)
  }
  const handleBad = () => {
    const updateBad = bad + 1;
    setBad(updateBad)

    const total = all + 1;
    setAll(total)
    setAverage((good-updateBad)/total)

    setPositive((good/total)*100)
  }

  return (
    <main>
      <Head text="Give feedback" />
      <Button text="good" handleClick={handleGood} />
      <Button text="neutral" handleClick={handleNeutral} />
      <Button text="bad" handleClick={handleBad} />

      <Head text="Statistics" />
      <h3>good {good}</h3>
      <h3>neutral {neutral}</h3>
      <h3>bad {bad}</h3>

      <h3>all {all}</h3>
      <h3>average {average}</h3>
      <h3>positive {positive} %</h3>
    </main>
  )
}

export default App
