import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer--container">
        <div className="footer--logo">
          <img src="/logo-white.png" alt="Little Lemon Logo" />
        </div>
        <div className="footer--nav">
          <h2>Navigation</h2>
          <nav>
            <ul>
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
        </div>
        <div className="footer--contact">
          <h2>Contact</h2>
          <p>Little Lemon</p>
          <address>
            <p>123 Main St</p>
            <p>Springfield, IL 62701</p>
            <p>United States</p>
          </address>
          <p>
            <a
              href="tel:+1234567890"
              className="link--icon"
              aria-label="Phone number +1 (234) 567-890"
            >
              <LocalPhoneIcon />
              +1 (234) 567-890
            </a>
          </p>
          <p>
            <a
              href="mailto:example@littlelemon.com"
              className="link--icon"
              aria-label="Email example@littlelemon.com"
            >
              <EmailIcon />
              Email Us
            </a>
          </p>
        </div>
        <div className="footer--social">
          <h2>Social Media</h2>
          <ul>
            <li>
              <a
                className="link--icon"
                href="https://www.facebook.com/littlelemon"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                className="link--icon"
                href="https://www.instagram.com/littlelemon"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                className="link--icon"
                href="https://www.twitter.com/littlelemon"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <XIcon />
                <span>Twitter</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
