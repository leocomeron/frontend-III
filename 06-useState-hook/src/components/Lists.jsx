import { useState } from "react";

const List = () => {
  const [items, setItems] = useState(["Primero", "Segundo"]);

  const addOne = () => {
    setItems([...items, "tercero"]);
  };

  return (
    <>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={addOne}>Add one</button>
    </>
  );
};

export default List;
