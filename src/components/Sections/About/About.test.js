import React from "react";
import { render } from "@testing-library/react";
import About from "./About";

describe("About Component", () => {
  it("should render without crashing", () => {
    const { getByText, getByAltText, container } = render(<About />);

    // Check for main heading
    const mainHeading = getByText("Little Lemon");
    expect(mainHeading).toBeInTheDocument();

    // Check for subheading
    const subHeading = getByText("Chicago");
    expect(subHeading).toBeInTheDocument();

    // Check for paragraph text
    const paragraph = getByText(
      /Nestled in the heart of bustling Chicago, Little Lemon is where modern flair meets cozy nostalgia./,
    );
    expect(paragraph).toBeInTheDocument();

    // Check for images
    const kitchenImage = getByAltText("Little Lemon Kitchen");
    expect(kitchenImage).toBeInTheDocument();
    const teamImage = getByAltText("Little Lemon Team");
    expect(teamImage).toBeInTheDocument();

    // Snapshot test (optional, but useful for detecting unexpected changes)
    expect(container).toMatchSnapshot();
  });
});
