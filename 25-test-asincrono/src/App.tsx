import { useEffect, useState } from "react";
import axios from "axios";
import { formatUserName } from "./utils";
import "./style.css";
import { getUsers } from "./usuario.service";
import React from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    getUsers().then((data) => {
      setLoading(false);
      setUsers(data);
    });
  }, []);

  return (
    <>
      <h2>Usuarios:</h2>
      {loading && <div>Cargando usuarios...</div>}
      {!loading && (
        <ul className="card">
          {users.map(({ id, user, username }) => (
            <li key={id}>
              <span>{user}</span> (<span>{formatUserName(username)}</span>)
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default App;
