
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ images, currentIndex, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate('prev');
      } else if (e.key === 'ArrowRight') {
        onNavigate('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  if (currentIndex === null) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Slide Counter */}
        <div className="absolute top-4 left-4 z-50 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
          <span className="text-white font-medium">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate('prev');
          }}
          className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-[#00d4ff]/50 transition-all hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="max-w-7xl max-h-[90vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentImage.url}
            alt={currentImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </motion.div>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate('next');
          }}
          className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-[#00d4ff]/50 transition-all hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
