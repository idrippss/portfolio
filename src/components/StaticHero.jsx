
import React from 'react';
import { motion } from 'framer-motion';

const StaticHero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const headerOffset = 100;
    const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen w-full bg-[#1a1a1a] flex items-center justify-center pt-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-[420px] lg:max-w-[500px] mx-auto rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="/image/hero/ne.jpeg"
            alt="Idriss KACEM - Professional Portrait"
            className="w-full h-auto object-contain"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none"></div>
        </motion.div>

        {/* Right Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col justify-center text-center md:text-left"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 tracking-tight"
          >
            Idriss KACEM
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl text-[#00d4ff] font-medium mb-6"
          >
            Digital Creator
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            Crafting visual stories through photography, videography, and digital art.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <button 
              onClick={() => scrollToSection('categories')}
              className="px-8 py-4 bg-[#00d4ff] text-black font-semibold rounded-full hover:bg-[#00b8e6] transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,212,255,0.3)]"
            >
              View Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all hover:scale-105"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StaticHero;
