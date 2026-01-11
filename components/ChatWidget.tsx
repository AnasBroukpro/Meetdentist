import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0); // 0: input, 1: success

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(1);
    // Simulate API call
    setTimeout(() => {
        setIsOpen(false);
        setStep(0);
    }, 3000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
        {/* Chat Window */}
        <div className={`mb-4 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-80 sm:w-96 transition-all duration-300 origin-bottom-right ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none h-0 mb-0'}`}>
            <div className="bg-brand-blue p-4 flex justify-between items-center text-white">
                <div>
                    <h3 className="font-bold">Chat with us</h3>
                    <p className="text-xs text-blue-100">We usually reply within an hour</p>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:bg-blue-600 p-1 rounded-full transition-colors">
                    <X size={18} />
                </button>
            </div>
            
            <div className="p-6 bg-gray-50">
                {step === 0 ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="bg-blue-50 p-3 rounded-lg rounded-tl-none text-sm text-brand-darkBlue mb-4">
                            Hi there! 👋 How can we help you with your smile today?
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Name</label>
                            <input required type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-blue transition-colors" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email</label>
                            <input required type="email" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-blue transition-colors" placeholder="email@example.com" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Message</label>
                            <textarea required rows={3} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-blue transition-colors resize-none" placeholder="I'd like to book an appointment..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-brand-blue text-white py-2.5 rounded-lg font-bold text-sm hover:bg-brand-darkBlue transition-colors flex justify-center items-center gap-2">
                            Send Message <Send size={16} />
                        </button>
                    </form>
                ) : (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Send size={32} />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Message Sent!</h4>
                        <p className="text-sm text-gray-500">Thank you for reaching out. We'll get back to you shortly.</p>
                    </div>
                )}
            </div>
        </div>

        {/* Toggle Button */}
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 ${isOpen ? 'bg-gray-200 text-gray-600 rotate-90' : 'bg-brand-lime text-brand-darkBlue'}`}
        >
            {isOpen ? <X size={24} /> : <MessageCircle size={28} className="fill-current" />}
        </button>
    </div>
  );
};

export default ChatWidget;