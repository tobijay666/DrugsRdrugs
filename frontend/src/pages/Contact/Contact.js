import React from "react";
import "./Contact.css"; // Import your CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            We'd love to hear from you! Feel free to reach out using the
            information below, or fill out the contact form.
          </p>
          <div className="contact-info">
            <p>
              <i className="fas fa-envelope"></i> Email: drugsrdrugs@gmail.com
            </p>
            <p>
              <i className="fas fa-phone"></i> Phone: 011-22 222 87
            </p>
          </div>
          <form action="#" method="POST" className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
