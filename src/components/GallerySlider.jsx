
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getGalleryImages } from '@/lib/mediaManifest.js';

const slides = getGalleryImages().map((item, index) => ({
  image: item.url,
  title: `${index + 1}`
}));

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const GallerySlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const imageIndex = Math.abs(page % slides.length);

  const paginate = useCallback((newDirection) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, paginate]);

  return (
    <section id="gallery" className="pt-6 pb-12 md:pt-8 md:pb-16 bg-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Gallery</h2>
          <p className="text-gray-400 text-sm md:text-base">A curated selection of my finest visual work.</p>
        </motion.div>

        <div 
          className="relative flex items-center justify-center"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Previous Button */}
          <button
            className="absolute left-0 md:-left-12 z-10 p-2 md:p-3 rounded-full bg-black/50 hover:bg-[#00d4ff]/80 text-white transition-all hover:scale-110 backdrop-blur-sm"
            onClick={() => paginate(-1)}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Slider Container */}
          <div className="relative w-full h-[300px] sm:h-[360px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl bg-[#252525]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={slides[imageIndex].image}
                  alt={slides[imageIndex].title}
                  className="w-full h-full object-cover"
                  draggable="false"
                />
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="inline-block bg-black/50 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-lg border border-white/10">
                    <h3 className="text-white text-[16px] md:text-[20px] font-medium tracking-wide">
                      {slides[imageIndex].title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            className="absolute right-0 md:-right-12 z-10 p-2 md:p-3 rounded-full bg-black/50 hover:bg-[#00d4ff]/80 text-white transition-all hover:scale-110 backdrop-blur-sm"
            onClick={() => paginate(1)}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8 flex-wrap px-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const newDirection = index > imageIndex ? 1 : -1;
                setPage([page + (index - imageIndex), newDirection]);
              }}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === imageIndex 
                  ? 'bg-[#00d4ff] w-6 md:w-8 shadow-[0_0_10px_rgba(0,212,255,0.5)]' 
                  : 'bg-white/20 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
