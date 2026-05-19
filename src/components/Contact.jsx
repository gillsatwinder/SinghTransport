import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="contact-container glass">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Ready to streamline your ethanol supply chain? Contact us today for a reliable partnership.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">📧</span>
              <div>
                <strong>Email Us</strong>
                <p>singhtransport0032@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <div>
                <strong>Head Office</strong>
                <p>India</p>
              </div>
            </div>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message / Inquiry</label>
            <textarea id="message" rows="4" placeholder="How can we help your business?"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
