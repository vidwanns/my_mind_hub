import React from 'react';
import '../../styles/list-your-practice-css/firstSection.css';

const FirstSection = () => {
  return (
    <section className="list-first-section">
      <div className="green-background"></div> {/* Green background outside the container */}
      <div className="list-container">
        <div className="list-content">
          <h1 className="list-heading">
            Powering great care at every stage of your growth
          </h1>
          <p className="list-description">
            Join My Mind Hub to promote your services and connect with clients in need. 
            We prioritize transparency, helping clients learn about your credentials 
            and building trust for a successful partnership.
          </p>
          <button className="join-btn">Join Us For Free</button>
        </div>
        <div className="list-image-section">
          <img
            src="/images/list-your-practice/firstSection/hi_girl.jpeg"
            alt="Girl"
            className="girl-image"
          />
          <img
            src="/images/list-your-practice/firstSection/sessions_overview.png"
            alt="Sessions Overview"
            className="sessions-overview"
          />
          <div className="verified-users">
            <span className="user-count">50k+</span>
            <span className="user-label">Verified Users</span>
          </div>
          <div className="total-earnings">
            <div className="earnings-icon">💰</div>
            <span className="earnings-label">Total Earnings</span>
            <span className="earnings-value">$180,000</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
