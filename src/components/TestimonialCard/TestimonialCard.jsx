import { Rating } from "../index";
import "./TestimonialCard.css";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <Rating rating={testimonial.rating} />
      <div className="testimonial-profile">
        <img src={testimonial.image} alt={testimonial.name} />
        <h3>{testimonial.name}</h3>
      </div>
      <div className="testimonial-text">
        <blockquote>{testimonial.text}</blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard;
