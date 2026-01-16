
import React from 'react';
import { motion } from 'framer-motion';
import { PageType } from '../types';

interface HeroProps {
  onAction: (page: PageType) => void;
}

const Hero: React.FC<HeroProps> = ({ onAction }) => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-center px-6 md:px-20 pt-28 md:pt-32 overflow-hidden">
      <div className="z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center gap-4 text-blue-500 font-bold tracking-[0.3em] uppercase mb-6 md:mb-8 text-[9px] md:text-xs"
        >
          <div className="w-8 md:w-12 h-[1px] bg-blue-500" />
          Anyaibe Ebuka — Full Stack Engineer
        </motion.div>

        <h1 className="flex flex-col gap-0 select-none">
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="block text-[12vw] md:text-[11vw] font-black leading-[0.9] md:leading-[0.85] tracking-tighter uppercase"
            >
              Full Stack
            </motion.span>
          </div>
          <div className="overflow-hidden self-start md:self-end">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 1.0, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="block text-[12vw] md:text-[11vw] font-serif italic text-outline leading-[0.9] md:leading-[0.85] tracking-tighter uppercase md:mr-10"
            >
              Engineer
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 1.1, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="block text-[12vw] md:text-[11vw] font-black leading-[0.9] md:leading-[0.85] tracking-tighter uppercase"
            >
              Architect
            </motion.span>
          </div>
        </h1>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.7 }}
        className="mt-8 md:mt-16 flex flex-col md:flex-row gap-8 md:gap-20 items-start md:items-end"
      >
        <div className="max-w-md">
          <p className="text-sm md:text-2xl font-light text-white/70 md:text-white/80 leading-relaxed md:leading-snug">
            Engineering high-performance <span className="text-blue-500 font-medium">web ecosystems</span> and scalable full-stack products with precision and cinematic design.
          </p>
          <div className="mt-8 flex gap-6">
            <button 
              onClick={() => onAction('projects')}
              className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 border-b border-blue-500/20 pb-1 hover:text-white hover:border-white transition-all"
            >
              Selected Work
            </button>
            <button 
              onClick={() => onAction('about')}
              className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/40 border-b border-white/10 pb-1 hover:text-white hover:border-white transition-all"
            >
              My Story
            </button>
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-1">
          <div className="text-[9px] text-white/30 uppercase tracking-[0.3em]">Lagos &bull; Worldwide</div>
          <div className="text-[9px] text-white/30 uppercase tracking-[0.3em]">Full Stack Specialist</div>
        </div>
      </motion.div>

      {/* Optimized background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[110vw] bg-blue-600/[0.03] md:bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;
