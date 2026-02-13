import React from 'react';

export default function CallToAction() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-32 overflow-hidden">
      {/* 1. Background Glows (Acta-style depth) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#7C3AED]/20 blur-[120px] rounded-full pointer-events-none" />
      
      {/* 2. Glass Container */}
      <div className="relative z-10 p-12 md:p-24 rounded-[4rem] bg-white dark:bg-white/[0.03] border border-purple-100 dark:border-white/10 text-center shadow-2xl backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 dark:text-white leading-[1.1]">
            Ready to turn intent into <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#4F46E5]">
              Real-World Action?
            </span>
          </h2>
          
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 leading-relaxed">
            Join the businesses using Aptolix to automate 70% of their customer interactions and qualify leads around the clock.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Primary Action */}
            <button className="group relative px-10 py-5 bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white rounded-2xl font-bold text-lg shadow-xl shadow-purple-500/25 hover:scale-105 active:scale-95 transition-all">
              <span className="relative z-10 flex items-center gap-3">
                📅 Book a Quick Signup Call
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            </button>

            {/* Secondary Action */}
            <button className="px-10 py-5 bg-white dark:bg-white/5 border-2 border-[#7C3AED] text-[#7C3AED] dark:text-purple-400 rounded-2xl font-bold text-lg hover:bg-purple-50 dark:hover:bg-white/10 transition-all">
              Try Demo Agent 🤖
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
             {/* Small proof points can go here */}
             <span className="text-xs font-black tracking-widest uppercase">No Coding Needed</span>
             <span className="text-xs font-black tracking-widest uppercase text-purple-600">•</span>
             <span className="text-xs font-black tracking-widest uppercase">7-Day Money Back</span>
             <span className="text-xs font-black tracking-widest uppercase text-purple-600">•</span>
             <span className="text-xs font-black tracking-widest uppercase">Guided Setup</span>
          </div>
        </div>
      </div>
    </section>
  );
}