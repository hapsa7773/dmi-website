
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "../components/layout/Preloader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dairy Machine India | Dairy Processing Equipment",
    template: "%s | Dairy Machine India",
  },
  description:
    "Explore dairy processing machinery and industrial equipment from Dairy Machine India. Discover solutions for modern dairy businesses.",
  metadataBase: new URL("https://www.dairymachinesindia.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
