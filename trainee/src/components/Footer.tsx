import React from "react";

const Footer =()=>{
    return(
        <footer className="bg-LigthPurple py-8 md:py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
            {/* Logo da empresa */}
            <div className="footer-left mb-4 md:mb-0 md:mr-12">
                <img src="/assets/Logo.png" alt="Logo da Empresa" className="max-w-xs md:max-w-none md:h-16" />
            </div>
            {/* Endereço */}
            <div className="footer-center text-center mb-4 md:mb-0 flex-grow">
                <p className="text-white text-sm md:text-base">R. Coronel Estanislau Frota, S/N, Centro, Sobral - CE Bloco I - Mucambinho, Gabinete 19</p>
            </div>
            {/* Ícones de redes sociais */}
            <div className="footer-right flex gap-4">
                <a href="#"><img src="/assets/linkedin.png" alt="Ícone 1" className="w-8 h-8" /></a>
                <a href="#"><img src="/assets/facebook.png" alt="Ícone 2" className="w-8 h-8" /></a>
                <a href="#"><img src="/assets/instagram.png" alt="Ícone 3" className="w-8 h-8" /></a>
                <a href="#"><img src="/assets/gmail.png" alt="Ícone 4" className="w-8 h-8" /></a>
            </div>
        </div>
        {/* Texto de direitos reservados */}
        <div className="text-center mt-4">
            <p className="text-white text-xs md:text-sm">© Todos os direitos reservados</p>
        </div>
    </footer>
    )
}

export default Footer;