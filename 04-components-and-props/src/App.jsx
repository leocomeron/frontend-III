import { Fragment } from "react";
import "./App.css";
import FunctionButton from "./components/Button";
import ClassButton from "./components/Button";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <>
        <h1>My colors</h1>
        <ClassButton />
        <Item name="Blanco" />
        <Item name="Azul" />
        <Item name="Rojo" />
      </>
    </div>
  );
}

export default App;
