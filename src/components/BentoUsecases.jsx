export default function BentoUseCases() {
  const cases = [
    {
      title: "24/7 Customer Support",
      bullets: ["Reduce tickets by 70%", "Instant on-brand answers"],
      icon: "🎧",
      size: "md:col-span-1"
    },
    {
      title: "Boost Sales",
      bullets: ["Qualify leads 24/7", "Explain pricing clearly"],
      icon: "📈",
      size: "md:col-span-1"
    },
    {
      title: "In-App User Support",
      bullets: ["Onboarding made easy", "Faster issue resolution"],
      icon: "📱",
      size: "md:col-span-1"
    },
    {
      title: "Internal Assistant",
      bullets: ["Access HR policies", "Consistent knowledge"],
      icon: "🏢",
      size: "md:col-span-2"
    },
    {
      title: "Answer FAQs",
      bullets: ["Read from Docs/Notion", "No manual entry"],
      icon: "❓",
      size: "md:col-span-1"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-white dark:bg-[#0B0B0B]">
      <h2 className="text-4xl font-extrabold text-center mb-16 dark:text-white">
        Transform Your Business with <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#4F46E5]">
          AI Chatbots & Automation
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <div key={i} className={`${c.size} p-8 rounded-[2.5rem] bg-[#F8FAFC] dark:bg-[#161616] border border-gray-100 dark:border-white/5 hover:border-purple-500/30 transition-all`}>
            <div className="text-3xl mb-6">{c.icon}</div>
            <h3 className="text-xl font-bold mb-4 dark:text-white">{c.title}</h3>
            <ul className="space-y-2">
              {c.bullets.map((b, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="text-purple-600">✓</span> {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}