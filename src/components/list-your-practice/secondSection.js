import React from "react";
import "../../styles/list-your-practice-css/secondSection.css";

const SecondSection = () => {
  return (
    <section className="second-section">
      <div className="content">
        <h2 className="section-heading">Why Choose My Mind Hub?</h2>
        <p className="section-description">
          Many mental health websites exist, but we're Australian-owned and
          offer free advertising, so you won’t worry about your budget. We
          reach a broad audience through global presentations and partnerships
          with trusted organizations. My Mind Hub connects practitioners with
          clients seeking support, allowing reviews before GP referrals.
        </p>
        <div className="features">
          <div className="feature">
            <div className="icon">💼</div>
            <div>
              <h3>Expand Your Practice</h3>
              <p>
                Connect with clients worldwide seeking your specialized support.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">📋</div>
            <div>
              <h3>Simplify Your Work</h3>
              <p>
                Benefit from tools designed to streamline scheduling, billing,
                and client management.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">🌟</div>
            <div>
              <h3>Make a Difference</h3>
              <p>
                Be part of a mission-driven platform that prioritizes meaningful
                connections and better outcomes.
              </p>
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
