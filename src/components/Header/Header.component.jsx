import React, { useState } from "react";
import "./Header.component.css";
import HorizontalButtonsSlickBar from "../Horizontal-Button-Slick-Bar/HorizontalButtonsSlickBar.component";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <a href="/">You Tube</a>
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>

      </div>
      <HorizontalButtonsSlickBar />
    </header>
  );
};

export default Header;
