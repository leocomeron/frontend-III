import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Layout from "./components/Layout";

export const themes = {
  light: {
    font: "black",
    background: "white",
  },
  dark: {
    font: "white",
    background: "black",
  },
};

function App() {
  const [theme, setTheme] = useState(themes.light);

  // Funcion que altera el estado del tema
  const handleChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  return (
    <div className="App">
      <Layout theme={theme}>
        <Navbar onClick={handleChangeTheme} theme={theme} />
        <Body />
      </Layout>
    </div>
  );
}

export default App;
