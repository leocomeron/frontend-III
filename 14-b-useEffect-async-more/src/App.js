import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [courses, setCourses] = useState([]);
  const [id, setId] = useState("");
  const [course, setCourse] = useState("");
  const [teacher, setTeacher] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getCourses();
  }, []);

  async function resetFieldStates() {
    setId();
    setCourse("");
    setDuration("");
    setTeacher("");
  }
  // "api/courses"
  async function getCourses() {
    try {
      const res = await fetch();
      const data = await res.json();
      setCourse(data);
    } catch (err) {
      setError(err);
    }

    await fetch("api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data.courses))
      .catch((err) => setError(err));
  }

  function fillStates(course) {
    setId(course.id);
    setCourse(course.name);
    setDuration(course.duration);
    setTeacher(course.teacher);
  }

  async function addCourse(event) {
    event.preventDefault();
    try {
      await axios.post("api/courses", {
        name: course,
        duration,
        teacher,
      });
      resetFieldStates();
      alert("Curso adicionado correctamente.");
      getCourses();
    } catch (error) {
      alert("Error al adicionar curso." + error.message);
    }
  }

  async function editCourse(event) {
    event.preventDefault();
    try {
      await axios.put(`api/courses/${id}`, {
        name: course,
        duration,
        teacher,
      });
      resetFieldStates();
      alert("Curso Editado correctamente.");
      getCourses();
    } catch (error) {
      alert("Error al Editar curso." + error.message);
    }
  }

  async function removeCourse(id) {
    try {
      await axios.delete(`api/courses/${id}`);
      alert("Curso Eliminado correctamente.");
      getCourses();
    } catch (error) {
      alert("Error al Eliminar curso." + error.message);
    }
  }

  return (
    <div className="App">
      <h1>Cursos</h1>
      <form
        onSubmit={id ? editCourse : addCourse}
        style={{
          marginBottom: 20,
          display: "flex",
          gap: 10,
        }}
      >
        <input
          placeholder="Curso"
          value={course}
          onChange={(event) => setCourse(event.target.value)}
        />
        <input
          placeholder="Carga horaria"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
        />
        <input
          placeholder="Professor"
          value={teacher}
          onChange={(event) => setTeacher(event.target.value)}
        />
        <input type="submit" />
      </form>
      <table border="1" style={{ width: 600 }}>
        <thead>
          <tr>
            <td style={{ background: "#cacaca" }} width="35%">
              Nombre
            </td>
            <td style={{ background: "#cacaca" }} width="10%">
              Carga horaria
            </td>
            <td style={{ background: "#cacaca" }} width="30%">
              Nombre
            </td>
            <td style={{ background: "#cacaca" }} width="25%">
              Acciones
            </td>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.duration}</td>
              <td>{course.teacher}</td>
              <td>
                <button onClick={() => removeCourse(course.id)}>
                  Eliminar
                </button>
                <button onClick={() => fillStates(course)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
