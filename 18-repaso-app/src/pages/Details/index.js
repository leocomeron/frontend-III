import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "../../styles.module.css";
import ItemCard from "../../components/ItemCard";

const Details = () => {
  const [product, setProduct] = useState(undefined);
  let params = useParams();
  const navigate = useNavigate();

  let productId = params.id;

  const getProduct = async () => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product) return;

  return (
    <>
      <button onClick={() => navigate(-1)}>Volver</button>

      <div className={styles.wrapper}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.image_details}
        />
        <ItemCard product={product} />
      </div>
    </>
  );
};

export default Details;
