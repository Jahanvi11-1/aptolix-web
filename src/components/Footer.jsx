import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    freeTools: [
      { name: "Live Chatbot Demo", href: "/chatbot-demo" },
      { name: "Try AI Chatbot for Your Website", href: "#" },
      { name: "vCard QR Generator", href: "#" }
    ],
    legalSupport: [
      { name: "Terms & Conditions", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Refund Policy", href: "#" },
      { name: "7-day money-back guarantee", href: "#" },
      { name: "Contact Us", href: "#" }
    ],
    useCases: [
      { name: "Customer Support (24/7)", href: "#" },
      { name: "Lead Generation", href: "#" },
      { name: "In-App Support", href: "#" },
      { name: "Employee Assistant", href: "#" },
      { name: "Answer FAQs", href: "#" },
      { name: "Sales Support", href: "#" }
    ]
  };

  return (
    <footer className="bg-white dark:bg-[#0B0B0B] pt-24 pb-12 border-t border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="mb-8">
              <Link to="/">
                {/* Scaled logo to be more prominent */}
                <img 
                  src="/aptolix-logo.webp" 
                  alt="Aptolix" 
                  className="h-20 w-auto object-contain" 
                />
              </Link>
            </div>
            <h3 className="text-xl font-bold dark:text-white mb-4">
              AI Chatbots & Agents — <span className="text-[#7C3AED]">Turning Intent Into Action</span>
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              Launch your AI chatbot in hours — trained on your content and ready to assist customers 24/7.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold dark:text-white mb-6">Free Tools</h4>
              <ul className="space-y-4">
                {footerLinks.freeTools.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-sm font-medium text-gray-500 hover:text-[#7C3AED] dark:text-gray-400 dark:hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold dark:text-white mb-6">Legal & Support</h4>
              <ul className="space-y-4">
                {footerLinks.legalSupport.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-sm font-medium text-gray-500 hover:text-[#7C3AED] dark:text-gray-400 dark:hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold dark:text-white mb-6">Use Cases</h4>
              <ul className="space-y-4">
                {footerLinks.useCases.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-sm font-medium text-gray-500 hover:text-[#7C3AED] dark:text-gray-400 dark:hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center md:text-left">
          © {currentYear} Aptolix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}