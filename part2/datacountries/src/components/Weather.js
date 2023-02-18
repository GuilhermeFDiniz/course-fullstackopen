import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Weather({list}) {
  const [weather, setWeather] = useState(null)
  const api = process.env.REACT_APP_API_KEY

  const fetchWeather = (city) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`)
    return request.then(response => {
      return response.data
    })
  }

  useEffect(() => {
    if(list.length === 1){
      fetchWeather(list[0].name.common).then(data => setWeather(data))
    }
  }, [list])


  if(weather != null){
    return (
      <div>
        <h2>Weather in {list[0].name.common}</h2>
        <p>temperature {parseFloat(weather.main.temp - 273.15).toFixed(1)} Celsius</p>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].icon}/>
        <p>wind {weather.wind.speed} m/s</p>
      </div>
    )
  } else {
    return null
  }
}

export default Weather
