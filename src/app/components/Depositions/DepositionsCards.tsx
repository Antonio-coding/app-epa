import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';

interface Props {
    title: string;
    image: string;
    reviews: string;

}

const DepositionsCards = ({ image,reviews,title }:Props) => {
  return (
    <div className="bg-white p-6 rounded-lg m-3">
        {/* Image div */}
        <div className="w-[200px] mx-auto h-[200px]">
           <Image
            src={image}
            alt={title} 
            width={200}
            height={200}
            className="w-[100%] h-[100%] object-cover" />
        </div>  
         {/* title */}
        <h1 className="mt-[1.3rem] text-[22px] text-black font-semibold">
            {title}
        </h1>  
        <div className="flex items-center mt-[0.5rem] space-x-3">
            <div className="flex items-center">
                <div className="w-[1rem] h-[1rem] text-yellow-600">
                <FaStar />  
                </div> 
                <div className="w-[1rem] h-[1rem] text-yellow-600">
                <FaStar />  
                </div> 
                <div className="w-[1rem] h-[1rem] text-yellow-600">
                <FaStar />  
                </div> 
                <div className="w-[1rem] h-[1rem] text-yellow-600">
                <FaStar />  
                </div> 
                <div className="w-[1rem] h-[1rem] text-yellow-600">
                <FaStar />  
                </div>         
            </div>
            <div className="text-black opacity-80">({reviews})</div>
        </div>
        <p className="mt-[0.5rem] text-black text-opacity-70">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
    </div>
  )
}

export default DepositionsCards