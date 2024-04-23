import React from "react";
import Home from "./components/Home";
import Depositions from "./components/Depositions";
import Feature from "./components/Features";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";

const HomePage = () => {
  return (

    <>
      <div className="overflow-hidden bg-[#f4f1ea]">
        <Hero />
        <Feature />
        <Depositions />
        <Newsletter />
      </div>
    </>
  )
};

export default HomePage;