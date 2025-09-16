import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Dawit Mamo</h3>
            <p>Front End Developer passionate about creating innovative web solutions and bringing ideas to life.</p>
          </div>
          <div className="footer-section">

            <div className="social-icons">
              <a href="https://github.com/Dawitmamohub" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
              <a href="https://linkedin.com/in/dawit-mamo-40824520a" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
              <a href="https://twitter.com/Dawiittt" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
              <a href="Dawitmamoyou@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">Email</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Dawit Mamo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
