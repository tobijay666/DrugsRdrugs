import React from "react";
import "./About.css"; // Import your CSS file

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {" "}
              {/* Full-width for text content */}
              <h2>About Us</h2>
              <p>
                Welcome to DrugsRDrugs, your trusted source for information and
                resources related to pharmaceuticals and healthcare. We are
                dedicated to providing accurate, up-to-date, and reliable
                information to empower individuals to make informed decisions
                about their health.
              </p>
              <p>
                Our team consists of healthcare professionals, pharmacists, and
                writers with extensive experience in the pharmaceutical
                industry. We are committed to delivering content that is both
                informative and easy to understand.
              </p>
              <p>
                At DrugsRDrugs, we believe that access to clear and concise
                information is essential for maintaining good health. We strive
                to be a valuable resource for patients, caregivers, and
                healthcare providers alike.
              </p>
            </div>
          </div>
          <div className="row mt-4">
            {" "}
            {/* New row for mission/vision (optional) */}
            <div className="col-md-6">
              <h3>Our Mission</h3>
              <p>
                To empower individuals with knowledge and resources to make
                informed decisions about their health and well-being.
              </p>
            </div>
            <div className="col-md-6">
              <h3>Our Vision</h3>
              <p>
                To be the leading online resource for pharmaceutical and
                healthcare information, trusted by individuals and healthcare
                professionals worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
