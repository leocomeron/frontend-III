import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Layout from "./components/Layout";
import ThemeContext from "./context";

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
  const localValue = JSON.parse(localStorage.getItem("theme"));

  const [theme, setTheme] = useState(localValue ?? themes.light);

  // Funcion que altera el estado del tema
  const handleChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
        <Layout>
          <Navbar />
          <Body />
        </Layout>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
