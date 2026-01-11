import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import BackToTop from './components/BackToTop';
import Reveal from './components/Reveal';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream overflow-hidden">
      <Hero />
      
      <Reveal>
        <Stats />
      </Reveal>
      
      <Reveal>
        <Services />
      </Reveal>
      
      <Reveal>
        <Team />
      </Reveal>
      
      <Reveal>
        <Testimonials />
      </Reveal>
      
      <Reveal>
        <FAQ />
      </Reveal>
      
      <Footer />
      
      <ChatWidget />
      <BackToTop />
    </div>
  );
}