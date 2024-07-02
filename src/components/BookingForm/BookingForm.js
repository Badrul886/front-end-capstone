import React, { useState, useRef, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./bookingForm.css";
import Modal from "../Modal/Modal";
import { act } from "react";
const initialState = {
  times: ["18:00", "19:00", "20:00", "21:00", "22:00"],
  selectedDate: new Date().toISOString().split("T")[0], // Default to today's date
  selectedTimes: {}, // Object to track selected times by date
};

function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, selectedDate: action.date };
    case "RESERVE_TIME":
      return {
        ...state,
        selectedTimes: {
          ...state.selectedTimes,
          [state.selectedDate]: [
            ...(state.selectedTimes[state.selectedDate] || []),
            action.time,
          ],
        },
      };
    default:
      return state;
  }
}





// function BookingForm({ availableTimes, dispatch }) {
  function BookingForm() {
    const [state, dispatch] = useReducer(updateTimes, initialState);
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    initializeTimes(state.selectedDate);
  }, [state.selectedDate]);

  const initializeTimes = (date) => {
    // You might want to use fetchAPI(date) here if it returns dynamic times
    // For now, we assume fixed times array in the state
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
    setSelectedTime(""); // Reset selected time when date changes
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setSelectedTime(selectedTime); // Temporarily set the selected time
  };

  const availableTimes = state.times.filter(
    (time) => !(state.selectedTimes[state.selectedDate] || []).includes(time)
  );

    const [reservationMade, setReservationMade] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showErrorModal, setShowErrorModal] = useState(false);
    const dateInputRef = useRef(null);
    const navigate = useNavigate();

    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      const today = new Date().setHours(0, 0, 0, 0);
      const selected = new Date(selectedDate).setHours(0, 0, 0, 0);

      if (selected < today) {
        setErrorMessage("You have selected a past date.");
        setShowErrorModal(true);
      } else {
        setReservationMade(true);
        setErrorMessage("");
      }
    if (selectedTime) {
      dispatch({ type: "RESERVE_TIME", time: selectedTime });
      // Submit form data here
      // submitAPI({ date: state.selectedDate, time: selectedTime });
      setSelectedTime(""); // Clear the selected time after submission
    }
    };

    const handleCloseModal = () => {
      if (reservationMade) {
        navigate("/");
      } else {
        setShowErrorModal(false);
        dateInputRef.current.focus();
      }
    };

    return (
      <div className="booking-form">
        <h1 data-testId="BookNow" className="booking-form-heading">
          Book Now
        </h1>
        <form
          style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            required
            value={state.selectedDate}
            onChange={handleDateChange}
            ref={dateInputRef}
            className={showErrorModal ? "error" : ""}
          />

          <label data-testId="ChooseTime" htmlFor="res-time">
            Choose time
          </label>
          <select
            id="time"
            name="time"
            value={selectedTime}
            onChange={handleTimeChange}
          >
            {/* <option value="">Select a time</option> */}
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>

          <label data-testId="NumOfGuests" htmlFor="guests">
            Number of guests
          </label>
          <input
            type="number"
            placeholder="0"
            min="1"
            max="100"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />

          <label data-testId="Occasion" htmlFor="occasion">
            Occasion
          </label>
          <select id="occasion" required>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>

          <input
            data-testid="bookingFormBtn"
            type="submit"
            value="Make Your reservation"
            className="reservation-button"
            role="tab"
            // onClick={handleReserve}
          />
        </form>

        {showErrorModal && (
          <Modal
            message="You selected a date that has already passed."
            onClose={handleCloseModal}
          />
        )}

        {reservationMade && (
          <Modal
            message="Your reservation is done!"
            onClose={handleCloseModal}
          />
        )}
      </div>
    );
  }

export default BookingForm;
