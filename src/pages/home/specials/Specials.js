import React from 'react';
import '../../../style.css';
import './Specials.css';
import Card from './Card';

const Specials = () => {
  var greekText =
    'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.';
  var bruchettaText =
    'Our Bruschetta is made from grilled bread taht has been smeared with salt and olive oil.';
  var lemonText =
    "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined";

  return (
    <div id="specials">
      <div className="headline">
        <h2 className="sub-title" style={{ color: 'black' }}>
          This weeks specials!
        </h2>
        <div style={{ display: 'block', marginBlock: 'auto' }}>
          <button onClick={() => console.log('hello')} className="button">
            Online Menu
          </button>
        </div>
      </div>
      <div className="special_cards">
        <Card
          title="Greek salad"
          price="12.99"
          content={greekText}
          imageSource="/icons_assets/greek_salad.jpg"
        ></Card>
        <Card
          title="Bruchetta"
          price="5.99"
          content={bruchettaText}
          imageSource="/icons_assets/bruchetta.svg"
        ></Card>
        <Card
          title="Lemon Dessert"
          price="5.00"
          content={lemonText}
          imageSource="/icons_assets/lemon dessert.jpg"
        ></Card>
      </div>
    </div>
  );
};

export default Specials;
