import styles from "./Form.module.css";
import { useState } from "react";
import List from "./List";

function Form() {
  const [selectedValue, setSelectedValue] = useState("");
  const [errorSelect, setErrorSelect] = useState("");
  const [totalStudents, setTotalStudents] = useState({
    one: 0,
    two: 0,
    three: 0,
    isZero: true,
  });

  function handleSubtmit(e) {
    e.preventDefault();

    if (selectedValue == "") {
      alert("No elegiste sala!");
      return;
    }

    setTotalStudents({
      ...totalStudents,
      [selectedValue]: totalStudents[selectedValue] + 1,
      isZero: false,
    });
  }

  function onChangeSelect(event) {
    setSelectedValue(event.target.value);

    if (
      event.target.value === "one" ||
      event.target.value === "two" ||
      event.target.value === "three"
    ) {
      setErrorSelect("");
    } else {
      setErrorSelect("La sala no está disponible");
    }
  }

  return (
    <div className={styles.container}>
      <h2>Contador de alumnos por sala</h2>
      <h5>
        Vamos a ir agregando a qué sala se inscribió cada alumno para poder
        hacer un recuento. Nota: En algunos casos la sala puede no existir
      </h5>

      <form onSubmit={handleSubtmit}>
        <select
          placeholder="Escoge una sala"
          onChange={onChangeSelect}
          value={selectedValue}
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
        {errorSelect ? <div>{errorSelect}</div> : null}
        <input
          type="submit"
          value="Adicionar"
          disabled={Boolean(errorSelect)}
        />
      </form>

      <h3>Total de alumnos por sala:</h3>
      {!totalStudents.isZero ? <List totalStudents={totalStudents} /> : null}
    </div>
  );
}

export default Form;
