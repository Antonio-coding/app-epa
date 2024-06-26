import React from 'react'

import Image from 'next/image'
import ImgPath from '@/constants/imgPath'


const Feature = () => {
    return (
        <div className="pt-[5rem] pb-[3rem]">
            {/* Heading */}
            <h1 className="heading">
                Aulas presenciais ou online
            </h1>
            {/* Cards */}
            <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1
        md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
                {/* 1st card */}
                <div>
                    <div className="p-6 hover:bg-white rounded-1g transition-all duration-200">
                        <Image src={ImgPath.Img1} width={500} height={500} alt="math" className="rounded-3xl" />
                        <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">Matemática</h1>
                        <p className="mt-[0.6rem] text-black text-opacity-60 text-sm text-justify leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente aut ad sint consequuntur, deserunt asperiores,
                            ratione amet quidem libero eum delectus ipsam enim qui quia reprehenderit necessitatibus
                            deleniti iusto error.</p>
                    </div>
                </div>
                {/* 2st card */}
                <div>
                    <div className="p-6 hover:bg-white rounded-1g transition-all duration-200">
                        <Image src={ImgPath.Img2} width={500} height={500} alt="physical" className="rounded-3xl" />
                        <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">Física</h1>
                        <p className="mt-[0.6rem] text-black text-opacity-60 text-sm text-justify leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente aut ad sint consequuntur, deserunt asperiores,
                            ratione amet quidem libero eum delectus ipsam enim qui quia reprehenderit necessitatibus
                            deleniti iusto error.</p>
                    </div>
                </div>
                {/* 3st card */}
                <div>
                    <div className="p-6 hover:bg-white rounded-1g transition-all duration-200">
                        <Image src={ImgPath.Img3} width={500} height={500} alt="english" className="rounded-3xl" />
                        <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">Inglês</h1>
                        <p className="mt-[0.6rem] text-black text-opacity-60 text-sm text-justify leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente aut ad sint consequuntur, deserunt asperiores,
                            ratione amet quidem libero eum delectus ipsam enim qui quia reprehenderit necessitatibus
                            deleniti iusto error.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature