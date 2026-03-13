
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const projects = [
  {
    id: 0,
    title: 'Small business product launch',
    description: 'Eterno Fratelli',
    thumbnail: '/freelanceprojects/eterno/eterno_logo.png',
    category: 'Featured Project',
    year: '2024',
    path: '/freelance-projects/eterno',
    logoCard: true
  },
  {
    id: 4,
    title: 'New t-shirt launch',
    description: 'Matsu Be Stylise',
    thumbnail: '/freelanceprojects/matsu/matsu_logo.png',
    category: 'Featured Project',
    year: '2024',
    path: '/freelance-projects/matsu',
    logoCard: true
  },
  {
    id: 5,
    title: 'Djerba International Chess Festival',
    description: 'Event & Travel',
    thumbnail: '/freelanceprojects/dcf/dcf_logo.png',
    category: 'Featured Project',
    year: '2024',
    path: '/freelance-projects/djerba-chess-festival',
    logoCard: true,
    logoBg: 'bg-white'
  },
  {
    id: 6,
    title: 'Timoumi Jewelry - The Art of Chichkhan',
    description: 'Luxury Product Photography & Heritage',
    thumbnail: '/freelanceprojects/timoumi_jewellery/timoumi_logo.png',
    category: 'Featured Project',
    year: '2024',
    path: '/freelance-projects/timoumi-jewelry',
    logoCard: true,
    logoBg: 'bg-white'
  },
  {
    id: 7,
    title: 'AH Auto Detailing Launch',
    description: 'Automotive social reels and promotional visuals',
    thumbnail: '/freelanceprojects/AH/AH%20AUTO%20LOGO.png',
    category: 'Featured Project',
    year: '2026',
    path: '/freelance-projects/ah-auto-detailing',
    logoCard: true,
    logoBg: 'bg-black'
  },
  {
    id: 8,
    title: '13 Rue de la Mode - 2025 Sandal Collection',
    description: 'Summer elegance in Sousse blending Mediterranean chic with modern urban style.',
    thumbnail: '/freelanceprojects/13%20RUE%20DE%20LA%20MODE/13%20RUE%20DE%20LA%20MODE%20LOGO%20.png',
    category: 'Featured Project',
    year: '2025',
    path: '/freelance-projects/13-rue-de-la-mode',
    logoCard: true,
    logoBg: 'bg-white'
  },
  {
    id: 9,
    title: 'Rebellion Live Band',
    description: 'Electrifying the stage. A comprehensive visual package featuring bold designs and dynamic event coverage.',
    thumbnail: '/freelanceprojects/REBELLION/rebellion%20logo%20BLANC.png',
    category: 'Featured Project',
    year: '2025',
    path: '/freelance-projects/rebellion-live-band',
    logoCard: true,
    logoBg: 'bg-black'
  },
  {
    id: 1,
    title: 'Urban Streetwear Campaign',
    description: 'Dynamic photo and video shoot for an emerging local streetwear brand.',
    thumbnail: '/image/gallery/1.jpg',
    category: 'Photography & Video',
    year: null,
    path: null,
    logoCard: false
  },
  {
    id: 2,
    title: 'Indie Music Video',
    description: 'Creative direction and cinematography for an independent artist.',
    thumbnail: '/image/gallery/2.jpg',
    category: 'Videography',
    year: null,
    path: null,
    logoCard: false
  },
  {
    id: 3,
    title: 'Local Cafe Rebranding',
    description: 'Product and interior photography for a boutique coffee shop.',
    thumbnail: '/image/gallery/3.jpeg',
    category: 'Photography',
    year: null,
    path: null,
    logoCard: false
  }
];

const FreelanceProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Freelance Projects | Idriss KACEM</title>
        <meta name="description" content="Explore freelance photography and videography projects by Idriss KACEM." />
      </Helmet>

      <div className="min-h-screen bg-[#1a1a1a] flex flex-col">
        <Header />
        <main className="flex-1 py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="mt-4 mb-8">
              <Link to="/#categories" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00d4ff] transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Projects</span>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Freelance Projects
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl">
                A collection of independent creative work, personal commissions, and bespoke digital content creation tailored for unique clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group bg-[#252525] rounded-xl overflow-hidden border border-[#333] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] ${
                    project.path ? 'cursor-pointer hover:border-[#00d4ff] hover:-translate-y-1' : 'hover:border-[#00d4ff]'
                  }`}
                >
                  <Link to={project.path || '#'} onClick={(e) => !project.path && e.preventDefault()} className="block">
                    <div className={`relative aspect-video overflow-hidden ${project.logoCard ? `${project.logoBg || 'bg-black'} flex items-center justify-center p-6` : ''}`}>
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className={`w-full h-full transition-transform duration-500 ${project.logoCard ? 'object-contain' : 'object-cover group-hover:scale-110'}`}
                      />
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                        <span className="text-xs font-medium text-[#00d4ff]">{project.category}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00d4ff] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      {project.year && (
                        <p className="text-xs text-gray-500 mt-3 tracking-widest uppercase">{project.year}</p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FreelanceProjectsPage;
