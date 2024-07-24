import Navbar from "@/components/Navbar";
import ContentMembros from "@/components/ContentMembros";
import Services from "@/components/Services";
import UICarousel from "@/components/UICarousel";
import Loadingjr from "@/components/Loadingjr";
import Vision from "@/components/Vision";
import Values from "@/components/Values";
import CellPart from "@/components/CellPart";
import Tutor from "@/components/Tutor";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function membros() {
    return (
        <div>
            <Navbar />
            <ContentMembros />
            <Section>

                <Services title="SOBRE O"
                    subtitle="TIME LOADING"
                    description="" />
                <UICarousel />
                <Loadingjr />
                <Vision />
                <Values />

            </Section>
            <CellPart />

            <Section>
                <Tutor />
            </Section>
            <Footer />
        </div>
    )

}

