import logo from '../images/logo.png';

function Footer() {
  const doormat = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"];
  const contact = ["Address", "phone number", "email"];
  const socialMedia = ["facebook", "X", "instagram"];

  return (
    <footer>
      <img src={logo} alt="little lemon logo" />
      <ul>
        {doormat.map((item) => (
          <li key={item}><a href="/">{item}</a></li>
        ))}
      </ul>
      <ul>
        {contact.map((item) => (
          <li key={item}><a href="/">{item}</a></li>
        ))}
      </ul>
      <ul>
        {socialMedia.map((item) => (
          <li key={item}><a href="/">{item}</a></li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer