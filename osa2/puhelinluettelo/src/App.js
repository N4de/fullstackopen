import React, { useState, useEffect } from 'react';

import personService from './services/persons';

import People from './people';
import Filter from './filter';
import PersonForm from './person-form';

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filter, setNewFilter ] = useState('');

  useEffect(() => {
    personService
      .getAll()
        .then( initialPersons => {
          setPersons(initialPersons)
        })
  }, [])

  const peopleToShow = filter 
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons;

  const handleSubmit = (event) => {
    event.preventDefault();

    const personExists = persons.find((person) => person.name === newName);

    if(personExists) {
      alert(`${newName} is already added to phonebook`);
    }
    else {
      const newContact = {
        name : newName,
        number: newNumber
      }
     
      personService
        .create(newContact)
        .then(
          setPersons(persons.concat(newContact))
        );
    }
  }

  const deletePerson = (person) => {
    if (window.confirm(`delete ${person.name} ?`)) {
      personService
        .remove(person.id)
          .then(
            setPersons(persons.filter(n => n.id !== person.id))
          );
    }
  }

  const handleNameChange = (e) => {
    const name = e.target.value;

    setNewName(name);
  }

  const handleNumberChange = (e) => {
    const number = e.target.value;

    setNewNumber(number);
  }

  const handleFilterChange = (e) => {
    const filter = e.target.value;

    setNewFilter(filter);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h2>add a new</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <PersonForm 
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <People 
        people={peopleToShow} 
        deletePerson={deletePerson}
      />
    </div>
  )

}

export default App