import React from 'react';

import Header from './header';
import Content from './content';
import Total from './total';

const Course = (props) => (
    <div>
        <Header course={props.course.name} />
        <Content parts={props.course.parts}/>
        <Total parts={props.course.parts} />
    </div>
)

export default Course;