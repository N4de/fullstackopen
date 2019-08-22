import React, { useState } from 'react'

import People from './people';
import Filter from './filter';
import PersonForm from './person-form';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filter, setNewFilter ] = useState('');

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
      setPersons(persons.concat({
        name : newName,
        number: newNumber
      }));
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
      <People people={peopleToShow} />
    </div>
  )

}

export default App