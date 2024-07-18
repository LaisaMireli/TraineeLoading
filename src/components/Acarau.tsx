import React from "react";

const Acarau = () => {
    return (

        <div className="bg-white flex flex-col items-center md:flex-row md:items-start justify-center md:justify-between py-8 px-4 md:px-20">
            {/* Parte Esquerda: Título, Texto e Botão */}
            <div className="w-full md:w-1/2 md:pr-8 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold text-MediumPurple">Acaraú Valley</h2>
                <p className="text-lg text-black font-montserrat font-medium mt-4 md:mt-6">
                Acarau Valley é uma empresa que desempenha um papel crucial no ecossistema de startups, oferecendo suporte e recursos para empreendedores que estão no estágio inicial de desenvolvimento de seus negócios.
                </p>
                <button className="bg-MediumPurple text-white font-montserrat px-6 py-2 mt-6 rounded-md hover:bg-DarkPurple transition-colors duration-100 ease-in-out focus:outline-none">
                    Conheça o site
                </button>
            </div>
        </div>
    )
}

export default Acarau;