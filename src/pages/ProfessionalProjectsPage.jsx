
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
    title: 'RIVEZLI - AI-Powered Educational Platform',
    description: 'Software Engineering Graduation Project (PFE) focused on AI-supported learning and student progress automation.',
    thumbnail: '/sitewebmedia/proessional%20projects/rivezli/logo2.png',
    category: 'Software Engineering',
    year: '2024',
    path: '/professional-projects/rivezli',
    logoCard: true,
    logoBg: 'bg-black'
  }
];

const ProfessionalProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Professional Projects | Idriss KACEM</title>
        <meta name="description" content="Explore professional and corporate projects by Idriss KACEM." />
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
                Professional Projects
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl">
                Corporate campaigns, brand collaborations, and high-end commercial productions designed to elevate brand presence and engagement.
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

export default ProfessionalProjectsPage;
