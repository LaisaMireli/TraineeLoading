import React from "react";

const HowWorks = () => {
    return (
        <div className="bg-white flex flex-col lg:flex-row items-center justify-center p-8">
            {/* Parte Esquerda */}
            <div className="flex items-center">
                <div className="text-center lg:text-left mb-4 lg:mb-0 lg:mr-8">
                    <p className="font-medium font-montserrat text-2xl lg:text-4xl">COMO FUNCIONA NOSSO</p>
                    <p className="font-extrabold font-montserrat text-MediumPurple text-lg mt-2 lg:text-6xl">ATENDIMENTO</p>
                    <p className="font-normal pt-4 lg:pl-20 font-montserrat text-black text-base lg:text-base">Você NÃO PAGA pelo atendimento :)</p>
                </div>
               
                <img src="/assets/moço.png" alt="Imagem" className="w-16 h-48 lg:w-auto lg:h-auto mt-4 lg:mt-0" />
            </div>
            {/* Parte Direita */}
            <div className="w-full grid justify-items-stretch  lg:w-1/2 lg:pl-8 text-center justify-center lg:text-left mt-6 lg:mt-0 order-2 lg:order-1">
                <div className="flex flex-col items-start">
                    <div className="flex items-center mb-8">
                        <img src="/assets/bola1.png" alt="Step 1" className="w-10 h-10 lg:w-9 lg:h-9" />
                        <p className="ml-4 text-xl font-montserrat lg:text-base font-medium">Nos mande uma mensagem no whatsapp</p>
                    </div>

                    <div className="flex items-center mb-8">
                        <img src="/assets/bola2.png" alt="Step 2" className="w-10 h-10 lg:w-9 lg:h-9 md:w-10 sm:w-10" />
                        <p className="ml-4 text-xl  font-montserrat lg:text-base font-medium">Marcamos um momento para conversar. 100% online e gratuito :)</p>
                    </div>

                    <div className="flex items-center mb-8">
                        <img src="/assets/bola3.png" alt="Step 3" className="w-10 h-10 lg:w-9 lg:h-9" />
                        <p className="ml-4 text-xl font-montserrat lg:text-base font-medium">Fazemos uma proposta de serviço</p>
                    </div>

                    <div className="flex items-center mb-8">
                        <img src="/assets/bola4.png" alt="Step 4" className="w-10 h-10 lg:w-9 lg:h-9" />
                        <p className="ml-4 text-xl font-montserrat lg:text-base font-medium">Após fechar contrato iniciamos seu projeto</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowWorks;