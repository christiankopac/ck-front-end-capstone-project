import React from "react";
import { render } from "@testing-library/react";
import { UnderConstruction } from "../index";

describe("UnderConstruction Component", () => {
  it("should render without crashing and display the correct message", () => {
    const { getByText, container } = render(<UnderConstruction />);

    // Check for the "Under Construction" heading
    const heading = getByText("Under Construction");
    expect(heading).toBeInTheDocument();

    // Snapshot test (optional, but useful for detecting unexpected changes)
    expect(container).toMatchSnapshot();
  });
});
