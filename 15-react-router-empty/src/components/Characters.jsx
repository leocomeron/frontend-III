import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Characters = () => {
  const getCharacters = async () => {};

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Characters List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Characters;
