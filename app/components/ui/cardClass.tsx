import ImgPath from "@/constants/imgPath";
import Image from "next/image";

export function CardClass() {
    return (
        <>
            <div className="flex flex-col border w-[20rem] gap-4 ">
                <div className=" flex items-center justify-center">

                    <Image alt='Imagem' width={200} height={400} src={ImgPath.Img1} />
                </div>
                <div className="flex flex-col  ">

                    <div>Nome</div>
                    <div>nivel</div>
                    <div>horario</div>
                    <div>etc</div>
                </div>
            </div>
        </>
    )
}