import React, { useCallback, useState } from "react";
import "./App.css";

const Button = ({ handleClick, name }) => {
  console.log(`${name} rendered`);
  return <button onClick={handleClick}>{name}</button>;
};

const Counter = () => {
  console.log("counter rendered");
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  // const memoizedSetCountOne = useCallback(
  //   () => setCountOne(countOne + 1),
  //   [countOne]
  // );

  // const memoizedSetCountTwo = useCallback(
  //   () => setCountTwo(countTwo + 1),
  //   [countTwo]
  // );

  return (
    <>
      {countOne} {countTwo}
      <Button handleClick={() => setCountOne(countOne + 1)} name="button1" />
      <Button handleClick={() => setCountTwo(countTwo + 1)} name="button2" />
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};

export default App;
