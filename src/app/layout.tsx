import { Lato, Josefin_Sans } from "next/font/google"; // Import Josefin font
import "./globals.css";
import Footer from "@/app/components/footer/page";
import Navbar from "@/app/components/navbar/page";


const lato = Lato({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const josefin = Josefin_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hekto Ecommerce",
  description: "Ecommerce for Hekto",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} ${josefin.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
