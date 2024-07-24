import './WatherInformations.css'

function WatherInformations({ weather }) {


    return (

        <div className='weather-container'>
            <h2>{weather.name}</h2>

            <div className='weather-info'>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
                <p className='temperature'>{Math.round(weather.main.temp)}ºC</p>
            </div>

            <p className='description'>{weather.weather[0].description}</p>

            <div className='details'>
                <p className='details-p'>Sensação térmica: {Math.round(weather.main.feels_like)}ºC</p>
                <p className='details-p'>Umidade: {weather.main.humidity}%</p>
                <p className='details-p'>Pressão: {weather.main.pressure}</p>
            </div>
        </div>

    )
}

export default WatherInformations