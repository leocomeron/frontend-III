import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { Form } from "./Form";
import "./styles.css";

export default function App() {
  const { state, dispatch } = useContext(TodoContext);

  console.log(state);
  return (
    <div className="App">
      <Form />
      <ul>
        {state?.map((todo) => (
          <div key={todo.id} className="container_task">
            <li>{todo.task}</li>
            <button
              onClick={() => {
                console.log(todo.id);
                dispatch({ type: "remove_todo", payload: todo.id });
              }}
            >
              Eliminar
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
