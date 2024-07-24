import React from "react";

const CellPart = () => {
    return (
        <div className="bg-DarkWhite w-full h-3/5  flex items-center justify-center py-8">
            <div className="container w-full max-w-screen-lg flex flex-wrap items-center justify-center px-4">
                {/* Texto e descrição à esquerda */}
                <div className="w-full sm:w-1/2 text-center sm:text-left mb-8 sm:mb-0">
                    <h1 className="text-3xl sm:text-4xl text-MediumPurple font-bold mb-2">
                        Loading na net 😝
                    </h1>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                        Vem fazer parte da nossa <br /> Família :)
                    </h2>
                    <p className=" m:text-lg font-bold text-MediumPurple">
                        Conteúdos gratuitos mais próximo de você
                    </p>
                </div>

                {/* Imagem à direita */}
                <div className="w-full sm:w-1/2 flex justify-center">
                    <img src="/assets/cell.png" alt="Imagem" className="h-auto w-full max-w-sm rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default CellPart;