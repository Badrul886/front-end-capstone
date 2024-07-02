import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import { useState } from "react";
import "./nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Menu",
      path: "/menu",
    },
    {
      name: "Reservations",
      path: "/bookingPage",
    },
    {
      name: "Order Online",
      path: "/order-online",
    },
    { name: "Login", path: "/login" },
  ];

  return (
    <div className="navContainer">
      <nav className="nav">
        <Link to="/">
          <img className="logo" src={logo} alt="little-lemon logo" />
        </Link>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open lists" : "lists"}>
          {pages.map((page) => (
            <li className={page.name} key={page.name}>
              <NavLink to={page.path}>{page.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
