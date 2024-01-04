import React from "react";
import "./css/NavBar.css";

const NavBar: React.FC = () => {
  return (
    <header className="header">
      <h1>logo</h1>

      <div className="toggleBtn" id="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default NavBar;
