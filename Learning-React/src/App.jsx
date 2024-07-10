import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from './components/Featured';
import Reviews from './components/Reviews';
import Cards from './components/Cards';
import Footer from './components/Footer';
 import LocomotiveScroll from "locomotive-scroll";

function App() {
 

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=" w-full min-h-screen overflow-hidden  text-[#212121] bg-[#F1F1F1] ">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Reviews />
      <Cards />
      <Footer />
    </div>
  );
}

export default App

