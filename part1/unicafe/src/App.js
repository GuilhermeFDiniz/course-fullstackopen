import { useState } from 'react'

const Statistics = (props) => {
  if(props.good+props.bad+props.neutral === 0){
    return(
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  return(
    <>
      <h1>statistics</h1>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>all: {props.good + props.neutral + props.bad}</p>
      <p>average: {(props.good - props.bad)/(props.good + props.bad + props.neutral) }</p>
      <p>positive: {props.good*100/(props.good+props.bad+props.neutral)}%</p>
    </>
    )
  }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={()=> setGood(good+1)}>good</button>
      <button onClick={()=> setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=> setBad(bad+1)}>bad</button>

      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App
