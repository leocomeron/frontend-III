import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
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
