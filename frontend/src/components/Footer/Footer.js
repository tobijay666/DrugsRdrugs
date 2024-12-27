import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark py-4">
      {" "}
      {/* Removed text-light from here */}
      <div className="container">
        <hr className="my-3 border-light" /> {/* Added border-light */}
        <p className="mb-0 text-center text-white">
          &copy; 2024 DrugsRDrugs. All rights reserved.
        </p>{" "}
      </div>
    </footer>
  );
};

export default Footer;
