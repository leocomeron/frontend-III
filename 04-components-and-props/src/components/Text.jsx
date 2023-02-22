import { Fragment } from "react";

const Text = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
      <p>{props.description}</p>
      {props.children}
    </>
  );
};

export default Text;
