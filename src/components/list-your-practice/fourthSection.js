"use client";

import React from "react";
import "../../styles/list-your-practice-css/fourthSection.css";

const FourthSection = () => {
  return (
    <section className="List-fourth-section">
      <div className="List-fourth-header-container">
      <div className="List-fourth-header">
        <h2 className="List-section-heading">
          Start with Our <span>Free Package</span>
        </h2>
        <p className="List-section-description">
          Take advantage of our Free Package, designed to help mental health practitioners
          promote their services without budget concerns. With our free service, you won’t
          have to wait to see a return on your advertising investment—it’s completely free!
          We only charge a 6% fee on your bookings, which covers our advertising and
          administration costs. This way, you can focus on what you do best—helping
          clients—while we handle the promotion.
        </p>
        <p className="price-note">Price in $ AUD</p>
      </div>
      <div className="package-container">
        <div className="package-card free-package">
          <h3 className="package-title">Free Package</h3>
          <button className="package-btn">Start Free Trial</button>
          <h4 className="features-title">Features:</h4>
          <ul className="features-list">
            <li>Profile Image: Use a professional photo to create a great first impression.</li>
            <li>Company Address: Make it easy for clients to find your practice.</li>
            <li>Google Maps Integration: Provide clear directions for stress-free visits.</li>
            <li>Practitioner Description: Share your qualifications & services to attract clients.</li>
            <li>3 Health Concerns: Highlight your key areas of expertise.</li>
            <li>
              1 Practitioner Type: Define your specialty to help clients understand how you can
              assist them.
            </li>
            <li>Patient Focus: Describe the types of clients you serve.</li>
            <li>1 Company Video: Connect with clients through an introductory video.</li>
            <li>Calendar Integration: Avoid double bookings and manage availability.</li>
            <li>Website Link: Direct clients to your website for more information.</li>
            <li>Phone Number: Allow clients to contact you easily.</li>
            <li>Online Consulting: Offer flexible virtual sessions for convenience.</li>
            <li>Booking Form: Simplify client inquiries with an easy form.</li>
            <li>Payment Processing: Manage payments with a 6% fee on bookings.</li>
          </ul>
        </div>
        <div className="package-card pro-package">
          <h3 className="package-title">$950/Year Professional Package</h3>
          <button className="package-btn">Start Professional Account</button>
          <h4 className="features-title">Additional Features:</h4>
          <ul className="features-list">
            <li>Company Logo: Boost your brand recognition with a professional logo.</li>
            <li>Detailed Company Description: Highlight your unique approach.</li>
            <li>Unlimited Staff Advertising: Showcase your team and specialties.</li>
            <li>20 Practitioner Types: Attract a wider range of clients.</li>
            <li>Unlimited Health Concerns: Comprehensive approach to mental health care.</li>
            <li>2 Company Videos: Help clients connect with your practice personally.</li>
            <li>Homepage Advertising: Increase visibility through recommendations.</li>
            <li>Priority Customer Support: Enjoy faster responses and support.</li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
};

export default FourthSection;
