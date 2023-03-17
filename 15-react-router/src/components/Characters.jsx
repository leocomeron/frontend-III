import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    setCharacters(data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      <h1>Characters List</h1>
      <table>
        <thead>
          <th>Name</th>
          <th>Status</th>
          <th>Species</th>
        </thead>
        <tbody>
          {characters.length
            ? characters.map((ch) => (
                <tr>
                  <Link to={`${ch.name}`}>
                    <td>{ch.name}</td>
                  </Link>
                  <td>{ch.status}</td>
                  <td>{ch.species}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Characters;
