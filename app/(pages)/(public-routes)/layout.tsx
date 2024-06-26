import type { Metadata } from "next";
import "@/globals.css";
import Footer from "@/components/Footer";
import ResponsiveNav from "@/components/Navigation/ResponsiveNav";



export const metadata: Metadata = {
  title: "Epa! | Ensino por amor!",
  description: "Generated by create next app",
  icons: "/images/epa.ico",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <ResponsiveNav />
        {children}
        <Footer />
      </div>
    </>
  );
}

