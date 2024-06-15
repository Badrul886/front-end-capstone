import "./customersSay.css";

function CustomersSay({ item }) {
  return (
    <div className="customersSayContainer">
      <div className="insideCustomersSayContainer">
        <div className="customersSayRatingIcon">
          <span className="customersSayRating">{item.rating}</span>
          <img className="customersSayStar" src={item.icon} alt="star icon" />
        </div>
        <div className="customersSayImageName">
          <img
            className="customersSayImage"
            src={item.image}
            alt="reviewer pic"
          />
          <p className="customersSayName">{item.name}</p>
        </div>
        <p className="customersSayReview">{item.review}</p>
      </div>
    </div>
  );
}

export default CustomersSay;
