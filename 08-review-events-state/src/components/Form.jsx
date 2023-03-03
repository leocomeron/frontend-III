import { useState } from "react";
import styles from "./Form.module.css";

function Form() {
  const [selectValue, setSelectValue] = useState("");
  const [errorSelect, setErrorSelect] = useState("");
  const [totalStudents, setTotalStudents] = useState({
    one: 0,
    two: 0,
    three: 0,
  });

  function handleSubtmit(event) {
    event.preventDefault();

    // Si no se elige valor alertar que elija sala
    if (selectValue === "") {
      alert("Por favor elige una sala!");
      return;
    }

    setTotalStudents({
      ...totalStudents,
      [selectValue]: totalStudents[selectValue] + 1,
    });

    setSelectValue("");
  }

  function onChangeSelect(event) {
    setSelectValue(event.target.value);

    if (
      event.target.value === "one" ||
      event.target.value === "two" ||
      event.target.value === "three"
    ) {
      setErrorSelect("");
    } else {
      setErrorSelect("La sala no es válida");
    }
  }

  return (
    <div className={styles.container}>
      <h2>Contador de alumnos por sala</h2>

      <form onSubmit={handleSubtmit}>
        <select
          placeholder="Escoge una sala"
          onChange={onChangeSelect}
          value={selectValue}
        >
          <option value="" disabled default>
            Escoge una sala
          </option>

          <option value="one">Sala 1</option>
          <option value="two">Sala 2</option>
          <option value="three">Sala 3</option>
          <option value="four">Sala 4</option>
          <option value="five">Sala 5</option>
        </select>
        <div className={styles.error}>{errorSelect}</div>
        <input type="submit" value="Adicionar" disabled={!!errorSelect} />
      </form>

      <h3>Total de alumnos por sala:</h3>
      <ul>
        <li>Sala 1: {totalStudents.one}</li>
        <li>Sala 2: {totalStudents.two}</li>
        <li>Sala 3: {totalStudents.three}</li>
      </ul>
    </div>
  );
}

export default Form;
