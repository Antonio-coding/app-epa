import Link from 'next/link';
import Image from 'next/image';

import { RiNotification2Line, RiUserLine } from 'react-icons/ri';
import ImgPath from '@/constants/imgPath';

export default function UserNavbar(className: any) {
    return (
        <div className="bg-primary-blue h-5 p-8 flex items-center justify-between">
            <div className="ml-1">
                <Link href="home">
                    <Image src={ImgPath.LogoUserFooter} height={500} width={500} alt="Logo" className="w-[4rem] h-[4rem] sm:w-[5rem] sm:h-[5rem] cursor-pointer" />
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                <RiNotification2Line className="text-white cursor-pointer" size={24} />
                <RiUserLine className="text-white cursor-pointer" size={24} />
            </div>
        </div>
    )
}

