export default function Hero() {
  return (
    <section className="relative pt-44 pb-20 px-6 overflow-hidden flex flex-col items-center text-center">
      {/* 1. Background Glows (for depth) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-300/20 dark:bg-purple-900/10 blur-[120px] rounded-full -z-10" />
      
      {/* 2. Text Content */}
      <div className="max-w-5xl mx-auto mb-16">
        <h1 className="text-6xl md:text-[84px] font-black leading-[1.1] tracking-tighter mb-8 text-[#0F172A] dark:text-white">
          AI Chatbots & Agents for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#4F46E5]">
            Sales, Support, and Automation
          </span>
        </h1>

        <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          Launch AI Agents trained on your content — they engage customers, qualify leads, handle support, and automate workflows around the clock.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-purple-500/25 hover:scale-105 transition-all">
            Book a Demo 📅
          </button>
          <button className="bg-white dark:bg-white/5 border-2 border-[#7C3AED] text-[#7C3AED] dark:text-purple-400 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-purple-50 dark:hover:bg-white/10 transition-all">
            Try Demo Agent 🤖
          </button>
        </div>
      </div>

      {/* 3. The SVG Mockup Container (Perfectly Aligned) */}
      <div className="relative w-full max-w-5xl mx-auto mt-10">
        <div className="relative z-10 p-4 md:p-8 rounded-[3rem] bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/30 dark:border-white/10 shadow-[0_50px_100px_-20px_rgba(124,58,237,0.15)] transform hover:-translate-y-2 transition-transform duration-700">
          <img 
            src="/Aptolix_AI_Chatbot.svg" 
            alt="Aptolix AI Dashboard" 
            className="w-full h-auto rounded-[2rem] drop-shadow-2xl"
          />
        </div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 blur-[60px] rounded-full animate-pulse" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 blur-[80px] rounded-full animate-pulse" />
      </div>

      {/* Floating Chat Icon (Consistent with your reference) */}
      
    </section>
  );
}