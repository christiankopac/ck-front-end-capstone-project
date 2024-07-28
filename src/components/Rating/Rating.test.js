import React from "react";
import { render, screen } from "@testing-library/react";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Rating } from "../index";

describe("Rating component", () => {
  it("should render the correct number of stars", () => {
    const rating = 5;
    render(<Rating rating={rating} />);

    const stars = screen.getAllByTestId("StarRateIcon");
    expect(stars.length).toBe(rating);
  });

  it("should not render any stars if rating is 0", () => {
    const rating = 0;
    render(<Rating rating={rating} />);

    const stars = screen.queryAllByTestId("StarRateIcon");
    expect(stars.length).toBe(0);
  });

  it("should apply the correct style to each star", () => {
    const rating = 3;
    render(<Rating rating={rating} />);

    const stars = screen.getAllByTestId("StarRateIcon");
    stars.forEach((star) => {
      expect(star).toHaveStyle({ color: "#f8d64e", fontSize: "1.5rem" });
    });
  });
});
