import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import ChatDemo from './pages/ChatDemo';
import Footer from './components/Footer';
import ChatWindow from './components/ChatWindow'; // Ensure this is in components folder

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B0B]">
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot-demo" element={<ChatDemo />} />
        </Routes>

        {/* The Chat Interface */}
        <ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

        {/* Fixed Toggle Button - Click to Open */}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-[#7C3AED] rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
        >
          {isChatOpen ? (
            <span className="text-white text-2xl font-light">✕</span>
          ) : (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
        </button>

        <Footer />
      </Router>
    </div>
  );
}