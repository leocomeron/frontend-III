import { useState, useEffect } from "react";
import "./App.css";

// https://official-joke-api.appspot.com/jokes/programming/random

export default function App() {
  const [jokes, setJokes] = useState([]);

  const handleClick = () => {};

  return (
    <div className="App">
      <h1>Chistes de programación</h1>
      <button onClick={handleClick}>Recargar chistes</button>
    </div>
  );
}
