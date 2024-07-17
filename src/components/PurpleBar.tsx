import { EarOff } from "lucide-react";
import React from "react";

const PurpleBar = () =>{
    return(
        <div className="flex flex-col items-center justify-center bg-white">
        {/* Triângulo Roxo*/}
        <img src="/assets/corte.png" alt="Substitute Image" className="h-auto w-auto mb-0 pb-0" style={{ width: '100px', height: 'auto' }} />
        
        {/* Barra Roxa */}
            <div className="bg-MediumPurple w-full sm:text-xl h-auto p-4 flex flex-col md:flex-row text-white text-center">
            <div className="md:w-1/3 p-4">
                <h3 className="text-5xl font-bold font-montserrat">+ de 5 anos</h3>
                <p className="mt-2 font-montserrat">de <span className="font-bold font-montserrat">experiência em mercado</span> entregando soluções digitais para dentro e fora da região Sobralense.</p>
            </div>
            <div className="md:w-1/3 p-4">
                <h3 className="text-5xl font-bold font-montserrat">+ de 4 serviços</h3>
                <p className="mt-2 font-montserrat">entregues para você durante seu atendimento. Dentre eles estão: <span className="font-bold font-montserrat">marketing, vendas, desenvolvimento ágil, atendimento personalizado</span>, entre outros :)</p>
            </div>
            <div className="md:w-1/3 p-4">
                <h3 className="text-5xl font-bold font-montserrat">+ de 99</h3>
                <p className="mt-2 font-montserrat">cafés tomados durante o <span className="font-bold font-montserrat">desenvolvimento da solução do seu negócio</span></p>
            </div>
        </div>
    </div>

    );
};

export default PurpleBar;