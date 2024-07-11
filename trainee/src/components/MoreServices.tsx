import React from 'react';

const MoreServices = () => {
    return (
        <div className="bg-white flex flex-col items-center md:flex-row md:items-start justify-center md:justify-between py-8 px-4 md:px-20">
        {/* Parte Esquerda: Título, Texto e Botão */}
        <div className="w-full md:w-1/2 md:pr-8 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-montserrat font-extrabold text-MediumPurple">SITES E <br />APLICATIVOS</h2>
            <p className="text-lg text-black font-montserrat font-medium mt-4 md:mt-6">
                A Loading te ajuda a reinventar seu negócio através de sites, sistemas, de modo a resolver os problemas que estão atrapalhando seu negócio. Tornamos seu sonho em realidade com as melhores soluções de maneira personalizada para impulsionar seu negócio.
            </p>
            <button className="bg-MediumPurple text-white font-montserrat px-6 py-2 mt-6 rounded-md hover:bg-DarkPurple transition-colors duration-100 ease-in-out focus:outline-none">
                SAIBA MAIS
            </button>
        </div>
        {/* Parte Direita: Imagem */}
        <div className="w-96 h-80 md:h-5/6 md:w-96 flex justify-center md:justify-start mt-8 md:mt-0  ">
        <img src="/assets/planeta.png" alt="Imagem Descrição" className="h-auto w-full md:w-auto rounded-md ml-4 md:ml-0" />
    </div>
    </div>
    );
};

export default MoreServices;