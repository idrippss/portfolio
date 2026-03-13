import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const sections = [
  {
    key: 'cao-activities',
    title: 'CAO Activities and Competitions',
    description:
      'CAO is a mechanical design club focused on creativity, engineering thinking, and hands-on learning. The club organizes 3D object modeling competitions and practical sessions where members train on conception tools, improve problem-solving skills, and turn technical ideas into concrete designs.',
    images: [
      '/volunteering/Cao/AFF3%20fFF.jpg',
      '/volunteering/Cao/PROGFFG%20CARRE3FFFFF.jpg',
      '/volunteering/Cao/316553316_3294470674136417_2198264595731019153_n.jpg',
      '/volunteering/Cao/316667035_3294461774137307_6971661669032443986_n.jpg',
      '/volunteering/Cao/317246102_3294464774137007_6563421949790245513_n.jpg'
    ]
  }
];

const CaoProjectPage = () => {
  const [activeIndexBySection, setActiveIndexBySection] = useState(() =>
    Object.fromEntries(sections.map((section) => [section.key, 0]))
  );

  const getActiveIndex = (sectionKey, total) => {
    const current = activeIndexBySection[sectionKey] ?? 0;
    if (!total) return 0;
    return Math.min(current, total - 1);
  };

  const goToPrevImage = (sectionKey, total) => {
    if (!total) return;
    setActiveIndexBySection((prev) => ({
      ...prev,
      [sectionKey]: ((prev[sectionKey] ?? 0) - 1 + total) % total
    }));
  };

  const goToNextImage = (sectionKey, total) => {
    if (!total) return;
    setActiveIndexBySection((prev) => ({
      ...prev,
      [sectionKey]: ((prev[sectionKey] ?? 0) + 1) % total
    }));
  };

  const setActiveImage = (sectionKey, index) => {
    setActiveIndexBySection((prev) => ({
      ...prev,
      [sectionKey]: index
    }));
  };

  return (
    <>
      <Helmet>
        <title>Club CAO EPI Sousse | Idriss Kacem</title>
        <meta
          name="description"
          content="Idriss Kacem's involvement with Club CAO EPI Sousse, a mechanical design club focused on 3D object modeling and engineering competitions."
        />
      </Helmet>

      <div className="min-h-screen bg-[#111111] flex flex-col">
        <Header />

        <main className="flex-1 py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="mt-4 mb-8">
              <Link
                to="/volunteering"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#dc2626] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Volunteering</span>
              </Link>
            </div>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-[#3b3b3b] bg-gradient-to-br from-[#1a1a1a] via-[#151515] to-[#111111] p-6 md:p-10 shadow-[0_0_45px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-10 grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 items-center">
                <div className="rounded-2xl p-8 bg-black/40 border border-[#2f2f2f]">
                  <img
                    src="/volunteering/Cao/273900379_1404317893333523_489239045069502224_n.gif"
                    alt="Club CAO EPI Sousse logo"
                    className="w-full max-w-[280px] mx-auto h-auto object-contain"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#dc2626] mb-3">University Experience</p>
                  <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">Club CAO EPI Sousse</h1>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    CAO is a mechanical design club centered on engineering creativity and technical practice.
                    My experience included contributing to visual communication and participating in activities
                    around 3D object modeling competitions, collaborative workshops, and applied design challenges.
                  </p>
                </div>
              </div>

              <div className="mb-10 flex justify-center">
                <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="rounded-lg border border-[#5b1f1f] bg-[#2a1111] px-4 py-3 text-center">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Year</p>
                    <p className="text-sm font-medium text-white mt-1">2022 - 2023</p>
                  </div>
                  <div className="rounded-lg border border-[#5b1f1f] bg-[#2a1111] px-4 py-3 text-center">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Position</p>
                    <p className="text-sm font-medium text-white mt-1">Designer / Organizer</p>
                  </div>
                  <div className="rounded-lg border border-[#5b1f1f] bg-[#2a1111] px-4 py-3 text-center">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Category</p>
                    <p className="text-sm font-medium text-white mt-1">Mechanical Design Club</p>
                  </div>
                </div>
              </div>

              {sections.map((section, sectionIndex) => {
                const totalImages = section.images.length;
                const activeIndex = getActiveIndex(section.key, totalImages);

                return (
                  <motion.section
                    key={section.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: sectionIndex * 0.05 }}
                    className="rounded-2xl border border-[#333] bg-[#171717] p-5 md:p-6"
                  >
                    <div className="mb-5">
                      <h2 className="text-2xl md:text-3xl font-bold text-white">{section.title}</h2>
                      <p className="text-gray-400 mt-1">{section.description}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-center">
                        <div className="group relative w-full max-w-5xl px-10 sm:px-12 md:px-14">
                          {totalImages > 1 && (
                            <button
                              onClick={() => goToPrevImage(section.key, totalImages)}
                              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/55 text-white transition-all hover:scale-110 hover:bg-[#dc2626]/80 backdrop-blur-sm"
                              aria-label={`Previous ${section.title} image`}
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                          )}

                          <div className="flex justify-center">
                            <motion.img
                              key={section.images[activeIndex]}
                              initial={{ opacity: 0.35, scale: 1.02 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.35 }}
                              src={section.images[activeIndex]}
                              alt={`${section.title} visual ${activeIndex + 1}`}
                              className="w-auto max-w-full h-auto max-h-[46vh] object-contain rounded-2xl border border-[#303030] bg-black transition-colors duration-300 shadow-[0_0_30px_rgba(0,0,0,0.35)] group-hover:border-[#dc2626]"
                            />
                          </div>

                          {totalImages > 1 && (
                            <button
                              onClick={() => goToNextImage(section.key, totalImages)}
                              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/55 text-white transition-all hover:scale-110 hover:bg-[#dc2626]/80 backdrop-blur-sm"
                              aria-label={`Next ${section.title} image`}
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      </div>

                      {totalImages > 1 && (
                        <div className="flex justify-center gap-2">
                          {section.images.map((_, index) => (
                            <button
                              key={`${section.key}-dot-${index}`}
                              onClick={() => setActiveImage(section.key, index)}
                              className={`h-2 rounded-full transition-all duration-300 ${
                                index === activeIndex ? 'w-8 bg-[#dc2626]' : 'w-2 bg-white/45 hover:bg-white/70'
                              }`}
                              aria-label={`Go to ${section.title} image ${index + 1}`}
                            />
                          ))}
                        </div>
                      )}

                      {totalImages > 1 && (
                        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1 hide-scrollbar">
                          {section.images.map((image, index) => (
                            <button
                              key={`${section.key}-thumb-${image}`}
                              onClick={() => setActiveImage(section.key, index)}
                              className={`shrink-0 w-12 sm:w-14 rounded-lg overflow-hidden border transition-all ${
                                index === activeIndex
                                  ? 'border-[#dc2626] shadow-[0_0_12px_rgba(220,38,38,0.35)]'
                                  : 'border-[#333] hover:border-[#dc2626]/60'
                              }`}
                              aria-label={`Select ${section.title} thumbnail ${index + 1}`}
                            >
                              <img
                                src={image}
                                alt={`${section.title} thumbnail ${index + 1}`}
                                className="w-full h-12 sm:h-14 object-cover"
                                loading="lazy"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.section>
                );
              })}
            </motion.section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CaoProjectPage;