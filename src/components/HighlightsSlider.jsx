
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HighlightModal from './HighlightModal.jsx';
import { getHighlightCategories } from '@/lib/mediaManifest.js';

const highlightCategories = getHighlightCategories();

const HighlightsSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const openHighlight = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeHighlight = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedIndex(null), 300); // Wait for animation
  };

  const nextHighlight = () => {
    setSelectedIndex((prev) => (prev + 1) % highlightCategories.length);
  };

  const prevHighlight = () => {
    setSelectedIndex((prev) => (prev - 1 + highlightCategories.length) % highlightCategories.length);
  };

  return (
    <section id="highlights" className="py-16 bg-[#1a1a1a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center justify-between"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">Highlights</h2>
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </motion.div>

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 overflow-x-auto pb-6 pt-2 px-2 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {highlightCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center gap-3 cursor-pointer group snap-start shrink-0"
                onClick={() => openHighlight(index)}
              >
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full p-1 bg-gradient-to-tr from-[#00d4ff] to-[#a855f7] group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.5)]">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#1a1a1a]">
                    <img
                      src={category.thumbnail}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors tracking-wider">
                  {category.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <HighlightModal
        isOpen={isModalOpen}
        onClose={closeHighlight}
        category={selectedIndex !== null ? highlightCategories[selectedIndex] : null}
        onNext={nextHighlight}
        onPrev={prevHighlight}
      />
    </section>
  );
};

export default HighlightsSlider;
