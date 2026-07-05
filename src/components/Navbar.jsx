import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";


  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact Us", href: "#contact" },
  ];

  const NavItem = ({ link, className = "" }) => {
    if (isHomePage) {
      return (
        <a
          href={link.href}
          onClick={() => setIsOpen(false)}
          className={`hover:text-purple-600 transition-colors ${className}`}
        >
          {link.name}
        </a>
      );
    }
    return (
      <Link
        to={`/${link.href}`}
        onClick={() => setIsOpen(false)}
        className={`hover:text-purple-600 transition-colors ${className}`}
      >
        {link.name}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-gray-200/50 bg-white/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link to="/" className="flex items-center">
          <img src="/aptolix-logo.webp" alt="Aptolix" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 text-[15px] font-medium text-gray-700">
          {navLinks.map((link) => (
            <NavItem key={link.name} link={link} />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/chatbot-demo" 
            className="hidden sm:block bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-purple-500/25"
          >
            Try Demo
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <NavItem
              key={link.name}
              link={link}
              className="text-lg font-semibold text-gray-800"
            />
          ))}
          <Link
            to="/chatbot-demo"
            className="w-full text-center bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white py-4 rounded-2xl font-bold"
          >
            Try Demo Agent
          </Link>
        </div>
      )}
    </nav>
  );
}