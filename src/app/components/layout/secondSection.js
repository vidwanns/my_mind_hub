import React from "react";
import "../../styles/secondSection.css";

const practitioners = [
  { id: 1, title: "", image: "/images/secondSection/psycologist.png" },
  { id: 2, title: "", image: "/images/secondSection/marriage.png" },
  { id: 3, title: "", image: "/images/secondSection/child.png" },
  { id: 4, title: "", image: "/images/secondSection/counselor.png" },
  { id: 5, title: "", image: "/images/secondSection/psychiatrist.png" },
  { id: 6, title: "", image: "/images/secondSection/life.png" },
];

const SecondSection = () => {
  return (
    <section className="second-section">
      <h2 className="second-section__heading">
        Popular <span className="highlight">Practitioners & Concerns</span>
      </h2>

      <div className="practitioner-cards">
        {practitioners.map((item) => (
          <div className="practitioner-card" key={item.id}>
            <img src={item.image} alt={item.title} className="practitioner-image" />
            <p className="practitioner-title">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="partners-container">
        <div className="partners">
          <p>Mind Hub Directory Partners With</p>
          <img
            src="/images/secondSection/Australian.svg"
            alt="Australian & New Zealand Mental Health Association"
            className="partners-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
