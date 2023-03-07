import React from 'react';
import './Testimonials.css';
import Customer from './Customer';

const Testimonials = () => {
  return (
    <div id="Testimonials">
      <div
        style={{ fontWeight: 'Bold', fontSize: '28px', paddingBottom: '75px' }}
      >
        Testimonials
      </div>
      <div className="customers">
        <Customer
          name="Anna"
          imageSrc=".\icons_assets\restaurant chef B.jpg"
          rating={3}
          text="Wow"
        />
        <Customer
          name="Anna"
          imageSrc=".\icons_assets\restaurant chef B.jpg"
          rating={5}
          text="Wow"
        />
        <Customer
          name="Anna"
          imageSrc=".\icons_assets\restaurant chef B.jpg"
          rating={4}
          text="Best italien Pizza ever"
        />
        <Customer
          name="Anna"
          imageSrc=".\icons_assets\restaurant chef B.jpg"
          rating={3}
          text="Amazing"
        />
      </div>
    </div>
  );
};

export default Testimonials;
