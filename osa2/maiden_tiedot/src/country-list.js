import React from 'react';

const CountryList = ({countries, selectCountry}) => {

    
    const limitedCountries = () => {
        
        if(countries.length > 10) {
            return <p>Too many matches, specify another filter</p>
        }
        else if(countries.length === 1) {
            console.log('only 1 country', countries[0]);
            const selectedCountry = countries[0];
            return(
                <div>
                    <h2>{selectedCountry.name}</h2>
                    <p>capital {selectedCountry.capital}</p>
                    <p>population {selectedCountry.population}</p>
                    <h3>languages</h3>
                    <ul>
                        {
                            selectedCountry.languages.map(language => 
                                <li>{language.name}</li>    
                            )
                        }
                    </ul>
                    <img src={selectedCountry.flag} alt="country-flag" width="200" />
                </div>
            );
        }
        else {
            const countryElements = countries.map(country => (
                
                <p key={country.name}>{country.name} <button onClick={() => selectCountry(country)}>show</button></p>
                
            ));
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