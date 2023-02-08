import React from 'react'

function Total(props) {
  console.log(props)
  return (
    <>
       <p>Number of exercises {props.parts.reduce((acc, currValue) => acc + currValue.exercises, 0)}</p>
    </>
  )
}

export default Total
