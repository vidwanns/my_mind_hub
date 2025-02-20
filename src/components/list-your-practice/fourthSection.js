"use client";

import React from "react";
import "../../styles/list-your-practice-css/fourthSection.css";

const FourthSection = () => {
  const features = [
    "Profile Image: Use a professional photo to create a great first impression.",
    "Company Address: Make it easy for clients to find your practice.",
    "Google Maps Integration: Provide clear directions for stress-free visits.",
    "Practitioner Description: Share your qualifications & services to attract clients.",
    "3 Health Concerns: Highlight your key areas of expertise.",
    "1 Practitioner Type: Define your specialty to help clients understand how you can assist them.",
    "Patient Focus: Describe the types of clients you serve.",
    "1 Company Video: Connect with clients through an introductory video.",
    "Calendar Integration: Avoid double bookings and manage availability.",
    "Website Link: Direct clients to your website for more information.",
    "Phone Number: Allow clients to contact you easily.",
    "Online Consulting: Offer flexible virtual sessions for convenience.",
    "Booking Form: Simplify client inquiries with an easy form.",
    "Payment Processing: Manage payments with a 6% fee on bookings."
  ];

  const additionalFeatures = [
    "Company Logo: Boost your brand recognition with a professional logo that makes your profile stand out.",
    "Detailed Company Description: Provide a clear overview of your practice, highlighting your unique approach and the value you offer to clients.",
    "Unlimited Staff Advertising: Showcase your entire team and their specialties, helping clients find the right fit for their needs.",
    "20 Practitioner Types: Attract a wider range of clients by defining multiple specialties.",
    "Unlimited Health Concerns: Highlight all areas of your expertise, showing a comprehensive approach to mental health care.",
    "2 Company Videos: Use engaging videos to help potential clients connect with your practice on a personal level.",
    "Homepage Advertising: Your profile will rotate and be featured on the homepage alongside practitioners we recommend, increasing your visibility.",
    "Calendar Integration: Connect your bookings with Microsoft Office 365 or Google Calendar to streamline scheduling and show your availability, preventing double bookings.",
    "Priority Customer Support: Enjoy faster responses and personalized assistance from our dedicated support team, giving you peace of mind.",
  ];

  return (
    <section className="List-fourth-section">
      <div className="List-fourth-header-container">
        <div className="List-fourth-header">
          <p className="List-section-heading">
            Start with Our <span>Free Package</span>
          </p>
          <p className="List-section-description">
            Take advantage of our Free Package, designed to help mental health
            practitioners promote their services without budget concerns. With
            our free service, you won’t have to wait to see a return on your
            advertising investment—it’s completely free! We only charge a 6% fee
            on your bookings, which covers our advertising and administration
            costs. This way, you can focus on what you do best—helping
            clients—while we handle the promotion.
          </p>
          <p className="price-note">Price in $ AUD</p>
        </div>
        <div className="package-container">
          <div className="package-card free-package">
          <p className="none-price">$950/Year</p>
            <p className="package-title">Free Package</p>
            <button className="package-btn">Start Free Trial</button>
            <p className="features-title">Features:</p>
            <ul className="features-list">
              {features.map((text, index) => {
                const parts = text.split(":");
                return (
                  <li key={index}>
                    <strong>{parts[0]}</strong>{parts[1] ? `: ${parts[1]}` : ""}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="package-card pro-package">
            <p className="package-price">$950/Year</p>
            <p className="package-title">Professional Package</p>{" "}
            <button className="package-btn">Start Professional Account</button>
            <p className="features-title">Additional Features:</p>
            <ul className="features-list">
              {additionalFeatures.map((text, index) => {
                const parts = text.split(":");
                return (
                  <li key={index}>
                    <strong>{parts[0]}</strong>{parts[1] ? `: ${parts[1]}` : ""}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;