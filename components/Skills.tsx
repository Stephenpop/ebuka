
import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", 
  "MongoDB", "Three.js", "Framer Motion", "Tailwind CSS", 
  "Docker", "AWS", "Figma", "Go", "Python", "Rust"
];

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-[#050505] overflow-hidden border-y border-white/10">
      <div className="flex gap-10 whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 items-center"
        >
          {[...SKILLS, ...SKILLS].map((skill, idx) => (
            <div key={idx} className="flex items-center gap-10">
              <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter opacity-20 hover:opacity-100 hover:text-blue-500 transition-all cursor-default">
                {skill}
              </span>
              <div className="w-4 h-4 rounded-full border border-blue-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
