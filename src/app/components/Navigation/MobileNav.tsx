import React from 'react';
import Link from 'next/link';
import { ImCross } from 'react-icons/im';

interface Props {
  showNav: boolean;
  closeNav: () => void;
}
 
const Style = {
  link: "text-[35px] font-medium hover:text-primary-blue text-white"
}
const MobileNav: React.FC<Props> = ({ showNav, closeNav }) => {
  const navStyle = showNav ? 'translate-x-0' : '-translate-x-full';

  return (
    <div className={`fixed inset-0 z-[1002] h-[100vh] bg-[#000000e0] transition-all duration-500 ${navStyle}`}>
      <div className="absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white cursor-pointer" onClick={closeNav}>
        <ImCross size={25} />
      </div>
      <div className={`bg-blue-950 flex flex-col items-center justify-center w-[70%] h-full transition-all duration-500 delay-200 ${navStyle}`}>
        <ul className="space-y-10">
          <li className={Style.link}>
            <Link href="/">Home</Link>
          </li>
          <li className={Style.link}>
            <Link href="/disciplinas">Disciplinas</Link>
          </li>
          <li className={Style.link}>
            <Link href="/sobre">Sobre</Link>
          </li>
          <li className={Style.link}>
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
