import React from 'react';
import './Header.css';
import '../../../style.css';

const Header = () => {
  return (
    <div id="header">
      <div className="background_color">
        <div className="content">
          <article>
            <h2 className="sub-title">Little Lemon</h2>
            <p
              className="lead-text"
              style={{
                color: 'white',
                marginTop: '-10px',
                marginBottom: '10px',
              }}
            >
              Chicago
            </p>
            <p
              className="sub-text"
              style={{ color: 'white', paddingBottom: '5px' }}
            >
              We are a family owned <br></br> Mediterranean restaurant,<br></br>
              focused on traditional <br></br> recipes served with a modern{' '}
              <br></br> twist.
            </p>
            <a href="/booking">
              <button
                className="button"
                style={{ cursor: 'pointer' }}
                aria-label="On Click"
              >
                Reserve a Table
              </button>
            </a>
          </article>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <img
              src="/icons_assets/restauranfood.jpg"
              alt=""
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
