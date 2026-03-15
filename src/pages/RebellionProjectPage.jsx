import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { getProjectImages, getProjectVideos } from '@/lib/mediaManifest.js';

const allImages = getProjectImages('REBELLION', [
  '/sitewebmedia/freelanceprojects/REBELLION/affiche%20caruso%2015.11.jpg',
  '/sitewebmedia/freelanceprojects/REBELLION/affiche%20face%2018.12.jpg',
  '/sitewebmedia/freelanceprojects/REBELLION/affiche%20face%2027.11.jpg',
  '/sitewebmedia/freelanceprojects/REBELLION/affiche%20face%204.12.jpg',
  '/sitewebmedia/freelanceprojects/REBELLION/affiche%20golf%2007.11%202.png',
  '/sitewebmedia/freelanceprojects/REBELLION/IMG_0374.JPG',
  '/sitewebmedia/freelanceprojects/REBELLION/IMG_0469.JPG'
]);

const galleryImages = allImages.slice(0, 6);

const reelVideo = getProjectVideos('REBELLION', [
  {
    title: 'Rebellion live reel',
    videoUrl: '/sitewebmedia/freelanceprojects/REBELLION/rebellion_lounge_novembre.mp4'
  }
])[0];

const RebellionProjectPage = () => {
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
        <title>Rebellion Live Band | Visual Package</title>
        <meta
          name="description"
          content="Comprehensive visual package for Rebellion Live Band featuring promotional design, event coverage, and social-first video content."
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
              <div className="mb-10">
                <div className="flex flex-col sm:flex-row gap-8 sm:items-center">
                  <div className="shrink-0 w-64 sm:w-72 md:w-80 lg:w-96">
                    <motion.article
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className="rounded-xl border border-[#333] overflow-hidden bg-black p-6 hover:border-[#00d4ff] transition-colors"
                    >
                      <img
                        src="/sitewebmedia/freelanceprojects/REBELLION/rebellion%20logo%20BLANC.png"
                        alt="Rebellion Live Band logo"
                        className="w-full h-auto object-contain"
                      />
                    </motion.article>
                  </div>

                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#00d4ff] mb-3">Music & Event Visuals</p>
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                      Rebellion Live Band
                    </h1>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                      This project showcases a multi-disciplinary collaboration with Rebellion Band. The objective was
                      to capture the raw, infectious energy of their live performances across high-profile weddings,
                      corporate parties, and public events.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                      The final output combines striking poster design, fast social storytelling, and cinematic event
                      coverage to build a consistent brand narrative around versatility, stage presence, and modern
                      entertainment marketing.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      <div className="rounded-lg border border-[#1e3f47] bg-[#10242a] px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Graphic Design</p>
                        <p className="text-sm font-medium text-white mt-1">Custom posters and vertical story templates</p>
                      </div>
                      <div className="rounded-lg border border-[#1e3f47] bg-[#10242a] px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Event Coverage</p>
                        <p className="text-sm font-medium text-white mt-1">Photography and videography for weddings and private parties</p>
                      </div>
                      <div className="rounded-lg border border-[#1e3f47] bg-[#10242a] px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Social Media</p>
                        <p className="text-sm font-medium text-white mt-1">Hot vids and high-energy reels for Instagram and TikTok</p>
                      </div>
                      <div className="rounded-lg border border-[#1e3f47] bg-[#10242a] px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Core Themes</p>
                        <p className="text-sm font-medium text-white mt-1">High energy, professionalism, versatility, modern branding</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-8 items-start">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Gallery</h2>
                  <p className="text-gray-400 mb-6">Selected visuals from poster campaigns and live event moments.</p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center">
                      <div className="group relative w-fit max-w-full">
                        <button
                          onClick={goToPrevImage}
                          className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/55 hover:bg-[#00d4ff]/80 text-white transition-all hover:scale-110 backdrop-blur-sm"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>

                        <motion.img
                          key={galleryImages[activeImageIndex]}
                          initial={{ opacity: 0.35, scale: 1.02 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.35 }}
                          src={galleryImages[activeImageIndex]}
                          alt={`Rebellion visual ${activeImageIndex + 1}`}
                          className="w-auto max-w-full h-auto max-h-[75vh] object-contain rounded-2xl border border-[#333] bg-[#121212] transition-colors duration-300 group-hover:border-[#00d4ff] shadow-[0_0_30px_rgba(0,0,0,0.35)]"
                        />

                        <button
                          onClick={goToNextImage}
                          className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/55 hover:bg-[#00d4ff]/80 text-white transition-all hover:scale-110 backdrop-blur-sm"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
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

                    <div className="flex items-center justify-center gap-2 flex-wrap pb-1">
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
                            alt={`Rebellion thumbnail ${index + 1}`}
                            className="w-full h-14 sm:h-16 object-cover"
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {reelVideo && (
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Reel</h2>
                    <p className="text-gray-400 mb-6">High-energy short-form edit optimized for social media platforms.</p>

                    <div className="flex justify-center lg:justify-start">
                      <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="w-56 sm:w-64 md:w-72 rounded-xl border border-[#333] overflow-hidden bg-[#202020] hover:border-[#00d4ff] transition-colors"
                      >
                        <div className="relative bg-black">
                          <video
                            src={reelVideo.videoUrl}
                            controls
                            preload="metadata"
                            className="w-full aspect-[9/16] object-contain bg-black"
                          />
                          <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/65 border border-white/15">
                            <PlayCircle className="w-4 h-4 text-[#00d4ff]" />
                            <span className="text-xs font-medium text-white">Reel</span>
                          </div>
                        </div>
                      </motion.article>
                    </div>
                  </div>
                )}
              </div>
            </motion.section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RebellionProjectPage;
