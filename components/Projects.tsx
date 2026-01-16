
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  isFullPage?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isFullPage = false }) => {
  const displayedProjects = isFullPage ? PROJECTS : PROJECTS.slice(0, 4);

  return (
    <section id="work" className={`py-16 md:py-32 px-6 md:px-20 bg-[#050505] min-h-screen ${isFullPage ? 'pt-28 md:pt-40' : ''}`}>
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 md:mb-20 gap-4 md:gap-6">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-9xl font-black uppercase tracking-tighter"
        >
          Selected <br /> <span className="text-outline">Works</span>
        </motion.h2>
        <div className="max-w-md">
          <p className="text-white/40 md:text-white/50 text-[9px] md:text-sm uppercase tracking-widest leading-loose">
            High-performance full-stack architectures built for scalability. Focusing on React, Next.js, and custom CMS backends.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-20 md:gap-y-32">
        {displayedProjects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index % 2 * 0.1 }}
            className="group flex flex-col gap-4 md:gap-6"
          >
            {/* Image Section */}
     <a
      href={project.link || "#"}
      target={project.link ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="relative overflow-hidden rounded-[20px] md:rounded-3xl aspect-[4/3] md:aspect-[16/10] bg-black/10 block"
    >
      <motion.img
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        src={project.image}
        alt={project.title}
        // Use object-contain so the full image is visible (no cropping).
        className="w-full h-full object-contain bg-black/20"
      />
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="w-10 h-10 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-black shadow-xl">
      <ArrowUpRight size={20} className="md:size-24" />
    </div>
  </div>
</a>
            {/* Content Section */}
            <div className="flex flex-col gap-2 md:gap-4 px-1">
              <div className="flex justify-between items-center text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 md:text-white/30">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3 className="text-xl md:text-4xl font-black uppercase tracking-tighter group-hover:text-blue-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-[11px] md:text-sm text-white/40 md:text-white/50 leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1 md:pt-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 md:px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[7px] md:text-[9px] uppercase font-bold tracking-widest text-white/30 group-hover:text-white group-hover:border-white/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {!isFullPage && (
        <div className="mt-16 md:mt-32 flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 md:px-10 md:py-4 border border-white/10 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all"
          >
            All Projects
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default Projects;
