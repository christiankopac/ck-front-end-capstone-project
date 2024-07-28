import { Rating } from "../index";
import "./TestimonialCard.css";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="testimonial-card"
      data-testid="testimonial-card"
      aria-label="Testimonial Card"
    >
      <Rating
        rating={testimonial.rating}
        aria-label={`Rating: ${testimonial.rating} out of 5`}
      />
      <div className="testimonial-profile" aria-label="Profile Information">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          aria-label={`Image of ${testimonial.name}`}
        />
        <h3 aria-label="Testimonial Author">{testimonial.name}</h3>
      </div>
      <div className="testimonial-text" aria-label="Testimonial Text">
        <blockquote>{testimonial.text}</blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard;
