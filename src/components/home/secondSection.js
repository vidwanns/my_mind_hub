import React from "react";
import "../../styles/home-css/secondSection.css";

const practitioners = [
  { id: 1, title: "Psychologist", image: "/images/home/secondSection/psychologist.png" },
  { id: 2, title: "Marriage & Family", image: "/images/home/secondSection/marriage.png" },
  { id: 3, title: "Child Psychologist", image: "/images/home/secondSection/child.png" },
  { id: 4, title: "Counselor", image: "/images/home/secondSection/counselor.png" },
  { id: 5, title: "Psychiatrist", image: "/images/home/secondSection/psychiatrist.png" },
  { id: 6, title: "Life Coach", image: "/images/home/secondSection/life.png" },
];

const SecondSection = () => {
  return (
    <section className="second-section">
      <h2 className="second-section__heading">
        Popular <span className="highlight">Practitioners & Concerns</span>
      </h2>

      <div className="practitioner-grid">
        {practitioners.map((item) => (
          <div className="practitioner-item" key={item.id}>
            <div className="practitioner-overlay">
              <img
                src={item.image}
                alt={item.title}
                className="practitioner-image"
              />
              <div className="practitioner-title-overlay">{item.title}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="partners-container">
        <div className="partners">
          <p>Mind Hub Directory Partners With</p>
          <img
            src="/images/home/secondSection/Australian.svg"
            alt="Australian & New Zealand Mental Health Association"
            className="partners-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
