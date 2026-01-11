import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const faqs = [
    { q: "How often should I visit the dentist?", a: "We recommend visiting every 6 months for routine check-ups and cleanings." },
    { q: "Do you accept insurance or offer payment plans?", a: "Yes, we accept major insurance providers and offer flexible payment plans for uninsured patients." },
    { q: "Is teeth whitening safe and effective?", a: "Yes, our professional whitening treatments are safe, effective, and deliver noticeable results. We use enamel-safe products to minimize sensitivity while maximizing brightness." },
    { q: "What should I do in a dental emergency?", a: "Contact us immediately. We offer same-day appointments for emergencies like toothaches or broken teeth." },
    { q: "At what age should kids start seeing a dentist?", a: "It's best to bring children in by their first birthday or when their first tooth appears." },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(2);

  return (
    <section className="bg-white py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4">
            
            <p className="text-center text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">FAQ</p>
            <h2 className="text-center text-3xl md:text-5xl font-bold text-brand-darkBlue mb-4">
                Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-500 mb-16">
                Find clear answers to common dental questions and Smiluxe trusted care services.
            </p>

            <div className="space-y-4">
                {faqs.map((item, idx) => (
                    <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden">
                        <button 
                            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                            className={`w-full flex justify-between items-center p-6 text-left transition-colors ${activeIndex === idx ? 'bg-brand-mint' : 'bg-white hover:bg-gray-50'}`}
                        >
                            <span className="font-semibold text-brand-darkBlue text-sm md:text-base pr-4">{item.q}</span>
                            {activeIndex === idx ? <ChevronUp size={20} className="text-brand-blue shrink-0" /> : <ChevronDown size={20} className="text-gray-400 shrink-0" />}
                        </button>
                        
                        {activeIndex === idx && (
                            <div className="p-6 pt-0 bg-brand-mint text-gray-600 text-sm leading-relaxed">
                                {item.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Still have questions box */}
            <div className="mt-12 p-8 border border-gray-100 rounded-2xl bg-white shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h4 className="font-bold text-brand-darkBlue mb-2">Still have questions about your dental care?</h4>
                    <p className="text-gray-500 text-xs md:text-sm max-w-lg">
                        Our friendly, experienced team is here to help—ready to guide you with trusted, professional support every step of the way.
                    </p>
                </div>
                <button className="text-brand-blue font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all whitespace-nowrap">
                    Get in touch with our caring staff today. <ArrowRight size={16} />
                </button>
            </div>

        </div>
    </section>
  );
};

export default FAQ;