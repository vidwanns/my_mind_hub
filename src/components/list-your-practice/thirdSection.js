import React from "react";
import "../../styles/list-your-practice-css/thirdSection.css";

const ThirdSection = () => {
  return (
    <section className="third-section">
      <div className="third_header">
        <h2 className="section-heading">
          How it works for <span>Practitioners</span>
        </h2>
        <p className="section-description">
          This easy-to-use system helps both practitioners and clients manage appointments
          and payments smoothly. Sign up today to promote your practice.
        </p>
      </div>
      <div className="container">
        <div className="guide">
          <h3 className="guide-title">
            Here’s a quick guide to using <span>My Mind Hub:</span>
          </h3>
          <ul className="guide-steps">
            <li>
              <strong>1. Sign Up</strong>
              <ul>
                <li>Visit the Sign-Up Page: Start by going to our sign-up page.</li>
                <li>Enter Your Details: Fill in your name, email, and password.</li>
                <li>Check Your Email: Confirm your account through the email we send you.</li>
              </ul>
            </li>
            <li>2. Set Up Your Profile</li>
            <li>3. Connect Your Calendar</li>
            <li>4. Set Up Payments</li>
            <li>5. Manage Your Availability</li>
            <li>6. Client Booking</li>
            <li>7. Payment Processing</li>
            <li>8. Manage Your Bookings</li>
          </ul>
          <button className="get-started-btn">Get Started →</button>
        </div>
        <div className="image-container">
          <div className="signin-image"></div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
