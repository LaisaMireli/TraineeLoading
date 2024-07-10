import React from 'react';

const Services = () => {
    return (
        <div className="flex flex-col items-center justify-center h-64 bg-white">
        <div className="text-center">
            <div className="flex items-center justify-center">
            <div className="w-4 h-4 flex items-center justify-center text-MediumPurple font-bold text-4xl">+</div>
            <span className="text-black text-4xl ml-1 font-medium">DOS NOSSOS</span>
            </div>
            <div className="text-6xl text-MediumPurple font-extrabold my-4">Serviços</div>
            <div className="text-black font-medium text-center text-xl md:text-2xl justify-center">
            Tenha à disposição o melhor que a empresa jr da <br className="hidden md:inline" /> nova economia tem a oferecer ao seu negócio.
            </div>
        </div>
    </div>
    );
};

export default Services;