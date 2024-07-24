import { useState, useRef } from 'react'
import './App.css'
import axios from 'axios'
import WatherInformations from './Components/WeatherInfo/WatherInformations'
import WatherInformationsFiveDays from './Components/WatherInfoFiveDays/WatherInformationsFiveDays'

function App() {
  const [weather, setWeather] = useState()
  const [weatherFiveDays, setWeatherFiveDays] = useState()

  const inputRef = useRef()

  async function searchCity() {

    const city = inputRef.current.value
    const key = "b8eaecaacc2c46ed635d6ceb54696efc"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const urlFiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfoFiveDays = await axios.get(urlFiveDays)


    setWeather(apiInfo.data)
    setWeatherFiveDays(apiInfoFiveDays.data)


  }

  return (

    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <p>Criado com React</p>
      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WatherInformations weather={weather} />}
      {weatherFiveDays && <WatherInformationsFiveDays weatherFiveDays={weatherFiveDays} />}

    </div>

  )
}

export default App
