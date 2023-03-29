import React from "react";
import "../App.css";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  return (
    <div className="navbar">
      <p>Home</p>
      <ThemeToggleButton />
    </div>
  );
};

export default Navbar;
