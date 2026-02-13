import React from 'react';

export default function ChatWindow({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 z-[100] w-[400px] h-[600px] bg-white dark:bg-[#111111] rounded-[2rem] border border-gray-100 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
      
      {/* Header */}
      <div className="p-4 bg-[#7C3AED] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
             <img src="/aptolix-logo.webp" alt="Logo" className="w-5 h-5 invert" />
          </div>
          <span className="text-white font-bold text-sm">Aptolix Assistant (AI Bot)</span>
        </div>
        <div className="flex gap-3 text-white">
           <button className="opacity-70 hover:opacity-100">⋮</button>
           <button className="opacity-70 hover:opacity-100">⤢</button>
           <button onClick={onClose} className="opacity-70 hover:opacity-100 font-bold">✕</button>
        </div>
      </div>

      {/* Message Stream */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/50 dark:bg-black/10">
         <div className="flex justify-start">
            <div className="max-w-[85%] p-4 bg-[#E8EAF6] dark:bg-white/5 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-800 dark:text-gray-200">
               Hello! 😊 How can I assist you today? Are you looking for information about Aptolix or our AI chatbots?
            </div>
         </div>
      </div>

      {/* Input Section */}
      <div className="p-4 bg-white dark:bg-[#111111] border-t border-gray-100 dark:border-white/5">
        <div className="flex items-center gap-2 border rounded-xl px-3 py-1 dark:border-white/10">
          <input 
            type="text" 
            placeholder="Type your message..." 
            className="flex-1 py-2 bg-transparent text-sm outline-none dark:text-white"
          />
          <button className="bg-[#7C3AED] text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md shadow-purple-500/20">
            Send
          </button>
        </div>
        <div className="text-[10px] text-center mt-3 text-gray-400">
          Powered by <span className="underline font-bold">Aptolix</span>
        </div>
      </div>
    </div>
  );
}