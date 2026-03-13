import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, PlayCircle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { getProjectImages, getProjectVideos } from '@/lib/mediaManifest.js';

const reels = getProjectVideos('AH', [
  {
    title: 'AH Auto - Full detailing',
    videoUrl: '/freelanceprojects/AH/AH%20Auto%20-%20Full%20detailing.mov'
  },
  {
    title: 'AH Auto - Recharge Climatiseur',
    videoUrl: '/freelanceprojects/AH/AH%20Auto%20-%20Recharge%20Climatiseur.mov'
  },
  {
    title: 'AH Auto - Vidange',
    videoUrl: '/freelanceprojects/AH/AH%20Auto%20-%20Vidange.MOV'
  }
]).map((video, index) => ({
  id: index + 1,
  ...video
}));

const galleryImages = getProjectImages('AH', [
  '/freelanceprojects/AH/we%20are%20open2.png',
  '/freelanceprojects/AH/COMING%20SOON%20POST%20final.png',
  '/freelanceprojects/AH/POST%20ARTICLES%201.png'
]);

const AhProjectPage = () => {
  const videoRefs = useRef({});

  const handleVideoPlay = (currentId) => {
    Object.entries(videoRefs.current).forEach(([id, videoEl]) => {
      if (Number(id) !== currentId && videoEl && !videoEl.paused) {
        videoEl.pause();
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>AH Auto Detailing | Freelance Project</title>
        <meta
          name="description"
          content="Freelance campaign for AH Auto Detailing featuring social reels and brand visuals."
        />
      </Helmet>

      <div className="min-h-screen bg-[#1a1a1a] flex flex-col">
        <Header />

        <main className="flex-1 py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="mt-4 mb-8">
              <Link
                to="/freelance-projects"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ffd400] transition-colors"
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
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  <div className="shrink-0 p-2">
                    <img
                      src="/freelanceprojects/AH/AH%20AUTO%20LOGO.png"
                      alt="AH Auto Detailing logo"
                      className="w-48 md:w-64 h-auto object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#ffd400] mb-3">2024–2025</p>
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                      AH Auto Detailing
                    </h1>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                      Campaign content built for a local auto detailing brand. This project combines short-form social
                      reels and promotional visuals designed to announce the opening, highlight key services, and keep
                      the brand identity consistent across platforms.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="rounded-lg border border-[#3a3620] bg-[#1f1a0b] px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Role</p>
                        <p className="text-sm font-medium text-white mt-1">Photo & Video Creator</p>
                      </div>
                      <div className="rounded-lg border border-[#3a3620] bg-[#1f1a0b] px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Location</p>
                        <p className="text-sm font-medium text-white mt-1">Sousse, Tunisia</p>
                      </div>
                      <div className="rounded-lg border border-[#3a3620] bg-[#1f1a0b] px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Category</p>
                        <p className="text-sm font-medium text-white mt-1">Automotive Marketing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Reels</h2>
                <p className="text-gray-400 mb-6">{reels.length} social formats produced for launch and brand awareness.</p>

                <div className="flex flex-wrap gap-5 justify-center">
                  {reels.map((reel, index) => (
                    <motion.article
                      key={reel.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                      className="w-48 sm:w-56 rounded-xl border border-[#333] overflow-hidden bg-[#202020] hover:border-[#ffd400] transition-colors"
                    >
                      <div className="relative bg-black">
                        <video
                          ref={(el) => {
                            if (el) {
                              videoRefs.current[reel.id] = el;
                            } else {
                              delete videoRefs.current[reel.id];
                            }
                          }}
                          onPlay={() => handleVideoPlay(reel.id)}
                          src={reel.videoUrl}
                          controls
                          preload="metadata"
                          className="w-full aspect-[9/16] object-contain bg-black"
                        />
                        <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/65 border border-white/15">
                          <PlayCircle className="w-4 h-4 text-[#ffd400]" />
                          <span className="text-xs font-medium text-white">Reel</span>
                        </div>
                      </div>
                      <div className="px-4 py-3">
                        <h3 className="text-white font-semibold">{reel.title}</h3>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Campaign Pictures</h2>
                <p className="text-gray-400 mb-6">Promo visuals created for posts and story-ready communication.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {galleryImages.map((image, index) => (
                    <motion.figure
                      key={image}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.25 + index * 0.08 }}
                      className="rounded-xl overflow-hidden border border-[#333] bg-[#141414] hover:border-[#ffd400] transition-colors"
                    >
                      <img
                        src={image}
                        alt={`AH Auto Detailing visual ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </motion.figure>
                  ))}
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

export default AhProjectPage;
