import React, {useState, useEffect} from 'react';

import axios from 'axios';

const Weather = ({country}) => {
    console.log(country);
    const [city, setCity] = useState('');

    useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=f5eb408570cf8204112586e9597ccf34`)
        .then(response => {
            setCity(response.data);
        })
    });
    
    return(
        <div>
            {city &&
                <p>city found yee</p>
            }
        </div>
    );
};


export default Weather;