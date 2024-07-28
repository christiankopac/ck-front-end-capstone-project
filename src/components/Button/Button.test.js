import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("should render the button with the correct title", () => {
    render(<Button title="Click Me" type="button" />);
    expect(
      screen.getByRole("button", { name: /Click Me/i }),
    ).toBeInTheDocument();
  });

  it("should call onClick handler when button is clicked", () => {
    const onClickMock = jest.fn();
    render(<Button title="Click Me" type="button" onClick={onClickMock} />);

    fireEvent.click(screen.getByRole("button", { name: /Click Me/i }));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should not prevent default if type is submit", () => {
    const preventDefaultMock = jest.fn();

    render(<Button title="Submit" type="submit" />);
    const button = screen.getByRole("button", { name: /Submit/i });

    fireEvent.click(button, { preventDefault: preventDefaultMock });
    expect(preventDefaultMock).not.toHaveBeenCalled();
  });
});
