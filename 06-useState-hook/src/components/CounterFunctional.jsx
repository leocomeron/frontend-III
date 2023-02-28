import { useState } from "react";

// ----- State using useState Hook ------
const CounterFunctional = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>useState hook</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div>
    </div>
  );
};

export default CounterFunctional;
