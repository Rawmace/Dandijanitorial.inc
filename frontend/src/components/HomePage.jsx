import React from "react";
import "./HomePage.css";
import logo from "../assets/logo.jpg"; // Add your logo image file path here

const HomePage = () => {
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
        <nav className="nav-bar">
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#quote">Instant Quote</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="hero-content">
        <h2 className="main-heading">
          D AND I JANITORIAL & CARPET CLEANING INC.
        </h2>
        <p className="subtext">
          Commercial&nbsp;|&nbsp;Industrial&nbsp;|&nbsp;Residential&nbsp;|&nbsp;Offices
        </p>
        <a href="#quote" className="quote-button">
          Get a Quote Now
        </a>
      </div>
    </div>
  );
};

export default HomePage;
