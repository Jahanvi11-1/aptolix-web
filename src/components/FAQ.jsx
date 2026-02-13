import React, { useState } from 'react';

const faqs = [
  { id: "01", q: "What is Aptolix?", a: "An AI platform for creating agents trained on your content for sales, support, or automation. You get a ready-to-use experience without complex setup." },
  { id: "02", q: "How fast is launch?", a: "Most users go live within a day. Share your sources, and our guided onboarding handles the training." },
  { id: "03", q: "Need tech skills?", a: "No. Aptolix is designed to be simple and guided, walking you through every step of the setup." },
  { id: "04", q: "Read my docs?", a: "Yes. It connects with your website, PDFs, Word, and Notion for accurate, on-brand responses." },
  { id: "05", q: "How to add it?", a: "Aptolix provides a lightweight JS snippet compatible with WordPress, Webflow, Framer, or custom sites." },
  { id: "06", q: "Update content?", a: "You can retrain or update your chatbot anytime with new links or files to keep it current." },
  { id: "07", q: "Remove branding?", a: "Yes. White-label options are available on higher plans for a fully branded experience." },
  { id: "08", q: "Data security?", a: "Absolutely. Your training data and files are private; we never share or reuse your content." },
  { id: "09", q: "Support options?", a: "You get guided setup and ongoing support via chat or email for retraining or new features." },
  { id: "10", q: "Cancel anytime?", a: "Yes. No long-term commitments; your bot stays active until the billing cycle ends." },
  { id: "11", q: "Integration?", a: "Seamlessly works with your existing tools to qualify leads and handle customer support 24/7." }
];

export default function FAQ() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row gap-8 min-h-[550px]">
        
        {/* LEFT: THE INTERACTIVE GRID (The "Menu") */}
        <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-3 h-full">
          <div className="col-span-full mb-4">
            <h2 className="text-4xl font-black tracking-tighter dark:text-white">
              FAQ <span className="text-[#7C3AED]">Knowledge Base.</span>
            </h2>
          </div>
          
          {faqs.map((faq, i) => (
            <button
              key={i}
              onMouseEnter={() => setActiveTab(i)}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                activeTab === i 
                ? 'bg-white dark:bg-white/5 border-[#7C3AED] shadow-lg shadow-purple-500/10' 
                : 'bg-transparent border-gray-100 dark:border-white/5 opacity-60 hover:opacity-100'
              }`}
            >
              <span className="text-[10px] font-black text-[#7C3AED] opacity-50">{faq.id}</span>
              <span className={`text-sm font-bold truncate ${activeTab === i ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>
                {faq.q}
              </span>
            </button>
          ))}
        </div>

        {/* RIGHT: THE DISPLAY VIEWPORT (The "Screen") */}
        <div className="lg:w-5/12">
          <div className="relative h-full w-full p-10 rounded-[3rem] bg-[#F8FAFC] dark:bg-white/[0.03] border border-gray-100 dark:border-white/10 flex flex-col justify-center overflow-hidden">
            {/* Dynamic Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#7C3AED]/10 blur-[80px] rounded-full" />
            
            <div key={activeTab} className="relative z-10 animate-in fade-in zoom-in-95 duration-500">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-[#7C3AED] flex items-center justify-center text-xl font-black mb-8">
                {faqs[activeTab].id}
              </div>
              <h3 className="text-2xl font-black mb-6 dark:text-white leading-tight">
                {faqs[activeTab].q}
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                {faqs[activeTab].a}
              </p>
            </div>
            
            {/* CTA inside the Viewport */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
              <button className="text-[#7C3AED] font-bold text-sm hover:underline">
                Ask a different question →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}