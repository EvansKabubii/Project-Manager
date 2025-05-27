import React from 'react';
import './ImageSection.css';

function ImageSection() {
  return (
    <section className="image-section">
      {/* Replace the src below with your actual image path if needed */}
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Modern interior" className="main-image" />
    </section>
  );
}

export default ImageSection;
