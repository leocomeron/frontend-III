import { createContext, useReducer } from "react";

const getTodosFromStorage = () => {
  const localData = localStorage.getItem("todos");
  return localData ? JSON.parse(localData) : [];
};

const saveTodosFromStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_todo":
      const newState = [...state, action.payload];
      saveTodosFromStorage(newState);
      return newState;

    case "remove_todo":
      const filteredTodos = state.filter((item) => item.id !== action.payload);
      saveTodosFromStorage(filteredTodos);
      return filteredTodos;

    default:
      return state;
  }
};

state = {
  isDark: false,
  favs: [],
};

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getTodosFromStorage());

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
