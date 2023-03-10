import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import HandleRequest from './services/phoneService'
import phoneService from './services/phoneService'

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilterName, setNewFilterName] = useState('')
  const [persons, setPersons] = useState([])
  const [handleMessage, setHandleMessage] = useState({})

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
      const personToUpdate = persons.find(person => newName === person.name)
      if(window.confirm(`${personToUpdate.name} is already added to phonebook, replace the old number with a new one?`)){
      const changedPerson = {...personToUpdate, 'number': newNumber}
      phoneService.updatePhone(changedPerson, personToUpdate.id).then(response => {
        setPersons(persons.map(person => person.id !== response.id ? person : response))
        setHandleMessage({
          content: `Number of ${personToUpdate.name}' is changed`,
          class: 'success'
        }
        )
        setTimeout(() => {
          setHandleMessage({})
        }, 5000)
      }).catch(error => {
        setHandleMessage({
          content: `Information of ${personToUpdate.name}' has already been removed from server`,
          class: 'error'
        }
        )
        setTimeout(() => {
          setHandleMessage({})
        }, 5000)
        setPersons(persons.filter(n => n.id !== personToUpdate.id))
      })
      }
    } else {
      const nameObject = {'name': newName, 'number': newNumber}
      phoneService.createPhone(nameObject).then(response => {
      setPersons(persons.concat(response))
      setHandleMessage({
        content: `Added ${nameObject.name}`,
        class: 'success'
      }
      )
      setTimeout(() => {
        setHandleMessage({})
      }, 5000)
    })
    }
    setNewName('')
    setNewNumber('')
  }

  const handleDelete = (id) => {
    const personToDelete = persons.find(person => person.id === id)
    if(window.confirm(`Delete ${personToDelete.name} ?`)){
    phoneService.deletePhone(id).then(response => {
      setPersons(persons.filter((person) => personToDelete.id !== person.id))
    }).catch(error => {
      setHandleMessage({
        content: `Error while deleting ${personToDelete.name}`,
        class: 'error'
      }
      )
      setTimeout(() => {
        setHandleMessage({})
      }, 5000)
    })
  }
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
      <Notification message={handleMessage}/>
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
      <Persons handleDelete={handleDelete} filter={filter}/>
    </div>
  )
}

export default App
