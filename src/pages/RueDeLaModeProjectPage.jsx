import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { getProjectImages, getProjectVideos } from '@/lib/mediaManifest.js';

const allImages = getProjectImages('13 RUE DE LA MODE', [
  '/sitewebmedia/freelanceprojects/13%20RUE%20DE%20LA%20MODE/IMG_8769.jpg',
  '/sitewebmedia/freelanceprojects/13%20RUE%20DE%20LA%20MODE/IMG_8777.jpg',
  '/sitewebmedia/freelanceprojects/13%20RUE%20DE%20LA%20MODE/IMG_8786.jpg',
  '/sitewebmedia/freelanceprojects/13%20RUE%20DE%20LA%20MODE/IMG_8797.jpg',
  '/sitewebmedia/freelanceprojects/13%20RUE%20DE%20LA%20MODE/IMG_8810.jpg',
  '/sitewebmedia/freelanceprojects/13%20RUE%20DE%20LA%20MODE/IMG_8812.png',
  '/sitewebmedia/freelanceprojects/13%20RUE%20DE%20LA%20MODE/IMG_8818.jpg',
  '/sitewebmedia/freelanceprojects/13%20RUE%20DE%20LA%20MODE/IMG_8823.jpg'
]);

const galleryImages = allImages.slice(0, 6);

const campaignVideo = getProjectVideos('13 RUE DE LA MODE', [
  {
    title: '13 Rue de la Mode campaign reel',
    videoUrl: '/sitewebmedia/freelanceprojects/13%20RUE%20DE%20LA%20MODE/13%20chleyek.MOV'
  }
])[0];

const RueDeLaModeProjectPage = () => {
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
        <title>13 Rue de la Mode | 2025 Sandal Collection</title>
        <meta
          name="description"
          content="Fashion and editorial photography campaign for 13 Rue de la Mode's 2025 sandal collection in Sousse."
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
                      className="rounded-xl border border-[#333] overflow-hidden bg-white p-6 hover:border-[#00d4ff] transition-colors"
                    >
                      <img
                        src="/sitewebmedia/freelanceprojects/13%20RUE%20DE%20LA%20MODE/13%20RUE%20DE%20LA%20MODE%20LOGO%20.png"
                        alt="13 Rue de la Mode logo"
                        className="w-full h-auto object-contain"
                      />
                    </motion.article>
                  </div>

                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#00d4ff] mb-3">Summer 2025</p>
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                      13 Rue de la Mode - 2025 Sandal Collection
                    </h1>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                      Summer Elegance in Sousse. A premium visual campaign for 13 Rue de la Mode's 2025 collection,
                      blending Mediterranean chic with modern urban style.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                      This project showcases the 2025 sandal collection for the boutique 13 Rue de la Mode. Set against
                      the vibrant and coastal backdrop of Sousse, the campaign captures the essence of a modern,
                      sophisticated summer.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                      The creative approach focused on clean compositions and bright natural light to highlight the
                      craftsmanship and textures of the footwear. By pairing editorial shots with lifestyle moments,
                      the imagery positions the brand as a trendsetter in the Tunisian fashion scene.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      <div className="rounded-lg border border-[#1e3f47] bg-[#10242a] px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Role</p>
                        <p className="text-sm font-medium text-white mt-1">Lead Photographer / Creative Director</p>
                      </div>
                      <div className="rounded-lg border border-[#1e3f47] bg-[#10242a] px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Style</p>
                        <p className="text-sm font-medium text-white mt-1">Fashion / Urban Lifestyle</p>
                      </div>
                      <div className="rounded-lg border border-[#1e3f47] bg-[#10242a] px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Timeline</p>
                        <p className="text-sm font-medium text-white mt-1">Summer 2025 Campaign</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-8 items-start">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Gallery</h2>
                  <p className="text-gray-400 mb-6">A curated carousel balancing product-focused details and summer lifestyle atmosphere.</p>

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
                          alt={`13 Rue de la Mode sandal collection visual ${activeImageIndex + 1}`}
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
                            alt={`13 Rue de la Mode thumbnail ${index + 1}`}
                            className="w-full h-14 sm:h-16 object-cover"
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {campaignVideo && (
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Reel</h2>
                    <p className="text-gray-400 mb-6">Short-form video edit from the same shoot.</p>

                    <div className="flex justify-center lg:justify-start">
                      <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="w-56 sm:w-64 md:w-72 rounded-xl border border-[#333] overflow-hidden bg-[#202020] hover:border-[#00d4ff] transition-colors"
                      >
                        <div className="relative bg-black">
                          <video
                            src={campaignVideo.videoUrl}
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

export default RueDeLaModeProjectPage;
