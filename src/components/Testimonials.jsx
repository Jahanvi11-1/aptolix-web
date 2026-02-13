export default function Testimonials() {
  const reviews = [
    {
      name: "James Rodriguez",
      role: "Founder, Introlck",
      text: "We're generating 3x more qualified leads since implementing Aptolix. The chatbot handles 80% of inquiries automatically, and our response time dropped from hours to seconds.",
      stars: 5
    },
    {
      name: "Priya Sharma",
      role: "Marketing Director, Katpli",
      text: "The personalized onboarding made all the difference. Aptolix helped us train the AI on our specific products, and now it answers customer questions better than most humans.",
      stars: 5
    }
  ];

  // For the infinite scroll to work perfectly with few items, we triple the array
  const scrollItems = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-24 overflow-hidden bg-white dark:bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter dark:text-white mb-4">
          What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#4F46E5]">Clients Say</span>
        </h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="flex relative group">
        <div className="flex animate-marquee hover:pause-marquee gap-8 whitespace-nowrap py-4">
          {scrollItems.map((rev, i) => (
            <div 
              key={i} 
              className="w-[450px] flex-shrink-0 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-10 rounded-[2.5rem] shadow-xl shadow-purple-500/5 whitespace-normal transition-all duration-500 hover:border-purple-500/30"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(rev.stars)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium">
                "{rev.text}"
              </p>
              <div>
                <h4 className="font-bold text-xl dark:text-white">{rev.name}</h4>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Fades for a "Software" Look */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white dark:from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white dark:from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}