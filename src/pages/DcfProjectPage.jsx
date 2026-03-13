import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { getProjectImages } from '@/lib/mediaManifest.js';

const galleryImages = getProjectImages('dcf', [
  '/freelanceprojects/dcf/IMG_8752.jpg',
  '/freelanceprojects/dcf/IMG_8790.jpg',
  '/freelanceprojects/dcf/IMG_8888.jpg',
  '/freelanceprojects/dcf/IMG_8892.jpg',
  '/freelanceprojects/dcf/IMG_8934.jpg',
  '/freelanceprojects/dcf/IMG_9193.jpg',
  '/freelanceprojects/dcf/IMG_8896.jpg',
  '/freelanceprojects/dcf/IMG_9311.png'
]);

const DcfProjectPage = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const goToPrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <>
      <Helmet>
        <title>Djerba International Chess Festival | Freelance Project</title>
        <meta
          name="description"
          content="Project page for Djerba International Chess Festival featuring event, culture, and travel photography."
        />
      </Helmet>

      <div className="min-h-screen bg-[#1a1a1a] flex flex-col">
        <Header />

        <main className="flex-1 py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="mt-4 mb-8">
              <Link
                to="/freelance-projects"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00d4ff] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Freelance Projects</span>
              </Link>
            </div>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-[#333] bg-gradient-to-br from-[#252525] to-[#1f1f1f] p-6 md:p-10 shadow-[0_0_30px_rgba(0,0,0,0.25)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-8 lg:gap-10 items-start">
                <div className="space-y-6">
                  <div className="rounded-xl p-2">
                    <img
                      src="/freelanceprojects/dcf/dcf_logo.png"
                      alt="Djerba Chess Festival logo"
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#00d4ff] mb-3">2024</p>
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                      Djerba International Chess Festival
                    </h1>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                      This project documents the fusion of world-class strategy and Mediterranean culture. My work
                      captures the intensity of the Masters' tournament, the elegance of the Miss Chess ceremony, and
                      the vibrant lifestyle of Djerba from traditional excursions to coastal exploration.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="rounded-lg border border-[#2f3d4d] bg-[#0f151d]/70 px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Role</p>
                        <p className="text-sm font-medium text-white mt-1">Photographer</p>
                      </div>
                      <div className="rounded-lg border border-[#2f3d4d] bg-[#0f151d]/70 px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Location</p>
                        <p className="text-sm font-medium text-white mt-1">Djerba, Tunisia</p>
                      </div>
                      <div className="rounded-lg border border-[#2f3d4d] bg-[#0f151d]/70 px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Category</p>
                        <p className="text-sm font-medium text-white mt-1">Event & Travel</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative flex items-center justify-center px-8 md:px-10">
                    <button
                      onClick={goToPrevImage}
                      className="absolute left-0 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/55 hover:bg-[#00d4ff]/80 text-white transition-all hover:scale-110 backdrop-blur-sm"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="group relative w-fit max-w-full">
                      <motion.img
                        key={galleryImages[activeImageIndex]}
                        initial={{ opacity: 0.35, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35 }}
                        src={galleryImages[activeImageIndex]}
                        alt={`Djerba Chess Festival image ${activeImageIndex + 1}`}
                        className="w-auto max-w-full h-auto max-h-[75vh] object-contain rounded-2xl border border-[#333] bg-[#121212] transition-colors duration-300 group-hover:border-[#00d4ff] shadow-[0_0_30px_rgba(0,0,0,0.35)]"
                      />
                    </div>

                    <button
                      onClick={goToNextImage}
                      className="absolute right-0 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/55 hover:bg-[#00d4ff]/80 text-white transition-all hover:scale-110 backdrop-blur-sm"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex justify-center gap-2">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === activeImageIndex ? 'w-8 bg-[#00d4ff]' : 'w-2 bg-white/45 hover:bg-white/70'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1 hide-scrollbar">
                    {galleryImages.map((image, index) => (
                      <button
                        key={image}
                        onClick={() => setActiveImageIndex(index)}
                        className={`shrink-0 w-14 sm:w-16 rounded-lg overflow-hidden border transition-all ${
                          index === activeImageIndex
                            ? 'border-[#00d4ff] shadow-[0_0_12px_rgba(0,212,255,0.35)]'
                            : 'border-[#333] hover:border-[#00d4ff]/60'
                        }`}
                        aria-label={`Select thumbnail ${index + 1}`}
                      >
                        <img
                          src={image}
                          alt={`Djerba thumbnail ${index + 1}`}
                          className="w-full h-14 sm:h-16 object-cover"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DcfProjectPage;
