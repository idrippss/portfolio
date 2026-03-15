import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

// Each card manages its own video ref so only the hovered card plays
const ReelCard = ({ reel, onClick }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => videoRef.current?.play();
  const handleMouseLeave = () => {
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-[#252525] border border-[#333] hover:border-[#00d4ff] transition-all duration-300 hover:shadow-[0_0_30px_#00d4ff50] hover:scale-105"
    >
      <div className="relative h-[220px] sm:h-[250px] md:h-[280px] overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={reel.videoUrl}
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <Play className="w-6 h-6 text-white ml-1" fill="white" />
          </div>
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-base font-semibold text-white group-hover:text-[#00d4ff] transition-colors">
          {reel.title}
        </h3>
      </div>
    </div>
  );
};

const reelsData = [
  { id: 1, videoUrl: '/sitewebmedia/video/ah.mp4', title: 'ah' },
  { id: 2, videoUrl: '/sitewebmedia/video/video_AH.mp4', title: 'video ah' },
  { id: 3, videoUrl: '/sitewebmedia/video/azha.mov', title: 'azha' },
  { id: 4, videoUrl: '/sitewebmedia/video/golden%20fries.mov', title: 'golden fries' },
  { id: 5, videoUrl: '/sitewebmedia/video/golden.mov', title: 'golden' },
  { id: 6, videoUrl: '/sitewebmedia/video/neff.mp4', title: 'neff' },
  { id: 7, videoUrl: '/sitewebmedia/video/neffertiti.mp4', title: 'neffertiti' },
  { id: 8, videoUrl: '/sitewebmedia/video/rando.mp4', title: 'rando' }
];

const ReelsSection = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedReel = selectedIndex !== null ? reelsData[selectedIndex] : null;

  const navigateModal = (dir) => {
    setSelectedIndex(prev => {
      if (prev === null) return null;
      if (dir === 'prev') return Math.max(0, prev - 1);
      return Math.min(reelsData.length - 1, prev + 1);
    });
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % reelsData.length;
      setCurrentIndex(nextIndex);
      
      if (scrollRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth / reelsData.length;
        scrollRef.current.scrollTo({
          left: nextIndex * scrollWidth,
          behavior: 'smooth',
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoScrolling]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth / reelsData.length;
      const newIndex = direction === 'left' 
        ? Math.max(0, currentIndex - 1)
        : Math.min(reelsData.length - 1, currentIndex + 1);
      
      setCurrentIndex(newIndex);
      scrollRef.current.scrollTo({
        left: newIndex * scrollWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="reels" className="py-12 px-4 md:px-8 lg:px-16 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Social Media Videos
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Explore my latest creative reels and short-form video content
          </p>
        </motion.div>

        {/* Reels Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 p-2 rounded-full bg-black/50 hover:bg-[#00d4ff]/80 text-white transition-all hover:scale-110 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous reel"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrollable Reels */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden overflow-y-hidden scroll-smooth pb-2"
            style={{
              scrollBehavior: 'smooth',
            }}
          >
            {reelsData.map((reel, index) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-44 sm:w-48 md:w-52"
              >
                <ReelCard reel={reel} onClick={() => setSelectedIndex(index)} />
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            disabled={currentIndex === reelsData.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 p-2 rounded-full bg-black/50 hover:bg-[#00d4ff]/80 text-white transition-all hover:scale-110 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next reel"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {reelsData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  if (scrollRef.current) {
                    const scrollWidth = scrollRef.current.scrollWidth / reelsData.length;
                    scrollRef.current.scrollTo({
                      left: index * scrollWidth,
                      behavior: 'smooth',
                    });
                  }
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-[#00d4ff]'
                    : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to reel ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Player Modal */}
      {selectedReel && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-xs"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-10 right-0 text-white hover:text-[#00d4ff] transition-colors z-10"
              aria-label="Close video"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Prev arrow */}
            <button
              onClick={() => navigateModal('prev')}
              disabled={selectedIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-black/60 hover:bg-[#00d4ff]/80 text-white transition-all hover:scale-110 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous video"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <video
              key={selectedReel.videoUrl}
              src={selectedReel.videoUrl}
              controls
              autoPlay
              className="w-full aspect-[9/16] rounded-2xl shadow-2xl bg-black object-contain"
            />

            <div className="mt-3 text-center">
              <h3 className="text-lg font-semibold text-white">{selectedReel.title}</h3>
            </div>

            {/* Next arrow */}
            <button
              onClick={() => navigateModal('next')}
              disabled={selectedIndex === reelsData.length - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-black/60 hover:bg-[#00d4ff]/80 text-white transition-all hover:scale-110 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next video"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ReelsSection;
