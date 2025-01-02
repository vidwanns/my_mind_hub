import React from "react";
import "../../styles/layout-css/header.css";

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header__left">
          <div className="header__logo">
            <img
              src="/images/home/header/mindhub_logo.svg"
              alt="My Mind Hub Logo"
              className="logo-icon"
            />
          </div>

          <div className="vertical-line"></div>

          <nav className="header__nav">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <a href="#list" className="nav-link">
              List Your Practice
            </a>
          </nav>
        </div>

        <div className="header__cta">
          <a href="#find-therapist" className="find-therapist-button">
            Find A Therapist
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
