import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRight, Twitter, Linkedin, Github, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqayvoav", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <section className="pt-32 pb-24 px-6 md:px-20 min-h-screen bg-[#050505] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left - Info */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10"
            >
              Start a <br /><span className="text-outline">Project</span>
            </motion.h2>
            <p className="text-white/50 text-lg md:text-xl font-light mb-16 max-w-md">
              I'm always open to discussing new opportunities, creative ideas or partnerships.
            </p>
            <div className="space-y-10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 block mb-2">Email Me</span>
                <a
                  href="mailto:anyaibeebuka@gmail.com"
                  className="text-xl md:text-2xl font-black hover:text-blue-500 transition-colors underline decoration-blue-500/20 underline-offset-8"
                >
                  anyaibeebuka@gmail.com
                </a>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 block mb-2">Location</span>
                <div className="text-xl md:text-2xl font-black">Lagos, Nigeria — Worldwide</div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-16 lg:mt-0">
            <a href="https://x.com/mrbero_web" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://linkedin.com/in/anyaibe-ebuka-stephen" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Stephenpop" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://wa.me/2349015035012" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>

        {/* Right - Form (unchanged) */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 p-8 md:p-16 rounded-[40px] backdrop-blur-sm"
          >
            {status === "SUCCESS" ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Send size={40} />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Message Sent!</h3>
                <p className="text-white/50">I'll get back to you within 24 hours.</p>
                <button onClick={() => setStatus(null)} className="mt-8 text-blue-500 uppercase tracking-widest text-xs font-bold">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative">
                    <input required type="text" name="name" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-blue-500 transition-colors peer" placeholder=" " />
                    <label className="absolute left-0 top-4 text-xs font-bold uppercase tracking-widest text-white/30 transition-all peer-focus:-top-6 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-6 pointer-events-none">
                      Your Name
                    </label>
                  </div>
                  <div className="relative">
                    <input required type="email" name="email" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-blue-500 transition-colors peer" placeholder=" " />
                    <label className="absolute left-0 top-4 text-xs font-bold uppercase tracking-widest text-white/30 transition-all peer-focus:-top-6 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-6 pointer-events-none">
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input required type="text" name="subject" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-blue-500 transition-colors peer" placeholder=" " />
                  <label className="absolute left-0 top-4 text-xs font-bold uppercase tracking-widest text-white/30 transition-all peer-focus:-top-6 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-6 pointer-events-none">
                    Subject
                  </label>
                </div>

                <div className="relative">
                  <textarea required name="message" rows={5} className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-blue-500 transition-colors peer resize-none" placeholder=" "></textarea>
                  <label className="absolute left-0 top-4 text-xs font-bold uppercase tracking-widest text-white/30 transition-all peer-focus:-top-6 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-6 pointer-events-none">
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-6 bg-blue-600 rounded-full flex items-center justify-center gap-4 text-sm font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
                >
                  Send Message <ArrowRight size={20} />
                </button>

                {status === "ERROR" && (
                  <p className="text-red-500 text-xs font-bold text-center mt-4">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;