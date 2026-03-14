import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Instagram } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const heroBanner = '/volunteering/ieee/IEEE-scaled.jpg';
const ieeeInstagramUrl = 'https://www.instagram.com/ieee_epi_sb';
const wieInstagramUrl = 'https://www.instagram.com/ieee_wie_epi?igsh=MW5yNWIzaDE3aWg4dA==';

const sections = [
  {
    key: 'wie',
    title: 'IEEE WIE — Women in Engineering',
    description:
      'As Design Manager for IEEE WIE, I provided creative direction and communication assets to amplify global initiatives supporting women in technology. I focused on increasing student engagement, highlighting STEM role models, and promoting community-driven programs centered on mentorship, visibility, and empowerment for women in engineering.',
    socialUrl: wieInstagramUrl,
    socialLabel: 'IEEE WIE EPI',
    introLogo: '/volunteering/ieee/wie/wie-logo-white.png',
    images: [
      '/volunteering/ieee/wie/WIE%20TALK1.jpg',
      '/volunteering/ieee/wie/AFFICHE%20FILM.jpg',
      '/volunteering/ieee/wie/affiche%20lumi%C3%A8res7%20a2.jpg',
      '/volunteering/ieee/wie/affiche%20stand.jpg',
      '/volunteering/ieee/wie/IMG_0003.jpg',
      '/volunteering/ieee/wie/IMG_0310.jpg'
    ],
    details: []
  },
  {
    key: 'events-overview',
    title: 'IEEE Events',
    description:
      'Through my involvement with IEEE, I contributed to multiple technical, educational, and humanitarian events where I supported the creative and operational side of execution. Across these activities, I worked on design assets, video content, event photography, and organization to strengthen communication, improve engagement, and document key moments from each initiative.',
    socialUrl: ieeeInstagramUrl,
    socialLabel: 'IEEE EPI Student Branch',
    images: [
      '/volunteering/ieee/XTREME17%20A2.jpg',
      '/volunteering/ieee/XTREME17%20timeline.jpg',
      '/volunteering/ieee/xtreme17.jpg',
      '/volunteering/ieee/IMG_0606.jpg',
      '/volunteering/ieee/IMG_0727.jpg',
      '/volunteering/ieee/IMG_0758.jpg',
      '/volunteering/ieee/392861183_312801344834619_5872583123977072237_n.jpg',
      '/volunteering/ieee/IMG_0220.PNG',
      '/volunteering/ieee/IMG_0221.PNG',
      '/volunteering/ieee/palestinePoster.jpg'
    ],
    details: []
  },
  {
    key: 'ieee-star-program',
    title: 'IEEE STAR Program',
    description:
      'Through the IEEE STAR Program, we visited a school with limited resources and spent the day with children through hands-on workshops, interactive activities, and educational games. The initiative aimed to make technology and learning more accessible, create joyful moments, and encourage curiosity, teamwork, and confidence in a supportive environment.',
    images: [

      '/volunteering/ieee/school%20workshop/IMG_2090.png',
      '/volunteering/ieee/school%20workshop/IMG_2208.png',
      '/volunteering/ieee/school%20workshop/IMG_2279.png',
      '/volunteering/ieee/school%20workshop/IMG_2289.png',
      '/volunteering/ieee/school%20workshop/IMG_2458.png',
      '/volunteering/ieee/school%20workshop/IMG_4217.png',
      '/volunteering/ieee/school%20workshop/IMG_4234.png',
      '/volunteering/ieee/school%20workshop/IMG_4276.png'

    ],
    details: []
  }
];

