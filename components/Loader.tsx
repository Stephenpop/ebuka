
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Ultrafast increment for minimal waiting
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 150); // Minimal wait
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 10;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[10000] bg-[#050505] flex flex-col justify-end p-8 md:p-20"
    >
      <div className="flex flex-col gap-4">
        <motion.h1 
          className="text-6xl md:text-9xl font-black tracking-tighter"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          EBUKA<span className="text-blue-500 italic font-serif">.</span>
        </motion.h1>
        <div className="flex justify-between items-end border-b border-white/20 pb-4">
          <span className="text-[10px] font-medium text-white/50 tracking-widest uppercase">Portfolio 2025</span>
          <span className="text-5xl md:text-8xl font-light tabular-nums">{progress.toString().padStart(3, '0')}%</span>
        </div>
      </div>
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-blue-600"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

export default Loader;
