import "./globals.css";
import { Inter } from "next/font/google";
import { EtherProvider } from "../context/Ether";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ether Finance",
  description: "Check any transaction by using account address",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EtherProvider>
          <NavBar/>
          {children}
          <Footer/>
        </EtherProvider>
      </body>
    </html>
  );
}
