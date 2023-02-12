import React from 'react'

function Persons({filter}) {
  return (
    <ul>
    {filter().map(person =>
      <li key={person.id}>{person.name} {person.number}</li>
    )}
  </ul>
  )
}

export default Persons
