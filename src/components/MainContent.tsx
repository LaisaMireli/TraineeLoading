import React from 'react';

const MainContent  = () => {
    return (
        <div className="bg-MediumPurple p-4 md:pl-20 md:pr-20 flex items-center justify-between relative" style={{ height: '506px' }}>
        <div className="flex flex-col items-start space-y-2">
            <span className="text-white text-lg font-montserrat sm:text-xl pb-10">Transformando ideias em realidade digital</span>
            <span className="text-white text-4xl font-montserrat md:text-7xl">Construindo um futuro com <br /><span className=' font-montserrat font-bold '>criatividade</span> e <span className='font-bold'>inovação</span></span>
        </div>
    
        {/* Imagem à direita */}
        <div className="flex items-end justify-end ml-auto mt-8" style={{ maxWidth: '833px', height: '100%' }}>
                <img
                    src="/assets/menina.png"
                    alt="Mulher sentada em uma cadeira lendo em um tablet"
                    className="h-auto w-full"
                    style={{ padding: '0', marginBottom: '0', height: '100%', width: '100%' }}
                />
            </div>
    </div>
    );
};

export default MainContent;