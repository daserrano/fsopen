import axios from 'axios';
import { useEffect, useState } from 'react'
import Weather from './Weather';

const Country = ({country}) => {
  const {name, capital, population, languages, flags} = country
  
  return (
    <main>
        <h2>{name.common} </h2>
        <p>Capital: {capital.map(capital=> capital)}</p>
        <p>Population: {population}</p>

        <h3>Spoken languages</h3>
        <ul>
            {Object.keys(languages).map((key) => (
                <li key={languages[key]}>{languages[key]}</li>
            )
        )}
        </ul>

        <img src={flags.svg} alt={name} width={150}/>
        <Weather capital={capital}/>

    </main>
  )
}

export default Country