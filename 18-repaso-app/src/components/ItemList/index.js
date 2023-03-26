import styles from "../../styles.module.css";

const ItemList = ({ product, onClick }) => {
  const handleClick = () => {
    if (true) {
      onClick(product.id);
    }
  };

  return (
    <li className={styles.item_list} data-testid="item">
      <img
        className={styles.img_list}
        src={product.image}
        alt={product.title}
      />
      <div className={styles.content}>
        <h3 className={styles.title_list}>{product.title}</h3>
        <p className={styles.price_list}>${product.price}</p>
        <button className={styles.button} onClick={handleClick}>
          Ver detalles
        </button>
      </div>
    </li>
  );
};

export default ItemList;
