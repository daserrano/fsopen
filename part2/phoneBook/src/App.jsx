import { useEffect, useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import personsService from '../src/services/persons'

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    personsService.getAll().then(response => setPersons(response))
  }, [])

  const addPerson = (event) => {
    event.preventDefault();

    let confirm = false;
    const personExists = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if (personExists){
      confirm = window.confirm(`${personExists.name} is already added to phonebook, replace the old number with a new one?`)
    } 
      

    const addPerson = {
      name: newName,
      number: newNumber,
      id: personExists ? personExists.id : null
    }
    confirm ?
    personsService.update(addPerson).then(updatePerson => {
      setPersons(persons.filter(person => person.id !== updatePerson.id).concat(updatePerson))
    })
    :
    personsService.create(addPerson).then(newPerson => setPersons(persons.concat(newPerson)))
    clearInputs()
  }

  const deletePerson = (id) => {
    const person = persons.find(person => person.id === id)
    const confirm = window.confirm(`Delete ${person.name} ?`)
    if(confirm) {
      personsService.deletePerson(id).then(() => setPersons(persons.filter(person => person.id !== id)))

    }
  }

  const clearInputs = () => {
    setNewName("")
    setNewNumber("")
  }

  const handleChangeName = (e) => setNewName(e.target.value)
  const handleChangeNumber = (e) => setNewNumber(e.target.value)
  const handleInput = (e) => setFilterValue(e.target.value)

  return (
    <div style={{border: "1px solid #e7e7e7", borderRadius: "20px", padding: "20px", backgroundColor: "#f9f9e9"}}>
      <h2>Phonebook</h2>
      <Filter filterValue={filterValue} handleInput={handleInput} />

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        newNumber={newNumber}
      />

      <h2>Numbers</h2>
      <Persons 
        deletePerson={deletePerson} 
        filterValue={filterValue} 
        persons={persons} 
      />
    </div>
  )
}

export default App
