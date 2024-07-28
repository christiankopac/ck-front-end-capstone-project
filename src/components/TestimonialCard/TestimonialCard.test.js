import React from "react";
import { render, screen } from "@testing-library/react";
import TestimonialCard from "./TestimonialCard";
import { Rating } from "../index";

// Mock the Rating component as it's imported from another module
jest.mock("../index", () => ({
  Rating: jest.fn(() => <div data-testid="rating-component" />),
}));

const dummyTestimonial = {
  rating: 4,
  image: "https://via.placeholder.com/150",
  name: "John Doe",
  text: "This is a wonderful product!",
};

describe("TestimonialCard Component", () => {
  // Reset mock before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly", () => {
    render(<TestimonialCard testimonial={dummyTestimonial} />);

    expect(screen.getByTestId("testimonial-card")).toBeInTheDocument();
  });

  test("renders testimonial image, name, and text", () => {
    render(<TestimonialCard testimonial={dummyTestimonial} />);

    const profileImage = screen.getByAltText(dummyTestimonial.name);
    const profileName = screen.getByText(dummyTestimonial.name);
    const testimonialText = screen.getByText(dummyTestimonial.text);

    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute("src", dummyTestimonial.image);
    expect(profileName).toBeInTheDocument();
    expect(testimonialText).toBeInTheDocument();
  });
});
