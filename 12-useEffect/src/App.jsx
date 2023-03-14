import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [fetchPedidos, setFetchPedidos] = useState(true);
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setPedidos([...pedidos, "1 Pizza Fugazzeta"]);
    }, 2000);

    return () => clearTimeout();
  }, [pedidos]);

  const handleClick = () => {
    setFetchPedidos(false);
  };

  return (
    <div className="App">
      <h1>Ciclo de Vida</h1>
      <h2>Presionaste el botón {count} veces</h2>
      {pedidos.map((pedido) => (
        <li>{pedido}</li>
      ))}
      <button onClick={handleClick}>Detener pedidos</button>
    </div>
  );
}
