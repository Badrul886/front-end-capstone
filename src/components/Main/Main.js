import { useReducer } from "react";
import Mario_and_Adrian_A from "../../images/Mario_and_Adrian_A.jpg";
import Mario_and_Adrian_B from "../../images/Mario_and_Adrian_B.jpg";
import "./main.css";
import { saladData, testimonialData } from "../lib/data";
import Specials from "../Specials/Specials";
import CustomersSay from "../CustomersSay/CustomersSay";
import Grid from "../Grid/Grid";
import BookingForm from "../BookingForm/BookingForm";

// const availableTimesData = ["18:00", "19:00", "20:00", "21:00", "22:00"];

// const initializeTimes = () => {
//   return availableTimesData;
// };

// const updateTimes = (state, action) => {
//   switch (action.type) {
//     case "UPDATE_TIMES":
//       // Logic to update times based on selected date (action.date)
//       return availableTimesData; // For now, return the same times regardless of date
//     case "RESERVE_TIME":
//       return state.filter((time) => time !== action.reservedTime);
//     default:
//       return state;
//   }
// };

// const initializeTimes = () => {
//   return ["18:00", "19:00", "20:00", "21:00", "22:00"];
// };

// const updateTimes = (state, action) => {
//   switch (action.type) {
//     case "UPDATE_TIMES":
//       return initializeTimes();
//     case "RESERVE_TIME":
//       return state.filter((time) => time !== action.reservedTime);
//     default:
//       return state;
//   }
// };



function Main (){

  // const [availableTimes, dispatch] = useReducer(
  //   updateTimes,
  //   [],
  //   initializeTimes
  // );

  

  return (
    <>
      <div className="mainContainer">
        <section className="highlights highlightsSection">
          <div className="highlightsTitleSection">
            <h1 className="highlights-headline">This Week Specials!</h1>
            <button className="highlights-button">Online Menu</button>
          </div>

          <div className="highlights-card">
            {saladData.map((item) => (
              <Specials key={item.id} item={item} />
            ))}
          </div>
        </section>

        <div className="testimonialSection">
          <section className="testimonial">
            <h1 className="testimonial-headline">Testimonials</h1>
            <div className="testimonial-card">
              {testimonialData.map((item) => (
                <CustomersSay key={item.id} item={item} />
              ))}
            </div>
          </section>
        </div>

        <section className="about">
          <div className="about-section1">
            <h1 className="about-heading">Little Lemon</h1>
            <h2 className="about-sub-heading">Chicago</h2>
            <article className="aboutDescription-1">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </article>
            <article className="aboutDescription-2">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </article>
          </div>
          <div className="about-image-section">
            <Grid
              columns="repeat(17, 20px)"
              rows="repeat(25, 20px)"
              breakpoint1="800px"
              breakpoint1columns="repeat(13, 20px)"
              breakpoint1rows="repeat(18, 20px)"
              breakpoint2="545px"
              breakpoint2columns="repeat(10, 20px)"
              breakpoint2rows="repeat(13, 20px)"
            >
              <img
                className="about-imgA"
                src={Mario_and_Adrian_A}
                alt="Mario_and_Adrian"
              />
              <img
                className="about-imgB"
                src={Mario_and_Adrian_B}
                alt="Mario_and_Adrian"
              />
            </Grid>
          </div>
        </section>
      </div>
      {/* <BookingForm
        initializeTimes={initializeTimes()}
        updateTimes={updateTimes}
      /> */}
    </>
  );
}

export default Main;
