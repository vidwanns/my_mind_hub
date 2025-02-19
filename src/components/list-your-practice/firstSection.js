import React from "react";
import "../../styles/list-your-practice-css/firstSection.css";

const FirstSection = () => {
  return (
    <section id="list" className="list-first-section">
      <div className="green-background"></div>{" "}
      <div className="list-container">
        <div className="list-content">
          <h1 className="list-heading">
            Powering great care at every stage of your growth
          </h1>
          <p className="list-description">
            Join My Mind Hub to promote your services and connect with clients
            in need. We prioritize transparency, helping clients learn about
            your credentials and building trust for a successful partnership.
          </p>
          <button className="join-btn">Join Us For Free</button>
        </div>
        <div className="list-image-section">
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
              <img src="/images/list-your-practice/firstSection/userIcon.svg" alt="User Icon" />
            </div>
          </div>
          <div className="total-earnings">
            <div className="earnings-icon">
              <img src="/images/list-your-practice/firstSection/earnings-label.svg" alt="User Icon" />
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
