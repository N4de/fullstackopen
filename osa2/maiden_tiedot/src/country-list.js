import React from 'react';

const CountryList = ({countries}) => {

    console.log(countries);
    
    const limitedCountries = () => {
        
        if(countries.length > 10) {
            return <p>Too many matches, specify another filter</p>
        }
        else {
            const countryElements = countries.map(country => <p>{country.name}</p>);
            return countryElements
        }
    }

    return(
        <div>
            {limitedCountries()}
        </div>
    );
}

export default CountryList;