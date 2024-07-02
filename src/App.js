import Nav from "./components/Nav/Nav";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./components/ExtraPages/About";
import Login from "./components/ExtraPages/Login";
import Menu from "./components/ExtraPages/Menu";
import BookingPage from "./components/BookingPage/BookingPage";

function App() {
  return (
    <div className="layout">
      <Nav />
      <Routes>
         <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookingPage" element={<BookingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
