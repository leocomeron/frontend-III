function Event({ number }) {
  // Funcion que se va a ejecutar con el onClick
  function myEvent() {
    alert(`Disparado evento ${number ? number : "Sin numero de evento"}`);
  }
  return (
    <div>
      <p>Haga click para disparar un evento</p>
      <button onClick={myEvent}>Disparar</button>
    </div>
  );
}

export default Event;
