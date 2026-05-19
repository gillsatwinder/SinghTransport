import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Fueling India's Progress with <span className="highlight">Reliable Logistics</span>
        </h1>
        <p className="hero-subtitle">
          Specialized in secure, efficient, and timely transportation of Ethanol to OMCs across the nation. Your trusted partner in road logistics.
        </p>
        <div className="hero-actions">
          <a href="#services" className="btn btn-primary">Explore Services</a>
          <a href="#contact" className="btn btn-secondary glass">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
