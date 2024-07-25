import logo from "../../images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav>
      <a href="/">
        <img src={logo} alt="Little Lemon Logo" />
      </a>

      <a className="header--hamburger" onClick={toggleMenu}>
        <MenuIcon />
      </a>

      <ul className={`header--nav ${menuOpen ? "visible" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservations</a>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
