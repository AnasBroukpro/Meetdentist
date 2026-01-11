import React from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-brand-pink py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
            
            <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">TESTIMONIAL</p>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-darkBlue mb-4">
                What Our Patients Say
            </h2>
            <p className="text-gray-500 mb-16 max-w-xl mx-auto">
                Hear directly from those who trust Smiluxe for their dental care.
            </p>

            {/* Carousel Mockup */}
            <div className="relative flex items-center justify-center gap-6">
                
                {/* Left Card (Faded) */}
                <div className="hidden md:block w-1/4 opacity-40 scale-90 blur-[1px]">
                    <div className="bg-white p-8 rounded-3xl h-64 flex flex-col justify-between">
                         <Quote size={32} className="text-gray-200" />
                         <p className="text-gray-400 text-sm">Gentle care, friendly experience.</p>
                         <div className="text-right text-gray-300 text-xs">Patient</div>
                    </div>
                </div>

                {/* Center Card (Active) */}
                <div className="w-full md:w-1/3 z-10">
                    <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl relative">
                        <Quote size={48} className="text-gray-100 absolute top-8 left-8" />
                        
                        <div className="flex flex-col items-center relative z-10">
                            <img 
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                                alt="User" 
                                className="w-16 h-16 rounded-full border-4 border-white shadow-md -mt-20 mb-4 bg-gray-200"
                            />
                            
                            <div className="flex gap-1 mb-2">
                                {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-green-500" fill="currentColor" />)}
                            </div>
                            <span className="text-xs font-bold text-gray-500 mb-4">4.9/5 (1,259)</span>

                            <h4 className="text-xl font-bold text-brand-darkBlue mb-4">Smiling Brighter After Every Visit</h4>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                I used to fear the dentist, but Smiluxe changed that. Gentle care, friendly staff, and a clean clinic make every visit a great experience.
                            </p>

                            <div className="flex justify-between w-full items-end border-t pt-4">
                                <span className="font-bold text-brand-darkBlue text-sm">Nikola Jokić</span>
                                <span className="text-gray-400 text-xs">Patient</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Card (Faded) */}
                <div className="hidden md:block w-1/4 opacity-40 scale-90 blur-[1px]">
                     <div className="bg-white p-8 rounded-3xl h-64 flex flex-col justify-between">
                         <Quote size={32} className="text-gray-200" />
                         <p className="text-gray-400 text-sm">I used to fear the staff, and...</p>
                         <div className="text-right text-gray-300 text-xs">Nikola Jokić</div>
                    </div>
                </div>

            </div>

            {/* Navigation Dots/Arrows */}
            <div className="flex justify-center gap-4 mt-12">
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-brand-blue shadow-sm hover:shadow-md transition-all">
                    <ChevronLeft size={20} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-brand-blue shadow-sm hover:shadow-md transition-all">
                    <ChevronRight size={20} />
                </button>
            </div>

        </div>
    </section>
  );
};

export default Testimonials;