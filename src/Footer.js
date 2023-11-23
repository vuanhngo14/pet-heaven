import React from 'react';


const Footer = () => {
  return (
    <footer className="footer-container">

      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@petrescue.sg</p>
          <p>Phone: (65) 8883 6627</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>Facebook | Twitter | Instagram</p>
        </div>
        <div className="footer-section">
          <h4>Visit Us</h4>
          <p>461 Clementi Road</p>
          <p>Singapore </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Pet Rescue. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;
