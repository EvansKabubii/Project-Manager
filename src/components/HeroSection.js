import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <h1 className="hero-title">Solve what<br />others can’t.</h1>
      <div className="hero-buttons">
        <button className="btn btn-primary">Learn more</button>
        <button className="btn btn-secondary">Get in touch</button>
      </div>
    </section>
  );
}

export default HeroSection;
