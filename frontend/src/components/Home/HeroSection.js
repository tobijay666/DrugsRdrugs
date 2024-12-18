import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>Welcome to DrugsRDrugs</h1>
        <p>Providing reliable insights into drug usage and patient care.</p>
        <a href="/about" className="btn btn-primary">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
