import React from 'react';
import { Star } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section className="bg-brand-cream py-20 md:py-32" id="about">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Rating */}
        <div className="flex flex-col items-center gap-2 mb-8">
            <div className="flex gap-1 bg-green-100 px-3 py-1 rounded-full">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-green-500" fill="currentColor" />)}
            </div>
            <span className="text-xs font-bold text-gray-600">4.9/5 (1,259)</span>
        </div>

        {/* Headlines */}
        <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4 max-w-3xl mx-auto leading-tight">
            Smiluxe provides advanced dental care for confident, healthy smiles.
        </h2>
        <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
            Gentle, modern dental care for brighter, healthier smiles.
        </p>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            
            <div className="bg-white p-8 rounded-3xl text-left shadow-sm hover:shadow-md transition-shadow">
                <p className="text-sm font-semibold text-brand-blue mb-6">Patient Satisfaction</p>
                <h3 className="text-5xl font-bold text-brand-blue mb-2">98%</h3>
                <p className="text-gray-500 text-sm">Rated excellent for comfort and care.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-left shadow-sm hover:shadow-md transition-shadow">
                <p className="text-sm font-semibold text-brand-blue mb-6">Smiles Treated</p>
                <h3 className="text-5xl font-bold text-brand-blue mb-2">500+</h3>
                <p className="text-gray-500 text-sm">Trusted for routine, cosmetic care</p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-left shadow-sm hover:shadow-md transition-shadow">
                <p className="text-sm font-semibold text-brand-blue mb-6">Experience</p>
                <h3 className="text-5xl font-bold text-brand-blue mb-2">10+ Years</h3>
                <p className="text-gray-500 text-sm">Professional care with lasting trust.</p>
            </div>

        </div>

        {/* Secondary Button */}
        <button className="bg-white border border-gray-200 text-brand-darkBlue px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-50 transition-colors">
            About us
        </button>

      </div>
    </section>
  );
};

export default Stats;