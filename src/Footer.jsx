import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Yo Africa. All rights reserved.</p>
        <div className="footer-links">
          <a className="footer-link" href="/privacy-policy">Privacy Policy</a>
          <a className="footer-link" href="/terms-of-service">Terms of Service</a>
          <a className="footer-links" href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
