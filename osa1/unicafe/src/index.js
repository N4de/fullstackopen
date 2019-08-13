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

const Statistic = (props) => (
    <tr>
        <td>{props.name}</td> 
        <td>{props.value}</td>
    </tr>
);
    


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad;
    const average = (good - bad) / all;
    const positive = (good / all) * 100 + '%';


  return (
    <div>
      <Title title={'Give feedback'}/>
        <Button text="good" onClick={ () => setGood(good + 1)}></Button>
        <Button text="neutral" onClick={() => setNeutral(neutral + 1)}></Button>
        <Button text="bad" onClick={() => setBad(bad + 1)}></Button>
      <Title title={'statistics'}/>
      {all === 0 ? 
        <p>No feedback given</p>
        :
        <table>
            <tbody>
                <Statistic
                name={'good'}
                value={good}
                />
                <Statistic
                name={'neutral'}
                value={neutral}
                />
                <Statistic 
                name={'bad'}
                value={bad}
                />
                <Statistic 
                name={'all'}
                value={all}
                />
                <Statistic 
                name={'average'}
                value={average}
                />
                <Statistic 
                name={'positive'}
                value={positive}
                />
            </tbody>
        </table>
        }
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)