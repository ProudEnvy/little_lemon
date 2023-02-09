import React from 'react';
import Header from './header/Header';
import Specials from './specials/Specials';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="homeContent">
        <Specials />
      </div>
    </div>
  );
};

export default HomePage;
