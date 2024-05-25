import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1 className="header-title">𝚃𝚒𝚖𝚎𝙵𝚘𝚛𝚐𝚎</h1>
      <nav className="header-nav">
        <a href="#home" className="header-link">Home</a>
        <a href="#about" className="header-link">About</a>
        <a href="#services" className="header-link">Services</a>
        <a href="#contact" className="header-link">Contact</a>
      </nav>
      <div className="auth-buttons">
        <Link to="/login" className="btn btn-primary">Login</Link>
        
        <Link to="/signup" className="btn btn-secondary">Signup</Link>
      </div>
    </div>
  );
}

export default Header;
