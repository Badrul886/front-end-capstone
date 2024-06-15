import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import About from '../ExtraPages/About';
import Menu from '../ExtraPages/Menu'
import Login from '../ExtraPages/Login'

function HomePage() {
  return (
    <>
      <Header />
      <Main />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default HomePage;