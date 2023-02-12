import React from 'react'

function Filter({newFilterName, handleFilter}) {
  return (
    <div>
      <div>filter shown with </div>
      <input value={newFilterName} onChange={handleFilter}/>
    </div>
  )
}

export default Filter
