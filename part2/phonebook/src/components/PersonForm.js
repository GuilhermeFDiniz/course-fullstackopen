import React from 'react'

function PersonForm({handleForm, handleInputName, handleInputNumber, newName, newNumber }) {
  return (
    <form onSubmit={handleForm}>
      <h2>add a new</h2>
        <div>
          name: <input value={newName} onChange={handleInputName}/>
          <br></br>
          number: <input value={newNumber} onChange={handleInputNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm
