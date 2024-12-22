import React from "react";
import "../../styles/home-css/thirdSection.css";

const logos = [
  { id: 1, image: "/images/home/thirdSection/image_19.svg", alt: "logo1" },
  { id: 2, image: "/images/home/thirdSection/image_4.svg", alt: "logo2" },
  { id: 3, image: "/images/home/thirdSection/image_13.svg", alt: "logo3" },
  { id: 4, image: "/images/home/thirdSection/image_17.svg", alt: "logo4" },
  { id: 5, image: "/images/home/thirdSection/image_9.svg", alt: "logo5" },
  { id: 6, image: "/images/home/thirdSection/image_20.svg", alt: "logo6" },
  { id: 7, image: "/images/home/thirdSection/image_2.svg", alt: "logo7" },
  { id: 8, image: "/images/home/thirdSection/image_18.svg", alt: "logo8" },
  { id: 9, image: "/images/home/thirdSection/image_6.svg", alt: "logo9" },
  { id: 10, image: "/images/home/thirdSection/image_1.svg", alt: "logo10" },
  { id: 11, image: "/images/home/thirdSection/image_11.svg", alt: "logo11" },
  { id: 12, image: "/images/home/thirdSection/image_8.svg", alt: "logo12" },
  { id: 13, image: "/images/home/thirdSection/image_4.svg", alt: "logo13" },
  { id: 14, image: "/images/home/thirdSection/image_14.svg", alt: "logo14" },
  { id: 15, image: "/images/home/thirdSection/image_15.svg", alt: "logo15" },
  { id: 16, image: "/images/home/thirdSection/image_16.svg", alt: "logo16" },
  { id: 17, image: "/images/home/thirdSection/image_17.svg", alt: "logo17" },
  { id: 18, image: "/images/home/thirdSection/image_18.svg", alt: "logo18" },
  { id: 19, image: "/images/home/thirdSection/image_12.svg", alt: "logo19" },
  { id: 20, image: "/images/home/thirdSection/image_1.svg", alt: "logo20" },
  { id: 21, image: "/images/home/thirdSection/image_21.svg", alt: "logo21" },
  { id: 22, image: "/images/home/thirdSection/image_22.svg", alt: "logo22" },
  { id: 23, image: "/images/home/thirdSection/image_23.svg", alt: "logo23" },
  { id: 24, image: "/images/home/thirdSection/image_24.svg", alt: "logo24" },
];

const ThirdSection = () => {
  return (
    <section className="third-Section">
      <div className="grid-container">
        {logos.map((logo) => (
          <div className="grid-item" key={logo.id}>
            <img src={logo.image} alt={logo.alt} className="logo-image" />
          </div>
        ))}
      </div>
      <div className="insurance-info">
        <h2>500+ Insurance Plans Accepted</h2>
        <p>We accept most major insurances</p>
      </div>
    </section>
  );
};

export default ThirdSection;
