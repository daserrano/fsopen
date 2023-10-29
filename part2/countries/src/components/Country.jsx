import React from 'react'

const Country = ({country}) => {
  const {name, capital, population, languages, flags} = country
  
  return (
    <main>
        <h2>{name.common} </h2>
        <p>Capital: {capital.map(capital=> capital)}</p>
        <p>Population: {population}</p>

        <h3>Languages</h3>
        <ul>
            {Object.keys(languages).map((key) => (
                <li key={languages[key]}>{languages[key]}</li>
            )
        )}
        </ul>

        <img src={flags.svg} alt={name} width={150}/>

    </main>
  )
}

export default Country