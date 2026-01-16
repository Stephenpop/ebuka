
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050505] text-white pt-20 md:pt-40 pb-10 px-6 md:px-20 overflow-hidden border-t border-white/5 z-20">
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[9px] md:text-xs font-black uppercase tracking-[0.4em] mb-10 text-white/30"
        >
          Building for the global stage
        </motion.div>
        
        <a 
          href="mailto:hello@berotechnologies.com" 
          className="text-[14vw] md:text-[8vw] font-black uppercase tracking-tighter leading-none hover:text-blue-500 transition-all duration-700 block mb-16 md:mb-24 select-none"
        >
          LET'S <span className="font-serif italic text-outline hover:text-blue-500 transition-all duration-700">GROW</span>
        </a>

        <div className="w-full border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-6 md:gap-10 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
            <a href="#" target="_blank" className="hover:text-blue-500 transition-colors">Twitter</a>
            <a href="#" target="_blank" className="hover:text-blue-500 transition-colors">LinkedIn</a>
            <a href="#" target="_blank" className="hover:text-blue-500 transition-colors">GitHub</a>
            <a href="#" target="_blank" className="hover:text-blue-500 transition-colors">Instagram</a>
          </div>
          
          <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/15">
            &copy; 2025 EBUKA CREATIVE. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120vw] h-[40vw] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full" />
    </footer>
  );
};

export default Footer;
