// src/components/NavBar.jsx
import React from 'react';
import './NavBar.css'; // Ensure to add your CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-link">Home</a>
      <a href="#about" className="nav-link">About</a>
    </nav>
  );
}

export default NavBar;
