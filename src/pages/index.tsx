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
import AboutUs from "@/components/AboutUs";
import Includes from "@/components/Included";
import Footer from "@/components/Footer";
import Section from "@/components/Section";


export default function Home() {
  return (
    <main>
      <Navbar />
      <MainContent />
      <Section>
        <Services
        title="DOS NOSSOS"
        subtitle="SERVIÇOS"
        description="Tenha a disposição o melhor que a empresa jr da nova economia tem a oferecer ao seu negócio. "
         />
        <MoreServices />
        <MarketingSection />
      </Section>

      <PurpleBar />

      <Section>
        <HowWorks />
        <Contact />
        <AboutUs />
        <Includes />
      </Section>
      <Footer />
    </main>
  );
}
