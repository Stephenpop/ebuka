
import React from 'react';
import { motion } from 'framer-motion';
import { JOURNEY, SKILL_GROUPS } from '../constants';
import { FileDown, Briefcase, Code, Terminal, Layers } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      {/* Profile Section */}
      <section className="py-20 md:py-40 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute -right-20 top-20 text-[20vw] font-black text-white/[0.015] leading-none pointer-events-none select-none">
          CRAFT
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 relative z-10 items-center">
          {/* Profile Image Area */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-[4/5] rounded-[24px] md:rounded-[48px] overflow-hidden bg-white/5 border border-white/10">
                <img 
                  src="/ANYAIBE_EBUKA.jpg"
                  alt="Anyaibe Ebuka" 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-blue-500/10 rounded-full animate-pulse pointer-events-none hidden md:block" />
            </motion.div>
          </div>

          <div className="lg:col-span-8 order-1 lg:order-2">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-8xl font-black uppercase tracking-tighter mb-6 md:mb-12 leading-[0.9] md:leading-[0.85]"
            >
              Architecting <br /> <span className="font-serif italic text-blue-500">Digital</span> <br /> Excellence.
            </motion.h2>
            <div className="max-w-2xl space-y-4 md:space-y-8 text-sm md:text-xl font-medium text-white/50 md:text-white/60 leading-relaxed">
              <p>
                I'm Anyaibe Ebuka, a Full Stack Developer focused on building high-performance web applications and custom digital architectures. I transform complex business requirements into seamless, high-converting web experiences.
              </p>
              <p>
                Specializing in Next.js, TypeScript, and Custom CMS solutions, I ensure every product is fast, accessible, and ready for the global stage. My goal is to bridge the gap between world-class design and robust technical engineering.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a 
                  href="ANYAIBE_EBUKA_RESUME.pdf"
                  className="inline-flex items-center gap-4 px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white rounded-full text-[9px] md:text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl"
                >
                  Download CV <FileDown size={16} md:size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Metrics */}
      <section className="py-16 md:py-20 px-6 md:px-20 border-y border-white/5 bg-white/[0.01]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { label: 'Project Launches', val: '50+' },
            { label: 'Tech Stacks', val: '12+' },
            { label: 'Lighthouse Score', val: '98%' },
            { label: 'Years Experience', val: '3+' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-2xl md:text-5xl font-black text-blue-500 mb-1">{item.val}</div>
              <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 md:py-32 px-6 md:px-20 bg-white/[0.02]">
        <div className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-blue-500 block mb-4">Milestones</span>
            <h3 className="text-2xl md:text-6xl font-black uppercase tracking-tighter">Professional <br /> Journey</h3>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {JOURNEY.map((event, idx) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/[0.03] p-8 md:p-12 rounded-[20px] md:rounded-[40px] border border-white/10 flex flex-col gap-4 md:gap-6 backdrop-blur-sm group hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="flex justify-between items-start">
                <span className="text-[8px] md:text-[9px] font-black bg-blue-600 text-white px-2.5 py-1.5 rounded-full uppercase tracking-tighter">{event.year}</span>
                <div className="text-white/5 font-black text-3xl md:text-4xl">0{idx + 1}</div>
              </div>
              <div>
                <h4 className="text-base md:text-xl font-black uppercase tracking-tight mb-1 md:mb-2 group-hover:text-blue-500 transition-colors">{event.role}</h4>
                <div className="text-[9px] md:text-xs font-bold text-blue-500 uppercase tracking-widest mb-3 md:mb-4 flex items-center gap-2">
                  <Briefcase size={10} md:size={12} /> {event.company}
                </div>
                <p className="text-[11px] md:text-sm text-white/40 leading-relaxed group-hover:text-white/70 transition-colors">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Mastery */}
      <section className="py-20 md:py-32 px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
          <div className="lg:col-span-5">
            <h3 className="text-2xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">Technical <br /> Mastery.</h3>
            <p className="text-white/20 md:text-white/30 text-xs md:text-lg leading-relaxed max-w-sm mb-8 md:mb-12">
              Building robust frontend systems and secure distributed backends for modern web products.
            </p>
            <div className="flex gap-4 opacity-10 md:opacity-20">
              <Terminal size={32} md:size={40} />
              <Code size={32} md:size={40} />
              <Layers size={32} md:size={40} />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-12 md:space-y-16">
            {SKILL_GROUPS.map((group, groupIdx) => (
              <div key={groupIdx}>
                <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/20 border-b border-white/10 pb-4 mb-8">
                  {group.category}
                </h4>
                <div className="space-y-6 md:space-y-8">
                  {group.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-2 md:mb-3">
                        <span>{skill.name}</span>
                        <span className="text-blue-500">{skill.level}%</span>
                      </div>
                      <div className="h-[1px] bg-white/5 w-full rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-blue-600"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
