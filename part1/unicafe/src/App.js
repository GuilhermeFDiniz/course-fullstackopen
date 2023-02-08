import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <br></br>
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>
      <br></br>
      <h1>statistics</h1>
      <br></br>
      <p>good:</p>
      <p>neutral:</p>
      <p>bad:</p>
    </div>
  )
}

export default App
