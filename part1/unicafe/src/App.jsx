import { useState } from 'react'
import './App.css'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Head = ({ text }) => <h1>{text}</h1>

const Statistics = ({ stats }) => {
  const { good = 0, neutral = 0, bad = 0, all = 0, average = 0, positive = 0 } = stats
  const hasStats = all > 0;

  return (
    <div>
      <Head text="Statistics" />

      {hasStats ?
        <section>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </section>
        :
        <h3>No feedback given</h3>}
    </div>
  )
}

const StatisticLine = ({ text, value }) => <h3>{text} {value}</h3>

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
    setAverage((updateGood - bad) / total)

    setPositive((updateGood / total) * 100)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)

    const total = all + 1;
    setAll(total)
    setAverage((good - bad) / total)

    setPositive((good / total) * 100)
  }
  const handleBad = () => {
    const updateBad = bad + 1;
    setBad(updateBad)

    const total = all + 1;
    setAll(total)
    setAverage((good - updateBad) / total)

    setPositive((good / total) * 100)
  }

  return (
    <main>
      <Head text="Give feedback" />
      <Button text="good" handleClick={handleGood} />
      <Button text="neutral" handleClick={handleNeutral} />
      <Button text="bad" handleClick={handleBad} />

      <Statistics stats={{
        good: good,
        neutral: neutral,
        bad: bad,
        all: all,
        average: average,
        positive: positive
      }
      } />
    </main>
  )
}

export default App
