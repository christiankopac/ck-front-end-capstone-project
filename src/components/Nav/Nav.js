import logo from "../../images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav>
      <a href="/">
        <img src={logo} alt="Little Lemon Logo" />
      </a>

      <a className="header--hamburger" onClick={toggleMenu} role="button">
        <MenuIcon />
      </a>

      <ul
        role="ul-navigation"
        className={`header--nav ${menuOpen ? "visible" : ""}`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/orders">Order Online</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
