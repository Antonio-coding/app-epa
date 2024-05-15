"use client"
import Image from "next/image";
import anime from "animejs";
import { useEffect, useState } from "react";
import ImgPath from "@/constants/imgPath";

interface SplashScreenProps {
    finishLoading: () => void; // Tipo explícito para finishLoading
}
const SplashScreen = ({ finishLoading }: SplashScreenProps) => {
    const [isMounted, setIsMounted] = useState(false)

    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        })

        loader.add({
            targets: "#logo",
            delay: 1,
            scale: 8,
            duration: 500,
            easing: "easeInOutExport",
        })
            .add({
                targets: "#logo",
                delay: 10,
                scale: 10,
                duration: 1000,
                easing: "easeInOutExport",
            })
            .add({
                targets: "#logo",
                delay: 10,
                scale: 10,
                duration: 1000,
                easing: "easeInOutExport",
            })
            .add({
                targets: "#logo",
                delay: 10,
                scale: 10,
                duration: 1000,
                easing: "easeInOutExport",
            })
    }


    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10)
        animate()
        return () => clearTimeout(timeout)

    }, [])
    return (
        <>
            <div className="flex flex-col w-screen h-screen  items-center justify-center bg-slate-500 " isMounted={isMounted}  >
                <Image src={ImgPath.ImgCoracao} alt="Logo" width={60} height={60} />
            </div>
        </>

    )
}
export default SplashScreen;