import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => (
  <section className="hero">
    <div className="hero--container">
      <div className="hero--content">
        <h1 style={{ padding: 0, margin: 0 }}>Little Lemon</h1>
        <h2 style={{ padding: 0, margin: 0 }}>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to="/booking">
          <button type="button">Reserve a table</button>
        </Link>
      </div>
      <div className="hero--img">
        <img src="https://via.placeholder.com/400x400" alt="Hero" />
      </div>
    </div>
  </section>
);

export default Hero;