const IeeeProjectPage = () => {
  const [activeIndexBySection, setActiveIndexBySection] = useState(() =>
    Object.fromEntries(sections.filter((section) => section.images.length > 0).map((section) => [section.key, 0]))
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
        <title>IEEE EPI Student Branch | Idriss Kacem</title>
        <meta
          name="description"
          content="Idriss Kacem's involvement with IEEE EPI Student Branch — IEEEXtreme, WIE, and humanitarian events."
        />
      </Helmet>

      <div className="min-h-screen bg-[#111111] flex flex-col">
        <Header />

        <main className="flex-1 py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="mt-4 mb-8">
              <Link
                to="/volunteering"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ef4444] transition-colors"
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
              <div className="mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 items-center">
                  <div className="rounded-2xl p-8">
                    <img
                      src="/volunteering/ieee/logoieee%20(2)%20(1).png"
                      alt="IEEE EPI Student Branch logo"
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#ef4444] mb-3">University Experience</p>
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">IEEE EPI Student Branch</h1>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-4">Advancing Technology for Humanity</p>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                      IEEE, the Institute of Electrical and Electronics Engineers, is the world's largest technical
                      professional organization dedicated to advancing technology for the benefit of humanity. Through
                      IEEE EPI Student Branch, I contributed to technical events, design work, media production, and
                      humanitarian initiatives while evolving from Active Member to Design Manager and then Media Team
                      contributor across 2021 to 2024.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-10 flex justify-center">
                <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="rounded-lg border border-[#4a2626] bg-[#1f0d0d] px-4 py-3 text-center">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Years</p>
                    <p className="text-sm font-medium text-white mt-1">2021 - 2024</p>
                  </div>
                  <div className="rounded-lg border border-[#4a2626] bg-[#1f0d0d] px-4 py-3 text-center">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Roles</p>
                    <p className="text-sm font-medium text-white mt-1">Active Member / Design Manager / Media Team</p>
                  </div>
                  <div className="rounded-lg border border-[#4a2626] bg-[#1f0d0d] px-4 py-3 text-center">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Organization</p>
                    <p className="text-sm font-medium text-white mt-1">IEEE EPI Student Branch</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {sections.map((section, sectionIndex) => (
                  <motion.section
                    key={section.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: sectionIndex * 0.05 }}
                    className={`rounded-2xl border border-[#333] bg-[#171717] p-5 md:p-6 h-full ${
                      section.key === 'ieee-star-program' ? 'xl:col-span-2' : ''
                    }`}
                  >
                    {(() => {
                      const totalImages = section.images.length;
                      const activeIndex = getActiveIndex(section.key, totalImages);
                      const isWie = section.key === 'wie';

                      return (
                        <>
                          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-5">
                            <div>
                              <h2
                                className={`font-bold text-white ${
                                  section.key === 'wie' ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
                                }`}
                              >
                                {section.title}
                              </h2>
                              {section.key === 'wie' ? (
                                <div className="mt-2 flex flex-col sm:flex-row items-start gap-4 md:min-h-[120px]">
                                  <img
                                    src={section.introLogo}
                                    alt="IEEE WIE logo"
                                    className="shrink-0 w-28 h-28 sm:w-36 sm:h-36 object-contain"
                                    loading="lazy"
                                  />
                                  <p className="text-gray-400">{section.description}</p>
                                </div>
                              ) : (
                                <p
                                  className={`text-gray-400 mt-1 ${
                                    section.key === 'events-overview' ? 'md:min-h-[120px]' : ''
                                  }`}
                                >
                                  {section.description}
                                </p>
                              )}
                              {section.key === 'wie' && section.socialUrl && (
                                <div className="mt-3 flex justify-center">
                                  <a
                                    href={section.socialUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-[#a855f7]/40 bg-[#a855f7]/10 px-4 py-2 text-sm font-medium text-[#c084fc] hover:bg-[#a855f7]/20 transition-colors"
                                  >
                                    <Instagram className="w-4 h-4" />
                                    {section.socialLabel}
                                    <ExternalLink className="w-4 h-4" />
                                  </a>
                                </div>
                              )}
                              {section.key === 'events-overview' && section.socialUrl && (
                                <div className="mt-3 flex justify-center">
                                  <a
                                    href={section.socialUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-[#ef4444]/40 bg-[#ef4444]/10 px-4 py-2 text-sm font-medium text-[#ef4444] hover:bg-[#ef4444]/20 transition-colors"
                                  >
                                    <Instagram className="w-4 h-4" />
                                    {section.socialLabel}
                                    <ExternalLink className="w-4 h-4" />
                                  </a>
                                </div>
                              )}
                            </div>
                            {section.socialUrl && section.key !== 'wie' && section.key !== 'events-overview' && (
                              <a
                                href={section.socialUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-[#ef4444]/40 bg-[#ef4444]/10 px-4 py-2 text-sm font-medium text-[#ef4444] hover:bg-[#ef4444]/20 transition-colors"
                              >
                                <Instagram className="w-4 h-4" />
                                {section.socialLabel}
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>

                          {section.details.length > 0 && (
                            <div className="mb-5 rounded-xl border border-[#2d2d2d] bg-[#121212] px-4 py-4">
                              <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
                                {section.details.map((detail, index) => (
                                  <li key={`${section.key}-detail-${index}`} className={index === 0 ? 'text-white font-medium' : ''}>
                                    {index === 0 ? detail : `• ${detail}`}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {totalImages > 0 ? (
                            <div className="space-y-4">
                              <div className="flex items-center justify-center">
                                <div className="group relative w-full max-w-5xl px-10 sm:px-12 md:px-14">
                                  {totalImages > 1 && (
                                    <button
                                      onClick={() => goToPrevImage(section.key, totalImages)}
                                      className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/55 text-white transition-all hover:scale-110 backdrop-blur-sm ${
                                        isWie ? 'hover:bg-[#a855f7]/80' : 'hover:bg-[#ef4444]/80'
                                      }`}
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
                                      className={`w-auto max-w-full h-auto max-h-[46vh] object-contain rounded-2xl border border-[#303030] bg-black transition-colors duration-300 shadow-[0_0_30px_rgba(0,0,0,0.35)] ${
                                        isWie ? 'group-hover:border-[#a855f7]' : 'group-hover:border-[#ef4444]'
                                      }`}
                                    />
                                  </div>

                                  {totalImages > 1 && (
                                    <button
                                      onClick={() => goToNextImage(section.key, totalImages)}
                                      className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/55 text-white transition-all hover:scale-110 backdrop-blur-sm ${
                                        isWie ? 'hover:bg-[#a855f7]/80' : 'hover:bg-[#ef4444]/80'
                                      }`}
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
                                        index === activeIndex
                                          ? isWie
                                            ? 'w-8 bg-[#a855f7]'
                                            : 'w-8 bg-[#ef4444]'
                                          : 'w-2 bg-white/45 hover:bg-white/70'
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
                                          ? isWie
                                            ? 'border-[#a855f7] shadow-[0_0_12px_rgba(168,85,247,0.35)]'
                                            : 'border-[#ef4444] shadow-[0_0_12px_rgba(239,68,68,0.35)]'
                                          : isWie
                                            ? 'border-[#333] hover:border-[#a855f7]/60'
                                            : 'border-[#333] hover:border-[#ef4444]/60'
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
                          ) : (
                            <div className="rounded-xl border border-dashed border-[#4a2626] bg-[#160d0d] p-6 text-sm text-gray-300">
                              Images for this section can be added here at any time.
                            </div>
                          )}
                        </>
                      );
                    })()}
                  </motion.section>
                ))}
              </div>
            </motion.section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default IeeeProjectPage;