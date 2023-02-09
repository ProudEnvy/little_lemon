import React from 'react';
import '../nav/Navigation.css';
import '../../style.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <img src="/icons_assets/Logo.svg" alt="logo" className="logo" />
      <ul className="nav_elements">
        <li className="card-title">Home</li>
        <li className="card-title">About</li>
        <li className="card-title">Menu</li>
        <li className="card-title">Reservations</li>
        <li className="card-title">Order Online</li>
        <li className="card-title">Login</li>
      </ul>
    </nav>
  );
};

export default Navigation;
