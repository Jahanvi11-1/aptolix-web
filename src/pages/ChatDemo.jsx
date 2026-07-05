import React, { useState, useEffect, useRef } from 'react';

const personas = [
  { 
    name: "Sales", 
    icon: "💰", 
    desc: "Qualified leads & CRM sync", 
    prompt: "Hi! I'm the Aptolix Sales Agent. Want to know how we can boost your revenue?",
    color: "#7C3AED" 
  },
  { 
    name: "Support", 
    icon: "🎧", 
    desc: "Instant KB-based answers", 
    prompt: "Hello! I'm here for technical help. Need assistance with installation?",
    color: "#4F46E5" 
  },
  { 
    name: "SaaS", 
    icon: "🚀", 
    desc: "Feature discovery & onboarding", 
    prompt: "Welcome! I can guide you through our API and enterprise features.",
    color: "#10B981" 
  }
];

// This 'export default' fixes the SyntaxError in your App.jsx
export default function ChatDemo() {
  const [activePersona, setActivePersona] = useState(personas[0]);
  const [messages, setMessages] = useState([{ text: personas[0].prompt, isBot: true }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  const handlePersonaChange = (p) => {
    setActivePersona(p);
    setMessages([{ text: p.prompt, isBot: true }]);
  };

  // Auto-scroll to latest message
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { text: input, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        text: `As your ${activePersona.name} agent, I've processed your request: "${input}". How else can I assist?`, 
        isBot: true 
      }]);
    }, 1200);
  };

  return (
    <section className="min-h-screen bg-[#FBFBFF] dark:bg-[#080808] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* LEFT: PERSONA SELECTION */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-8 rounded-[3rem] bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 shadow-xl">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#7C3AED] mb-8">Select Agent Persona</h2>
            <div className="space-y-3">
              {personas.map((p) => (
                <button
                  key={p.name}
                  onClick={() => handlePersonaChange(p)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                    activePersona.name === p.name 
                    ? 'bg-white dark:bg-white/10 border-[#7C3AED] shadow-lg scale-[1.02]' 
                    : 'bg-transparent border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <p className="font-bold dark:text-white">{p.name} Agent</p>
                    <p className="text-xs text-gray-500">{p.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: LIVE CHAT INTERFACE */}
        <div className="lg:col-span-8">
          <div className="h-[650px] w-full bg-white dark:bg-[#111111] rounded-[4rem] border-8 border-gray-100 dark:border-white/5 shadow-2xl flex flex-col relative overflow-hidden">
            
            {/* Interface Header */}
            <div className="p-6 border-b border-gray-100 dark:border-white/5 flex items-center justify-between bg-white/50 dark:bg-black/20 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#4F46E5] flex items-center justify-center text-white font-black">
                   <img src="/aptolix-logo.webp" alt="Logo" className="w-6 h-6 invert" />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">Aptolix {activePersona.name} Agent</h4>
                  <p className="text-[10px] text-green-500 font-black uppercase tracking-widest">● Live Demo Mode</p>
                </div>
              </div>
              <button 
                onClick={() => setMessages([{ text: activePersona.prompt, isBot: true }])} 
                className="text-xs font-bold text-gray-400 hover:text-[#7C3AED]"
              >
                RESET
              </button>
            </div>

            {/* Message Stream */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-gradient-to-b from-transparent to-purple-500/5">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] p-5 rounded-3xl ${
                    msg.isBot 
                    ? 'bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-gray-200 rounded-bl-none border border-gray-200 dark:border-white/5' 
                    : 'bg-[#7C3AED] text-white rounded-br-none shadow-lg'
                  }`}>
                    <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-2xl flex gap-1">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-6 bg-white dark:bg-[#161616] border-t border-gray-100 dark:border-white/5">
              <div className="relative flex items-center">
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text" 
                  placeholder="Ask a question..." 
                  className="w-full p-5 pr-24 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20"
                />
                <button type="submit" className="absolute right-3 px-6 py-2 bg-[#7C3AED] text-white rounded-xl font-bold text-sm shadow-lg">
                  SEND ⚡
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}