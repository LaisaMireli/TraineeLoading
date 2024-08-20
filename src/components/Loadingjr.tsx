import React from "react";

const Loadingjr =()=>{

    return(
        <div className="flex flex-col items-center h-96 justify-center">
            <div className="flex flex-col items-center h-64 justify-center pt-20">
            <img
                src="/assets/logoroxo.png" 
                alt="Logo roxa"
                className="mb-4 w-80 h-24"
            />
            <h1 className="text-3xl font-bold mb-2 text-center text-MediumPurple">Loading Desenvolvimento Jr</h1>
           </div>
            <p className="text-black font-montserrat font-medium text-center text-xl md:text-2xl justify-center">
                Nossa Missão é promover o crescimento profissional dos membros através da vivência empresarial,
                entregando soluções digitais aos micro e pequenos empresários da região Nordeste.
            </p>
        </div>

    )
}

export default Loadingjr;