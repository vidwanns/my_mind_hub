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
              {
                title: "2. Set Up Your Profile",
                steps: [
                  "Visit the Sign-Up Page: Start by going to our sign-up page.",
                  "Enter Your Details: Fill in your name, email, and password.",
                  "Check Your Email: Confirm your account through the email we send you.",
                ],
              },
              { title: "3. Connect Your Calendar", steps: [] },
              { title: "4. Set Up Payments", steps: [] },
              { title: "5. Manage Your Availability", steps: [] },
              { title: "6. Client Booking", steps: [] },
              { title: "7. Payment Processing", steps: [] },
              { title: "8. Manage Your Bookings", steps: [] },
            ].map((item, index) => (
              <li key={index} className={activeIndex === index ? "active" : ""}>
                <div
                  className={`dropdown-title ${
                    activeIndex === index ? "active-title" : ""
                  }`}
                  onClick={() => toggleDropdown(index)}
                >
                  {item.title}
                </div>
                {activeIndex === index && item.steps.length > 0 && (
                  <div className="dropdown-content">
                    <ul className="dropdown-steps">
                      {item.steps.map((step, stepIndex) => {
                        const parts = step.split(":");
                        return (
                          <li key={stepIndex}>
                            <strong>{parts[0]}</strong>
                            {parts[1] && `:${parts[1]}`}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <button className="get-started-btn">
            Get Started
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
        <div className="third-image-container">
          <div className="signin-image"></div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
