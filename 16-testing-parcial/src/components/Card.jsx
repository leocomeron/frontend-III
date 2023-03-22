import styles from "./Card.module.css";

const Card = ({ nombre, curso }) => {
  return (
    <div className={styles.card}>
      <div>Hola {nombre}</div>
      <div>Te inscribiste al curso {curso}</div>
    </div>
  );
};

export default Card;
