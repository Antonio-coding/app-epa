"use client";

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import Image from 'next/image';
import ImgPath from '@/constants/imgPath';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const Hero = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite responsive={responsive}
      itemClass="item"
      showDots={true}
    >
      {/*1st hero slide */}
      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-primary-blue md:clip_path">
        <div className="w-[70%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          {/* Image */}
          <Image src={ImgPath.ConectionImg1} width={500} height={500} alt="conection" className="hidden md:block md:ml-[-5rem]" />
          {/* information*/}
          <div>
            <h1 className="text-[40px] font-semibold text-blue-950">
              Ensine por amor!
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
              Comunidade <br />EPA!
            </h1>
            <p className="mt-[2rem] text-opacity-70 text-[16px] text-justify" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              Conectando pessoas que transformam o futuro, o Epa promove o ensino por amor,
              fortalecendo laços e acessibilidade educacional para todos. Junte-se a nós e
              faça  parte dessa transformação!
            </p>
            <button className="px-4 mt-[1.5rem] py-3 sm:px-6 sm:py-3 text-[20px] bg-blue-950 transition-all duration-200 hover:bg-red-700 flex items-center rounded-md space-x-2 text-white">
              <span className="font-bold text-base" >Comece agora!</span>
            </button>
          </div>
        </div>
      </div>

      {/*2st hero slide */}

      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 md:clip_path">
        <div className="w-[70%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          {/* Image */}
          <Image src={ImgPath.GirlImg2} width={500} height={500} alt="girl" className="hidden md:block" />
          {/* information*/}
          <div>
            <h1 className="text-[40px] font-semibold text-primary-blue">
              Aprenda por amor!
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
              Comunidade <br />EPA!
            </h1>
            <p className="mt-[2rem]  text-white text-[16px] text-justify" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              Conectando pessoas que transformam o futuro, o Epa promove o ensino por amor,
              fortalecendo laços e acessibilidade educacional para todos. Junte-se a nós e
              faça  parte dessa transformação!
            </p>
            <button className="px-4 mt-[1.5rem] py-3 sm:px-6 sm:py-3 text-[20px] bg-primary-blue duration-200 hover:bg-red-700 flex items-center rounded-md space-x-2 text-white">
              <span className="font-bold text-base" style={{ textShadow: '1px 0 0 rgba(0,0,0,0.1), 0 1px 0 rgba(0,0,0,0.1), -1px 0 0 rgba(0,0,0,0.1), 0 -1px 0 rgba(0,0,0,0.1)' }}>Comece agora!</span>
            </button>
          </div>
        </div>
      </div>


    </Carousel>
  )
}

export default Hero