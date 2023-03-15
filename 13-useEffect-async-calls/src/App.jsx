import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Loader from "./components/Loader";

// https://official-joke-api.appspot.com/jokes/programming/random

export default function App() {
  const [bromas, setBromas] = useState([]);
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBromas = async () => {
    setIsLoading(true);
    const res = await fetch(
      "https://official-joke-api.appspot.com/jokes/programming/random"
    );
    const data = await res.json();

    setBromas(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBromas();
  }, [reload]);

  const handleClick = () => {
    setReload(!reload);
  };

  return (
    <div className="App">
      <h1>Chistes de programación</h1>
      {isLoading ? (
        <Loader />
      ) : (
        bromas.map((broma) => {
          return (
            <Card
              key={broma.id}
              setup={broma.setup}
              punchline={broma.punchline}
            />
          );
        })
      )}
      <button onClick={handleClick}>Recargar chistes</button>
    </div>
  );
}
