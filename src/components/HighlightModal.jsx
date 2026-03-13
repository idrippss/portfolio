
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const HighlightModal = ({ isOpen, onClose, category, onNext, onPrev }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    setCurrentImageIndex(0);
    setIsAutoScrolling(true);
  }, [category]);

  useEffect(() => {
    if (!isAutoScrolling || !category || category.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === category.images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, category]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, currentImageIndex, category]);

  const handleNextImage = () => {
    if (category && currentImageIndex < category.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  if (!isOpen || !category) return null;

  const currentImage = category.images[currentImageIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wider">
              {category.title}
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Image {currentImageIndex + 1} of {category.images.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Content */}
        <div 
          className="flex-1 overflow-hidden p-6 md:p-12 relative flex flex-col items-center justify-center"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          {/* Navigation for folder categories */}
          <button
            onClick={onPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-[#00d4ff]/50 transition-all hover:scale-110"
            aria-label="Previous folder"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <div className="w-full h-full max-w-4xl mx-auto flex items-center justify-center flex-1">
            <motion.div 
              key={`${category.title}-${currentImageIndex}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src={currentImage}
                alt={`${category.title} image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-xl"
              />
            </motion.div>
          </div>

          {/* Navigation arrows at bottom for images within folder */}
          {category.images.length > 1 && (
            <div className="flex items-center gap-6 mt-6">
              <button
                onClick={handlePrevImage}
                disabled={currentImageIndex === 0}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <div className="text-white text-center min-w-32">
                <span className="text-sm">{currentImageIndex + 1} / {category.images.length}</span>
              </div>

              <button
                onClick={handleNextImage}
                disabled={currentImageIndex === category.images.length - 1}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          )}

          <button
            onClick={onNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-[#00d4ff]/50 transition-all hover:scale-110"
            aria-label="Next folder"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>

        {/* Image thumbnails navigation */}
        {category.images.length > 1 && (
          <div className="border-t border-white/10 p-4 overflow-x-auto">
            <div className="flex gap-3 px-6 pb-2">
              {category.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden transition-all ${
                    idx === currentImageIndex
                      ? 'ring-2 ring-[#00d4ff] scale-105'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default HighlightModal;
