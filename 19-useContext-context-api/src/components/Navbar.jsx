import React, { useContext } from "react";
import "../App.css";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = ({ onClick, theme }) => {
  return (
    <div className="navbar">
      <p>Home</p>
      <ThemeToggleButton onClick={onClick} theme={theme} />
    </div>
  );
};

export default Navbar;
