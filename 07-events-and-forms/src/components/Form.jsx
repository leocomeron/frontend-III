import { useState } from "react";
import styles from "./Form.module.css";

function Form() {
  // Seteo todos mis estados y les doy un valor inicial
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorName, setIsErrorName] = useState(false);

  // creo una variable boolean para mi validación
  const isValidName = name.length > 10;

  // Función cuando se dispara onSubmit event
  function signUpUser(e) {
    e.preventDefault();

    if (isValidName) {
      setIsErrorName(false);
      console.log("Usuario guardado");
      alert(`nombre: ${name} - Password: ${password}`);
    } else {
      setIsErrorName(true);
      console.log("Tu nombre tiene menos de 10 caracteres");
    }
    // Reseteo el valor del input name
    setName("");
  }

  // Función cuando se dispara onChange event en el name input
  const onNameChange = (e) => {
    setName(e.target.value);
  };

  // Función cuando se dispara onChange event en el password input
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <h1>Mi inscripción</h1>
      <form onSubmit={signUpUser}>
        <div>
          <input
            className={!isErrorName ? styles.input : styles.inputError}
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
            type="password"
            placeholder="Escriba su password"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <div>
          <button type="submit">Guardar</button>
        </div>
      </form>
    </>
  );
}

export default Form;
