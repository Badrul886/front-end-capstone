import Mario_and_Adrian_A from "../../images/Mario_and_Adrian_A.jpg";
import Mario_and_Adrian_B from "../../images/Mario_and_Adrian_B.jpg";
import "./main.css";
import { saladData, testimonialData } from "../lib/data";
import Card from "../Highlights/Highlights";
import Testimonials from "../Testimonials/Testimonials";
import Grid from "../Grid/Grid";

function Main() {
  return (
    <div className="mainContainer">
      <section className="highlights highlightsSection">
        <div className="highlightsTitleSection">
          <h1 className="highlights-headline">This Week Specials!</h1>
          <button className="highlights-button">Online Menu</button>
        </div>

        {/* card components here */}
        <div className="highlights-card">
          {saladData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </section>

      <div className="testimonialSection">
        <section className="testimonial">
          {/* testimonials components here */}
          <h1 className="testimonial-headline">Testimonials</h1>
          <div className="testimonial-card">
            {testimonialData.map((item) => (
              <Testimonials key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>

      <section className="about">
        <div className="about-section1">
          <h1 className="about-heading">Little Lemon</h1>
          <h2 className="about-sub-heading">Chicago</h2>
          <article className="aboutDescription-1">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </article>
          <article className="aboutDescription-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </article>
        </div>
        <div className="about-image-section">
          {/* Using my custom grid component */}
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
  );
}

export default Main;
