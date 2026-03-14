import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Instagram, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const instagramUrl = 'https://www.instagram.com/enactus_epi_sousse?igsh=ZjA0M2V1dnpiOW1i';

const sections = [
  {
    key: 'badges',
    title: 'Badges',
    description: 'Identity and role badge designs created for team structure and member presentation.',
    images: [
      '/associative%20projects/enactus/badges/badge%20org.jpg',
      '/associative%20projects/enactus/badges/fin%20ik.jpg',
      '/associative%20projects/enactus/badges/fin%20rahma.jpg',
      '/associative%20projects/enactus/badges/fin%20roue.jpg'
    ]
  },
  {
    key: 'certificates',
    title: 'Certificates',
    description: 'Recognition and appreciation certificates designed for speakers, contributors, and organizers.',
    images: [
      '/associative%20projects/enactus/certificates/certificate%20of%20appreciation.jpg',
      '/associative%20projects/enactus/certificates/certificate%20of%20appreciation2.jpg',
      '/associative%20projects/enactus/certificates/certificate%20of%20appreciation3.jpg',
      '/associative%20projects/enactus/certificates/certificateORG.jpg'
    ]
  },
  {
    key: 'group-photos',
    title: 'Group Photos',
    description: 'Team and event memories documenting the people, moments, and atmosphere behind each initiative.',
    images: [
      '/associative%20projects/enactus/group%20photos/IMG_7756.JPG',
      '/associative%20projects/enactus/group%20photos/IMG_9622.JPG'
    ]
  },
  {
    key: 'launchpad-regional-challenge',
    title: 'Launchpad Regional Challenge',
    description:
      'Regional teams attended hands-on workshops and pitched their projects during the challenge. In this event, I served as Organizer and Media Manager, handling coordination and visual communication assets before and during the competition.',
    images: [
      '/associative%20projects/enactus/launchpad/AFF.jpg',
      '/associative%20projects/enactus/launchpad/COVER%20EVENT%20FINAL.jpg',
      '/associative%20projects/enactus/launchpad/ORGA.jpg',
      '/associative%20projects/enactus/launchpad/PARTI.jpg',
      '/associative%20projects/enactus/launchpad/PHOTO%20DE%20PROFIL.jpg',
      '/associative%20projects/enactus/launchpad/pitching.jpg',
      '/associative%20projects/enactus/launchpad/TRAIN.jpg'
    ]
  },
  {
    key: 'posters',
    title: 'Posters',
    description: 'Promotional posters developed for recruitment, event announcements, and educational campaigns.',
    images: [
      '/associative%20projects/enactus/posters/AFF2F.jpg',
      '/associative%20projects/enactus/posters/affiche%20FINALEEE.jpg',
      '/associative%20projects/enactus/posters/PROGRAMMEFINAllllllllllllllllllllllllllllllll.jpg',
      '/associative%20projects/enactus/posters/Enactus%20journ%C3%A9e%20d%27integration.png'
    ]
  },
  {
    key: 'project-work',
    title: 'Project Work',
    description: 'Academic and entrepreneurial visual supports prepared for internal presentations and workshops.',
    images: [
      '/associative%20projects/enactus/project%20work/DIAP1.jpg',
      '/associative%20projects/enactus/project%20work/DIAP2.jpg',
      '/associative%20projects/enactus/project%20work/DIAP3.jpg',
      '/associative%20projects/enactus/project%20work/DIAP4.jpg'
    ]
  },
  {
    key: 'social-media',
    title: 'Social Media',
    description: 'Short-form visual storytelling and branded content built for campaign engagement and team visibility.',
    images: [
      '/associative%20projects/enactus/social%20media/1.jpg',
      '/associative%20projects/enactus/social%20media/2.jpg',
      '/associative%20projects/enactus/social%20media/3.jpg',
      '/associative%20projects/enactus/social%20media/4.jpg',
      '/associative%20projects/enactus/social%20media/5.jpg',
      '/associative%20projects/enactus/social%20media/6.jpg',
      '/associative%20projects/enactus/social%20media/7.jpg',
      '/associative%20projects/enactus/social%20media/8.jpg',
      '/associative%20projects/enactus/social%20media/9.jpg',
      '/associative%20projects/enactus/social%20media/10.jpg',
      '/associative%20projects/enactus/social%20media/asma.jpg',
      '/associative%20projects/enactus/social%20media/azouzi.jpg',
      '/associative%20projects/enactus/social%20media/board2.jpg',
      '/associative%20projects/enactus/social%20media/eya.jpg',
      '/associative%20projects/enactus/social%20media/idriss.jpg',
      '/associative%20projects/enactus/social%20media/THUMBNAIL.jpg',
      '/associative%20projects/enactus/social%20media/insta%20post.png',
      '/associative%20projects/enactus/social%20media/we%20are%20hiringg.jpg',
      '/associative%20projects/enactus/social%20media/molka.jpg',
      '/associative%20projects/enactus/social%20media/psd%20aziz.jpg',
      '/associative%20projects/enactus/social%20media/psd%20ghazi.jpg',
      '/associative%20projects/enactus/social%20media/psd%20KOUSSAY.jpg',
      '/associative%20projects/enactus/social%20media/psd%20KOUSSAY%20CERTIF.jpg',
      '/associative%20projects/enactus/social%20media/psd%20Seif.jpg',
      '/associative%20projects/enactus/social%20media/roua.jpg',
      '/associative%20projects/enactus/social%20media/salma.jpg',
      '/associative%20projects/enactus/social%20media/SEIF%20CERTIF.jpg'
    ]
  }
];

