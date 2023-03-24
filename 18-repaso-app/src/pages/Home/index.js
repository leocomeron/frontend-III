import { useNavigate } from "react-router-dom";
import ItemList from "../../components/ItemList";
import { useEffect, useState } from "react";
// import products from "../../products.json";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  function openDetail(id) {
    navigate(`/details/${id}`);
  }

  const getProducts = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map((product) => (
          <ItemList key={product.id} product={product} onClick={openDetail} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
