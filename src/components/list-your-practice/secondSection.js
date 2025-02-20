import React from "react";
import "../../styles/list-your-practice-css/secondSection.css";

const SecondSection = () => {
  return (
    <section className="second-section">
      <div className="content">
        <p className="secondSection-heading">Why Choose My Mind Hub?</p>
        <p className="second-section-description">
          Many mental health websites exist, but we're Australian-owned and
          offer free advertising, so you won’t worry about your budget. We reach
          a broad audience through global presentations and partnerships with
          trusted organizations. My Mind Hub connects practitioners with clients
          seeking support, allowing reviews before GP referrals.
        </p>
        <div className="features">
          <div className="feature">
            <div className="Expand-icon">
              <img
                src="/images/list-your-practice/secondSection/Expand.svg"
                alt="User Icon"
              />
            </div>
            <div>
              <p className="feature-heading">Expand Your Practice</p>
              <p className="feature-description">Connect with clients worldwide seeking your specialized support.</p>
            </div>
          </div>
          <div className="feature">
            <div className="Simplify-icon">
              <img
                src="/images/list-your-practice/secondSection/Simplify.svg"
                alt="User Icon"
              />
            </div>
            <div>
              <p className="feature-heading">Simplify Your Work</p>
              <p className="feature-description">Benefit from tools designed to streamline scheduling, billing, and client management.</p>
            </div>
          </div>
          <div className="feature">
            <div className="Difference-icon">
              <img
                src="/images/list-your-practice/secondSection/Difference.svg"
                alt="User Icon"
              />
            </div>
            <div>
              <p className="feature-heading">Make a Difference</p>
              <p className="feature-description">Be part of a mission-driven platform that prioritizes meaningful connections and better outcomes.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="image-section">
        <img
          src="/images/list-your-practice/secondSection/clara_connor.png"
          alt="Mobile View"
          className="mobile-image"
        />
      </div>
    </section>
  );
};


export default SecondSection;
