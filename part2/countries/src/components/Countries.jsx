import Country from "./Country"

const Countries = ({ countries }) => {
  
  if(countries.length > 10) return "Too many matches, specify another filter"

  if(countries.length === 1) return <Country country={countries[0]}/>

  return (
    <ul>
    {countries.map(country => (
      <li key={country.name.common}>{country.name.common}</li>
    ))
    }
    </ul>
  )
}

export default Countries