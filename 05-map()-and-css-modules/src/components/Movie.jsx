import styles from "./Movie.module.css";

const Movie = (props) => {
  return (
    <div className={styles.container}>
      <h1>{props.title}</h1>
      {props.isClickable ? <button>my button</button> : null}
      <p>Descripción: {props.descripcion}</p>
    </div>
  );
};

export default Movie;
