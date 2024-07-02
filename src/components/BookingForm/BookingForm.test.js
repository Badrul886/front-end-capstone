import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { MemoryRouter } from "react-router-dom";

test("Renders the BookingForm heading", () => {
  render(
    <MemoryRouter>
      <BookingForm />
    </MemoryRouter>
  );
  const headingElement = screen.getByTestId("BookNow");
  expect(headingElement).toBeInTheDocument();
});
test("Renders the Choose Time label", () => {
  render(
    <MemoryRouter>
      <BookingForm />
    </MemoryRouter>
  );
  const headingElement = screen.getByTestId("ChooseTime");
  expect(headingElement).toBeInTheDocument();
});
test("Renders the Number of Guests label", () => {
  render(
    <MemoryRouter>
      <BookingForm />
    </MemoryRouter>
  );
  const headingElement = screen.getByTestId("NumOfGuests");
  expect(headingElement).toBeInTheDocument();
});
test("Checks whether the occasion options are available", () => {
  render(
    <MemoryRouter>
      <BookingForm />
    </MemoryRouter>
  );
  const headingElement = screen.getByTestId("Occasion");
  expect(headingElement).toBeInTheDocument();
});