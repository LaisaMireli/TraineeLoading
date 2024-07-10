import React from 'react';

const MainContent  = () => {
    return (
        <nav className="bg-MediumPurple p-4 md:pl-20 md:pr-20 flex items-center justify-between relative" style={{ height: '506px' }}>
        {/* Texto à esquerda */}
        <div className="flex flex-col items-start space-y-2">
            <span className="text-white text-lg sm:text-xl pb-10">Transformando ideias em realidade digital</span>
            <span className="text-white text-4xl md:text-6xl">Construindo um futuro com <br /><span className='font-bold'>criatividade</span> e <span className='font-bold'>inovação</span></span>
        </div>
    
        {/* Imagem à direita */}
        <div className="flex items-end justify-end ml-auto mt-8" style={{ maxWidth: '833px', height: '100%' }}>
                <img
                    src="/assets/menina.png"
                    alt="Imagem Grande"
                    className="h-auto w-full"
                    style={{ padding: '0', marginBottom: '0', height: '100%', width: '100%' }}
                />
            </div>
    </nav>
    );
};

export default MainContent;