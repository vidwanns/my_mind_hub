import React from "react";
import "../../styles/home-css/firstSection.css";

const DropdownArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dropdown-icon"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const SearchButtonArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="search-button-icon"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const FirstSection = () => {
  return (
    <section className="first-section">
      <div className="first-section__content">
        <h1 className="heading">Better Mental Health Starts Here</h1>
        <p className="subheading">
          Discover, book, and save your preferred practitioners for yourself or your loved ones.
        </p>

        {/* Mobile-Friendly Search Bar */}
        <div className="search-bar">
          <div className="search-bar__input custom-dropdown">
            <select className="input-field">
              <option value="">Practitioners</option>
              <option>Art Therapist</option>
              <option>Behavioral Therapist</option>
              <option>Clinical Psychologist</option>
              <option>Cognitive Behavioral Therapist</option>
              <option>Counselor</option>
            </select>
            <span className="dropdown-arrow">
              <DropdownArrow />
            </span>
          </div>

          <div className="search-bar__input custom-dropdown">
            <select className="input-field">
              <option value="">Concerns</option>
              <option>Anxiety</option>
              <option>Depression</option>
              <option>Relationship Issues</option>
              <option>Trauma</option>
            </select>
            <span className="dropdown-arrow">
              <DropdownArrow />
            </span>
          </div>

          <div className="search-bar__input custom-dropdown">
            <select className="input-field">
              <option value="">Country</option>
              <option>USA</option>
              <option>UK</option>
              <option>Australia</option>
              <option>Canada</option>
            </select>
            <span className="dropdown-arrow">
              <DropdownArrow />
            </span>
          </div>

          <button className="search-button">
            Find Therapist
          </button>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
