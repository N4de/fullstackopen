import React from 'react';

import Part from './part';

const Content = (props) => {

    const parts = props.parts.map(part => 
      <Part
        key={part.name}
        part={part.name}
        exercise={part.exercises}
      />
    );
  
    return(
      <div>
        {parts}
      </div>
    );
}

export default Content