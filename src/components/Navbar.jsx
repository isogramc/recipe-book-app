import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="layout1"></div>
      <img src="/src/assets/logo.png" alt="Logo" className="logo" />
      <a href="/"><h1>My Recipe Book</h1></a>
      <img src="/src/assets/logo.png" alt="Logo" className="logo" />
    </nav>
  );
}

export default Navbar;
