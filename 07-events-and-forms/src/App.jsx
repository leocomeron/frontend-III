import { useState } from "react";
import "./App.css";
import Event from "./components/Event";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1>Eventos en React ⚛️</h1>
      <Event />
      <Event number="1" />
      <Event number="2" />
      <Form />
    </div>
  );
}

export default App;
