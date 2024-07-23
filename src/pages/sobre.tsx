import Navbar from "@/components/Navbar";
import ContentMembros from "@/components/ContentMembros";
import Services from "@/components/Services";
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

            </Section>
            <Footer />
        </div>
    )

}

