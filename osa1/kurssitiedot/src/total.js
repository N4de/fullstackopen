import React from 'react';

const Total = (props) => {
    console.log(props);
    const total = props.parts.reduce((part, total) => {
        console.log(part);
        console.log(total);
        return(part.exercises + total);
        
    });
    

    return(
      <p><b> Total of  {total} exercises</b></p>
    );
}

export default Total;