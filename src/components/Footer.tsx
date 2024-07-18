import React from "react";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
    return (
        <footer className="bg-LigthPurple py-8 md:py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
                {/* Logo da empresa */}
                <div className="footer-left mb-4 md:mb-0 md:mr-12">
                    <img src="/assets/Logo.png" alt="Logo da Empresa" className="max-w-xs md:max-w-none md:h-16" />
                </div>
                {/* Endereço */}
                <div className="footer-center text-center mb-4 md:mb-0 flex-grow">
                    <p className="text-white text-sm font-montserrat md:text-base">R. Coronel Estanislau Frota, S/N, Centro, Sobral - CE Bloco I - Mucambinho, Gabinete 19</p>
                </div>
                {/* Ícones de redes sociais */}
                <div className="footer-right flex gap-4">
                    <a href="https://www.linkedin.com/" className="text-white hover:text-gray-300 "><TbBrandLinkedin className='h-7 w-7' />
                    </a>
                    <a href="https://www.facebook.com/" className="text-white hover:text-gray-300"><FaSquareFacebook className='h-6 w-6' />

                    </a>
                    <a href="https://www.instagram.com/" className="text-white hover:text-gray-300 "><FaInstagram className='h-6 w-6' />
                    </a>
                    <a href="mailto:youremail@example.com" className="text-white hover:text-gray-300 "><BiLogoGmail className='h-6 w-6' />
                    </a>
                </div>
            </div>

            <div className="text-center mt-4">
                <p className="text-white text-xs md:text-sm  font-montserrat">© Todos os direitos reservados</p>
            </div>
        </footer>
    )
}

export default Footer;