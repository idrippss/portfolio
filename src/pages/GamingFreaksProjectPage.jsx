import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const ggj2024Url = 'https://globalgamejam.org/jam-sites/2024/epi-digital-school';

const sections = [
  {
    key: 'events',
    title: 'Global Game Jam',
    description:
      'Global Game Jam is the world\'s largest game creation marathon where developers, artists, and gamers collaborate to build original games in 48 hours. Across the 2023 and 2024 editions at EPI Digital School, I contributed through organization, photography coverage, participant support, and real-time communication, helping coordinate activities, document key moments, and maintain a smooth and engaging experience for all jammers.',
    details: [],
    eventUrl: ggj2024Url,
    eventLabel: 'Official Event Link',
    images: [
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_pictures/1.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_pictures/2.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_pictures/3.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_pictures/4.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_pictures/5.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_pictures/6.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_pictures/7.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_pictures/8.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_pictures/11.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_pictures/23.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_pictures/26.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_pictures/29.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_pictures/34.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_pictures/35.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_pictures/36.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_pictures/37.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_pictures/40.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_design/aff_fin.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_design/badge_jam.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_design/badge_or.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_design/ggj00-roundlogo-900x900.png',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_design/ggj_banner_1.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_design/ggj_banner_2023.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_design/ggj_media_post.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_design/ggj_timeline%20media_post_day1.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_design/ggj_timeline%20media_post_day2.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_design/TIK_BREAKFAST.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/ggj/ggj_design/TIK_COFFE_BREAK.jpg'
    ]
  },
  {
    key: 'design',
    title: 'Design and Events',
    description:
      'Alongside event operations, I developed visual communication for Gaming Freaks and GGJ editions, including branding assets, posters, badges, schedules, ticketing materials, and social media content. My role combined design and event support by creating clear communication materials, shaping the visual identity of activities, and helping align on-site and digital content before, during, and after each event.',
    details: [],
    images: [
      '/sitewebmedia/associative%20projects/FREAKS/events%20and%20designs/affiche_gaming_in_metaverse.png',
      '/sitewebmedia/associative%20projects/FREAKS/events%20and%20designs/affiche_gaming_in_metaverse_program.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/events%20and%20designs/affiche_gaming_in_metaverse_program2.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/events%20and%20designs/affiche_gaming_week.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/events%20and%20designs/affiche_recrutement.png',
      '/sitewebmedia/associative%20projects/FREAKS/events%20and%20designs/aff_tournoi_valo.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/events%20and%20designs/aff_tournoi_zlol.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/events%20and%20designs/banderole_gaming_freaks.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/events%20and%20designs/event_film.jpg',
      '/sitewebmedia/associative%20projects/FREAKS/events%20and%20designs/logo_section.png',
      '/sitewebmedia/associative%20projects/FREAKS/events%20and%20designs/sm_post.jpg'
    ]
  }
];

