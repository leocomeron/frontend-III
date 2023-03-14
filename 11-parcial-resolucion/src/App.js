import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [isError, setError] = useState("");

  const isValidNameLength = name.length > 2;
  const nameStartsWithBlankSpace = name.startsWith(" ");
  const isValidName = isValidNameLength && !nameStartsWithBlankSpace;

  const isValidCourse = course.length > 5;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidCourse && isValidName) {
      setShowCard(true);
      setError("");
    } else {
      setError("Por favor chequea que la información sea correcta");
    }
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onCourseChange = (e) => {
    setCourse(e.target.value);
  };

  return (
    <div className="App">
      <h1>1er Parcial Frontend III</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Nombre..."
            type="text"
            value={name}
            onChange={onNameChange}
          />
        </div>
        <div>
          <input
            placeholder="Curso..."
            type="text"
            value={course}
            onChange={onCourseChange}
          />
        </div>
        <button type="submit">Registrar</button>
        <div>{isError}</div>
      </form>
      {showCard ? <Card nombre={name} curso={course} /> : null}
    </div>
  );
}

export default App;
