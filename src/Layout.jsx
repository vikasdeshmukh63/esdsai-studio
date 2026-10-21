import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { EXTERNAL_LINKS, FOOTER_LINKS } from '@/config/links';

export default function Layout({ children }) {
  const logo = new URL('./assets/logo.png', import.meta.url).href;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/60 shadow-sm transition-all duration-300">
        <div className="w-full px-8 py-4">
          <div className="flex items-center justify-between relative">
            {/* Center Ecosystem Indicator - Removed */}

            <Link to={createPageUrl('Home')} className="flex items-center gap-2 group">
              <img src={logo} alt="ESDS Logo" className="w-12" />
              <span className="text-xl font-bold text-[#003366]">ESDS</span>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-[#003366]">AI</span> <span className="text-[#00A0E3]">Studio</span>
              </span>
              </Link>

            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/60">
                <div className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </div>
                <span className="text-xs font-medium text-slate-600">AI Ecosystem</span>
              </div>

              <button 
                onClick={() => window.open(EXTERNAL_LINKS.esdsWebsite, '_blank', 'noopener,noreferrer')}
                className="px-6 py-2.5 bg-[#003366] text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-900/10 hover:bg-[#002a55] hover:shadow-blue-900/20 transition-all duration-300"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#003366] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
            <img src={logo} alt="ESDS Logo" className="w-20" />
              <div className="flex flex-col gap-1 mt-2">
                <span className="text-lg font-bold text-white">ESDS AI Studio</span>
                <span className="text-white/80 text-sm">Next-Gen Intelligence Engine</span>
                <span className="text-white/80 text-sm">Government, Enterprise & BFSI.</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Solutions</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                {FOOTER_LINKS.solutions.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            

            
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                {FOOTER_LINKS.support.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
                </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
            <p>© 2025 ESDS Software Solution Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}