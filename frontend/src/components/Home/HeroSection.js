import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div class="wrapper">
      <section class="hero-header">
        <div class="container">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <div class="brand">
                <h1 class="text-white">Drugs~R~Drugs</h1>
                <h5 class="text-uppercase mb-5">
                  Providing reliable insights into drug usage and patient care.
                </h5>
                <a
                  href="#download"
                  class="btn btn-outline-white btn-round page-scroll"
                >
                  <em class="fa fa-sign-in fa-fw"></em>
                  Login Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
