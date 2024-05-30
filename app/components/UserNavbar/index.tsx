"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { RiNotification2Line, RiUserLine } from 'react-icons/ri';
import ImgPath from '@/constants/imgPath';
import { useRouter } from 'next/navigation';


export default function UserNavbar(className: any) {
    const router = useRouter();
    return (
        <div className="bg-primary-blue h-5 p-8 flex items-center justify-between">
            <div className="ml-1">
                <Link href="home">
                    <Image src={ImgPath.LogoUserFooter} height={500} width={500} alt="Logo" className="w-[4rem] h-[4rem] sm:w-[5rem] sm:h-[5rem] cursor-pointer" />
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                <RiNotification2Line className="text-white cursor-pointer" size={24} />
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src={ImgPath.ImgMirla} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Perfil</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => router.push('/')}>
                            Sair
                            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>

        </div>
    )
}

