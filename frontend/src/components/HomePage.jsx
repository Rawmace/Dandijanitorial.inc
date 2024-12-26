import React, { useState } from "react";
import "./HomePage.css";
import logo from "../assets/logo.jpg"; // Add your logo image file path here

const HomePage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo-title">
          <img src={logo} alt="D and I Logo" className="logo" />
          <h1 className="company-title">
            <p> D AND I JANITORIAL &</p>
            <p>CARPET CLEANING INC.</p>
          </h1>
        </div>
        <nav className={`nav-bar ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li onClick={closeMenu}>
              <a href="#">Home</a>
            </li>
            <li onClick={closeMenu}>
              <a href="#services">Services</a>
            </li>
            <li onClick={closeMenu}>
              <a href="#contact">Instant Quote</a>
            </li>
            <li onClick={closeMenu}>
              <a href="#about-us">About</a>
            </li>
            <li onClick={closeMenu}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>
      <div className="hero-content">
        <h2 className="main-heading">
          D AND I JANITORIAL & CARPET CLEANING INC.
        </h2>
        <p className="subtext">
          Commercial&nbsp;|&nbsp;Industrial&nbsp;|&nbsp;Residential&nbsp;|&nbsp;Offices
        </p>
        <a href="tel:6477848830" className="quote-button">
          Call us Now !!!
        </a>
      </div>
    </div>
  );
};

export default HomePage;
