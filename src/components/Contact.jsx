import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="contact-container glass">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Ready to streamline your supply chain? Contact us today for a reliable partnership.</p>
          
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
                <p>PunjabIndia</p>
              </div>
            </div>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          {status.message && (
            <div className={`alert alert-${status.type}`} style={{ padding: '10px', marginBottom: '15px', borderRadius: '5px', backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da', color: status.type === 'success' ? '#155724' : '#721c24' }}>
              {status.message}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message / Inquiry</label>
            <textarea id="message" value={formData.message} onChange={handleChange} rows="4" placeholder="How can we help your business?" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
