import React from "react";

const Tutor = () => {
    return (
        <div className="flex items-center justify-center p-4">
            {/* Container para centralizar a imagem e o texto */}
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-x-6 md:space-y-0">
                {/* Imagem à esquerda */}
                <div className="flex-shrink-0">
                    <img
                        src="/assets/ialis.png"
                        alt="Imagem do Tutor"
                        className="w-48 h-48 md:w-96 md:h-96 object-cover rounded-full"
                    />
                </div>

                {/* Texto à direita */}
                <div className="flex-1 max-w-md">
                    <h2 className="text-2xl md:text-4xl text-MediumPurple font-bold mb-4 text-center md:text-left">
                        Professor Tutor
                    </h2>
                    <div className="p-4 md:p-6 bg-DarkWhite border border-gray-300 rounded-lg shadow-md">
                        <p className="text-center md:text-left">
                            <span className="text-4xl md:text-5xl align-middle">❝</span>
                            <span className="align-middle">
                                Tive a honra de acompanhar a criação e o desenvolvimento da Loading Jr, e é uma honra fazer a tutoria de um grupo tão autossuficiente e engajado. Cada nova gestão da EJ traz novas contribuições e seus membros se apresentam com autonomia, criatividade e equilíbrio social e financeiro. Anseio contribuir por muito mais tempo com este time.
                            </span>
                            <span className="text-4xl md:text-5xl align-middle"> ❞</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutor;