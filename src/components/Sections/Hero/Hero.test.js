import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./Hero";

// Test if the component renders correctly
test("renders Hero component", () => {
  render(
    <Router>
      <Hero />
    </Router>,
  );

  // Check if the title is displayed
  const title = screen.getByText(/Little Lemon/i);
  expect(title).toBeInTheDocument();

  // Check if the subtitle is displayed
  const subtitle = screen.getByText(/Chicago/i);
  expect(subtitle).toBeInTheDocument();

  // Check if the paragraph text is displayed
  const paragraph = screen.getByText(
    /Lorem ipsum dolor sit amet, consectetur adipiscing elit./i,
  );
  expect(paragraph).toBeInTheDocument();

  // Check if the "Reserve a table" button is displayed
  const button = screen.getByRole("button", { name: /Reserve a table/i });
  expect(button).toBeInTheDocument();

  // Check if the button has the correct link
  expect(button.closest("a")).toHaveAttribute("href", "/booking");

  // Check if the image is displayed
  const img = screen.getByAltText(/Hero/i);
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", "https://via.placeholder.com/400x400");
});
