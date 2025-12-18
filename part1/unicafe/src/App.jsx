import { useState } from "react";

const Button = ({handler, text}) => {
  return(
    <>
      <button onClick = {handler}>
        {text}
      </button>
    </>
  )
}

const Statistics = (props) => {
  if (props.total !== 0) {
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text={"good"} constant={props.good} />
            <StatisticLine text={"neutral"} constant={props.neutral} />
            <StatisticLine text={"bad"} constant={props.bad} />
            <StatisticLine text={"all"} constant={props.total} />
            <StatisticLine text={"average"} constant={props.average} />
            <StatisticLine text={"positive"} constant={props.percentage + "%"} />
          </tbody>
        </table>
      </>
    );
  } else {
    return(
    <p>No feedback given</p>
    )
  }
};

const StatisticLine = ({ text, constant }) => {
  return (
      <tr>
        <td>{text}</td> 
        <td>{constant}</td>
      </tr>
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
      <Button handler={handleGood} text = {"good"}/>
      <Button handler={handleNeutral} text = {"neutral"}/>
      <Button handler={handleBad} text = {"bad"}/>
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