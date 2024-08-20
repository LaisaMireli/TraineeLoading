import React from "react";

const MarketingSection = () => {
    return(
        <div className="bg-white flex flex-col-reverse md:flex-row items-center md:items-start justify-center md:justify-between py-8 px-4 md:px-20">
        {/* Parte Direita: Título, Texto e Botão */}
        <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left mt-8 md:mt-0 order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold text-MediumPurple">MARKETING</h2>
            <p className="text-lg text-black font-montserrat font-medium mt-4 md:mt-6">
                Não acreditamos que a mesma solução de marketing seja boa para todas as empresas. Por isso, sempre dedicamos tempo para aprender sobre sua empresa e seus clientes, e com isso poder recomendar uma estratégia baseada em suas necessidades comerciais específicas. A solução é com uma estratégia de marketing personalizada, onde definimos as melhores táticas e com um orçamento que permite uma ótima lucratividade.
            </p>
            <button className="bg-MediumPurple text-white font-montserrat px-6 py-2 mt-6 rounded-md hover:bg-DarkPurple transition-colors duration-100 ease-in-out focus:outline-none">
                SAIBA MAIS
            </button>
        </div>
       
        <div className="w-64 h-60 md:h-5/6 md:w-96 flex justify-center md:justify-start mt-8 md:mt-0  ">
        <img src="/assets/hashtag.png" alt="Um homem e uma mulher mexendo em uma hashtag grande roxa" className="h-max w-screen md:w-auto rounded-md" />
        </div>
    </div>

    );  
};

export default MarketingSection;