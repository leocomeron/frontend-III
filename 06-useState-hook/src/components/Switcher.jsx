import { useState } from "react";

const Switcher = () => {
  const [isTextVisible, setIsTextVisible] = useState(true);

  const toggleTextHandler = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <>
      {isTextVisible ? <p>Text to hide</p> : null}
      <button onClick={toggleTextHandler}>
        Click to {isTextVisible ? "hide" : "show"}
      </button>
    </>
  );
};

export default Switcher;
