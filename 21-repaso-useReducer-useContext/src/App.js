import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { Form } from "./Form";
import "./styles.css";

export default function App() {
  const { state: todos, dispatch } = useContext(TodoContext);

  function removeTodo(id) {
    dispatch({ type: "remove_todo", payload: { id } });
  }

  return (
    <div className="App">
      <Form />
      <ul>
        {todos.map((todo) => (
          <div key={todo.id} className="container_task">
            <li>{todo.task}</li>
            <button onClick={() => removeTodo(todo.id)}>Eliminar</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
