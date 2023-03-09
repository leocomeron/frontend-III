import { useState } from "react";
import styles from "./Form.module.css";

function Form() {
  // Seteo todos mis estados y les doy un valor inicial
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [doctor, setDoctor] = useState("");
  const [isErrorName, setIsErrorName] = useState(false);
  const [showCard, setShowCard] = useState(false);

  // creo una variable boolean para mi validación
  const isValidName = name.length > 4;
  const isValidDoctor = !!doctor;

  // Función cuando se dispara onSubmit event
  function signUpUser(e) {
    e.preventDefault();

    if (isValidName && isValidDoctor) {
      setIsErrorName(false);
      console.log("Usuario guardado");
      // alert(`nombre: ${name} - Password: ${password}`);
      setShowCard(true);
    } else {
      setIsErrorName(true);
      console.log("Tu nombre tiene menos de 10 caracteres");
    }
  }

  // Función cuando se dispara onChange event en el name input
  const onNameChange = (e) => {
    setName(e.target.value);
  };

  // Función cuando se dispara onChange event en el password input
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeDoctor = (e) => {
    setDoctor(e.target.value);
  };

  return (
    <>
      <h1>Mi Turno</h1>
      <form onSubmit={signUpUser}>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="Escriba su nombre"
            value={name}
            onChange={onNameChange}
          />
        </div>
        {isErrorName && <p>Hay un error!</p>}
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="Escriba su apellido"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <select
          placeholder="Escoge una médico"
          onChange={onChangeDoctor}
          value={doctor}
        >
          <option value="" disabled default>
            Escoge un médico
          </option>

          <option value="Malavida">Dr. Malavida</option>
          <option value="Buenavida">Dr. Buenavida</option>
        </select>
        <div>
          <button type="submit">Gudar</button>
        </div>
      </form>
      {showCard && (
        <div className={styles.card}>
          <div>
            Gracias por elegirnos {name} {password}
          </div>
          <div>Su turno con el doctor {doctor} fue registrado!</div>
        </div>
      )}
    </>
  );
}

export default Form;
