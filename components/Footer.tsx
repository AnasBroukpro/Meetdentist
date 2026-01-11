import React from 'react';
import { Twitter, Linkedin, Instagram, Youtube, ArrowRight, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-cream pt-20 pb-10">
        
        {/* Blue CTA Box */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
            <div className="bg-brand-blue rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                {/* Background glow effects */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-brand-blue opacity-50 z-0"></div>
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400 rounded-full blur-[100px] opacity-30"></div>
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-30"></div>

                <div className="relative z-10">
                     <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-[10px] font-semibold mb-8 backdrop-blur-sm uppercase tracking-wider">
                        <ShieldCheck size={12} className="text-brand-lime" />
                        12 Slots Available Today
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Schedule Your Appointment</h2>
                    <p className="text-blue-200 mb-10 max-w-lg mx-auto text-sm">
                        Book your dental visit today for personalized, gentle care at your convenience.
                    </p>
                    
                    <button className="bg-brand-lime text-brand-darkBlue px-8 py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity shadow-lg">
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>

        {/* Footer Links */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-gray-200 pb-12">
            
            {/* Brand Column */}
            <div className="md:col-span-4">
                 <div className="flex items-center gap-2 mb-6">
                    <div className="bg-brand-blue text-white p-1 rounded-full">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <span className="text-xl font-bold text-brand-darkBlue tracking-tight">Smiluxe</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-12">
                    Smiluxe Dental Clinic provides modern, gentle dental care focused on comfort, cleanliness, and creating healthy, confident smiles for individuals and families in a welcoming environment.
                </p>

                <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest">Navigation</p>
                <div className="flex gap-4 text-gray-600">
                    <a href="#" className="p-2 border border-gray-200 rounded-full hover:bg-brand-blue hover:text-white transition-colors"><Twitter size={16} /></a>
                    <a href="#" className="p-2 border border-gray-200 rounded-full hover:bg-brand-blue hover:text-white transition-colors"><Linkedin size={16} /></a>
                    <a href="#" className="p-2 border border-gray-200 rounded-full hover:bg-brand-blue hover:text-white transition-colors"><Instagram size={16} /></a>
                    <a href="#" className="p-2 border border-gray-200 rounded-full hover:bg-brand-blue hover:text-white transition-colors"><Youtube size={16} /></a>
                </div>
            </div>

            {/* Newsletter & Links */}
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Newsletter */}
                <div className="md:col-span-2">
                    <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest">Subscribe Our Newsletter</p>
                    <div className="flex gap-2 max-w-md">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="flex-1 bg-white border border-gray-200 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-brand-blue"
                        />
                        <button className="bg-white border border-gray-200 text-brand-blue px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-50 flex items-center gap-2">
                            Subscribe <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                {/* Navigation Lists */}
                <div>
                     <p className="text-xs text-gray-400 mb-6 uppercase tracking-widest">Navigation</p>
                     <div className="flex flex-wrap gap-x-6 gap-y-3 font-medium text-sm text-brand-darkBlue">
                        <a href="#" className="hover:text-brand-blue">Home</a>
                        <a href="#about" className="hover:text-brand-blue">About Us</a>
                        <a href="#service" className="hover:text-brand-blue">Service</a>
                        <a href="#pricing" className="hover:text-brand-blue">Pricing</a>
                        <a href="#team" className="hover:text-brand-blue">Team</a>
                     </div>
                </div>

                <div>
                     <p className="text-xs text-gray-400 mb-6 uppercase tracking-widest">Utility Page</p>
                     <div className="flex flex-wrap gap-x-6 gap-y-3 font-medium text-sm text-brand-darkBlue">
                        <a href="#" className="hover:text-brand-blue">Style Guide</a>
                        <a href="#" className="hover:text-brand-blue">License</a>
                        <a href="#" className="hover:text-brand-blue">404 Page</a>
                        <a href="#" className="hover:text-brand-blue">Changelog</a>
                     </div>
                </div>

                {/* Contact Info */}
                 <div>
                     <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest">Gmail</p>
                     <p className="text-sm font-bold text-brand-darkBlue">clensmile@gmail.com</p>
                </div>
                <div className="flex gap-12">
                     <div>
                        <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest">Phone 1</p>
                        <p className="text-sm font-bold text-brand-darkBlue">+1 322 532 623</p>
                     </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest">Phone 2</p>
                        <p className="text-sm font-bold text-brand-darkBlue">+1 322 532 623</p>
                     </div>
                </div>

            </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto px-4 pt-8 flex justify-between items-center text-xs text-gray-400">
            <p>Copyright SmileCo 2025</p>
            <p>vektora studio.2025</p>
        </div>

    </footer>
  );
};

export default Footer;