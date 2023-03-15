import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [fetchPedidos, setFetchPedidos] = useState(true);
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    if (fetchPedidos) {
      setTimeout(() => {
        setCount(count + 1);
        setPedidos([...pedidos, `Pizza Fugazzeta numero ${count}`]);
      }, 2000);
    }
    return () => clearTimeout();
  }, [pedidos]);

  const handleClick = () => {
    setFetchPedidos(false);
  };

  return (
    <div className="App">
      <h1>Ciclo de Vida</h1>
      {pedidos.map((pedido) => (
        <li key={pedido}>{pedido}</li>
      ))}
      <button onClick={handleClick}>Detener pedidos</button>
    </div>
  );
}
