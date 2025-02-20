import React from "react";
import "../../styles/list-your-practice-css/firstSection.css";

const FirstSection = () => {
  return (
    <section id="firstList" className="list-first-section">
      <div className="green-background"></div>{" "}
      <div className="firstList-container">
        <div className="firstList-content">
          <p className="firstList-heading">
            Powering great care at every stage of your growth
          </p>
          <p className="firstList-description">
            Join My Mind Hub to promote your services and connect with clients
            in need. We prioritize transparency, helping clients learn about
            your credentials and building trust for a successful partnership.
          </p>
          <button className="join-btn">
            Join Us For Free
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="right-arrow-icon"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M1.5 8a.5.5 0 0 1 .5-.5h10.793L8.646 3.854a.5.5 0 1 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708L12.793 8.5H2a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
        <div className="firstList-image-section">
          <div className="image-container">
            <img
              src="/images/list-your-practice/firstSection/hi_girl.jpeg"
              alt="Girl"
              className="girl-image"
            />
          </div>
          <img
            src="/images/list-your-practice/firstSection/sessions_overview.png"
            alt="Sessions Overview"
            className="sessions-overview"
          />
          <div className="verified-users">
            <div className="user-text">
              <span className="user-count">50k+</span>
              <span className="user-label">Verified Users</span>
            </div>
            <div className="user-icon">
              <img
                src="/images/list-your-practice/firstSection/userIcon.svg"
                alt="User Icon"
              />
            </div>
          </div>
          <div className="total-earnings">
            <div className="earnings-icon">
              <img
                src="/images/list-your-practice/firstSection/earnings-label.svg"
                alt="User Icon"
              />
            </div>
            <div className="earnings-text">
              <span className="earnings-label">Total Earnings</span>
              <span className="earnings-value">$180,000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
