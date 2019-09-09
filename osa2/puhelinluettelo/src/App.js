import React, { useState, useEffect } from 'react';
import './index.css'

import personService from './services/persons';

import People from './people';
import Filter from './filter';
import PersonForm from './person-form';
import Notification from './notification';

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filter, setNewFilter ] = useState('');
  const [notificationMessage, setnotificationMessage] = useState(null);
  const [notificationType, setnotificationType] = useState('');

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

    const duplicatePerson = persons.find((person) => person.name === newName);
    const newContact = {
      name : newName,
      number: newNumber
    }

    if(duplicatePerson) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                         
        personService.update(duplicatePerson.id, newContact)
          .then( returnedContact => {
            const newContacts = persons.map(person => person.id !== returnedContact.id ? person : returnedContact)
            setPersons(newContacts);
            notifyUser(`Number updated for ${newName}`, 'green');
          })
          .catch(() => {
            notifyUser(`${newName} was already removed`, 'red')
          }
          );
      }
    }
    else {
     
      personService
        .create(newContact)
        .then(() => {
          setPersons(persons.concat(newContact))
          notifyUser(`Added ${newName}`, 'green')
        });
    }
  }

  const notifyUser = (message, type) => {

    setnotificationType(type);
    setnotificationMessage(message);

    setTimeout(() => {
      setnotificationMessage(null)
    }, 2000)
  }

  const deletePerson = (person) => {
    if (window.confirm(`delete ${person.name} ?`)) {
      personService
        .remove(person.id)
          .then(() => {
            setPersons(persons.filter(n => n.id !== person.id))
            setnotificationType('success');
            notifyUser(`${person.name} removed`, 'green');
          }
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
      <Notification 
        message={notificationMessage}
        type={notificationType}
      />
      <Filter handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
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