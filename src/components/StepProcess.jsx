export default function StepProcess() {
  const steps = [
    { 
      num: "1", 
      title: "Book a quick signup call", 
      desc: "Schedule a short walkthrough — no jargon. Tell the platform what you want your bot to do.",
      tag: "Quick"
    },
    { 
      num: "2", 
      title: "Connect & configure", 
      desc: "Connect content sources (site, docs, Notion, PDFs) and tune responses — all from the platform.",
      tag: "Platform-first"
    },
    { 
      num: "3", 
      title: "Go live with embed", 
      desc: "Add a lightweight JavaScript snippet to your site or app for an instant launch.",
      tag: "Instant"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto py-32 px-6">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 dark:text-white">
          How Aptolix helps you launch <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#4F46E5]">
            in 3 simple steps
          </span>
        </h2>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Animated Connector Path (Desktop Only) */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gray-100 dark:bg-white/5 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] via-[#4F46E5] to-[#7C3AED] animate-pulse" />
        </div>

        {steps.map((s, i) => (
          <div key={i} className="group relative p-8 rounded-[3rem] bg-white/50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:border-[#7C3AED]/30 transition-all duration-500 hover:shadow-2xl">
            {/* The Glowing Number Node */}
            <div className="relative w-20 h-20 mx-auto mb-8">
              <div className="absolute inset-0 bg-[#7C3AED] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative w-full h-full bg-gradient-to-tr from-[#7C3AED] to-[#4F46E5] text-white rounded-[2rem] flex items-center justify-center text-3xl font-black shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {s.num}
              </div>
            </div>

            {/* Label Tag */}
            <div className="inline-block px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-[#7C3AED] text-[10px] font-black uppercase tracking-widest mb-4">
              {s.tag}
            </div>

            <h3 className="text-2xl font-bold mb-4 dark:text-white">{s.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              {s.desc}
            </p>

            {/* Bottom Accent Line */}
            <div className="mt-8 h-1 w-0 bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] group-hover:w-full transition-all duration-700 rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
}