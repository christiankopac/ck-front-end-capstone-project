import React from "react";
import "./BookingForm.css";
import { useState } from "react";
import { Button } from "../index";

const BookingForm = ({
  selectedDate,
  time,
  guests,
  occasion,
  availableTimes,
  onSelectedDateChange,
  onFormSubmit,
}) => {
  const MIN_GUESTS = 1;
  const MAX_GUESTS = 10;

  const [formValues, setFormValues] = useState({
    date: selectedDate,
    time: time || "",
    guests: guests || "",
    occasion: occasion || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(e, formValues);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    onSelectedDateChange(name, value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {selectedDate}
      <section className="booking">
        <div className="booking--container">
          <div className="booking--content">
            <p>
              Reserve your table at Little Lemon today! Whether you're planning
              a romantic dinner, a family meal, or a relaxed evening with
              friends, we look forward to welcoming you. Please fill out the
              form below to secure your reservation.
            </p>
          </div>
          <div className="booking--form">
            <form onSubmit={handleSubmit} role="form">
              {/* date */}
              <label arial-label="Date" htmlFor="res-date">
                Date
              </label>
              <input
                type="date"
                id="res-date"
                name="date"
                required
                value={formValues.date}
                onChange={handleDateChange}
              />
              {/* time */}
              <label aria-label="Time" htmlFor="res-time">
                Time
              </label>
              <div>
                {availableTimes.map((availableTime, i) => (
                  <div
                    aria-label={`${i}--${availableTime}`}
                    key={`${i}--${availableTime}`}
                  >
                    <input
                      type="radio"
                      id={availableTime}
                      name="time"
                      value={availableTime}
                      checked={formValues.time === availableTime}
                      onChange={handleInputChange}
                    />
                    <label htmlFor={availableTime}>{availableTime}</label>
                  </div>
                ))}
              </div>
              {/* Number of guests */}
              <label htmlFor="guests">Number of Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                required
                placeholder="1"
                min={MIN_GUESTS}
                max={MAX_GUESTS}
                value={formValues.guests}
                onChange={handleInputChange}
              />
              {/* Ocassion */}
              <label htmlFor="occasion">Ocassion</label>
              <select
                id="occasion"
                name="occasion"
                required
                value={formValues.occasion}
                onChange={handleInputChange}
              >
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="date">Date</option>
                <option value="other">Other</option>
              </select>
              {/* submit */}
              <button type="submit" onSubmit={handleSubmit}>
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingForm;
