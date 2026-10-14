import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TechStacks from './components/TechStacks';
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
        <Projects projects={PROJECTS} />
        <Skills skills={SERVICES} />
        <TechStacks techStacks={EXPERIENCES} />
        <FooterCTA onOpenContact={() => setIsContactOpen(true)} />
        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>
    </div>
  );
}