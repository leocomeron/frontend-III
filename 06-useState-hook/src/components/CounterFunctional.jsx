import { useState } from "react";

// ----- State using useState Hook ------
const CounterFunctional = () => {
  const [count, setCount] = useState(0);
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  const addOne = () => {
    setCount(count + 1);
    setNumberOfClicks(numberOfClicks + 1);
  };

  const minusOne = () => {
    if (count > 0) {
      setCount(count - 1);
      setNumberOfClicks(numberOfClicks + 1);
    }
  };

  return (
    <div className="App">
      <h1>useState hook</h1>
      <div className="card">
        <p>count is: {count}</p>
        <p>number of clicks: {numberOfClicks}</p>
        <button onClick={addOne}>+</button>
        <button onClick={minusOne}>-</button>
      </div>
    </div>
  );
};

export default CounterFunctional;
