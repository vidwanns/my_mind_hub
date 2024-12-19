import React from "react";
import "../../styles/sixthSection.css";

const SixthSection = () => {
  const cards = [
    {
      id: 1,
      title: "Search And Discover",
      description:
        "Ready to start? Find your perfect therapist at Mind Hub Directory. We verify all practitioners for your expertise.",
      image: "/images/sixthSection/search.png",
    },
    {
      id: 2,
      title: "Explore & Select",
      description:
        "Check the provider’s detailed profile for background, education, fees, and more. We prioritize transparency, ensuring trust in the Mind Hub Directory.",
      image: "/images/sixthSection/explore.png",
    },
    {
      id: 3,
      title: "Book An Appointment",
      description:
        "Reach out to your chosen provider and schedule online. Can’t find the right therapist? Call us at 1300 182 192 for personalized suggestions.",
      image: "/images/sixthSection/appointment.png",
    },
  ];

  return (
    <section className="sixth-section">
      <h3 className="section-subheading">We Made It Simple</h3>
      <h2 className="section-heading">Schedule An Appointment</h2>
      <button className="sixth_cta-button">Get Started</button>

      <div className="card-container">
        {cards.map((card) => (
          <div className="info-card" key={card.id}>
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-text">
              <h4 className="card-title">{card.title}</h4>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SixthSection;
