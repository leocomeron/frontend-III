import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Ciclo de Vida</h1>
      <h2>Presionaste el botón {0} veces</h2>
      <h2>El componente se renderizó: {0} veces</h2>
      <button onClick={() => {}}>Click aqui</button>
    </div>
  );
}
