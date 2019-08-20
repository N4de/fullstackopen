import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    const personExists = persons.find((person) => person.name === newName);

    if(personExists) {
      alert(`${newName} is already added to phonebook`);
    }
    else {
      setPersons(persons.concat({name : newName}));
    }
  }

  const handleNameChange = (e) => {
    const name = e.target.value;

    setNewName(name);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <p key={person.name}>{person.name}</p>  
      )}
    </div>
  )

}

export default App