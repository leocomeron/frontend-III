import React, { useEffect, useReducer } from "react";
import "./styles.css";

function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return {
        counter: state.counter + 1,
        clicks: state.clicks + 1,
        lastOperation: action.payload,
      };
    case "minus":
      return {
        counter: state.counter - 1,
        clicks: state.clicks + 1,
        lastOperation: action.payload,
      };
    case "divide":
      return {
        counter: state.counter / 2,
        clicks: state.clicks + 1,
        lastOperation: action.payload,
      };

    default:
      return state;
  }
}

const initialValue = {
  counter: 0,
  clicks: 0,
  lastOperation: undefined,
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  function handlePlus() {
    dispatch({ type: "plus", payload: "suma" });
  }
  function handleMinus() {
    dispatch({ type: "minus", payload: "resta" });
  }
  function handleDivide() {
    dispatch({ type: "divide", payload: "división" });
  }
  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(state));
  }, [state]);

  return (
    <div>
      <h1>{state.counter}</h1>
      <h4>Cliques: {state.clicks}</h4>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleDivide}>/</button>
    </div>
  );
}
