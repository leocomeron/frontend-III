import { Fragment } from "react";
import style from "./Text.module.css";

const Text = (props) => {
  return (
    <div className={style.container}>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
      <p>{props.description}</p>
      {props.children}
    </div>
  );
};

export default Text;
