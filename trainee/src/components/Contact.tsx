import React from "react";

const Contact = () =>{
    return(
        <div className="text-center mt-8 bg-white">
            <p className="text-lg font-medium sm:text-2xl font-montserrat p-2 m-4">Ajudamos você a <span className="text-MediumPurple">reduzir custos e digitalizar seu negócio </span> com o melhor em sites, <br />aplicativos e marketing <span className="text-MediumPurple">personalizados.</span></p>
            <button className="mt-4 font-montserrat bg-MediumPurple hover:bg-DarkPurple transition-colors duration-100 ease-in-out focus:outline-none text-white font-medium py-3 px-4 md:py-2 md:px-4 rounded">
                ENTRAR EM CONTATO
            </button>
        </div>
    );
}
export default Contact;