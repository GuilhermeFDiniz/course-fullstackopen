import React from 'react'

function Total(props) {
  return (
    <>
       <h3>total of {props.parts.reduce((acc, currValue) => acc + currValue.exercises, 0)} exercises</h3>
    </>
  )
}

export default Total
