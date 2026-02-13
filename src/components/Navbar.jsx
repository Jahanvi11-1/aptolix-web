import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-gray-200/50 bg-white/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link to="/" className="flex items-center">
          <img src="/aptolix-logo.webp" alt="Aptolix" className="h-12 w-auto" />
        </Link>

        {/* Dynamic Navigation Links */}
        <div className="hidden md:flex gap-8 text-[15px] font-medium text-gray-700">
          {navLinks.map((link) => (
            isHomePage ? (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-purple-600 transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={`/${link.href}`} 
                className="hover:text-purple-600 transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
          <a href="#contact" className="hover:text-purple-600 transition-colors">Contact Us</a>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/chatbot-demo" 
            className="bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-purple-500/25"
          >
            Try Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}