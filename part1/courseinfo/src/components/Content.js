import React from 'react'
import Part from './Part'

function Content(props) {
  console.log(props.parts)
  return (
    <>
      {props.parts.map((item, index) => {
        return <Part key={index} part={item.name} exercises={item.exercises}/>
      })}
    </>
  )
}

export default Content
