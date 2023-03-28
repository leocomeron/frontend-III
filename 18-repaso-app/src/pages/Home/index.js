import { useNavigate } from "react-router-dom";
import ItemList from "../../components/ItemList";
import { useEffect, useState } from "react";
import Form from "../../components/Form";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  function openDetail(id) {
    navigate(`/details/${id}`);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    setIsLoggedIn(true);
  }

  function handleOnNameChange(e) {
    setName(e.target.value);
  }

  const getProducts = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = async () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <div>
      <Form
        onSubmit={handleOnSubmit}
        onNameChange={handleOnNameChange}
        name={name}
      />
      <h2>Categorias</h2>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => navigate(`/products/category/${category}`)}
        >
          {category}
        </button>
      ))}
      <h2>Todos los productos</h2>
      <ul>
        {products.map((product) => (
          <ItemList
            isLoggedIn={isLoggedIn}
            key={product.id}
            product={product}
            onClick={openDetail}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
