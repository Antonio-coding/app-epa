import type { Metadata } from "next";
import "@/globals.css";
import NavbarFooter from "@/components/NavbarFooter";
import UserNavbar from "@/components/UserNavbar";
export const metadata: Metadata = {
  title: "Epa! | Ensino por amor!",
  description: "Perfil e dashborad do usuario",
};
export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>

      <div className="h-screen flex flex-col">
        <UserNavbar className="sticky  w-full " />

        <main className="flex-grow  overflow-y-auto">
          {children}
        </main>

        <NavbarFooter className="sticky  w-full   " />
      </div>
    </>
  );
}
