import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Weather = ({ capital="" }) => {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const [weather, setWeather] = useState({});

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${capital}`)
            .then(response => setWeather(response.data.current))
    }, [])

    return (
        <div>
            <h3>Weather in {capital}</h3>
            <p>
                <b>Temperature:</b> {weather.temperature} Celsius
            </p>
            <img alt="weather icon" src={weather.weather_icons}/>
            <p>
                <b>Wind:</b> {weather.wind_speed} mph direction {weather.wind_dir}
            </p>
        </div>
    )
}

export default Weather