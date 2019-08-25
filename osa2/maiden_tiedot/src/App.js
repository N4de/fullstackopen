import React, {useState, useEffect} from 'react';
import axios from 'axios';

import SearchInput from './search-input';
import CountryList from './country-list';

const App = () => {

    const [filter, setFilter] = useState('')
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        console.log('effect')
        axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
            setCountries(response.data)
          })
      }, [])

    const countriesToShow = filter 
      ? countries
      : countries.filter(country => {
          console.log(filter);
          console.log(country.name);
          return country.name.includes(filter);
      });

    const filterCountries = (e) => {
        const newFilter = e.target.value;
        setFilter(newFilter);
    }

    return(
        <div>
            <SearchInput 
                setFilter={filterCountries}
            />
            <CountryList 
                countries={countriesToShow}
            />
        </div>
    );
}

export default App;