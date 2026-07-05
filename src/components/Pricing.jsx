export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$199",
      period: "/year",
      desc: "Ideal for one use case like customer support.",
      features: ["1 AI Chatbot", "900 messages/month", "1 website embed", "Train on 35 pages"],
      button: "Get Early Bird",
      highlight: false
    },
    {
      name: "Pro",
      price: "$69",
      period: "/mo",
      desc: "Scale sales and support with multiple AI agents.",
      features: ["2 AI chatbots", "10,000 messages/month", "CRM Integration", "Priority Support"],
      button: "Grow with Pro",
      highlight: true
    },
    {
      name: "Custom",
      price: "Let's Talk",
      period: "",
      desc: "Advanced solutions for complex enterprise needs.",
      features: ["Unlimited chatbots", "Unlimited chats", "SLA-based support", "Custom Integrations"],
      button: "Contact Us",
      highlight: false
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Plans Tailored to Your Business</h2>
        <p className="text-gray-500">All plans come with a 7-day money-back guarantee.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`relative p-8 rounded-[2.5rem] border ${
              plan.highlight 
              ? 'border-[#7C3AED] bg-white dark:bg-[#111111] shadow-2xl shadow-purple-500/10 scale-105 z-10' 
              : 'border-gray-200 dark:border-white/10 bg-white/50 dark:bg-transparent'
            } transition-all duration-300`}
          >
            {plan.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white text-xs font-bold py-1 px-4 rounded-full">
                MOST POPULAR
              </span>
            )}
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-extrabold">{plan.price}</span>
              <span className="text-gray-500 text-sm">{plan.period}</span>
            </div>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">{plan.desc}</p>
            
            <ul className="space-y-4 mb-10">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <span className="text-[#7C3AED]">✓</span> {feat}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`block w-full py-4 rounded-2xl font-bold text-center transition-all ${
                plan.highlight
                ? 'bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white hover:opacity-90'
                : 'bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10'
              }`}
            >
              {plan.button}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}