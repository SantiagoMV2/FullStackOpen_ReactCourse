import { useState } from "react";

const Statistics = (props) => {
  if (props.total !== 0) {
    return (
      <>
        <h1>statistics</h1>
        <Each text={"good"} constant={props.good} />
        <Each text={"neutral"} constant={props.neutral} />
        <Each text={"bad"} constant={props.bad} />
        <Each text={"all"} constant={props.total} />
        <Each text={"average"} constant={props.average} />
        <Each text={"positive"} constant={props.percentage} />
      </>
    );
  } else {
    return(
    <p>No feedback given</p>
    )
  }
};

const Each = ({ text, constant }) => {
  return (
    <>
      <p>
        {text} {constant}
      </p>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    const newGood = good + 1;
    setGood(newGood);
  };

  const handleNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
  };

  const handleBad = () => {
    const newBad = bad + 1;
    setBad(newBad);
  };

  const total = good + neutral + bad;
  const average =
    total === 0
      ? "Total es igual a 0, oprime un boton para continuar"
      : (good - bad) / total;
  const percentage =
    total === 0
      ? "Total es igual a 0, oprime un boton para continuar"
      : (good / total) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        percentage={percentage}
      />
    </div>
  );
};

export default App;
