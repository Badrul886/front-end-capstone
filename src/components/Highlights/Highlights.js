// import React from 'react';
import "./highlights.css";

function Card({ item }) {
  return (
    <div className="cardContainer">
      <div className="cardImageContainer">
        <img className="cardImage" src={item.image} alt={item.title} />
      </div>
      <div className="cardInfoContainer">
        <div className="cardTitlePrice">
          <h4 className="cardTitle">{item.title}</h4>
          <span className="cardPrice">{item.price}</span>
        </div>
        <p className="cardDescription">{item.description}</p>
        <div className="cardDownlineHonda">
          <span className="cardDownline">{item.downLine}</span>
          <img className="card-honda-icon" src={item.icon} alt="honda icon" />
        </div>
      </div>
    </div>
  );
}

export default Card;
