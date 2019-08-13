import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({title}) => (
    <h1>{title}</h1>
);

const Button = ({text, onClick}) => {
    return(
        <button onClick={onClick}>{text}</button>
    );
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title title={'Give feedback'}/>
        <Button text="good" onClick={ () => setGood(good + 1)}></Button>
        <Button text="neutral" onClick={() => setNeutral(neutral + 1)}></Button>
        <Button text="bad" onClick={() => setBad(bad + 1)}></Button>
      <Title title={'statistics'}/>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + neutral + bad}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)