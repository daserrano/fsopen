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

    if (persons.find(person => person.name === newName)) return alert(`${newName} is already added to phonebook`)

    const addPerson = {
      name: newName,
      number: newNumber,
      key: persons.length + 1
    }
    personsService.create(addPerson).then(newPerson => setPersons(persons.concat(newPerson)))
    clearInputs()
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
      <Persons persons={persons} filterValue={filterValue} />
    </div>
  )
}

export default App
