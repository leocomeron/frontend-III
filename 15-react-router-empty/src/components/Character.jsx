import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  const getCharacter = async () => {
    const res = await fetch(``);
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h1>name</h1>
      <img />
    </div>
  );
};

export default Character;
