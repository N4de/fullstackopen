import React, {useState, useEffect} from 'react';
import axios from 'axios';

import SearchInput from './search-input';
import CountryList from './country-list';

const App = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);

    useEffect(() => {
        axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
            setCountries(response.data)
            setSelectedCountries(response.data)
          })
      }, [])

    const filterCountries = (e) => {
        const newFilter = e.target.value;
        
        const newCountries = countries.filter(country => country.name.includes(newFilter));

        setSelectedCountries(newCountries);
    }

    return(
        <div>
            <SearchInput 
                setFilter={filterCountries}
            />
            <CountryList 
                countries={selectedCountries}
            />
        </div>
    );
}

export default App;