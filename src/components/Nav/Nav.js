import logo from "../../images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav aria-label="Main Navigation">
      <a href="/">
        <img src={logo} alt="Little Lemon Logo" />
      </a>

      <a
        className="header--hamburger"
        onClick={toggleMenu}
        role="button"
        aria-label="menu"
      >
        <MenuIcon />
      </a>

      <ul
        role="ul-navigation"
        className={`header--nav ${menuOpen ? "visible" : ""}`}
      >
        <li>
          <Link to="/" aria-label="Home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" aria-label="About">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" aria-label="Menu">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reservations" aria-label="Reservations">
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/orders" aria-label="Order Online">
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" aria-label="Login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
