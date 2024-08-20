import React from "react";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const UICarousel = () => {

    const items = [
        { src: "/assets/ana.png", alt: "Imagem do membro Ana Lata", text: "Ana Lara", position: "Presidente", social: { linkedin: "", instagram: "" } },
        { src: "/assets/harold.png", alt: "Imagem do membro Harold Calixto", text: "Harold Calixto", position: "Vice-Presidente", social: { linkedin: "", instagram: "" } },
        { src: "/assets/thai.png", alt: "Imagem do membro Clara Beatriz", text: "Clara Beatriz", position: "Diretoria de Recursos Humanos", social: { linkedin: "", instagram: "" } },
        { src: "/assets/eric.png", alt: "Imagem do membro Eric da Costa", text: "Eric da Costa", position: "Diretoria de Projetos", social: { linkedin: "", instagram: "" } },
        { src: "/assets/jose.png", alt: "Imagem do membro José Alan", text: "José Alan", position: "Dirotia de Marketing e Vendas", social: { linkedin: "", instagram: "" } }
    ];
    return (
        <div className="relative overflow-hidden">
        {/* Carrossel visível em telas menores */}
        <div className="block lg:hidden">
            <Carousel>
                <CarouselContent>
                    {items.map((item, index) => (
                        <CarouselItem key={index} className="flex flex-col items-center">
                            <div className="border-4 border-DarkWhite bg-DarkWhite rounded-lg p-4 flex flex-col items-center">
                                <img src={item.src} alt={item.alt} className="rounded-lg w-64 h-64 object-cover mb-4" />
                                <p className="text-center mb-1 text-2xl font-bold">{item.text}</p>
                                <p className="text-center mb-4 text-lg text-MediumPurple font-bold">{item.position}</p>
                                <div className="flex justify-center space-x-4">
                                    <a href={item.social.linkedin} className="text-white bg-purple-500 border-2 border-purple-500 rounded-full p-2 hover:bg-purple-700">
                                        <TbBrandLinkedin size={24} />
                                    </a>
                                    <a href={item.social.instagram} className="text-white bg-purple-500 border-2 border-purple-500 rounded-full p-2 hover:bg-purple-700">
                                        <FaInstagram size={24} />
                                    </a>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10" />
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10" />
            </Carousel>
        </div>

        {/* Imagens lado a lado em telas maiores */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-x-auto">
            {items.map((item, index) => (
                <div key={index} className="border-4 border-DarkWhite bg-DarkWhite rounded-lg p-4 flex flex-col items-center">
                    <img src={item.src} alt={item.alt} className="rounded-lg w-64 h-64 object-cover mb-4" />
                    <p className="text-center mb-1 text-2xl font-bold">{item.text}</p>
                    <p className="text-center mb-4 text-lg text-MediumPurple font-bold">{item.position}</p>
                    <div className="flex justify-center space-x-4">
                        <a href={item.social.linkedin} className="text-white bg-purple-500 border-2 border-purple-500 rounded-full p-2 hover:bg-purple-700">
                            <TbBrandLinkedin size={24} />
                        </a>
                        <a href={item.social.instagram} className="text-white bg-purple-500 border-2 border-purple-500 rounded-full p-2 hover:bg-purple-700">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default UICarousel;