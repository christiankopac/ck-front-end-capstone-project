import React from "react";
import { render, screen } from "@testing-library/react";
import { HighlightCard } from "../index";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

describe("Card component", () => {
  it("should render the card with the correct content", () => {
    render(
      <HighlightCard
        imgSrc="test-image.jpg"
        title="Test Title"
        price="$10"
        description="Test Description"
        buttonText="Test Button"
      />,
    );

    expect(screen.getByAltText("Test Title image")).toBeInTheDocument();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });
});
