import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const votes = Array(anecdotes.length).fill(0);

  const copy = [...votes];

  const [selected, setSelected] = useState(
    Math.floor(Math.random() * anecdotes.length)
  );
  const [totalVotes, setTotalVotes] = useState(copy);
  const [highest, setHighest] = useState(Math.max(...totalVotes));

  const handleText = () => {
    const newNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(newNumber);
    return anecdotes[newNumber];
  };

  const handleVote = () => {
    totalVotes[selected] += 1;
    setTotalVotes(totalVotes);
    const newHighest = Math.max(...totalVotes);
    setHighest(newHighest);
  };

  const indexOfHighest = totalVotes.indexOf(highest)

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p>has {totalVotes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleText}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      {anecdotes[indexOfHighest]}
      <p>has {highest} votes</p>
    </div>
  );
};

export default App;
