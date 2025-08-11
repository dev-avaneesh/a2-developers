import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import video1 from '../assets/video2.mp4';
import video2 from '../assets/new_c.mp4';
import video3 from '../assets/less.mp4';

const videos = [video1, video2, video3];

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000); // Change video every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="video-background">
        {videos.map((video, index) => (
          <video
            key={index}
            autoPlay
            loop
            muted
            className={index === currentVideoIndex ? 'active-video' : ''}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
      <div className="hero-content-wrapper">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Building Digital Excellence
              <span className="highlight"> Together</span>
            </h1>
            <p className="hero-subtitle">
              We create innovative web solutions that drive business growth and deliver exceptional user experiences.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">View Our Work</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-graphic">
              <div className="floating-card card-1">
                <span>🚀</span>
                <p>Fast & Reliable</p>
              </div>
              <div className="floating-card card-2">
                <span>💡</span>
                <p>Innovative</p>
              </div>
              <div className="floating-card card-3">
                <span>🎯</span>
                <p>Results-Driven</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;