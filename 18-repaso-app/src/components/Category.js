import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const Category = ({ isLoggedIn }) => {
  const [products, setProducts] = useState([]);
  const params = useParams();

  const categoryName = params.name;

  const getProductsByCategory = async () => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProductsByCategory();
  }, []);

  return (
    <>
      <h2>Todos los productos</h2>
      <ul>
        {products.map((product) => (
          <ItemList
            isLoggedIn={isLoggedIn}
            key={product.id}
            product={product}
            onClick={() => {}}
          />
        ))}
      </ul>
    </>
  );
};

export default Category;
