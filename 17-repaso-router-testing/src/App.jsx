import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [name, setName] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signUpUser = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <form onSubmit={signUpUser}>
          <div>
            <input
              type="text"
              placeholder="Escriba su nombre"
              value={name}
              onChange={onNameChange}
            />
          </div>
          <button>Registrar</button>
        </form>
      ) : null}
      <Navbar isLoggedIn={isLoggedIn} name={name} />
      <Outlet />
    </div>
  );
}

export default App;
