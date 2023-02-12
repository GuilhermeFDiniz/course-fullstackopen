import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilterName, setNewFilterName] = useState('')

  const handleForm = (event) => {
    event.preventDefault()
    if(persons.some((element) => element.name === newName)){
      alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = {'name': newName, 'number': newNumber}
      setPersons(persons.concat(nameObject))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleInputName = (event) => {
    setNewName(event.target.value)
  }

  const handleInputNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setNewFilterName(event.target.value.toLowerCase())
  }

  const filter = () => {
    return persons.filter(element => element.name.toLowerCase().includes(newFilterName))
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilterName={newFilterName} handleFilter={handleFilter}/>
      <h3>Add a new</h3>
      <PersonForm
      handleForm={handleForm}
      handleInputName={handleInputName}
      handleInputNumber={handleInputNumber}
      newName={newName}
      newNumber={newNumber}
      />
      <h3>Numbers</h3>
      <Persons filter={filter}/>
    </div>
  )
}

export default App
