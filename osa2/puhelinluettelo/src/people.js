import React from 'react';

const People = ({people}) => (
    <div>
        {people.map(person => 
            <p key={person.name}>{person.name} {person.number}</p>  
        )}
    </div>
);



export default People;