const GamingFreaksProjectPage = () => {
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
        <title>EPI Gaming Freaks | Idriss Kacem</title>
        <meta
          name="description"
          content="Idriss Kacem's journey with EPI Gaming Freaks (2022-2024), including Global Game Jam 2023 and 2024 design, photography, social media, and organization."
        />
      </Helmet>

      <div className="min-h-screen bg-[#111111] flex flex-col">
        <Header />

        <main className="flex-1 py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="mt-4 mb-8">
              <Link
                to="/associative-projects"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#d946ef] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Associative Projects</span>
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
                    src="/sitewebmedia/associative%20projects/FREAKS/log%20blanc.png"
                    alt="EPI Gaming Freaks logo"
                    className="w-full max-w-[320px] mx-auto h-auto object-contain"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#d946ef] mb-3">University Experience</p>
                  <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">EPI Gaming Freaks</h1>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    EPI Gaming Freaks is a student gaming community where creative media, competitive spirit, and
                    collaborative production meet. Between 2022 and 2024, I contributed as a designer and organizer,
                    with major involvement in Global Game Jam editions through event branding, social media visuals,
                    photography coverage, and operational coordination.
                  </p>
                </div>
              </div>

              <div className="mb-10 flex justify-center">
                <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="rounded-lg border border-[#4a2a5e] bg-[#1f1128] px-4 py-3 text-center">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Year</p>
                    <p className="text-sm font-medium text-white mt-1">2022 - 2024</p>
                  </div>
                  <div className="rounded-lg border border-[#4a2a5e] bg-[#1f1128] px-4 py-3 text-center">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Position</p>
                    <p className="text-sm font-medium text-white mt-1">Design Manager / Vice Team Leader</p>
                  </div>
                  <div className="rounded-lg border border-[#4a2a5e] bg-[#1f1128] px-4 py-3 text-center">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Category</p>
                    <p className="text-sm font-medium text-white mt-1">Gaming & Creative Events Club</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {sections.map((section, sectionIndex) => {
                  const totalImages = section.images.length;
                  const activeIndex = getActiveIndex(section.key, totalImages);

                  return (
                    <motion.section
                      key={section.key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: sectionIndex * 0.05 }}
                      className="rounded-2xl border border-[#333] bg-[#171717] p-5 md:p-6 h-full"
                    >
                      <div className="mb-5 text-center">
                        <h2 className="text-xl md:text-2xl font-bold text-white">{section.title}</h2>
                        <p className="text-gray-400 mt-1">{section.description}</p>
                      </div>

                      {section.details.length > 0 && (
                        <div className="mb-5 rounded-xl border border-[#35213f] bg-[#15101a] px-4 py-4">
                          <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
                            {section.details.map((detail, index) => (
                              <li key={`${section.key}-detail-${index}`} className={index === 0 ? 'text-white font-medium' : ''}>
                                {index === 0 ? detail : `- ${detail}`}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {section.eventUrl && (
                        <div className="mb-5 flex justify-center">
                          <a
                            href={section.eventUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-[#d946ef]/40 bg-[#d946ef]/10 px-4 py-2 text-sm font-medium text-[#e879f9] hover:bg-[#d946ef]/20 transition-colors"
                          >
                            {section.eventLabel}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      )}

                      <div className="space-y-4">
                        <div className="flex items-center justify-center">
                          <div className="group relative w-full max-w-5xl px-10 sm:px-12 md:px-14">
                            {totalImages > 1 && (
                              <button
                                onClick={() => goToPrevImage(section.key, totalImages)}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/55 text-white transition-all hover:scale-110 hover:bg-[#d946ef]/80 backdrop-blur-sm"
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
                                className="w-auto max-w-full h-auto max-h-[46vh] object-contain rounded-2xl border border-[#303030] bg-black transition-colors duration-300 shadow-[0_0_30px_rgba(0,0,0,0.35)] group-hover:border-[#d946ef]"
                              />
                            </div>

                            {totalImages > 1 && (
                              <button
                                onClick={() => goToNextImage(section.key, totalImages)}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/55 text-white transition-all hover:scale-110 hover:bg-[#d946ef]/80 backdrop-blur-sm"
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
                                  index === activeIndex ? 'w-8 bg-[#d946ef]' : 'w-2 bg-white/45 hover:bg-white/70'
                                }`}
                                aria-label={`Go to ${section.title} image ${index + 1}`}
                              />
                            ))}
                          </div>
                        )}

                        {totalImages > 1 && (

                          <div className="flex items-center justify-center gap-2 flex-wrap pb-1">
                            {section.images.map((image, index) => (
                              <button
                                key={`${section.key}-thumb-${image}`}
                                onClick={() => setActiveImage(section.key, index)}
                                className={`shrink-0 w-12 sm:w-14 rounded-lg overflow-hidden border transition-all ${
                                  index === activeIndex
                                    ? 'border-[#d946ef] shadow-[0_0_12px_rgba(217,70,239,0.35)]'
                                    : 'border-[#333] hover:border-[#d946ef]/60'
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
              </div>
            </motion.section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GamingFreaksProjectPage;