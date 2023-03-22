import styles from "./Card.module.css";

const Card = ({ nombre, curso }) => {
  return (
    <div className={styles.card} data-testid="card-container">
      <div>Hola {nombre}</div>
      <div>Te inscribiste al curso {curso}</div>
    </div>
  );
};

export default Card;
