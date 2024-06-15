// import React from 'react'
import "./testimonials.css";

function Testimonials({ item }) {
  return (
    <div className="testimonialContainer">
      <div className="insideTestimonialContainer">
        <div className="testimonialRatingIcon">
          <span className="testimonialRating">{item.rating}</span>
          <img className="testimonialStar" src={item.icon} alt="star icon" />
        </div>
        <div className="testimonialImageName">
          <img
            className="testimonialImage"
            src={item.image}
            alt="reviewer pic"
          />
          <p className="testimonialName">{item.name}</p>
        </div>
        <p className="testimonialReview">{item.review}</p>
      </div>
    </div>
  );
}

export default Testimonials;
