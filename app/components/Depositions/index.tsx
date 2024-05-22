"use client";
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DepositionsCards from './DepositionsCards';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


const Depositions = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
        <h1 className="heading">
            Depoimentos
        </h1>
        <div className="w-[80%] mt-[4rem] mx-auto">
            <Carousel 
            additionalTransfrom={0}
            arrows={true} 
            autoPlay={true}
            autoPlaySpeed={4000}
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass="item"
            showDots={false}
            >
                
               <DepositionsCards
                title="João Felipe"
                image="/images/d1.png" 
                reviews="5" 
                
                />

                <DepositionsCards
                title="Priscila Mendes"
                image="/images/d2.png" 
                reviews="5" 
                
                />

                <DepositionsCards
                title="Paola Oliveira"
                image="/images/d3.png" 
                reviews="5" 
                
                />

                <DepositionsCards
                title="Pedro Gomes"
                image="/images/d4.png" 
                reviews="5" 
                
                />

                <DepositionsCards
                title="Vinícius José"
                image="/images/d5.png" 
                reviews="5" 
                
                />

                <DepositionsCards
                title="Raynara Silva"
                image="/images/d6.png" 
                reviews="5" 
                
                />

                <DepositionsCards
                title="Amanda Flores"
                image="/images/d7.png" 
                reviews="5" 
                
                />

                <DepositionsCards
                title="Sabrina Matos"
                image="/images/d8.png" 
                reviews="5" 
                
                />

                <DepositionsCards
                title="Diogo Marcos"
                image="/images/d9.png" 
                reviews="5" 
                
                />

            </Carousel>
        </div>
    </div>
  )
}

export default Depositions