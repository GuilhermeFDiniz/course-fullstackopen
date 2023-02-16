import React from 'react'
import phoneService from '../services/phoneService'

function Persons({filter, handleDelete}) {

  return (
    <ul>
    {filter().map(person =>
      <li key={person.id}>{person.name} {person.number} <button onClick={() => handleDelete(person.id)}>delete</button></li>
    )}
  </ul>
  )
}

export default Persons
