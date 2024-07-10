import { EarOff } from "lucide-react";
import React from "react";

const PurpleBar = () =>{
    return(
        <div className="flex flex-col items-center justify-center bg-white">
        {/* Triângulo Roxo */}
        <div className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[70px] rounded-t-full border-b-MediumPurple mb-0"></div>
        
        {/* Barra Roxa */}
            <div className="bg-MediumPurple w-full sm:text-xl h-auto p-4 flex flex-col md:flex-row text-white text-center">
            <div className="md:w-1/3 p-4">
                <h3 className="text-5xl font-bold">+ de 5 anos</h3>
                <p className="mt-2">de <span className="font-bold">experiência em mercado</span> entregando soluções digitais para dentro e fora da região Sobralense.</p>
            </div>
            <div className="md:w-1/3 p-4">
                <h3 className="text-5xl font-bold">+ de 4 serviços</h3>
                <p className="mt-2">entregues para você durante seu atendimento. Dentre eles estão: <span className="font-bold">marketing, vendas, desenvolvimento ágil, atendimento personalizado</span>, entre outros :)</p>
            </div>
            <div className="md:w-1/3 p-4">
                <h3 className="text-5xl font-bold">+ de 99</h3>
                <p className="mt-2">cafés tomados durante o <span className="font-bold">desenvolvimento da solução do seu negócio</span></p>
            </div>
        </div>
    </div>

    );
};

export default PurpleBar;