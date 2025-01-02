"use client";

import React, { useState } from "react";
import "../../styles/list-your-practice-css/thirdSection.css";

const ThirdSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="third-section">
      <div className="third_header">
        <h2 className="section-heading">
          How it works for <span>Practitioners</span>
        </h2>
        <p className="section-description">
          This easy-to-use system helps both practitioners and clients manage
          appointments and payments smoothly. Sign up today to promote your
          practice.
        </p>
      </div>
      <div className="third_container">
        <div className="guide">
          <h3 className="guide-title">
            Here’s a quick guide to using <span>My Mind Hub:</span>
          </h3>
          <ul className="guide-steps">
            {[
              {
                title: "1. Sign Up",
                steps: [
                  "Visit the Sign-Up Page: Start by going to our sign-up page.",
                  "Enter Your Details: Fill in your name, email, and password.",
                  "Check Your Email: Confirm your account through the email we send you.",
                ],
              },
              { title: "2. Set Up Your Profile", steps: [] },
              { title: "3. Connect Your Calendar", steps: [] },
              { title: "4. Set Up Payments", steps: [] },
              { title: "5. Manage Your Availability", steps: [] },
              { title: "6. Client Booking", steps: [] },
              { title: "7. Payment Processing", steps: [] },
              { title: "8. Manage Your Bookings", steps: [] },
            ].map((item, index) => (
              <li key={index}>
                <div
                  className="dropdown-title"
                  onClick={() => toggleDropdown(index)}
                  style={{ cursor: "pointer" }}
                >
                  <strong>{item.title}</strong>
                </div>
                {activeIndex === index && item.steps.length > 0 && (
                  <ul className="dropdown-steps">
                    {item.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
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
