// Highlights.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Highlights } from "../index";

describe("Highlights Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <Highlights />
      </Router>,
    );
  });

  test("renders the Highlights heading", () => {
    const headingElement = screen.getByRole("heading", { name: /highlights/i });
    expect(headingElement).toBeInTheDocument();
  });

  test("renders the Online Menu button", () => {
    const buttonElement = screen.getByRole("button", { name: /online menu/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders the Greek Salad HighlightCard", () => {
    const greekSaladTitle = screen.getByText("Greek Salad");
    const greekSaladDescription = screen.getByText(
      /the famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutons./i,
    );
    expect(greekSaladTitle).toBeInTheDocument();
    expect(greekSaladDescription).toBeInTheDocument();
  });

  test("renders the Bruschetta HighlightCard", () => {
    const bruschettaTitle = screen.getByText("Bruschetta");
    const bruschettaDescription = screen.getByText(
      /our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil./i,
    );
    expect(bruschettaTitle).toBeInTheDocument();
    expect(bruschettaDescription).toBeInTheDocument();
  });

  test("renders the Lemon Dessert HighlightCard", () => {
    const lemonDessertTitle = screen.getByText(/lemon dessert/i);
    const lemonDessertDescription = screen.getByText(
      /this comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined./i,
    );
    expect(lemonDessertTitle).toBeInTheDocument();
    expect(lemonDessertDescription).toBeInTheDocument();
  });
});
