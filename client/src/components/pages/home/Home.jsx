import React from "react";
import "./home.scss";
import News from "../../features/news/News";
import Navbar from "../../features/navbar/Navbar";
import About from "../../features/about/About";
import Contact from '../contact/Contact'
const Home = () => {
  return (
    <>
      <About />
      <News />
      <Contact/>
    </>
  );
};

export default Home;
