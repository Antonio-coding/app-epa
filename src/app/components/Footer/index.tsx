import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'
import Image from 'next/image';
import Logo from '../../../../public/images/logo_footer.svg';

const Footer = () => {
  return (
    <>
      <div className="pt-[5rem] pb-[3rem] bg-gray-900">
        <div className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid 
        grid-cols-1 md-grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start">
          {/* 1st part */}
          <div>
            {/* Logo */}
            <Link href="/">
              <Image height={500} width={500} src={Logo} alt="Logo" className="mt-[-1rem] h-[4rem] sm:w-[6rem] sm:h-[6rem] cursor-pointer" />
            </Link>

            <p className="text-white text-opacity-60 mt-[0.4rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos quis.
            </p>
            <p className="mt-[1rem] text-white">suporte@epa.com.br</p>
            <p className="text-primary-blue text-[19px] font-bold">(81) 3221 5025</p>
          </div>
          {/* 2nd part */}
          <div>
            <h1 className="text-[23px] font-semibold text-white">Sobre</h1>
            <p className="mt-[1rem] text-white opacity-60 hover:text-primary-blue transition-all duration-200 cursor-pointer w-fit">Quem somos</p>
            <p className="mt-[0.3rem] text-white opacity-60 hover:text-primary-blue transition-all duration-200 cursor-pointer w-fit">Parceiros</p>
            <p className="mt-[0.3rem] text-white opacity-60 hover:text-primary-blue transition-all duration-200 cursor-pointer w-fit">Termos de uso</p>
            <p className="mt-[0.3rem] text-white opacity-60 hover:text-primary-blue transition-all duration-200 cursor-pointer w-fit">Política de provacidade</p>
          </div>
          {/* 3rd part */}
          <div>
            <h1 className="text-[23px] font-semibold text-white">Disciplinas</h1>
            <p className="mt-[1rem] text-white opacity-60 hover:text-primary-blue transition-all duration-200 cursor-pointer w-fit">Matemática</p>
            <p className="mt-[0.3rem] text-white opacity-60 hover:text-primary-blue transition-all duration-200 cursor-pointer w-fit">Física</p>
            <p className="mt-[0.3rem] text-white opacity-60 hover:text-primary-blue transition-all duration-200 cursor-pointer w-fit">Inglês</p>
            <p className="mt-[0.3rem] text-white opacity-60 hover:text-primary-blue transition-all duration-200 cursor-pointer w-fit">Outros</p>
          </div>
          {/* 4th part */}
          <div>
            <h1 className="text-[23px] font-semibold text-white">Redes Sociais</h1>
            <div className="flex space-x-5 text-primary-blue mt-4">
              <FaFacebook size={25} />
              <FaInstagram size={25} />
              <FaTwitter size={25} />
            </div>
          </div>
        </div>
        {/* Copyright */}
        <p className="text-center text-white mt-[1.5rem]">
          Copyright © 2024 BugHunters. All rights reserved</p>
      </div>
    </>
  )
}

export default Footer