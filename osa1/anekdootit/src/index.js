import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0,0,0,0,0,0]);
  const [highest, setHighest] = useState(0);
  
  const randomAnecdote = () => {
    const selectedIndex = Math.floor(Math.random() * Math.floor(anecdotes.length));
    
    setSelected(selectedIndex);

  }

  const voteForAnecdote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;

    if(newVotes[selected] > newVotes[highest]) {
      setHighest(selected);
    }

    setVotes(newVotes);
    
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>votes: {votes[selected]}</p>
      <button onClick={() => randomAnecdote()}>New anecdote</button>
      <button onClick={() => voteForAnecdote()}>Vote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{props.anecdotes[highest]}</p>
      <p>has {votes[highest]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)