import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import Services from './components/Services';
import Experience from './components/Experience';
import FooterCTA from './components/FooterCTA';
import ContactModal from './components/ContactModal';

import { PROJECTS, SERVICES, EXPERIENCES } from './data/portfolioData';
import './App.css';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="cloud-background">
      <div className="portfolio-card-container">
        <Navbar onOpenContact={() => setIsContactOpen(true)} />
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <SelectedWork projects={PROJECTS} />
        <Services services={SERVICES} />
        <Experience experiences={EXPERIENCES} />
        <FooterCTA onOpenContact={() => setIsContactOpen(true)} />
        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>
    </div>
  );
}