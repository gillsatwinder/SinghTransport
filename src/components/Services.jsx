import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Ethanol Transport',
      description: 'Dedicated fleet for safe and timely supply of ethanol products directly from factories to OMC depots.',
      icon: '🚚'
    },
    {
      id: 2,
      title: 'OMC Blending Supply',
      description: 'Specialized logistics tailored for Oil Marketing Companies to support seamless petrol blending operations.',
      icon: '🛢️'
    },
    {
      id: 3,
      title: 'Road Transportation',
      description: 'Extensive road network coverage ensuring robust and reliable logistics solutions across India.',
      icon: '🛣️'
    }
  ];

  return (
    <section id="services" className="section bg-light">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card glass">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
