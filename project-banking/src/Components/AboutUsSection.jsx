import React from "react";
import "../styles/AboutUsSection.css";

export default function AboutUsSection() {
  return (
    <section className="aboutus-section" id="aboutus-section">
      <div className="aboutus-container">
        <div className="aboutus-main">
          <h2>About Us</h2>
          <p>
            PavitraBandham Cooperative Bank is dedicated to empowering trust and enabling growth for all our customers. Our mission is to provide reliable, innovative, and customer-centric banking solutions tailored to your needs. With a legacy of excellence and a commitment to community, we strive to make banking simple, secure, and accessible for everyone.
          </p>
        </div>
        <div className="aboutus-side">
          <div className="aboutus-card">
            <h4>Our Vision</h4>
            <p>To be the most trusted cooperative bank, fostering financial inclusion and prosperity.</p>
          </div>
          <div className="aboutus-card">
            <h4>Our Mission</h4>
            <p>Deliver innovative banking solutions with integrity, transparency, and care for our members.</p>
          </div>
          <div className="aboutus-card">
            <h4>Our Values</h4>
            <p>Trust, Customer Focus, Innovation, Community, and Excellence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
