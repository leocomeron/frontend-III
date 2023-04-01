import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import "./styles.css";

export function Form() {
  const [inputTodo, setInputTodo] = useState("");
  const { dispatch } = useContext(TodoContext);

  function addTask() {
    dispatch({
      type: "add_todo",
      payload: {
        id: Date.now(),
        task: inputTodo
      }
    });
    setInputTodo("");
  }

  return (
    <form>
      <input
        placeholder="Nova task"
        value={inputTodo}
        onChange={(event) => setInputTodo(event.target.value)}
      />
      <button type="button" onClick={addTask}>
        Add task
      </button>
    </form>
  );
}