const EnactusProjectPage = () => {
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
        <title>Enactus EPI Sousse | Associative Project</title>
        <meta
          name="description"
          content="University associative project experience with Enactus EPI Sousse featuring posters, badges, certificates, social media design, and event documentation."
        />
      </Helmet>

      <div className="min-h-screen bg-[#111111] flex flex-col">
        <Header />

        <main className="flex-1 py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="mt-4 mb-8">
              <Link
                to="/associative-projects"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#f4c430] transition-colors"
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
              <div className="mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 items-center">
                  <div className="rounded-2xl p-8">
                    <img
                      src="/associative%20projects/enactus/logo%20enactus%20blanc.png"
                      alt="Enactus EPI Sousse logo"
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#f4c430] mb-3">University Experience</p>
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">Enactus EPI Sousse</h1>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-5">
                      This project represents my university journey with Enactus, where I contributed to design,
                      communication, and event storytelling across multiple initiatives. It includes all production
                      tracks from the Enactus folder: badges, certificates, group photos, posters, project work,
                      social media, and board-oriented content.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                      The work reflects a complete creative pipeline, from visual identity assets to campaign content
                      and event documentation, all built around one mission: delivering impactful youth-driven
                      entrepreneurship communication.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#f4c430]/40 bg-[#f4c430]/10 px-4 py-2 text-sm font-medium text-[#f4c430] hover:bg-[#f4c430]/20 transition-colors"
                      >
                        <Instagram className="w-4 h-4" />
                        Enactus EPI Sousse
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-10 flex justify-center">
                <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="rounded-lg border border-[#4a4026] bg-[#1f1a0d] px-4 py-3 text-center">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Years</p>
                    <p className="text-sm font-medium text-white mt-1">2022 - 2024</p>
                  </div>
                  <div className="rounded-lg border border-[#4a4026] bg-[#1f1a0d] px-4 py-3 text-center">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Position</p>
                    <p className="text-sm font-medium text-white mt-1">Vice President / Marketing Manager</p>
                  </div>
                  <div className="rounded-lg border border-[#4a4026] bg-[#1f1a0d] px-4 py-3 text-center">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Organization</p>
                    <p className="text-sm font-medium text-white mt-1">Enactus EPI Sousse</p>
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
                    className="rounded-2xl border border-[#333] bg-[#171717] p-5 md:p-6 h-full"
                  >
                    {/** Per-section carousel state */}
                    {(() => {
                      const totalImages = section.images.length;
                      const activeIndex = getActiveIndex(section.key, totalImages);

                      return (
                        <>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-5">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">{section.title}</h2>
                        <p className="text-gray-400 mt-1">{section.description}</p>
                      </div>
                      {section.key === 'board' && (
                        <a
                          href={instagramUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#f4c430] hover:text-[#ffd95f] transition-colors"
                        >
                          Open Instagram
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    {totalImages > 0 ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-center">
                          <div className="group relative w-fit max-w-full">
                            <button
                              onClick={() => goToPrevImage(section.key, totalImages)}
                              className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/55 hover:bg-[#f4c430]/80 text-white transition-all hover:scale-110 backdrop-blur-sm"
                              aria-label={`Previous ${section.title} image`}
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>

                            <motion.img
                              key={section.images[activeIndex]}
                              initial={{ opacity: 0.35, scale: 1.02 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.35 }}
                              src={section.images[activeIndex]}
                              alt={`${section.title} visual ${activeIndex + 1}`}
                              className="w-auto max-w-full h-auto max-h-[46vh] object-contain rounded-2xl border border-[#303030] bg-black transition-colors duration-300 group-hover:border-[#f4c430] shadow-[0_0_30px_rgba(0,0,0,0.35)]"
                            />

                            <button
                              onClick={() => goToNextImage(section.key, totalImages)}
                              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/55 hover:bg-[#f4c430]/80 text-white transition-all hover:scale-110 backdrop-blur-sm"
                              aria-label={`Next ${section.title} image`}
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        <div className="flex justify-center gap-2">
                          {section.images.map((_, index) => (
                            <button
                              key={`${section.key}-dot-${index}`}
                              onClick={() => setActiveImage(section.key, index)}
                              className={`h-2 rounded-full transition-all duration-300 ${
                                index === activeIndex ? 'w-8 bg-[#f4c430]' : 'w-2 bg-white/45 hover:bg-white/70'
                              }`}
                              aria-label={`Go to ${section.title} image ${index + 1}`}
                            />
                          ))}
                        </div>

                        {section.key !== 'social-media' && (
                          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1 hide-scrollbar">
                            {section.images.map((image, index) => (
                              <button
                                key={`${section.key}-thumb-${image}`}
                                onClick={() => setActiveImage(section.key, index)}
                                className={`shrink-0 w-12 sm:w-14 rounded-lg overflow-hidden border transition-all ${
                                  index === activeIndex
                                    ? 'border-[#f4c430] shadow-[0_0_12px_rgba(244,196,48,0.35)]'
                                    : 'border-[#333] hover:border-[#f4c430]/60'
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
                      <div className="rounded-xl border border-dashed border-[#4a4026] bg-[#15120a] p-6 text-sm text-gray-300">
                        This folder is currently empty. New board visuals can be added at any time and will be showcased here.
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

export default EnactusProjectPage;
