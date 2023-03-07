import React from 'react';
import './Customer.css';

const Customer = ({ rating, name, imageSrc, text }) => {
  return (
    <div id="customer">
      <div className="textCostumer">Rating: {rating}/5</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        <img
          src={imageSrc}
          alt={imageSrc}
          style={{
            width: '100px',
            height: '100px',
            objectFit: 'cover',
            borderRadius: '12px',
          }}
        />
        <div className="textCostumer">{name}</div>
      </div>

      <div>{text}</div>
    </div>
  );
};

export default Customer;
