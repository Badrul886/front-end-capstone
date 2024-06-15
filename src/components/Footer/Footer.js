import logo from "../../images/logo.png";
import Grid from "../Grid/Grid";
import { Link, NavLink } from "react-router-dom";
import "./footer.css";

function Footer() {
  // const doormat = [
  //   "Home",
  //   "About",
  //   "Menu",
  //   "Reservations",
  //   "Order Online",
  //   "Login",
  // ];

  const doormat = [
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {name: "Menu", path: "/menu"},
    {name: "Reservations", path: "/reservations"},
    {name: "Order Online", path: "/order-online"},
    {name: "Login", path: "/login"},
  ]
  // const contact = ["Address", "phone number", "email"];
  const contact = [
    {name: "Address", path: "/address"},
    {name: "phone number", path: "/phone-number"},
    {name: "email", path: "/email"}
  ]
  // const socialMedia = ["facebook", "X", "instagram"];
  const socialMedia = [
    {name: "facebook", path: "/facebook"},
    {name: "X", path: "/x"},
    {name: "instagram", path: "/instagram"}
  ]

  return (
    <footer className="footer">
      <section className="footer-container">
        <Link to="/">
          <img className="footer-logo" src={logo} alt="little lemon logo" />
        </Link>
        <div className="footer-doormat">
          <h3 className="footer-doormat-heading">Doormat Navigation</h3>
          <ul className="footer-doormat footer-ul">
            {doormat.map((item) => (
              <li key={item.name}>
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-contact">
          <h3 className="footer-contact-heading">Contact</h3>
          <ul className="footer-contact footer-ul">
            {contact.map((item) => (
              <li key={item.name}>
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-social">
          <h3 className="footer-social-heading">Social Media Links</h3>
          <ul className="footer-social-media footer-ul">
            {socialMedia.map((item) => (
              <li key={item.name}>
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
