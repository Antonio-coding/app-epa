import React from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

interface Props {
  openNav: () => void;
}
const Styles = {
  navLink: "text-[24px] font-medium hover:text-primary-blue",
};
const Nav: React.FC<Props> = ({ openNav }) => {
  return (
    <div className="h-[12vh] bg-white">
      <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between">
        {/* Logo Div */}
        <Link href="/">
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="w-[4rem] h-[4rem] sm:w-[6rem] sm:h-[6rem] cursor-pointer"
          />
        </Link>
        {/* Nav Links */}
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex items-center space-x-10 text-blue-950">
            <li className={Styles.navLink}>
              <Link href="/">Home</Link>
            </li>
            <li className={Styles.navLink}>
              <Link href="/aulas-particulares">Aulas particulares</Link>
            </li>
            <li className={Styles.navLink}>
              <Link href="/tarefas">Tarefas</Link>
            </li>
            <li className={Styles.navLink}>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li className={Styles.navLink}>
              <Link href="/login">Entrar</Link>
            </li>
          </ul>
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 sm:px-6 sm:py-3 text-[12px] bg-primary-blue transition-all duration-200 hover:bg-red-700 flex items-center rounded-md space-x-2 text-white">
            <IoSearch size={20} />
            <span className="font-bold text-base">Buscar Aulas</span>
          </button>
          <button className="px-4 py-2 sm:px-6 sm:py-3 text-[12px] bg-blue-950 transition-all duration-200 hover:bg-red-700 flex items-center rounded-md space-x-2 text-white">
            <span className="font-bold text-base">Cadastre-se</span>
          </button>
          <div
            onClick={openNav}
            className="lg:hidden w-[2rem] h-[2rem] text-black cursor-pointer"
          >
            <HiMenu size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
