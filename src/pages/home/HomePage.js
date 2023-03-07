import React from 'react';
import Header from './header/Header';
import Specials from './specials/Specials';
import Testimonials from './testimonials/Testimonials';
import './HomePage.css';
import About from './about/About';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div className="homeContent">
        <Specials />
        <Testimonials />
        <About />
      </div>
    </div>
  );
};

export default HomePage;
