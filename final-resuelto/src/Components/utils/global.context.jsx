import { createContext, useEffect, useReducer, useState } from "react";

export const ContextGlobal = createContext(undefined);

// Toma los Favs del LocalStorage
const getFavsFromStorage = () => {
  const localData = localStorage.getItem("favs");
  return localData ? JSON.parse(localData) : [];
};

// Guarda Favs en LocalStorage
const saveFavsInStorage = (favs) => {
  localStorage.setItem("favs", JSON.stringify(favs));
};

// Seteo estado inicial del context
const initialState = { isDark: false, favs: getFavsFromStorage() };

// Unico reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "add_fav":
      const newState = { ...state, favs: [...state.favs, action.payload] };
      saveFavsInStorage(newState.favs);
      alert("Favorite Added");
      return newState;

    case "remove_fav":
      const filteredFavs = state.filter(
        (item) => item.id !== action.payload.id
      );
      saveFavsInStorage(filteredFavs);
      return filteredFavs;
    case "toggle_theme":
      console.log(state);
      const newThemeState = { ...state, isDark: !state.isDark };
      return newThemeState;
    default:
      return state;
  }
};

// Creo un componente ContextProvider para usar como HOC en index.jsx
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Aquí realizo la llamada a la API de todos los dentistas y lo guardo en un estado
  const [dentists, setDentists] = useState([]);

  const getDentists = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setDentists(data);
  };

  useEffect(() => {
    getDentists();
  }, []);

  // Paso como value los dentistas, y las dos variables del useReducer. Nota: Se podría haber incluido los dentistas
  // dentro del reducer también e incluirlo dentro del state.
  return (
    <ContextGlobal.Provider value={{ dentists, dispatch, state }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
