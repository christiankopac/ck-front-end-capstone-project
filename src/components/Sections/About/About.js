import "./About.css";

const About = () => (
  <section className="about">
    <div className="about--container">
      <div className="about--content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Nestled in the heart of bustling Chicago, Little Lemon is where modern
          flair meets cozy nostalgia. Our diverse, artisanal menu, featuring
          delectable bruschettas, succulent burgers, and refreshing Greek
          salads, is a testament to our belief that food is an art. Crafted by
          expert chefs with locally-sourced ingredients, our dishes not only
          delight the palate but nourish the soul. Whether you're seeking a
          romantic dinner, a family meal, or a relaxed atmosphere with friends,
          Little Lemon is your ideal culinary destination. Find us in the heart
          of Chicago for an unforgettable experience.
        </p>
      </div>
      <div className="about--img">
        <img
          src="about-1.jpg"
          alt="Little Lemon Kitchen"
          aria-label="Little Lemon Kitchen"
        />
        <img
          src="about-2.jpg"
          alt="Little Lemon Team"
          aria-label="Little Lemon Team"
        />
      </div>
    </div>
  </section>
);

export default About;
