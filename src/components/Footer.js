const Footer = () => {
  return (
    <footer>
      {/* logo */}
      <div>
        <img src="/logo.png" alt="Little Lemon Logo" />
      </div>
      {/* navigation */}
      <div>
        <h2>Explore</h2>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* contact */}
      <div>
        <h2>Visit Us</h2>
        <p>Little Lemon</p>
        <p>123 Main St</p>
        <p>Springfield, IL 62701</p>
        <p>United States</p>
        {/* add phone icon */}
        <p>123-456-7890</p>
        {/* add email icon */}
        <p>
          <a href="mailto:example@littlelemon.com">Email Us</a>
        </p>
      </div>
      {/* social media */}
      <div>
        <h2>Follow Us</h2>
        <a
          href="https://www.facebook.com/littlelemon"
          target="_blank"
          rel="noreferrer"
        >
          {/* add facebook icon */}
          <span>Facebook</span>
        </a>
        <a
          href="https://www.instagram.com/littlelemon"
          target="_blank"
          rel="noreferrer"
        >
          {/* add instagram icon */}
          <span>Instagram</span>
        </a>
        <a
          href="https://www.twitter.com/littlelemon"
          target="_blank"
          rel="noreferrer"
        >
          {/* add twitter icon */}
          <span>Twitter</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
