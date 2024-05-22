import React from "react";
import ResponsiveNav from '@/components/Navigation/ResponsiveNav';
import Hero from '@/components/Hero';
import Feature from '@/components/Features';
import Depositions from '@/components/Depositions';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';


const HomePage = () => {
  return (

    <>
      <ResponsiveNav />
      <div className="overflow-hidden bg-[#f4f1ea]">
        <Hero />
        <Feature />
        <Depositions />
        <Newsletter />
      </div>
      <Footer />
    </>
  )
};

export default HomePage;