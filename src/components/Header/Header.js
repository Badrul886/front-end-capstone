import restaurant from "../../images/restauranfood.jpg";
import Grid from "../Grid/Grid";
import "./header.css";

function Header() {
  return (
    <div className="headerContainer">
      <div className="header">
        <div className="headerLeftInfo">
          <h1 className="header-heading">Little Lemon</h1>
          <h2 className="header-sub-heading">Chicago</h2>
          <p className="description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="header-button">Reserve a Table</button>
        </div>
        <img className="image" src={restaurant} alt="restaurant food" />
        {/* </Grid> */}
      </div>
    </div>
  );
}

export default Header;
