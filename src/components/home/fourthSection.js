import React from "react";
import "../../styles/home-css/fourthSection.css";

const licensed_practitioners = [
  {
    id: 1,
    name: "Prof. David Barton",
    specialty: "Psychiatrist",
    experience: "Exp: 12+ Yrs",
    image: "/images/home/fourthSection/davidBarton.png",
  },
  {
    id: 2,
    name: "Gemma Mackenzie",
    specialty: "Clinical Psychology",
    experience: "Exp: 8+ Yrs",
    image: "/images/home/fourthSection/gemmaackenzie.png",
  },
  {
    id: 3,
    name: "Dr Cory Wasser",
    specialty: "ADHD Specialist",
    experience: "Exp: 7+ Yrs",
    image: "/images/home/fourthSection/coryWasser.png",
  },
  {
    id: 4,
    name: "Kerrie Salsbury",
    specialty: "Clinical Psychology",
    experience: "Exp: 10+ Yrs",
    image: "/images/home/fourthSection/kerrieSalsbury.png",
  },
  {
    id: 5,
    name: "Amy Knights",
    specialty: "Holistic Hypnotherapy",
    experience: "Exp: 15+ Yrs",
    image: "/images/home/fourthSection/amyKnights.png",
  },
  {
    id: 6,
    name: "Holistic Hypnotherapy",
    specialty: "Clinical Psychology",
    experience: "Exp: 15+ Yrs",
    image: "/images/home/fourthSection/holistic.png",
  },
  {
    id: 7,
    name: "Ben Van Leeuwen",
    specialty: "Psychologist",
    experience: "Exp: 12+ Yrs",
    image: "/images/home/fourthSection/vanLeuwen.png",
  },
  {
    id: 8,
    name: "Ben Van Leeuwen",
    specialty: "Personal Coaching",
    experience: "Exp: 10+ Yrs",
    image: "/images/home/fourthSection/benVan.png",
  },
];

const FourthSection = () => {
  return (
    <section className="fourth-section">
      <p className="fourth-section__heading">
        Meet the Mind Hub Directory licensed practitioners
      </p>

      <div className="licensed_practitioner-grid">
        {licensed_practitioners.map((practitioner) => (
          <div className="licensed_practitioner-card" key={practitioner.id}>
            <img
              src={practitioner.image}
              alt={practitioner.name}
              className="licensed_practitioner-image"
            />
            <div className="licensed_practitioner-details">
              <p className="licensed_practitioner-name">
                <strong>{practitioner.name}</strong>
              </p>
              <p className="licensed_practitioner-specialty">
                {practitioner.specialty} | {practitioner.experience}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="search-therapists-button">View All Therapists</button>
    </section>
  );
};

export default FourthSection;
