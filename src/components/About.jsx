import React from 'react'
import '../styles/About.css'

const About = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2 className="section-title">About A2 Developers</h2>
              <p className="section-subtitle">
                We are a passionate team of developers, designers, and innovators dedicated to creating exceptional digital experiences.
              </p>
            </div>
            
            <div className="about-description">
              <p>
                Founded with a vision to bridge the gap between technology and business success, 
                A2 Developers has been at the forefront of digital innovation. Our team combines 
                technical expertise with creative problem-solving to deliver solutions that exceed expectations.
              </p>
              <p>
                We believe in building long-term partnerships with our clients, understanding their 
                unique challenges, and crafting tailored solutions that drive measurable results. 
                From startups to enterprise-level organizations, we've helped businesses transform 
                their digital presence and achieve their goals.
              </p>
            </div>

            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">🎯</span>
                <div>
                  <h4>Mission-Driven</h4>
                  <p>We're committed to delivering excellence in every project</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">🤝</span>
                <div>
                  <h4>Client-Focused</h4>
                  <p>Your success is our priority, every step of the way</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">🚀</span>
                <div>
                  <h4>Innovation-First</h4>
                  <p>We stay ahead with cutting-edge technologies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
