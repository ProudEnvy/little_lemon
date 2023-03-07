import React from 'react';
import './About.css';

const About = () => {
  return (
    <article id="about">
      <div>
        <h2 style={{ color: 'black', fontSize: '32px' }}>Little Lemon</h2>
        <h1>Chicago</h1>
        <div>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.{' '}
        </div>
      </div>
      <div class="image-stack">
        <div class="image-stack__item image-stack__item--top">
          <img
            src="./icons_assets/restaurant.jpg"
            alt="A portrait of a girl under hanging flowers."
            className="imageAbout"
          />
        </div>
        <div class="image-stack__item image-stack__item--bottom">
          <img
            src="./icons_assets/restauranfood.jpg"
            alt=""
            className="imageAbout"
          />
        </div>
      </div>
    </article>
  );
};

export default About;
