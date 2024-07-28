import React from "react";
import { render, screen } from "@testing-library/react";
import Testimonials from "./Testimonials"; // adjust the path as necessary
import { TestimonialCard } from "../../index"; // adjust the path as necessary

// Mock the TestimonialCard component to simplify testing
jest.mock("../../index", () => ({
  TestimonialCard: jest.fn(({ testimonial }) => (
    <div data-testid="testimonial-card">
      <p>{testimonial.name}</p>
      <p>{testimonial.text}</p>
      <p>{testimonial.rating}</p>
    </div>
  )),
}));

describe("Testimonials", () => {
  test("renders without crashing", () => {
    render(<Testimonials />);
  });

  test("renders the heading 'Testimonials'", () => {
    render(<Testimonials />);
    expect(screen.getByText("Testimonials")).toBeInTheDocument();
  });
});
