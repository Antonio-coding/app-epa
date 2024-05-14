'use client'
import { useRouter } from "next/navigation";

import { HiOutlineCollection } from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoFileTrayFullOutline } from "react-icons/io5";

const ButtonSize = {
    buttonS: "24"
}
export default function NavbarFooter() {
    const router = useRouter();
    return (
        <>
            <div className="absolute bottom-6   left-2/4 w-[12rem] h-12 border text-white bg-primary-blue rounded-b-3xl flex items-center justify-between p-5 " >
                <button onClick={() => router.push('in-class')} ><IoFileTrayFullOutline size={ButtonSize.buttonS} /></button>
                <button onClick={() => router.push('create-class')}> <IoIosAddCircleOutline size={ButtonSize.buttonS} />
                </button>
                <button onClick={() => router.push('my-class')} ><HiOutlineCollection size={ButtonSize.buttonS} />
                </button>
            </div>

        </>
    )
}