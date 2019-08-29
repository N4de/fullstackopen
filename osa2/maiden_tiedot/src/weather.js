import React from 'react';


const Weather = ({cityWeather}) => {
    console.log(cityWeather);
    
    const getDirection = (degrees) => {
        const directions = ['N','NNW', 'NW', 'WNW', 'W', 'WSW', 'SW', 'SSW', 'S', 'SSE', 'SE', 'ESE', 'E', 'ENE', 'NE', 'NNE'];
        return directions[Math.round(((degrees %= 360) < 0 ? degrees + 360 : degrees) / 22.5) % 16];
    }

    return(
        <div>
            {cityWeather &&
                <div>
                    <h3>Weather in {cityWeather.name}</h3>
                    <p><b>temperature:</b> {Math.floor(cityWeather.main.temp - 273.15)} Celsius </p>
                    <img src={`http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`} alt="weather-icon"></img>
                    <p><b>wind:</b> {cityWeather.wind.speed} kph direction {getDirection(cityWeather.wind.deg)} </p>
                </div>
            }
        </div>
    );
};


export default Weather;