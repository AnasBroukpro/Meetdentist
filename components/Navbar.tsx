import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 text-white py-6 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className="bg-white text-brand-blue p-1 rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">Smiluxe</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-blue-100">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About Us</a>
          <a href="#services" className="hover:text-white transition-colors">Service</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#team" className="hover:text-white transition-colors">Team</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-white text-brand-blue px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
            Contact us <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-blue p-6 shadow-xl rounded-b-2xl mt-2 border-t border-blue-600">
          <div className="flex flex-col gap-4 text-center">
            <a href="#" className="text-white font-medium" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="text-blue-100 font-medium" onClick={() => setIsOpen(false)}>About Us</a>
            <a href="#services" className="text-blue-100 font-medium" onClick={() => setIsOpen(false)}>Service</a>
            <a href="#team" className="text-blue-100 font-medium" onClick={() => setIsOpen(false)}>Team</a>
            <button className="bg-white text-brand-blue px-6 py-3 rounded-full font-bold w-full">
                Contact us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;