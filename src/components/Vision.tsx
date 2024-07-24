import React from 'react';

const Vision = () => {
    return (
        <div className="bg-white pb-0 flex flex-col items-center md:flex-row md:items-start justify-center md:justify-between py-8 px-4 md:px-20">
        {/* Parte Esquerda: Título, Texto e Botão */}
        <div className="w-full md:w-1/2 md:pr-8 text-center md:text-left pt-32">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold text-MediumPurple">VISÃO</h2>
            <p className="text-lg text-black font-montserrat font-medium mt-4 md:mt-6 text-center md:text-left">
            Ser uma empresa de referência em desenvolvimento de soluções digitais na cidade de Sobral-CE e dentro do Campus da UFC de Sobral.            </p>
        </div>
       
        <div className="w-64 h-60 lg:h-96 lg:w-auto md:h-80 md:w-96 md:pl-20 flex justify-center md:justify-start mt-8 md:mt-0   ">
        <img src="/assets/highfive.png" alt="Imagem Descrição" className="h-auto w-full md:w-auto rounded-md ml-4 md:ml-0" />
    </div>
    </div>
    );
};

export default Vision;