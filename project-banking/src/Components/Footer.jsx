import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
 
export default function Footer() {
  return (
    <footer className="footer" id="footer-contact">
      <div className="footer-content">
        <div className="footer-section">
          <h4>PavitraBandham Cooperative Bank</h4>
          <p>© 2026 Your Company Name</p>
        </div>
        <div className="footer-section">
          <h4>Contact Information</h4>
          <ul>
            <li>Telephone: <a href="tel:+911234567890">+91 12345 67890</a></li>
            <li>Email: <a href="mailto:info@pavitrabandham.com">info@pavitrabandham.com</a></li>
            <li>Address: 123, Main Road, Hyderabad, India</li>
            <li>Working Hours: Mon-Fri, 9am - 6pm</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}