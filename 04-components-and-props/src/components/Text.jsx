const Text = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Text;
