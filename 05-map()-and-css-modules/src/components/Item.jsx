const Item = (props) => {
  return (
    <li>
      Color: {props.name} - {props.children}
    </li>
  );
};

export default Item;
