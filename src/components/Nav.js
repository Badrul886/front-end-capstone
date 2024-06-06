import logo from '../images/logo.png';


function Nav() {
  const pages = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"];

  return (
    <nav>
      <img src={logo} alt="little-lemon logo" />
      <ul>
        {pages.map((page) => (
          <li key={page}><a href="/">{page}</a></li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav