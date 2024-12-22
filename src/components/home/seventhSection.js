"use client";

import React from "react";
import "../../styles/home-css/seventhSection.css";

const reviews = [
  {
    id: 1,
    text: "Mind Hub transformed my mental health journey! Easy navigation, detailed profiles, and seamless scheduling helped me find the right therapist effortlessly. Grateful for their support on my journey!",
    name: "Kayla",
    image: "/images/seventhSection/kayla.png",
    color: "#C5E7AD",
  },
  {
    id: 2,
    text: "Mind Hub stands out as the number one choice for its empowering and supportive platform. It has made a positive impact on my mental health journey, and I'm truly thankful for this invaluable resource.",
    name: "Eric",
    image: "/images/seventhSection/eric.png",
    color: "#B8DCE4",
  },
  {
    id: 3,
    text: "Mind Hub is a lifesaver for mental health professionals. The convenience, information, and support provided are invaluable. Thank you, Mind Hub, for being a beacon of hope.",
    name: "Clara",
    image: "/images/seventhSection/clara.png",
    color: "#DAEE96",
  },
  {
    id: 4,
    text: "With Mind Hub, I found a therapist who specializes in my specific needs. The global service and variety are impressive!",
    name: "Mel",
    image: "/images/seventhSection/mel.png",
    color: "#F4E0B4",
  },
  {
    id: 5,
    text: "The platform is fantastic! I found a therapist in minutes, and the care I received was beyond my expectations. Mind Hub Directory is excellent.",
    name: "Matt",
    image: "/images/seventhSection/matt.png",
    color: "#DCDCCD",
  },
  {
    id: 6,
    text: "The platform is fantastic! I found a therapist and received personalized care. Mind Hub Directory is excellent.",
    name: "Amy",
    image: "/images/seventhSection/amy.png",
    color: "#E9CBB5",
  },
];

const SeventhSection = () => {
  const repeatedReviews = [...reviews, ...reviews];

  return (
    <section className="seventh-section">
      <h3 className="section-subheading">Client Reviews</h3>
      <h2 className="section-heading">
        A Few Words From <span className="highlight">Our Customers</span>
      </h2>

      <div className="carousel-container">
        {/* First Row with Left Shift */}
        <div className="carousel-row-container">
          <div className="carousel-row">
            {repeatedReviews.map((review, index) => (
              <div
                className="review-card"
                key={`first-row-${index}`}
                style={{ backgroundColor: review.color }}
              >
                <div className="review-image-container">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="review-author-image"
                  />
                </div>
                <div className="review-content">
                  <p className="review-text">"{review.text}"</p>
                  <p className="review-author-name">- {review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="carousel-row-container">
          <div className="carousel-row reverse">
            {repeatedReviews.map((review, index) => (
              <div
                className="review-card"
                key={`second-row-${index}`}
                style={{ backgroundColor: review.color }}
              >
                <div className="review-image-container">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="review-author-image"
                  />
                </div>
                <div className="review-content">
                  <p className="review-text">"{review.text}"</p>
                  <p className="review-author-name">- {review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Third Row */}
        <div className="carousel-row-container">
          <div className="carousel-row">
            {repeatedReviews.map((review, index) => (
              <div
                className="review-card"
                key={`third-row-${index}`}
                style={{ backgroundColor: review.color }}
              >
                <div className="review-image-container">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="review-author-image"
                  />
                </div>
                <div className="review-content">
                  <p className="review-text">"{review.text}"</p>
                  <p className="review-author-name">- {review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeventhSection;
