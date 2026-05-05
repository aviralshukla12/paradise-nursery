import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Paradise Nursery</h1>
      <p className="about-description">
        Welcome to Paradise Nursery, your premier destination for houseplants,
        garden decor, and botanical accessories. We are passionate about bringing
        nature into your home.
      </p>
      <h2>Our Mission</h2>
      <p>
        At Paradise Nursery, we believe that everyone deserves a green and
        thriving home environment. Our mission is to provide high-quality plants
        and expert guidance to plant enthusiasts of all levels.
      </p>
      <h2>Our Story</h2>
      <p>
        Founded in 2020, Paradise Nursery started as a small family-owned nursery
        and has grown into a trusted online plant shop serving customers across
        the globe. We source our plants from the best growers and ensure each
        plant is healthy and delivered with care.
      </p>
      <h2>Why Choose Us?</h2>
      <ul className="reasons-list">
        <li>Wide variety of houseplants and succulents</li>
        <li>Expert plant care advice and resources</li>
        <li>Sustainable packaging and eco-friendly practices</li>
        <li>Fast and secure delivery</li>
        <li>Dedicated customer support</li>
      </ul>
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: contact@paradisenursery.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Green Street, Garden City, CA 90210</p>
      </div>
    </div>
  );
};

export default AboutUs;
