import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import Button from "../Button/Button";

describe("BookingForm component", () => {
  const defaultProps = {
    selectedDate: "2023-10-10",
    time: "",
    guests: "",
    occasion: "",
    availableTimes: ["12:00", "13:00", "14:00"],
    onSelectedDateChange: jest.fn(),
    onFormSubmit: jest.fn(),
  };

  it("should render all elements correctly", () => {
    render(<BookingForm {...defaultProps} />);

    expect(screen.getByLabelText("Date")).toBeInTheDocument();
    expect(screen.getByLabelText("Time")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of Guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Ocassion")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Book Now/i }),
    ).toBeInTheDocument();
  });

  it("should change date value", () => {
    const onSelectedDateChangeMock = jest.fn();
    render(
      <BookingForm
        {...defaultProps}
        onSelectedDateChange={onSelectedDateChangeMock}
      />,
    );

    const dateInput = screen.getByLabelText("Date");
    fireEvent.change(dateInput, { target: { value: "2023-10-11" } });

    expect(onSelectedDateChangeMock).toHaveBeenCalledWith("date", "2023-10-11");
    expect(dateInput.value).toBe("2023-10-11");
  });

  it("should change time value when a time is selected", () => {
    render(<BookingForm {...defaultProps} />);

    const timeRadio = screen.getByLabelText("12:00");
    fireEvent.click(timeRadio);

    expect(timeRadio.checked).toBeTruthy();
  });

  it("should change number of guests", () => {
    render(<BookingForm {...defaultProps} />);

    const guestInput = screen.getByLabelText("Number of Guests");
    fireEvent.change(guestInput, { target: { value: 5 } });

    expect(guestInput.value).toBe("5");
  });
});
