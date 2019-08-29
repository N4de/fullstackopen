import React, {useState, useEffect} from 'react';
import axios from 'axios';

import SearchInput from './search-input';
import CountryList from './country-list';
import Weather from './weather';

const App = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [cityWeather, setCityWeather] = useState('');

    useEffect(() => {
        axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
            setCountries(response.data)
            setSelectedCountries(response.data)
          })
      }, [])

    const filterCountries = (e) => {
        const newFilter = e.target.value.toLowerCase();
        
        const newCountries = countries.filter(country => country.name.toLowerCase().includes(newFilter));

        setSelectedCountries(newCountries);
        if(newCountries.length === 1) {
            axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${newCountries[0].capital}&appid=f5eb408570cf8204112586e9597ccf34`)
            .then(response => {
                setCityWeather(response.data);
            })
        }
    }

    const selectCountry = (country) => {
        setSelectedCountries([country]);
    }

    return(
        <div>
            <SearchInput 
                setFilter={filterCountries}
            />
            <CountryList 
                countries={selectedCountries}
                selectCountry={selectCountry}
            />
            {selectedCountries.length === 1 && 
                <Weather 
                    cityWeather={cityWeather}
                />
            }
        </div>
    );
}

export default App;