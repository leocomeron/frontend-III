import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <button>
        <Link to="/characters">Characters</Link>
      </button>
      <button>
        <Link to="/episodes">Episodes</Link>
      </button>
      <button>
        <Link to="/locations">Locations</Link>
      </button>
    </nav>
  );
};

export default Navbar;
