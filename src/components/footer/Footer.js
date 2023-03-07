import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div style={{ alignSelf: 'center' }}>
        <img src="./icons_assets/Logo.svg" alt="" />
      </div>
      <div className="footerLinks">
        <div>
          <h3>Navigation</h3>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>{' '}
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="/">Adress</a>
            </li>
            <li>
              <a href="/">Phone Number</a>{' '}
            </li>
            <li>
              <a href="/">Email</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a href="/">Adress</a>
            </li>
            <li>
              <a href="/">Phone Number</a>
            </li>
            <li>
              <a href="/">Email</a>{' '}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
