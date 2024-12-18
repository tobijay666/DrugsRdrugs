import React from "react";
import "./WhatWeDoSection.css";

const WhatWeDoSection = () => {
  return (
    <section className="what-we-do">
      <div className="container">
        <h2>What We Do</h2>
        <p>
          Providing personalized drug monitoring and data analysis for better
          healthcare outcomes.
        </p>
        <div className="row">
          <div className="col-md-4">
            <div className="feature-box">
              <h3>Track Patient Data</h3>
              <p>Analyze patient drug usage for better treatment plans.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-box">
              <h3>Secure and Reliable</h3>
              <p>Our platform ensures data security and reliability.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-box">
              <h3>Insights and Reports</h3>
              <p>Generate actionable insights from patient drug usage data.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
