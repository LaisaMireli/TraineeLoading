import React from "react";

const AboutUs = () => {
    return (
        <div className="flex items-center justify-center flex-wrap mx-auto gap-8 md:gap-16 lg:gap-32 px-8 pt-20">
        
        <div className="flex items-center justify-center flex-col"><h2 className="text-2xl md:text-4xl font-montserrat font-medium text-black"><span className="text-MediumPurple  font-montserrat text-4xl">+</span>SOBRE NOSSOS</h2><p className="text-6xl font-montserrat text-MediumPurple font-extrabold mt-4 leading-none">CLIENTES E <br /> PARCEIROS</p><p className="md:text-xl font-montserrat mt-4">Já pensou em ter sua logo aqui?</p>
        <button className="bg-MediumPurple font-montserrat text-white px-6 py-2 mt-6 rounded-md hover:bg-DarkPurple transition-colors duration-100 ease-in-out focus:outline-none">
            QUERO IMPULSIONAR MEU NEGÓCIO</button></div>
        
        <div className=" md:block w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
            <img src="/assets/logos.png" alt="Imagem Descrição" className="h-auto pb-10 w-auto lg:pl-40 rounded-md ml-4 md:ml-0" />
        </div>
    </div>
    );
};

export default AboutUs;