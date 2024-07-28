import React from "react";
import "./BookingForm.css";
import { useState } from "react";

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

  const [errors, setErrors] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      date: !formValues.date,
      time: !formValues.time,
      guests: !formValues.guests,
      occasion: !formValues.occasion,
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      onFormSubmit(e, formValues);
    }
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

  const isFormValid =
    formValues.date &&
    formValues.time &&
    formValues.guests &&
    formValues.occasion;

  return (
    <>
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
            <form onSubmit={handleSubmit}>
              <div className="form-date">
                <label htmlFor="res-date">Date</label>
                <input
                  aria-label="Date"
                  type="date"
                  id="res-date"
                  name="date"
                  required
                  value={formValues.date}
                  onChange={handleDateChange}
                />
              </div>
              {errors.date && (
                <span className="error">Please select a date</span>
              )}
              <div className="form-time">
                <label aria-label="Time" htmlFor="res-time">
                  Time
                </label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                    width: "100%",
                  }}
                >
                  {[...new Set(availableTimes)].map((availableTime, i) => (
                    <div
                      aria-label={`${i}--${availableTime}`}
                      key={`${i}--${availableTime}`}
                    >
                      <input
                        type="radio"
                        id={`${i}-${availableTime}`}
                        name="time"
                        value={availableTime}
                        checked={formValues.time === availableTime}
                        onChange={handleInputChange}
                      />
                      <label htmlFor={availableTime}>{availableTime}</label>
                    </div>
                  ))}
                </div>
              </div>
              {errors.time && (
                <span className="error">Please select a time</span>
              )}
              <div className="form-guests">
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
              </div>
              {errors.guests && (
                <span className="error">Please enter the number of guests</span>
              )}
              <div className="form-occasion">
                <label aria-label="Ocassion" htmlFor="occasion">
                  Occasion
                </label>
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
              </div>

              {errors.occasion && (
                <span className="error">Please select an occasion</span>
              )}

              {/* submit */}
              <button
                type="submit"
                onSubmit={handleSubmit}
                aria-label="Book Now"
              >
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
