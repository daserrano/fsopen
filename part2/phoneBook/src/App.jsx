import { useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', key: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', key: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', key: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', key: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

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
