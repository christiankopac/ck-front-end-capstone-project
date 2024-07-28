import { useNavigate } from "react-router-dom";
import { useReducer, useState } from "react";
import { fetchAPI } from "../../utils/Api";
import { BookingForm } from "../../components";
import "./Reservations.css";
import { Popup } from "../../components";

const Reservations = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "book":
        return state.filter((time) => time !== action.payload);
      case "cancel":
        return [...state, action.payload];
      case "update":
        return action.payload.length !== 0 ? action.payload : state;
      default:
        return state;
    }
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  const handleFormSubmit = (e, formValues) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    const areAllFieldsFilled = Object.values(formValues).every(
      (value) => value,
    );

    if (areAllFieldsFilled) {
      setIsPopupVisible(true);
    }
  };

  const updateTimes = async (name, value) => {
    setSelectedDate(value);
    const newTimes = await fetchAPI(new Date(value));
    dispatch({ type: "update", payload: newTimes });
  };

  const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
  ];

  const [availableTimes, dispatch] = useReducer(
    (state, action) => reducer(state, action),
    fetchAPI(new Date()),
    initializeTimes,
  );

  return (
    <section className="reservations" aria-label="Reservations Section">
      <div
        className="reservations--container"
        aria-label="Reservations Container"
      >
        <h1 aria-label="Reservations Title">Reservations</h1>
        <BookingForm
          selectedDate={selectedDate}
          onSelectedDateChange={updateTimes}
          availableTimes={availableTimes}
          onFormSubmit={(e, formValues) => {
            handleFormSubmit(e, formValues);
            if (Object.values(formValues).every((value) => value)) {
              setIsPopupVisible(true);
            }
          }}
          isFormSubmitted={isFormSubmitted}
        />
        {isPopupVisible && (
          <Popup
            title="Reservation Confirmed"
            description="Your reservation has been confirmed. We look forward to seeing you soon!"
            onClose={() => {
              setIsPopupVisible(false);
              navigate("/");
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Reservations;
