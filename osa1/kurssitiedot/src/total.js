import React from 'react';

const Total = (props) => {
    const total = props.parts.reduce((part, total) => {
          
      return({exercises: part.exercises + total.exercises});
        
    });
    

    return(
      <p><b> Total of  {total.exercises} exercises</b></p>
    );
}

export default Total;