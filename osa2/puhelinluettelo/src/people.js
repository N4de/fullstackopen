import React from 'react';

const People = ({people, deletePerson}) => (
    <div>
        {people.map(person => 
            <p key={person.name}>{person.name} {person.number} <button onClick={() => deletePerson(person)}>delete</button></p>  
        )}
    </div>
);



export default People;