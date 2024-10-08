
import { useState, useEffect } from 'react';
import Logo from '../Assets/Logo_Loading_Jr.png'
import { TbBrandLinkedin } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";

import { FaSquareFacebook } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import Link from 'next/link';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    return (
        <nav className="bg-DarkPurple p-4 md:pl-20 md:pr-20 flex items-center justify-between relative" style={{ height: '110px' }}>
        
        <div className="flex items-center space-x-4">
          <a href="/">
            <img src="/assets/Logo.png" alt="Logo Loading" className="h-9 w-28" />
          </a>
          <div className="h-9 w-px bg-white mx-4"></div>
          <span className="text-white font-montserrat text-sm hidden lg:block">
            Desenvolvimento de <br />
            <span className="font-montserrat font-bold">Sites e Soluções Digitais</span>
          </span>
        </div>
      
       
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Abrir Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      
        
        <div className={`sm:hidden absolute top-0 right-0 bg-DarkPurple z-50 ${isOpen ? 'w-1/2' : 'w-0'}  ease-in-out overflow-y-auto h-screen`}>
          <div className="flex flex-col items-center h-full pt-11">
            {/* Botão de fechar o menu */}
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-white focus:outline-none"
              aria-label="Fechar Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
      
            {/* Links no menu hamburguer */}
            <a href="/sobre" className="text-white text-2xl pt-10 font-montserrat hover:text-Cyan py-2 w-full text-center" onClick={toggleMenu}>Sobre a Loading</a>
            <a href="/portifolio" className="text-white text-2xl font-montserrat hover:text-Cyan py-2 w-full text-center" onClick={toggleMenu}>Portifolio</a>
            <a href="/links" className="text-white text-2xl font-montserrat hover:text-Cyan py-2 w-full text-center" onClick={toggleMenu} >Links</a>
      
            {/* Social Icons within the mobile menu */}
            <div className="flex items-center mt-auto mb-2 pt-6 gap-4">
              <a href="https://www.linkedin.com/company/loading-junior/?originalSubdomain=br" className="text-white hover:text-gray-300"><TbBrandLinkedin className='h-6 w-6' /></a>
              <a href="https://www.facebook.com/" className="text-white hover:text-gray-300"><FaSquareFacebook className='h-6 w-6' /></a>
              <a href="https://www.instagram.com/loadingjr/" className="text-white hover:text-gray-300"><FaInstagram className='h-6 w-6' /></a>
              <a href="mailto:oi.loadingjr@gmail.com" className="text-white hover:text-gray-300"><BiLogoGmail className='h-6 w-6' /></a>
            </div>
          </div>
        </div>
      
        {/* Social Icons (visible on larger screens) */}
        <div className="hidden sm:flex items-center space-x-8">
          {/* Links na barra de navegação desktop */}
          <a href="/sobre" className="text-white font-montserrat md:text-sm sm:text-sm hover:text-Cyan font-bold">Sobre a Loading</a>
          <a href="/portifolio" className="text-white font-montserrat md:text-sm hover:text-Cyan font-bold">Portifolio</a>
          <a href="/links" className="text-white font-montserrat md:text-sm hover:text-Cyan font-bold">Links</a>
          {/* Social Icons na barra de navegação desktop */}
          <div className="flex items-center space-x-4 ml-auto">
            <a href="https://www.linkedin.com/company/loading-junior/?originalSubdomain=br" className="text-white hover:text-gray-300"><TbBrandLinkedin className='h-7 w-7' /></a>
            <a href="https://www.facebook.com/" className="text-white hover:text-gray-300"><FaSquareFacebook className='h-6 w-6' /></a>
            <a href="https://www.instagram.com/loadingjr/" className="text-white hover:text-gray-300"><FaInstagram className='h-6 w-6' /></a>
            <a href="mailto:oi.loadingjr@gmail.com" className="text-white hover:text-gray-300"><BiLogoGmail className='h-6 w-6' /></a>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;