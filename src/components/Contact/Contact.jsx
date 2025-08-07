import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Message Sent Successfully!');
    setFormData({ name: '', email: '', mobile: '', message: '' });
  };

  return (
    <div id="Contact" className="contact-page-wrapper">
    <div className="contact-page-wrapper">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you!</p>
      </div>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Get in Touch</h2>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email ID" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
          <textarea name="message" rows="4" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <button type="submit">Send Message</button>
        </form>

        <aside className="contact-map">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.156111496153!2d73.8118797748919!3d18.496260782593873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb6b6abee15%3A0xf60f9720b95207c1!2sWalchand%20House%2C%20Happy%20Colony%2C%20Warje%20Malwadi%20Rd%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411052!5e0!3m2!1sen!2sin!4v1691493204551!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </aside>
      </div>
    </div>
    </div>
  );
};

export default Contact;
