"use client";

import React from "react";
import "../../styles/layout/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Logo and Navigation */}
        <div className="footer-navigation">
          <div className="footer-logo">
            <img src="/images/footer/footer_logo.svg" alt="My Mind Hub Logo" className="footer-logo-image" />
          </div>
    <div className="footer_vertical-line"></div>
          <nav className="footer-links">
            <a href="#find-therapist">Find A Therapist</a>
            <a href="#list-practice">List Your Practice</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#blogs">Blogs</a>
            <a href="#terms">Terms Of Use</a>
          </nav>
        </div>

        {/* Right Section: Copyright */}
        <div className="footer-rights">
          <span>© 2024 My Mind Hub</span>
          <span className="footer-credits">Design & Dev: KURAGE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
