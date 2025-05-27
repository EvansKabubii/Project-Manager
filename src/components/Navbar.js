import React from 'react';
import logo from '../assets/adept-logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Adept Technologies Logo" className="logo-img" />
      </div>
      <ul className="navbar-links">
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
