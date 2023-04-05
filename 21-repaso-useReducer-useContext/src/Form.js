import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import "./styles.css";

export function Form() {
  const { dispatch, isDark } = useContext(TodoContext);
  const [inputTodo, setInputTodo] = useState("");

  function addTask() {
    dispatch({
      type: "add_todo",
      payload: {
        task: inputTodo,
        id: Date.now(),
      },
    });
  }

  return (
    <form>
      <input
        placeholder="Nuevo task"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button type="button" onClick={addTask}>
        Add task
      </button>
    </form>
  );
}
