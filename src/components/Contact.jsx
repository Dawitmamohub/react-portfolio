import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_so2lihu',
      'template_sqskkr',
      formData,
      'Y71Yq-CRN_FexFYoTq'
    ).then((response) => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      alert('Failed to send message, please try again later.');
      console.error('EmailJS error:', error);
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>Dawitmamoyou@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+251 934401984</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
