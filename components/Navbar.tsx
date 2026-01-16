
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { PageType } from '../types';

interface NavbarProps {
  onPageChange: (page: PageType) => void;
  currentPage: PageType;
}

const Navbar: React.FC<NavbarProps> = ({ onPageChange, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const navItems: { label: string; value: PageType }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Work', value: 'projects' },
    { label: 'Services', value: 'services' },
    { label: 'About', value: 'about' },
    { label: 'Connect', value: 'contact' },
  ];

  const handleNavClick = (value: PageType) => {
    onPageChange(value);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-[2000] flex justify-between items-center px-6 md:px-16 py-4 md:py-8 backdrop-blur-xl bg-[#050505]/80 border-b border-white/[0.05]"
      >
        <div 
          onClick={() => handleNavClick('home')}
          className="text-lg md:text-2xl font-black tracking-tighter cursor-pointer select-none group"
        >
          EBUKA<span className="text-blue-500 font-serif group-hover:pl-1 transition-all">.</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.25em] items-center">
          {navItems.filter(i => i.value !== 'home').map((item) => (
            <button 
              key={item.value}
              onClick={() => onPageChange(item.value)}
              className={`transition-colors relative py-1 hover:text-blue-500 ${currentPage === item.value ? 'text-blue-500' : 'text-white/60'}`}
            >
              {item.label}
              {currentPage === item.value && (
                <motion.div 
                  layoutId="navDot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-white bg-white/5 rounded-full border border-white/10 active:scale-90 transition-transform"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
           <button 
            onClick={() => onPageChange('contact')}
            className="text-[10px] font-black uppercase tracking-[0.3em] px-8 py-3.5 border border-blue-600/40 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer whitespace-nowrap bg-blue-600/5 shadow-lg shadow-blue-900/10"
          >
            START PROJECT
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[3001] bg-[#050505] flex flex-col p-8 md:hidden overflow-hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="text-lg font-black tracking-tighter">
                EBUKA<span className="text-blue-500 font-serif">.</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-white bg-white/5 rounded-full border border-white/10"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.value}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.04, duration: 0.4, ease: "easeOut" }}
                  onClick={() => handleNavClick(item.value)}
                  className={`text-4xl font-black uppercase tracking-tighter text-left flex items-baseline gap-3 ${currentPage === item.value ? 'text-blue-500' : 'text-white/40'}`}
                >
                  <span className="text-[10px] font-serif italic text-blue-500/50">0{index + 1}</span>
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="mt-auto border-t border-white/10 pt-8 pb-4">
              <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em] mb-4">Social Presence</p>
              <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-white/40">
                <a href="#" className="hover:text-blue-500">Twitter</a>
                <a href="#" className="hover:text-blue-500">Github</a>
                <a href="#" className="hover:text-blue-500">LinkedIn</a>
              </div>
            </div>
            
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
