import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              DrugsRDrugs is a platform dedicated to helping pharmacists track
              and analyze patients' drug usage effectively.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://facebook.com" className="footer-link">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="footer-link">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="footer-link">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-3" />
        <p className="mb-0">&copy; 2024 DrugsRDrugs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
