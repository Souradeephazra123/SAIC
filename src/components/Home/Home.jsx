import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Activities from "../Activities/Activities";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
