import Mario_and_Adrian_A from "../images/Mario_and_Adrian_A.jpg";
import Mario_and_Adrian_B from "../images/Mario_and_Adrian_B.jpg";

function Main() {
  return (
    <>
      <div className="highlights">
        <h1>This Week Specials!</h1>
        <button>Online Menu</button>
        {/* card components here */}
      </div>
      <div className="testimonials">
        {/* testimonials components here */}
      </div>
      <div className="about">
        <h1 className="heading">Little Lemon</h1>
        <h2 className="sub-heading">Chicago</h2>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        <img src={Mario_and_Adrian_A} alt="Mario_and_Adrian" />
        <img src={Mario_and_Adrian_B} alt="Mario_and_Adrian" />
      </div>
    </>
  )
}

export default Main