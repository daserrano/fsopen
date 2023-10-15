import { useState } from 'react'
import './App.css'

function App() {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', key: 1 }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault();
    
    const addName = {
      name: newName,
      key: persons.length+1
    }
    setPersons(persons.concat(addName))
    setNewName("")
  }

  const handleChangeName = (e) => setNewName(e.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleChangeName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (
        <p key={person.key}>{person.name}</p>
      ))}
    </div>
  )
}

export default App
