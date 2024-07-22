import logo from "../images/logo.svg";

const styles = {};

const Nav = () => {
  return (
    <nav style={styles.navigation}>
      {/* logo */}
      <a href="/">
        <img src={logo} alt="Little Lemon Logo" />
      </a>
      {/* mobile navigation icon */}
      <div className="hamburger">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* navigation items */}
      <ul style={styles.navigationItems}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Services</a>
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
