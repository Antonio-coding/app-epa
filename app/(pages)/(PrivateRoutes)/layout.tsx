import type { Metadata } from "next";
import "@/app/globals.css";


import NavbarFooter from "../../components/NavbarFooter";
import UserNavbar from "../../components/UserNavbar";



export const metadata: Metadata = {
    title: "Epa! | Ensino por amor!",
    description: "Perfil e dashborad do usuario",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <>
            <UserNavbar />
            <section>{children}</section>
            <NavbarFooter />
        </>

    );
}
