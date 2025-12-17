import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const newGood = good + 1
    setGood(newGood)
  }

  const handleNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
  }

  const handleBad = () => {
    const newBad = bad + 1
    setBad(newBad)
  }
  
  const total = good + neutral + bad
  const average = total === 0 ? "Total es igual a 0, oprime un boton para continuar" : (good - bad) / total
  const percentage = total === 0 ? "Total es igual a 0, oprime un boton para continuar" : (good / total) * 100 

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>
        good
      </button>
      <button onClick={handleNeutral}>
        neutral
      </button>
      <button onClick={handleBad}>
        bad
      </button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {percentage}%</p>
    </div>
  )
}

export default App