
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Globe, Database, Figma, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

const icons: Record<string, any> = { Globe, Database, Figma, Cpu };

const Services: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-white pt-32">
      {/* Header */}
      <section className="px-6 md:px-20 py-20">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8"
        >
          Specialized <br /> <span className="text-outline">Capabilities</span>
        </motion.h2>
        <p className="max-w-2xl text-white/60 text-lg md:text-xl font-light">
          I offer a comprehensive range of services to help bring your digital ideas to life. 
          From concept to deployment, I'm here to create exceptional experiences.
        </p>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-20 pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {SERVICES.map((service, idx) => {
            const Icon = icons[service.icon];
            return (
              <motion.div 
                key={idx}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                className="p-10 md:p-20 flex flex-col gap-10 transition-colors group h-full"
              >
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={36} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-bold text-white/20 tabular-nums font-mono tracking-widest">SERVICE 0{idx + 1}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 group-hover:text-blue-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed mb-10">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/80">
                        <CheckCircle2 size={16} className="text-blue-600" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 cursor-pointer">
                  See Work in action <ArrowRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
