import React from 'react'

const Newsletter = () => {
  return (
    <div className="pt-[5rem] pb-[5rem]">
        <div className="text-center">
            <h1 className="text-[28px] sm:text-[38px] md:text-[30px] text-black font-bold">
                Receba novidades por e-mail
            </h1>
            <p className="mt-4 text-black text-opacity-70 w-[85%] md:w-[60%] mx-auto text-[15px]" style={{ fontFamily: 'Helvetica, Arial, sans-serif'}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos voluptatum aliquid 
                qui fugit, maiores aspernatur repellat impedit, consectetur accusantium sunt suscipit
                quaerat perferendis praesentium alias deleniti repudiandae incidunt ipsa numquam.
        
            </p>
            <div className="flex items space-x-2 mt-[3rem] justify-center">
                {/* input */}
                <input 
                type="email" 
                placeholder= "Digite seu e-mail" 
                className="px-5 py-4 bg-gray-400 w-[40%] outline-none rounded-lg placeholder:text-black" />
                {/* subscribe button */}
                <button className="px-8 py-4 bg-blue-950 hover:bg-red-700 transition-all duration-200
                rounded-md text-white font-bold">Inscreva-se</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter