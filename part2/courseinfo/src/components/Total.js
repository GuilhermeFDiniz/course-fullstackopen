import React from 'react'

function Total(props) {
  const total = props.parts.reduce((acc, currValue) => acc + currValue.exercises, 0)
  return (
    <>
       <h3>total of {total} exercises</h3>
    </>
  )
}

export default Total
