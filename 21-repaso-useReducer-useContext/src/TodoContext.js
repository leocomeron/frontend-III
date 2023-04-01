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
      saveTodosFromStorage([...state, action.payload]);
      return [...state, action.payload];

    case "remove_todo":
      const todosFiltered = state.filter(
        (item) => item.id !== action.payload.id
      );
      saveTodosFromStorage(todosFiltered);
      return todosFiltered;

    default:
      return state;
  }
};

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {}, getTodosFromStorage);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
