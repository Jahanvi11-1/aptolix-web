import React, { useState, useEffect } from 'react';

const useCases = [
  {
    title: "24/7 Customer Support",
    label: "Support Agent",
    desc: "Resolve 70% of tickets instantly with AI trained on your knowledge base.",
    bullets: ["Instant on-brand answers", "Worldwide 24/7 coverage", "Seamless human escalation"],
    image: "/Aptolix_Customer_Support_AI_Agent.svg",
    color: "#7C3AED"
  },
  {
    title: "Boost Sales & Leads",
    label: "Sales Agent",
    desc: "Qualify leads 24/7 and answer product questions before they reach your team.",
    bullets: ["Personalized conversations", "Automated lead qualification", "Direct CRM integration"],
    image: "/Aptolix_Sales_Support_AI_Agent.svg",
    color: "#4F46E5"
  },
  {
    title: "In-App User Guidance",
    label: "SaaS Agent",
    desc: "Onboard users and resolve issues inside your app in real-time.",
    bullets: ["Reduce churn instantly", "Contextual assistance", "Explain complex features"],
    image: "/aptolix_customer_support.webp",
    color: "#10B981"
  },
  {
    title: "Internal Assistant",
    label: "HR/Ops Agent",
    desc: "Provide employees instant access to HR policies and SOPs.",
    bullets: ["Integrates with Notion/Docs", "24/7 internal support", "Consistent knowledge"],
    image: "/Aptolix_Employee_Assistance_AI_Agent.svg",
    color: "#F59E0B"
  },
  {
    title: "Answer FAQs",
    label: "Doc Agent",
    desc: "A doc-trained agent that delivers accurate answers from existing files.",
    bullets: ["Supports PDFs & Markdown", "No manual entry needed", "Reduces support load"],
    image: "/Aptolix_FAQs_AI_Agent.svg",
    color: "#EC4899"
  },
  {
    title: "Lead Qualification",
    label: "Growth Agent",
    desc: "Engage visitors instantly to shorten sales cycles by building trust.",
    bullets: ["Build trust instantly", "Capture contact details", "Automatic CRM sync"],
    image: "/Aptolix_Sales_Support_AI_Agent.svg",
    color: "#6366F1"
  }
];

export default function FeatureFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-advance logic for the progress indicator
  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((current) => (current + 1) % useCases.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50); // Speed of the loading bar

    return () => clearInterval(interval);
  }, [activeStep]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="flex flex-col md:flex-row gap-20">
        
        {/* LEFT: THE STICKY NAVIGATOR WITH PROGRESS */}
        <div className="flex-1 md:sticky md:top-32 h-fit space-y-4">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              onClick={() => setActiveStep(index)}
              className={`relative flex gap-6 p-8 rounded-[2.5rem] transition-all duration-500 cursor-pointer ${
                activeStep === index 
                ? 'bg-white dark:bg-white/5 shadow-xl ring-1 ring-purple-100 dark:ring-white/10' 
                : 'opacity-40 grayscale hover:opacity-60'
              }`}
            >
              {/* Vertical Progress Bar */}
              <div className="w-1.5 h-auto self-stretch bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="w-full bg-gradient-to-b from-[#7C3AED] to-[#4F46E5] transition-all duration-100 ease-linear"
                  style={{ 
                    height: activeStep === index ? `${progress}%` : '0%',
                    opacity: activeStep === index ? 1 : 0 
                  }}
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-[#7C3AED]">
                    {useCase.label}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-3 dark:text-white leading-tight">
                  {useCase.title}
                </h3>
                {activeStep === index && (
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed animate-in fade-in slide-in-from-top-2">
                    {useCase.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: THE VIEWPORT */}
        <div className="flex-1 h-[650px] md:sticky md:top-32 flex items-center justify-center">
          <div className="relative w-full max-w-[480px] h-full">
            {/* Glow Background */}
            <div 
              className="absolute inset-0 blur-[120px] rounded-full opacity-20 transition-all duration-1000" 
              style={{ backgroundColor: useCases[activeStep].color }} 
            />

            {/* Glass Device Frame */}
            <div className="relative z-10 w-full h-full p-4 rounded-[4rem] bg-white/40 dark:bg-white/5 backdrop-blur-3xl border border-white/30 dark:border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center p-4">
                {useCases.map((useCase, index) => (
                  <img 
                    key={index}
                    src={useCase.image}
                    alt={useCase.title}
                    className={`absolute w-full h-full object-contain drop-shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.23, 1, 0.32, 1)] ${
                      activeStep === index 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-20 scale-90'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}