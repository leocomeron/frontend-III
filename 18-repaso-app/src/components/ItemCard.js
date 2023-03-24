import styles from "../styles.module.css";

const ItemCard = ({ product }) => {
  if (!product) return;

  return (
    <div>
      <h3 className={styles.title_details}>{product.title}</h3>
      <h4 className={styles.brand_details}>{product.category}</h4>
      <h4 className={styles.price_details}>${product.price}</h4>
      <h4 className={styles.description_details}>{product.description}</h4>
    </div>
  );
};

export default ItemCard;
