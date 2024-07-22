import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => {
  return (
    <footer>
      <div className="footer--logo">
        <img src="/logo.png" alt="Little Lemon Logo" />
      </div>
      <div className="footer--nav">
        <h2>Navigation</h2>
        <nav>
          <ul>
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
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
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
        {/* add phone icon */}
        <p>
          <a href="tel:+1234567890" className="link--icon">
            <LocalPhoneIcon />
            +1 (234) 567-890
          </a>
        </p>
        <p>
          <a href="mailto:example@littlelemon.com" className="link--icon">
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
            >
              <XIcon />
              <span>Twitter</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
