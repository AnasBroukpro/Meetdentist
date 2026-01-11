import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import Navbar from './Navbar';

const Hero: React.FC = () => {
  return (
    <section className="bg-brand-blue min-h-screen relative overflow-hidden rounded-b-[3rem] pb-20 md:pb-32">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 pt-32 md:pt-40 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-600/50 border border-blue-400/30 text-blue-100 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 backdrop-blur-sm">
          <ShieldCheck size={14} className="text-brand-lime" />
          #1 DENTAL CLINIC IN U.K.
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
          Comfort-First Dental Care<br />
          You Can Trust
        </h1>

        {/* Subheading */}
        <p className="text-blue-200 text-sm md:text-base max-w-xl mb-8 font-medium">
          Gentle, personalized treatments focused on comfort,<br className="hidden md:block"/>
          quality, and your lasting smile.
        </p>

        {/* CTA */}
        <button className="bg-brand-lime text-brand-darkBlue px-8 py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity mb-4 shadow-lg shadow-brand-lime/20">
          Book Appointment
        </button>
        <p className="text-blue-300 text-xs mb-16">Clean. Confident. Clientsmile.</p>

        {/* Image Grid Area */}
        <div className="relative w-full max-w-5xl mx-auto mt-8">
            {/* Main Central Image - Patient */}
            <div className="relative z-10 w-full md:w-[60%] mx-auto aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                 <img 
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
                    alt="Smiling Patient" 
                    className="w-full h-full object-cover"
                />
                
                {/* Floating "Trusted" Card */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md p-3 rounded-2xl flex items-center gap-4 shadow-xl w-[90%] md:w-auto">
                    <div className="flex -space-x-3">
                        {[1,2,3].map(i => (
                            <img key={i} src={`https://picsum.photos/50/50?random=${i}`} className="w-8 h-8 rounded-full border-2 border-white" alt="Avatar"/>
                        ))}
                    </div>
                    <div className="text-left">
                        <p className="text-xs font-bold text-gray-900">Trusted by 500+ Patients</p>
                        <div className="flex text-yellow-500">
                             {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                        </div>
                    </div>
                </div>
            </div>

            {/* Left Image - Dentist Working */}
            <div className="hidden md:block absolute top-10 -left-12 w-64 h-80 rounded-3xl overflow-hidden border-4 border-white/10 rotate-[-6deg] opacity-80 hover:opacity-100 hover:rotate-0 transition-all duration-500 hover:z-20">
                <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                    alt="Dentist Working" 
                    className="w-full h-full object-cover"
                />
            </div>

             {/* Right Image - Tools/Hands */}
             <div className="hidden md:block absolute top-10 -right-12 w-64 h-80 rounded-3xl overflow-hidden border-4 border-white/10 rotate-[6deg] opacity-80 hover:opacity-100 hover:rotate-0 transition-all duration-500 hover:z-20">
                <img 
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" 
                    alt="Dental Tools" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;