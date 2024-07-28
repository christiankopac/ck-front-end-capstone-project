import { TestimonialCard } from "../../index";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      name: "John Doe",
      text: "I've been to Little Lemon multiple times and it never disappoints. The menu is always changing, but the quality of the food is always top-notch. I recently tried the seasonal vegetable risotto and it was incredible. The chef's attention to detail is impressive and the prices are very reasonable. Highly recommend!",
    },
    {
      rating: 4,
      name: "Jane Doe",
      text: "My family and I celebrated my birthday at Little Lemon last weekend and it was an unforgettable experience. The decor is warm and inviting, and the staff made us feel like royalty. The lemon bars for dessert were to die for! We'll definitely be back for more. Keep up the amazing work, Little Lemon team!",
    },
    {
      rating: 3,
      name: "John Smith",
      text: "I was blown away by the service at Little Lemon! Our server, Emma, was attentive and knowledgeable about the menu, and the food was absolutely divine. The lemon garlic shrimp was cooked to perfection and the atmosphere was cozy and intimate. Can't wait to come back!",
    },
    {
      rating: 5,
      name: "Jane Smith",
      text: "I'm a bit of a foodie and I'm always on the lookout for unique flavors and dishes. Little Lemon exceeded my expectations with their creative take on classic dishes. The grilled octopus was a highlight, with a perfect balance of smokiness and tanginess. The wine list is also impressive, with a great selection of whites and reds. The atmosphere is also lovely, with a cozy patio area and a fireplace. Can't wait to come back and try more of the menu!",
    },
  ];
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials--container">
        <h1 id="testimonials-heading">Testimonials</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              aria-label={`Testimonial from ${testimonial.name}`}
              data-testid="testimonial-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
