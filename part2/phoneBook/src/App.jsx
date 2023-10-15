import { useState } from 'react'
import './App.css'

function App() {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', key: 1 , number: "+34 658 23 21 22"}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setFilterValue] = useState('')

  const addPerson = (event) => {
    event.preventDefault();

    if(persons.find(person => person.name === newName)) return alert(`${newName} is already added to phonebook`)
    
    const addPerson = {
      name: newName,
      number: newNumber,
      key: persons.length+1
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
      <div>
        filter shown with <input value={filterValue} onChange={handleInput}/>
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChangeName}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleChangeNumber}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase())
      ).map(person => (
        <p key={person.key}>{person.name} {person.number}</p>
      ))}
    </div>
  )
}

export default App
