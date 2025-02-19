import React from "react";
import "../../styles/home-css/fifthSection.css";

const FifthSection = () => {
  return (
    <section className="fifth-section">
      {/* First Block */}
      <div className="content-block">
        <div className="content-text">
          <p className="content-heading">Find A Mental Health Practitioner</p>
          <p className="content-subheading">
            Get In Touch With <span className="highlight">A Trusted Mental Health</span> Professional Online Or In Your Area
          </p>
          <p className="content-description">
            Finding support is easy with Mind Hub Directory. Explore therapists, learn about their qualifications, and request help online. Healing happens in different steps, and on our platform, you’ll discover a therapist for every part of your journey.
          </p>
          <button className="fifth_cta-button">Search Therapists</button>
        </div>
        <div className="content-image_Boy">
          <img src="/images/home/fifthSection/boy1.png" alt="Therapist Session" />
        </div>
      </div>

      {/* Second Block */}
      <div className="content-block reverse">
        <div className="content-image_Girl">
          <img src="/images/home/fifthSection/girl2.png" alt="Mental Health Support" />
        </div>
        <div className="content-text">
          <p className="content-heading">Mental Health Care Is Self Care</p>
          <p className="content-subheading">
            Everyone Benefits From <span className="highlight">Mental Health Support</span>
          </p>
          <p className="content-description">
            For a rapid mental health check or self-care, explore our list of mental health practitioners on Mind Hub Directory. In our fast-paced world, taking a moment for self-care is crucial.
          </p>
          <button className="fifth_cta-button">Book A Session</button>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
