import React from "react";

const ContentPortfolio = () =>{
    return(
        <div className="bg-MediumPurple p-4 md:pl-20 md:pr-20 flex items-center justify-between relative" style={{ height: '506px' }}>
        <div className="flex flex-col items-start space-y-2">
            <span className="text-white text-4xl font-extralight md:text-7xl">Deixamos que<br /><span className=' font-montserrat font-bold '>nossos trabalhos</span> <span className='font-extralight'><br />falem por nós!</span></span>
        </div>
    
        {/* Imagem à direita */}
        <div className="flex items-center justify-end mt-8" style={{ height: '100%' }}>
                <img
                    src="/assets/ilustra.png"
                    alt="Quatro pessoas olhando para um notebook"
                    className="h-auto w-full"
                    style={{ padding: '0', marginBottom: '0', height: '100%', width: '100%' }}
                />
            </div>
    </div>
    )
}

export default ContentPortfolio;
