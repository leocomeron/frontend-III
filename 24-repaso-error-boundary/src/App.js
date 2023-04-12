import "./styles.css";
import React from "react";

import ErrorBoundary from "./Errors/ErrorBoundary";
import Pokemon from "./Pokemon";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <ErrorBoundary>
        <Pokemon pokemon="charizard" />
        {/* <Pokemon pokemon="__ERROR__" /> */}
      </ErrorBoundary>
    </div>
  );
}

export default App;
