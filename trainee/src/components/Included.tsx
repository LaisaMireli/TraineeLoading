import React from "react";

const Includes =()=>{
    return(
        <div className="container mx-auto flex flex-wrap items-center justify-center py-8">
        {/* Imagem à esquerda */}
        <div className="hidden sm:block sm:w-1/2">
            <img src="/assets/moço_pc.png" alt="Imagem" className="mx-auto sm:ml-0 sm:mr-auto mb-4 sm:mb-0 max-w-full h-auto" />
        </div>
        
        {/* Título e checklist à direita */}
        <div className="w-full sm:w-1/2 sm:pl-8 text-center ">
            <h2 className="text-6xl text-MediumPurple font-bold mb-4 w-full sm:w-auto mx-auto">
                <span className="text-4xl text-MediumPurple">+</span>
                <span className="font-medium text-4xl text-black"> SERVIÇOS <br /> </span>
                INCLUÍDOS
            </h2>
            <p className="mb-4 text-xl">Veja o que você terá no acompanhamento do seu projeto:</p>
    
            {/* Checklist */}
            <ul className="w-full grid justify-items-stretch lg:w-1/2 lg:pl-80 text-center justify-center lg:text-left mt-6 lg:mt-0">
            <div className="flex flex-col items-start text-xl">
                <li className="flex items-center justify-center mb-2 whitespace-nowrap">
                    <div className="rounded-full bg-MediumPurple text-white h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                        ✓
                    </div>
                    <span className="text-left">Atendimento Personalizado</span>
                </li>
                <li className="flex items-center justify-center mb-2 whitespace-nowrap">
                    <div className="rounded-full bg-MediumPurple text-white h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                        ✓
                    </div>
                    <span className="text-left">Serviço de marketing e vendas</span>
                </li>
                <li className="flex items-center justify-center mb-2 whitespace-nowrap">
                    <div className="rounded-full bg-MediumPurple text-white h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                        ✓
                    </div>
                    <span className="text-left">Desenvolvimento ágil</span>
                </li>
                <li className="flex items-center justify-center mb-2 whitespace-nowrap">
                    <div className="rounded-full bg-MediumPurple text-white h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                        ✓
                    </div>
                    <span className="text-left">Suporte gratuito</span>
                </li>
                <li className="flex items-center justify-center mb-2 whitespace-nowrap">
                    <div className="rounded-full bg-MediumPurple text-white h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                        ✓
                    </div>
                    <span className="text-left">Preços acessíveis</span>
                </li>
                <li className="flex items-center justify-center whitespace-nowrap">
                    <div className="rounded-full bg-MediumPurple text-white h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                        ✓
                    </div>
                    <span className="text-left">Soluções inovadoras</span>
                </li>
            </div>
        </ul>
    
            {/* Botão "quero impulsionar meu negócio" */}
            <button className="bg-MediumPurple text-white px-6 py-2 mt-6 rounded-md hover:bg-DarkPurple transition-colors duration-100 ease-in-out focus:outline-none">
                Quero impulsionar meu negócio
            </button>
        </div>
    </div>
    )
}

export default Includes;