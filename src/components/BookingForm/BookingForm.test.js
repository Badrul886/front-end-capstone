import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
// import {
//   initializeTimes,
//   availableTimesData,
//   updateTimes,
// } from "./BookingForm";
import { initializeTimes, updateTimes } from "./BookingForm";
import { MemoryRouter } from "react-router-dom";

test("Renders the BookingForm heading", () => {
  render(
    <MemoryRouter>
      <BookingForm />
    </MemoryRouter>
  );
  const headingElement = screen.getByTestId("BookNow");
  expect(headingElement).toBeInTheDocument();
  // const selectedDate = "2023-03-15"; // Note: you need to provide a valid date string
  // const initialState = ["18:00", "19:00", "20:00", "21:00", "22:00"];
  // expect(initialState).toEqual(initializeTimes());
  // const time = updateTimes(initialState, {
  //   type: "UPDATE_TIMES",
  //   date: selectedDate,
  // });
  // expect(time).toEqual(initializeTimes());
});