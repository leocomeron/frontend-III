import axios from "axios";
import { useState, useEffect } from "react";
import useAxiosfetch from "./useAxiosFetch";

const url = "https://jsonplaceholder.typicode.com/comments";

export default function App() {
  const { error, response } = useAxiosfetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="App">
      {error ? <h2>{error}</h2> : null}
      {response?.length ? (
        <ul>
          {response.map((item) => (
            <li key={item.id}>{JSON.stringify(item.title)}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
