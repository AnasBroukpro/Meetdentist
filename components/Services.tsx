import React from 'react';
import { Home, Sparkles, User, BadgeCheck } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="bg-brand-mint py-20 md:py-28" id="services">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
                <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">WHAT OUR SERVICE</p>
                <h2 className="text-3xl md:text-5xl font-bold text-brand-darkBlue mb-6 leading-tight">
                    Explore Our Trusted Dental<br/> Service Options
                </h2>
                <p className="text-gray-600 max-w-lg">
                    Explore our dental service offering expert care, advanced treatments, and personalized solutions for healthier, brighter smiles.
                </p>
            </div>
            <button className="mt-8 md:mt-0 bg-brand-lime text-brand-darkBlue px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-brand-lime/20 hover:opacity-90">
                Book Appointment
            </button>
        </div>

        {/* Image Banner */}
        <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-[-100px] md:mb-[-120px] relative z-0">
             <img 
                src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=2070&auto=format&fit=crop" 
                alt="Dental Operation" 
                className="w-full h-full object-cover brightness-[0.8]"
            />
        </div>

        {/* Cards overlap */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col h-full">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white mb-6">
                    <Home size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-darkBlue mb-3">General Dentistry</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                    Consistent dental care ensures a bright, clean, and healthy smile every single day.
                </p>
                <ul className="mt-auto space-y-3">
                    {['Routine Cleaning', 'Cavity Treatment', 'Tooth Extractions', 'Preventive Care'].map(item => (
                        <li key={item} className="text-xs text-gray-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span> {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col h-full">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white mb-6">
                    <Sparkles size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-darkBlue mb-3">Cosmetic Dentistry</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                    Transform your smile with safe, effective, and aesthetic dental treatments tailored for confidence.
                </p>
                <ul className="mt-auto space-y-3">
                    {['Smile Enhancement', 'Teeth Whitening', 'Porcelain Veneers', 'Smile Design'].map(item => (
                        <li key={item} className="text-xs text-gray-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span> {item}
                        </li>
                    ))}
                </ul>
            </div>

             {/* Card 3 */}
             <div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col h-full">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white mb-6">
                    <BadgeCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-darkBlue mb-3">Dental Implants</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                    Strong, natural-looking replacements designed to restore smiles, confidence, and lasting oral health.
                </p>
                <ul className="mt-auto space-y-3">
                    {['Single Tooth Implants', 'Multiple Tooth Implants', 'Full-Mouth Restorations', 'Implant Consultations'].map(item => (
                        <li key={item} className="text-xs text-gray-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span> {item}
                        </li>
                    ))}
                </ul>
            </div>

        </div>

      </div>
    </section>
  );
};

export default Services;