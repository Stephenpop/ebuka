import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Minimize2, Maximize2, Bot } from 'lucide-react';
import { getGeminiChat } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hey! I’m Ebuka’s digital assistant. Ask me anything about his full-stack work or specific projects!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const chatInstance = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  // We'll attach native wheel/touch listeners (with passive:false) to the
  // scroll container so we can reliably call preventDefault and stop scroll
  // chaining to the document. Use touchStartY to compute touch move delta.
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Attach native wheel and touch handlers to the scroll container so we can
  // reliably prevent default scrolling when the chat is at its scroll edges.
  useEffect(() => {
    const el = scrollRef.current;
    const target = chatRef.current ?? el;
    if (!el || !target) return;

    const wheelHandler = (e: WheelEvent) => {
      const delta = e.deltaY;
      const atTop = el.scrollTop === 0;
      const atBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;
      // Debug: log wheel interactions to confirm handler runs in the browser devtools
      // (remove these logs after we confirm behavior).
      // eslint-disable-next-line no-console
      console.debug('chat wheel', { delta, atTop, atBottom });
      if ((delta < 0 && atTop) || (delta > 0 && atBottom)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const touchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0]?.clientY ?? null;
    };

    const touchMove = (e: TouchEvent) => {
      if (touchStartY.current === null) return;
      const currentY = e.touches[0]?.clientY ?? 0;
      const delta = touchStartY.current - currentY;
      const atTop = el.scrollTop === 0;
      const atBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;
      // Debug touch interactions as well.
      // eslint-disable-next-line no-console
      console.debug('chat touchmove', { delta, atTop, atBottom });
      if ((delta < 0 && atTop) || (delta > 0 && atBottom)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Attach to the chat wrapper if available so events on child elements
    // are captured reliably; use passive:false where we call preventDefault.
    target.addEventListener('wheel', wheelHandler, { passive: false });
    target.addEventListener('touchstart', touchStart, { passive: true });
    target.addEventListener('touchmove', touchMove, { passive: false });

    return () => {
      target.removeEventListener('wheel', wheelHandler);
      target.removeEventListener('touchstart', touchStart);
      target.removeEventListener('touchmove', touchMove);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);
    try {
      if (!chatInstance.current) chatInstance.current = getGeminiChat();
      const response = await chatInstance.current.sendMessage({ message: userMessage });
      const botText = response.text || "Ebuka is currently pushing updates. Try again in a moment!";
      setMessages(prev => [...prev, { role: 'model', text: botText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Network error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[3000] md:bottom-8 md:right-8">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl transition-all overflow-hidden"
          >
            <Bot size={24} className="md:size-8" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className={`
              bg-[#0a0a0a] border border-white/10 rounded-[24px] md:rounded-[32px]
              shadow-[0_30px_90px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden
              w-[calc(100vw-32px)] md:w-[380px]
              ${isMinimized ? 'h-[60px]' : 'h-[65vh] md:h-[500px]'}
            `}
          >
            <div
              className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center cursor-pointer select-none shrink-0"
              onClick={() => isMinimized && setIsMinimized(false)}
            >
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_#2563eb]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">Anyaibe AI</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={e => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
                  className="p-1.5 hover:bg-white/10 rounded-full hidden md:block transition-colors"
                >
                  {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                </button>
                <button
                  onClick={e => { e.stopPropagation(); setIsOpen(false); }}
                  className="p-1.5 hover:bg-red-500/20 text-red-400 rounded-full transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div
                  ref={scrollRef}
                  // Ensure the area scrolls internally and does not chain to the
                  // document (overscroll-behavior). Keep overflow-y auto and a
                  // constrained height from the parent so this div scrolls.
                  className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#0a0a0a] to-[#050505] scrollbar-hide"
                  style={{ overscrollBehavior: 'contain' }}
                >
                  {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`max-w-[85%] p-3 md:p-4 rounded-2xl text-xs md:text-sm leading-relaxed ${
                          m.role === 'user'
                            ? 'bg-blue-600 text-white rounded-br-none shadow-lg'
                            : 'bg-white/[0.04] text-white/90 rounded-bl-none border border-white/10'
                        }`}
                      >
                        {m.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white/5 p-3 rounded-2xl rounded-bl-none border border-white/10 flex gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 bg-white/5 border-t border-white/10 flex gap-2 shrink-0">
                  <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about Ebuka's work..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs md:text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-white/20"
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 disabled:opacity-50 transition-all shadow-lg active:scale-95"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIAssistant; 