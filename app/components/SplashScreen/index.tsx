
import Image from "next/image";
import anime from "animejs";
import { useEffect, useState } from "react";
const SplashScreen = ({ finishLoading }) => {
    const [isMounted, setIsMounted] = useState(false)
    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        })
        loader.add({
            targets: "#logo",
            delay: 0,
            scale: 8,
            duration: 500,
            easing: "easeInOutExport",
        })
        loader.add({
            targets: "#logo",
            delay: 0,
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
        <div
            isMounted={isMounted}>

            <Image id="logo" src="/images/epa.ico" alt="" width={60} height={60} />
        </div>
    )
}
export default SplashScreen