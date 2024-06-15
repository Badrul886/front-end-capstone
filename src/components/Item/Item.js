// import React from 'react';
import "./item.css";

function Card({ item }) {
  return (
    <div className="cardContainer">
      <div className="cardImageContainer">
        <img className="cardImage" src={item.image} alt={item.title} />
      </div>
      <h4 className="cardTitle">{item.title}</h4>
      <span className="cardPrice">{item.price}</span>
      <p className="cardDescription">{item.description}</p>
      <span className="cardDownline">{item.downLine}</span>
      <img className="card-honda-icon" src={item.icon} alt="honda icon" />
    </div>
  );
}

export default Card;
