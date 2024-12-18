import React from "react";
import HeroSection from "../../components/Home/HeroSection";
import WhatWeDoSection from "../../components/Home/WhatWeDoSection";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <WhatWeDoSection />
    </div>
  );
};

export default Home;
