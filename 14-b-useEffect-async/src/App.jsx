import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);

  const fetchBromas = async () => {
    const res = await fetch("api/products");
    const data = await res.json();

    setProducts(data);
  };

  useEffect(() => {
    fetchBromas();
  }, []);
  console.log(products);
  return <div className="App"></div>;
}
