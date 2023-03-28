import styles from "../../styles.module.css";

const ItemList = ({ product, onClick, isLoggedIn }) => {
  const handleClick = () => {
    onClick(product.id);
  };

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      return alert("NO ESTAS LOGGEADO");
    }
    alert("agregado al carrito");
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
        <button className={styles.button} onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </li>
  );
};

export default ItemList;
