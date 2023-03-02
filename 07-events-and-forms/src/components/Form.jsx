import { useState } from "react";
import style from "./Form.module.css";

function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorName, setIsErrorName] = useState(false);

  const validateName = (name) => {
    if (name.length > 10) {
      return true;
    } else {
      return false;
    }
  };

  function signUpUser(e) {
    e.preventDefault();

    if (validateName(name)) {
      setIsErrorName(false);
      console.log("Usuario guardado");
    } else {
      setIsErrorName(true);
      console.log("Tu nombre tiene menos de 10 caracteres");
    }
    setName("");
  }

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  console.log(password);
  console.log(name);

  return (
    <>
      <h1>Mi inscripción</h1>
      <form onSubmit={signUpUser}>
        <div>
          <input
            className={!isErrorName ? style.input : style.inputError}
            type="text"
            placeholder="Escriba su nombre"
            value={name}
            onChange={onNameChange}
          />
        </div>
        {isErrorName && <p>Hay un error!</p>}
        <div>
          <input
            type="password"
            placeholder="Escriba su password"
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
