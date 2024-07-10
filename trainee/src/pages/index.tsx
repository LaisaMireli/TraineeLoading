//import Image from "next/image";
//import { Inter } from "next/font/google";
//const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/Navbar";
import MainContent from "@/components/MainContent";
import Services from "@/components/Services";
import MoreServices from "@/components/MoreServices";
import MarketingSection from "@/components/MarketingSection";
import PurpleBar from "@/components/PurpleBar";
import HowWorks from "@/components/HowWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main>
    <Navbar/>
    <MainContent/>
    <Services/>
    <MoreServices/>
    <MarketingSection/>
    <PurpleBar/>
    <HowWorks/>
    <Contact/>
    <Footer/>
    </main>
  );
}
