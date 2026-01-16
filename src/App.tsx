
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '../components/Loader';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';
import ContactPage from '../components/ContactPage';
import { PageType } from './types';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Handle immediate scroll to top on page change
  useEffect(() => {
    if (!isLoading) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [currentPage, isLoading]);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'projects':
        return <Projects isFullPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return (
          <div className="flex flex-col">
            <Hero onAction={setCurrentPage} />
            <Skills />
            <Projects />
            <Services />
            <About />
          </div>
        );
    }
  };

  return (
    <main className="bg-[#050505] min-h-screen text-white flex flex-col relative">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="flex flex-col flex-1 w-full relative">
          <Navbar onPageChange={setCurrentPage} currentPage={currentPage} />
          
          <div className="flex-1 w-full relative z-10 pt-16 md:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="w-full"
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <Footer />
          <AIAssistant />
        </div>
      )}
    </main>
  );
};

export default App;
