import React from 'react';
import '../../styles/list-your-practice-css/firstSection.css';

const FirstSection = () => {
  return (
    <section className="first-section">
      <div className="content">
        <h1 className="heading">
          Powering great care at every stage of your growth
        </h1>
        <p className="description">
          Join My Mind Hub to promote your services and connect with clients in need. 
          We prioritize transparency, helping clients learn about your credentials 
          and building trust for a successful partnership.
        </p>
        <button className="join-btn">Join Us For Free</button>
      </div>
      <div className="image-container">
        <img
          src="path-to-your-image.jpg" // Replace with your image path
          alt="Sessions Overview"
          className="sessions-image"
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
    </section>
  );
};

export default FirstSection;
