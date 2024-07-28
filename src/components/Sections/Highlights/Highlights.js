import { HighlightCard } from "../../index";
import { Link } from "react-router-dom";
import "./Highlights.css";

const Highlights = () => (
  <section className="highlights">
    <div className="highlights--container">
      <div className="highlights--header">
        <h1>Highlights</h1>
        <Link to="/menu">
          <button>Online Menu </button>
        </Link>
      </div>
      <div className="highlights--content">
        <HighlightCard
          imgSrc="greek-salad.webp"
          imgAlt="Greek Salad Image"
          title="Greek Salad"
          price="$12.99"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        />
        <HighlightCard
          imgSrc="bruschetta.avif"
          imgAlt="Bruschetta Image"
          title="Bruschetta"
          price="$9.99"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        />
        <HighlightCard
          imgSrc="lemon-dessert.jpg"
          imgAlt="Lemon Dessert Image"
          title="Lemon Dessert"
          price="$6.99"
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </div>
  </section>
);

export default Highlights;
