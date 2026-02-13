export default function BentoGrid() {
  const useCases = [
    {
      title: "24/7 Customer Support",
      desc: "Resolve 70% of tickets instantly with AI trained on your knowledge base.",
      size: "md:col-span-2 md:row-span-2", 
      icon: "🎧",
      img: "/Aptolix_Customer_Support_AI_Agent.svg",
      color: "from-purple-500/10 to-indigo-500/10"
    },
    {
      title: "Boost Sales",
      desc: "Qualify leads 24/7 and answer product questions.",
      size: "md:col-span-1 md:row-span-1",
      icon: "📈",
      img: "/Aptolix_Sales_Support_AI_Agent.svg",
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Answer FAQs",
      desc: "Doc-trained agent that delivers accurate answers from files.",
      size: "md:col-span-1 md:row-span-1",
      icon: "❓",
      img: "/Aptolix_FAQs_AI_Agent.svg",
      color: "from-indigo-500/10 to-purple-500/10"
    },
    {
      title: "Internal Assistant",
      desc: "Instant access to HR policies and SOPs for your team.",
      size: "md:col-span-2 md:row-span-1",
      icon: "🏢",
      img: "/Aptolix_Employee_Assistance_AI_Agent.svg",
      color: "from-purple-600/10 to-indigo-400/10"
    },
    {
      title: "In-App Support",
      desc: "Onboard users and troubleshoot inside your app.",
      size: "md:col-span-1 md:row-span-1",
      icon: "📱",
      img: "/aptolix_customer_support.webp",
      color: "from-cyan-500/10 to-blue-500/10"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-left mb-16">
        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 dark:text-white">
          Transform with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#4F46E5]">
            AI Automation
          </span>
        </h2>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-xl">
          Deploy specialized AI agents designed for different parts of your workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {useCases.map((item, index) => (
          <div 
            key={index}
            className={`${item.size} group relative overflow-hidden rounded-[3rem] border border-gray-100 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] p-8 hover:shadow-2xl transition-all duration-500`}
          >
            {/* Background Gradient Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 shadow-sm border border-gray-100 dark:border-white/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 dark:text-white">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm max-w-[200px]">
                {item.desc}
              </p>
            </div>

            {/* Peeking Image Component - This fills the white space */}
            <div className="absolute bottom-0 right-0 w-3/4 h-1/2 translate-y-4 translate-x-4">
              <img 
                src={item.img} 
                alt="" 
                className="w-full h-full object-contain object-bottom-right opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}