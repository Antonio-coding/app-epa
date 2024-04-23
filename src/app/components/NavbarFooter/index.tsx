import { HiOutlineCollection } from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoFileTrayFullOutline } from "react-icons/io5";

const ButtonSize = {
    buttonS: "24"
}
export default function NavbarFooter() {
    return (
        <>
            <div className="  h-12 border  flex items-center justify-between p-4 " >
                <button ><IoFileTrayFullOutline size={ButtonSize.buttonS} /></button>
                <button > <IoIosAddCircleOutline size={ButtonSize.buttonS} />
                </button>
                <button><HiOutlineCollection size={ButtonSize.buttonS} />
                </button>
            </div>

        </>
    )
}