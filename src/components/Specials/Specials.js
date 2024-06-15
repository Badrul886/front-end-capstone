// import React from 'react';
import "./specials.css";

function Specials({ item }) {
  return (
    <div className="specialsContainer">
      <div className="specialsImageContainer">
        <img className="specialsImage" src={item.image} alt={item.title} />
      </div>
      <div className="specialsInfoContainer">
        <div className="specialsTitlePrice">
          <h4 className="specialsTitle">{item.title}</h4>
          <span className="specialsPrice">{item.price}</span>
        </div>
        <p className="specialsDescription">{item.description}</p>
        <div className="specialsDownlineHonda">
          <span className="specialsDownline">{item.downLine}</span>
          <img
            className="specials-honda-icon"
            src={item.icon}
            alt="honda icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Specials;
