import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import HandleRequest from './services/phoneService'
import axios from 'axios'
import phoneService from './services/phoneService'

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilterName, setNewFilterName] = useState('')
  const [persons, setPersons] = useState([])

  useEffect(() => {
    HandleRequest
    .getAllPhones()
    .then(response => {
      setPersons(response)
    })
  }, [])

  const handleForm = (event) => {
    event.preventDefault()
    if(persons.some((element) => element.name === newName)){
      alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = {'name': newName, 'number': newNumber}
      phoneService.createPhone(nameObject).then(response =>
      setPersons(persons.concat(response)))
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
