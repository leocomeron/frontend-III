import { createContext } from "react";

// Objecto que contiene el estado inicial
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

// Creando un contexto nuevo con algún valor inicial

const ThemeContext = createContext(themes.light);

export default ThemeContext;
