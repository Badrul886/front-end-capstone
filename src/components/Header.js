import restaurant from '../images/restauranfood.jpg';

function Header() {
  return (
    <>
      <h1 className="heading">Little Lemon</h1>
      <h2 className="sub-heading">Chicago</h2>
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      <img src={restaurant} alt="restaurant food" />
      <button>Reserve a Table</button>
    </>
  )
}

export default Header;