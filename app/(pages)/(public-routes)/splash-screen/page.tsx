import SplashScreen from "@/components/SplashScreen";

export default function SplashScreenPage() {
    return (
        <>
            <div className="flex flex-col h-screen w-screen items-center justify-center">

                <SplashScreen finishLoading={undefined} />
                
            </div>
        </>
    )
}