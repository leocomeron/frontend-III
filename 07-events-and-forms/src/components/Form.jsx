function Form() {
  function signUpUser(event) {
    //Uso del preventDefault
    event.preventDefault();
    console.log("Usuario guardado");
  }
  return (
    <div>
      <h1>Mi inscripción</h1>
      <form onSubmit={signUpUser}>
        <div>
          <input type="text" placeholder="Escriba su nombre" />
        </div>
        <div>
          <input type="password" placeholder="Escriba su contraseña" />
        </div>
        <div>
          <input type="submit" value="Guardar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
