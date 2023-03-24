import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ isLoggedIn, name }) => {
  const navigate = useNavigate();

  return (
    <nav className={styles.navContainer}>
      <button onClick={() => navigate(-1)}>Back</button>
      {isLoggedIn && (
        <>
          <button>
            <Link to="/characters">Characters</Link>
          </button>
          <button>
            <Link to="/episodes">Episodes</Link>
          </button>
          <button>
            <Link to="/locations">Locations</Link>
          </button>
          <p className={styles.name}>Hello {name}</p>
        </>
      )}
    </nav>
  );
};

export default Navbar;
