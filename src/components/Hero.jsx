import React from 'react';
import './Hero.css';
import devPhoto from '../assets/Dev.jpg';

const Hero = () => {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm <span className="highlight">Dawit</span></h1>
          <h2>Front End Developer</h2>
          <p>
            I create beautiful, responsive web applications with modern
              technologies. Passionate about clean code, user experience, and
              bringing designs to life.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
<img src={devPhoto} alt="Dawit - Front End Developer" className="profile-photo" loading="lazy" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
