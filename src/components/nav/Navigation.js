import React, { useState } from 'react';
import '../nav/Navigation.css';
import '../../style.css';
import { FaBars } from 'react-icons/fa';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navigation">
      <nav className="navbar">
        <div className="navbar-logo">
          {' '}
          <img src="/icons_assets/Logo.svg" alt="logo" className="logo" />
        </div>
        <ul className="nav_elements">
          <li className="card-title">
            <a href="/">Home</a>
          </li>
          <li className="card-title">
            <a href="/">About</a>
          </li>
          <li className="card-title">
            <a href="/">Menu</a>
          </li>
          <li className="card-title">
            <a href="/">Reservations</a>
          </li>
          <li className="card-title">
            <a href="/">Order Online</a>
          </li>
          <li className="card-title">
            <a href="/">Login</a>
          </li>
        </ul>
        <div className="collapsed">
          <ul className={showMenu ? 'navbar-menu active' : 'navbar-menu'}>
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="/about" className="navbar-link">
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="/menu" className="navbar-link">
                Menu
              </a>
            </li>
            <li className="navbar-item">
              <a href="/reservations" className="navbar-link">
                Reservations
              </a>
            </li>
            <li className="navbar-item">
              <a href="/order" className="navbar-link">
                Order Online
              </a>
            </li>
            <li className="navbar-item">
              <a href="/Login" className="navbar-link">
                Login
              </a>
            </li>
          </ul>

          <button className="navbar-toggle" onClick={toggleMenu}>
            <div>
              <FaBars
                style={{
                  width: '20px',
                  height: '20px',
                  color: 'black',
                  paddingTop: '-50px',
                }}
              />
            </div>
          </button>
        </div>
      </nav>
    </div>
    // <nav className="nav">
    //   <img src="/icons_assets/Logo.svg" alt="logo" className="logo" />
    //   <ul className="nav_elements">
    //     <li className="card-title">
    //       <a href="/">Home</a>
    //     </li>
    //     <li className="card-title">
    //       <a href="/">About</a>
    //     </li>
    //     <li className="card-title">
    //       <a href="/">Menu</a>
    //     </li>
    //     <li className="card-title">
    //       <a href="/">Reservations</a>
    //     </li>
    //     <li className="card-title">
    //       <a href="/">Order Online</a>
    //     </li>
    //     <li className="card-title">
    //       <a href="/">Login</a>
    //     </li>
    //   </ul>
    //   <div className="collapsed">
    //     <FaBars style={{ width: '20px', height: '20px' }} />
    //   </div>
    // </nav>
  );
};

export default Navigation;
