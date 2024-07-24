import React from "react";

const Values = () => {
    return (
        <div className="container mx-auto flex flex-wrap items-center justify-center py-8">
    {/* Imagem à esquerda */}
    <div className="sm:w-1/2 order-2 sm:order-1">
        <img src="/assets/puzzle.png" alt="Imagem" className="h-auto w-full md:w-auto rounded-md ml-4 md:ml-0" />
    </div>

    {/* Título e checklist à direita */}
    <div className="w-full sm:w-1/2 sm:pl-8 text-center order-1 sm:order-2">
        <h2 className="text-4xl sm:text-5xl text-MediumPurple font-extrabold mb-4 w-full mx-auto break-words max-w-full">
            <span className="font-extrabold text-4xl sm:text-4xl md:text-5xl font-montserrat text-MediumPurple">VALORES</span>
        </h2>

        {/* Checklist */}
        <ul className="w-full grid justify-items-stretch lg:w-1/2 lg:pl-80 text-center justify-center lg:text-left mt-6 lg:mt-0">
            <div className="flex flex-col items-start text-xl">
                <li className="flex items-center justify-center mb-2 pt-4 whitespace-nowrap">
                    <div className="rounded-full bg-MediumPurple text-white h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                        ✓
                    </div>
                    <span className="text-left font-medium font-montserrat break-words max-w-full">Paixão pelo que Fazemos</span>
                </li>
                <li className="flex items-center justify-center mb-2 ">
                    <div className="rounded-full bg-MediumPurple text-white h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                        ✓
                    </div>
                    <span className="text-left font-montserrat font-medium break-words max-w-full">Desenvolvimento pessoal e profissional dos membros</span>
                </li>
                <li className="flex items-center justify-center mb-2">
                    <div className="rounded-full bg-MediumPurple text-white h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                        ✓
                    </div>
                    <span className="text-left font-montserrat font-medium break-words max-w-full">Qualidade e Compromisso com o Serviço Prestado</span>
                </li>
                <li className="flex items-center justify-center mb-2">
                    <div className="rounded-full bg-MediumPurple text-white h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                        ✓
                    </div>
                    <span className="text-left font-montserrat font-medium break-words max-w-full">Transparência com os Membros e com os Clientes</span>
                </li>
                <li className="flex items-center justify-center">
                    <div className="rounded-full bg-MediumPurple text-white h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                        ✓
                    </div>
                    <span className="text-left font-montserrat font-medium break-words max-w-full">Responsabilidade pelas soluções desenvolvidas</span>
                </li>
            </div>
        </ul>
    </div>
</div>
    )
}
export default Values;