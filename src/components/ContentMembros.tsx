import React from "react";


const ContentMembros = () => {
    return (
        <div className="bg-MediumPurple pb-9 md:pl-20 md:pr-20 flex items-center justify-between relative" style={{ height: '506px' }}>
            <div className="flex flex-col items-start space-y-2">
                <span className="text-white text-4xl font-extralight md:text-7xl">Conheça nosso<br /><span className=' font-montserrat font-bold '>time</span> <span className='font-extralight'>e a </span><span className="font-montserrat font-bold">visão</span> que compartilhamos</span>
                <div className="text-white text-2xl pt-4 md:text-4xl">#VemSerLoading</div>

            </div>
        
            <div className="flex items-center justify-end mt-8" style={{ height: '100%' }}>
                <img
                    src="/assets/bandeira.png"
                    alt="Três pessoas segurando uma bandeiran"
                    className="h-auto w-full"
                    style={{ padding: '0', marginBottom: '0', height: '100%', width: '100%' }}
                />
            </div>
            
        </div>

    ) 
}

export default ContentMembros;