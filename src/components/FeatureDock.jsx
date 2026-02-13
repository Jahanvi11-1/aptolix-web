const DetailedFeature = ({ title, desc, bullets, image, reverse }) => (
  <div className="relative min-h-[80vh] flex flex-col md:flex-row items-center gap-12 py-20">
    {/* Left: Sticky Text Content */}
    <div className={`flex-1 md:sticky md:top-32 h-fit ${reverse ? 'md:order-2' : ''}`}>
      <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
        AI Solution
      </div>
      <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-[#0F172A] dark:text-white">
        {title}
      </h2>
      <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">
        {desc}
      </p>
      <div className="grid grid-cols-1 gap-4">
        {bullets.map((b, i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-purple-100 dark:border-white/10 hover:border-purple-300 transition-colors shadow-sm">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-tr from-[#7C3AED] to-[#4F46E5] text-white flex items-center justify-center text-xs">✓</span>
            <span className="font-semibold text-gray-700 dark:text-gray-200">{b}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Right: Layered "Floating" Mockup */}
    <div className="flex-1 relative w-full perspective-1000">
      <div className="relative z-10 p-4 rounded-[3rem] bg-gradient-to-br from-white/80 to-white/40 dark:from-white/10 dark:to-white/5 backdrop-blur-2xl border border-white/20 shadow-[0_50px_100px_-20px_rgba(124,58,237,0.25)] transform rotate-2 hover:rotate-0 transition-transform duration-700">
        <img 
          src={image} 
          alt={title} 
          className="rounded-[2rem] w-full h-auto" 
        />
        {/* Abstract UI Elements to break the "Rectangle" look */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#7C3AED] rounded-full blur-[60px] opacity-40"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#4F46E5] rounded-full blur-[80px] opacity-30"></div>
      </div>
    </div>
  </div>
);

export default function FeatureDock() {
  const features = [
    {
      title: "24/7 Customer Support",
      desc: "Turn your documentation into an active support agent that never sleeps.",
      bullets: ["70% Ticket Reduction", "Instant On-Brand Answers", "Seamless Human Escalation"],
      image: "/Aptolix_Customer_Support_AI_Agent.svg",
      reverse: false
    },
    {
      title: "Boost Your Sales",
      desc: "An AI agent that qualifies leads and builds trust before the first human demo.",
      bullets: ["Automatic Lead Qualification", "24/7 Prospect Engagement", "CRM Direct Integration"],
      image: "/Aptolix_Sales_Support_AI_Agent.svg",
      reverse: true
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="py-20 border-t border-gray-100 dark:border-white/5">
        <h2 className="text-center text-5xl md:text-6xl font-black mb-10 text-[#0F172A] dark:text-white">
          Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#4F46E5]">Chatbots.</span>
        </h2>
      </div>
      {features.map((f, i) => <DetailedFeature key={i} {...f} />)}
    </section>
  );
}