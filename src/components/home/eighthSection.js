"use client";

import React from "react";
import "../../styles/home-css/eighthSection.css";

const articles = [
  {
    id: 1,
    title: "How to Silence Your Inner Critic: Once and For All",
    description:
      "Are you your own worst critic? Is your negative self-talk sabotaging your success? Do your past failures dominate your thinking and mindset? Here are 3 ways to silence your inner critic once and for all.",
    image: "/images/home/eighthSection/silence.png",
  },
  {
    id: 2,
    title:
      "Educate and Empower – Liza Pavlakos shares her story in Shepparton News",
    description:
      "Liza Pavlakos Speaks to Carers During Foster Care Week! Last week our CEO, Liza Pavlakos, traveled to Shepparton in Victoria, Australia, to meet with local carers.",
    image: "/images/home/eighthSection/educate.png",
  },
  {
    id: 3,
    title: "Overcoming Anxiety: Navigating the Path to Seeking Support",
    description:
      "Introduction: In our fast-moving society, incidences of anxiety are proliferating, influencing diverse groups regardless of age or status. It’s crucial to recognize that anxiety acts.",
    image: "/images/home/eighthSection/overcome.png",
  },
];

const EighthSection = () => {
  return (
    <section className="eighth-section">
      <p className="eighth_section-subheading">Blogs</p>
      <p className="eighth_section-heading">
        Learn With Our <span className="highlight">Articles</span>
      </p>

      <div className="articles-grid">
        {articles.map((article) => (
          <div className="article-card" key={article.id}>
            <div className="article-image-container">
              <img
                src={article.image}
                alt={article.title}
                className="article-image"
              />
            </div>
            <div className="article-content">
              <p className="article-title">{article.title}</p>
              <p className="article-description">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EighthSection;
