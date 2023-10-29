import React from 'react'

const Country = ({country}) => {

  return (
    <main>
        <h2>{country.name.common} </h2>
        <p>Capital: {country.capital.map(capital=> capital)}</p>
        <p>Population: {country.population}</p>

        <h3>Languages</h3>
        <ul>
            {Object.keys(country.languages).map((key) => (
                <li key={country.languages[key]}>{country.languages[key]}</li>
            )
        )}
        </ul>

        <img src={country.flags.svg} alt={country.name} width={150}/>

    </main>
  )
}

export default Country