import './WatherInformationsFiveDays.css'

function WatherInformationsFiveDays({ weatherFiveDays }) {


    let dailyForecast = {}

    for (let forecast of weatherFiveDays.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }


    const nextFiveDays = Object.values(dailyForecast).slice(1, 6)

    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleTimeString('pt-br', { weekday: 'long', day: '2-digit' })

        return newDate
    }


    return (
        <div className='weather-container'>
            <h3>Previsão Próximos 5 Dias</h3>

            <div className='weather-list'>
                {nextFiveDays.map(forecast => (
                    <div key={forecast.dt} className='weather-item'>
                        <p className='forecast'>{convertDate(forecast)}</p>
                        <img className='forecast' src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="icons" />
                        <p className='forecast'>{forecast.weather[0].description}</p>
                        <p className='forecast'>
                            {Math.round(forecast.main.temp_min)}ºC min / {' '}
                            {Math.round(forecast.main.temp_max)}ºC máx</p>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default WatherInformationsFiveDays