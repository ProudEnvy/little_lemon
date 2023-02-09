import React from 'react';
import './Card.css';
import '../../../style.css';

const Card = ({ title, price, content, imageSource }) => {
  return (
    <div id="card">
      <img src={imageSource} alt="" className="imageCard" />
      <div className="cardText">
        <div className="cardHeader">
          <p className="card-title">{title}</p>
          <p className="card-title" style={{ color: 'var(--secondary1)' }}>
            ${price}
          </p>
        </div>

        <p>{content}</p>
        <p className="card-title">
          Order a delivery{' '}
          <span>
            <img src="/icons_assets/dish icon.svg" alt="" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
