import React from 'react';
import { Doctor } from '../types';

const doctors: Doctor[] = [
    { name: 'Dr. Vivian Lumley', role: 'DDS, AAACD', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Dr. Grant Smalley', role: 'DMD, ABDSM', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Dr. Willow Camp', role: 'DDS, FAGD', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop' },
    { name: 'Dr. Howard Fishlock', role: 'DMD, DABOI/ID', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Dr. Elias Finch', role: 'DDS, DABPD', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Dr. Chester Holbrook', role: 'DDS, FAAPD', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2071&auto=format&fit=crop' },
    { name: 'Dr. Heidi Seacombe', role: 'DMD, MS, FRCD(C)', image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=2574&auto=format&fit=crop' },
    { name: 'Dr. Tilly Winterton', role: 'DMD, AAID', image: 'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=2070&auto=format&fit=crop' },
];

const Team: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-32" id="team">
        <div className="max-w-7xl mx-auto px-4 text-center">
            
            <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">TEAM</p>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-darkBlue mb-4">
                Meet Out Smiluxe Experts
            </h2>
            <p className="text-gray-500 mb-16 max-w-xl mx-auto">
                Highly skilled, compassionate doctors delivering trusted dental care every day.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                {doctors.map((doc, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                         <div className="relative mb-6 group">
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-50 shadow-lg transition-transform duration-300 group-hover:scale-105">
                                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute inset-0 rounded-full border border-gray-100 pointer-events-none"></div>
                         </div>
                         <h4 className="text-lg font-bold text-brand-darkBlue mb-1">{doc.name}</h4>
                         <p className="text-xs text-gray-500 uppercase font-medium">{doc.role}</p>
                    </div>
                ))}
            </div>

        </div>
    </section>
  );
};

export default Team;