import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Singh <span className="logo-accent">Transport</span></h3>
          <p>Your trusted partner in road logistics and ethanol supply across India.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: singhtransport0032@gmail.com</p>
          <p>Location: India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Singh Transport. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
