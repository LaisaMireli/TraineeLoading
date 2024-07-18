import React from 'react';

import Navbar from "@/components/Navbar";
import ContentPortfolio from '@/components/ContentPortfolio';
import Footer from "@/components/Footer";
import Acarau from '@/components/Acarau'; 
import SiteAcarau from '@/components/SiteAcaraú';
import Section from "@/components/Section";


export default function Portifolio() {
    return (
      <main>
        <Navbar/>
        <ContentPortfolio/>
        <Acarau/>
        <SiteAcarau/>
        <Footer/>
      </main>
    );
  }
  
