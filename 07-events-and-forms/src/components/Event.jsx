function Event({ number }) {
  function myEvent() {
    alert(`Disparado evento ${number}`);
  }
  return (
    <div>
      <p>Haga click para disparar un evento</p>
      <button onClick={myEvent}>Disparar</button>
    </div>
  );
}

export default Event;
