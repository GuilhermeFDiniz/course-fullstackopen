import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.handleEvent}>{props.text}</button>
}

  const StatisticLine = (props) => {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    )
  }

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
      <table>
        <tbody>
          <StatisticLine value={props.good} text="good"/>
          <StatisticLine value={props.neutral} text="neutral"/>
          <StatisticLine value={props.bad} text="bad"/>
          <StatisticLine value={props.good + props.neutral + props.bad} text="all"/>
          <StatisticLine value={(props.good - props.bad)/(props.good + props.bad + props.neutral) } text="average"/>
          <StatisticLine value= {`${props.good*100/(props.good+props.bad+props.neutral)}%`} text="positive"/>
        </tbody>
      </table>
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
      <Button text="good" handleEvent={()=> setGood(good+1)}/>
      <Button text="neutral" handleEvent={()=> setNeutral(neutral+1)}/>
      <Button text="bad" handleEvent={()=> setBad(bad+1)}/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App
