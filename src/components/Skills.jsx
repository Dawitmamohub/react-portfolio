import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90, color: '#61dafb' },
    { name: 'JavaScript', level: 85, color: '#f7df1e' },
    { name: 'HTML/CSS', level: 95, color: '#e34f26' },
    { name: 'Git', level: 85, color: '#f05032' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ 
                    width: `${skill.level}%`,
                    backgroundColor: skill.color
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
