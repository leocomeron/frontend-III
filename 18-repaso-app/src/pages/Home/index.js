import { useNavigate } from "react-router-dom";
import ItemList from "../../components/ItemList";
import { useContext, useState } from "react";
import Form from "../../components/Form";
import { ProductsContext } from "../../context";

const Home = () => {
  const { products, categories } = useContext(ProductsContext);

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
