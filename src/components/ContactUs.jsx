import React from 'react';

export default function ContactUs() {
  const contactMethods = [
    {
      icon: "💬",
      title: "Chat With Us",
      desc: "Try our 24/7 AI Chatbot for instant answers to most of your queries.",
      action: "Open Chatbot",
      type: "primary"
    },
    {
      icon: "📅",
      title: "Book a Call",
      desc: "Want a live conversation? Schedule a 1:1 demo with our team.",
      action: "Schedule a call",
      type: "link"
    },
    {
      icon: "📧",
      title: "Email Support",
      desc: "Support: support@aptolix.com\nSales: connect@aptolix.com",
      action: "Send Email",
      type: "link"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#FBFBFF] dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
            Get in Touch with <span className="text-[#7C3AED]">Aptolix</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We'd love to hear from you! Whether you have a question, need support, or just want to learn more, here is how you can reach us.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, i) => (
            <div 
              key={i} 
              className="p-8 rounded-[2.5rem] bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="text-4xl mb-6">{method.icon}</div>
              <h3 className="text-2xl font-bold dark:text-white mb-4">{method.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed whitespace-pre-line">
                {method.desc}
              </p>
              
              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                method.type === 'primary' 
                ? 'bg-[#7C3AED] text-white shadow-lg shadow-purple-500/25 hover:opacity-90' 
                : 'border border-[#7C3AED] text-[#7C3AED] hover:bg-purple-50 dark:hover:bg-purple-900/10'
              }`}>
                {method.action}
              </button>
            </div>
          ))}
        </div>

        {/* WhatsApp Highlight Section */}
        <div className="mt-16 p-8 rounded-[3rem] bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="text-5xl">📱</div>
            <div>
              <h4 className="text-2xl font-bold mb-2">Prefer WhatsApp?</h4>
              <p className="opacity-90">Message us directly for quick questions and updates.</p>
            </div>
          </div>
          <button className="bg-white text-[#7C3AED] px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform">
            Message us on WhatsApp
          </button>
        </div>

        {/* Support Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 font-medium italic">
            * We usually respond within 24 hours (often faster).
          </p>
        </div>
      </div>
    </section>
  );
}