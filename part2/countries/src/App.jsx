import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import Filter from '../../phoneBook/src/components/Filter';
import Countries from './components/Countries';

function App() {

  const [countries, setCountries] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [countriesFiltered, setCountriesFiltered] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then(response => setCountries(response.data))
  }, [])

  const handleInput = (e) => {
    const value = e.target.value
    setFilterValue(value)
    
    if (!value) return setCountriesFiltered([])

    const filter = countries.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase()))
    setCountriesFiltered(filter)
  }

  const updateCountries = (country) => setCountriesFiltered(new Array(country))

  return (
    <main>
      <h1>🗺️ Countries</h1>
      <Filter filterValue={filterValue} handleInput={handleInput}/>
      <Countries countries={countriesFiltered} updateCountries={updateCountries} />
    </main>
  )
}

export default App
