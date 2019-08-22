import React from 'react';

const PersonForm = ({handleSubmit, handleNameChange, handleNumberChange}) => (
    <form onSubmit={handleSubmit}>
        <div>name: <input onChange={handleNameChange} /></div>
        <div>number: <input onChange={handleNumberChange} /></div>
        <div><button type="submit">add</button></div>
      </form>
);

export default PersonForm;