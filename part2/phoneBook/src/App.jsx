import { useEffect, useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(response => setPersons(response.data))
  }, [])
  const addPerson = (event) => {
    event.preventDefault();

    if (persons.find(person => person.name === newName)) return alert(`${newName} is already added to phonebook`)

    const addPerson = {
      name: newName,
      number: newNumber,
      key: persons.length + 1
    }
    setPersons(persons.concat(addPerson))
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
    <div>
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
