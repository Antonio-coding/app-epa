import React from 'react';
import Link from 'next/link';
import { IoSearch } from "react-icons/io5";
import { HiMenu } from "react-icons/hi"; 

interface Props {
  openNav: () => void; 
}

const Nav: React.FC<Props> = ({ openNav }) => {
  return (

    <div className="h-[12vh] bg-white">
      <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between">
        {/* Logo Div */}
        <Link href="/">
          <img src="/images/logo.svg" alt="Logo" className="w-[4rem] h-[4rem] sm:w-[6rem] sm:h-[6rem] cursor-pointer" />
        </Link>

{/* Search Bar */}
<div className="hidden lg:flex flex-grow items-center justify-center">
  <div className="flex border-2 rounded-lg overflow-hidden">
    <button className="flex items-center justify-center px-4 bg-white text-blue-950">
      <IoSearch size={20} />
    </button>
    <input
      className="px-1 py-2 w-80 text-blue-950 focus:outline-none"
      type="text"
      placeholder="Buscar Aulas"
    />
  </div>
</div>
        {/* Nav Links */}
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex items-center space-x-10 text-blue-950">
          
            <li className="text-[20px] font-medium hover:text-primary-blue">
              <Link href="/">Home</Link>
            </li>
            <li className="text-[20px] font-medium hover:text-primary-blue">
              <Link href="/disciplinas">Disciplinas</Link>
            </li>
            <li className="text-[20px] font-medium hover:text-primary-blue">
              <Link href="/sobre">Sobre</Link>
            </li>
            <li className="text-[20px] font-medium hover:text-primary-blue">
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>
        {/* Buttons */}
        <div className='flex items-center space-x-4'>

            <button className="px-4 py-2 sm:px-6 sm:py-3 text-[12px] bg-primary-blue transition-all duration-200 hover:bg-red-700 flex items-center rounded-md space-x-2 text-white">
              <span className="font-bold text-base">Entrar</span>
            </button>
            <button className="px-4 py-2 sm:px-6 sm:py-3 text-[12px] bg-blue-950 transition-all duration-200 hover:bg-red-700 flex items-center rounded-md space-x-2 text-white">
              <span className="font-bold text-base">Cadastre-se</span>
            </button>
            <div onClick={openNav} className="lg:hidden w-[2rem] h-[2rem] text-black cursor-pointer">
              <HiMenu size={28} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
