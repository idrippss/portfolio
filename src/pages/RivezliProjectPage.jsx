import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Presentation, Cpu, Layers, Workflow, Sparkles } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const featureCards = [
  {
    title: 'AI Support Generation',
    description: 'Generate personalized pedagogical supports based on student context and course progression.',
    icon: Sparkles
  },
  {
    title: 'Adaptive Progress Tracking',
    description: 'Monitor outcomes and learning performance with dynamic indicators and actionable analytics.',
    icon: Cpu
  },
  {
    title: 'Course Management',
    description: 'Manage modules, resources, and structured learning paths with scalable content workflows.',
    icon: Layers
  },
  {
    title: 'Dual Dashboards',
    description: 'Dedicated interfaces for Students and Admins to support role-specific actions and visibility.',
    icon: Workflow
  }
];

const usedTechnologies = [
  '/sitewebmedia/proessional%20projects/used%20technologies/58481791cef1014c0b5e4994.png',
  '/sitewebmedia/proessional%20projects/used%20technologies/62a79050e42d729d928b1756.png',
  '/sitewebmedia/proessional%20projects/used%20technologies/apps.37179.b19e18e4-8129-4f14-9c5f-94ff9f478a8e.7039006e-f2b2-4482-98db-255ae2f58628.bd478170-6d94-42f7-b043-44f31827a0d2.png',
  '/sitewebmedia/proessional%20projects/used%20technologies/css-logo.png',
  '/sitewebmedia/proessional%20projects/used%20technologies/draw-io.png',
  '/sitewebmedia/proessional%20projects/used%20technologies/GitHub-logo.png',
  '/sitewebmedia/proessional%20projects/used%20technologies/illustrator-Logo-2013.png',
  '/sitewebmedia/proessional%20projects/used%20technologies/images.png',
  '/sitewebmedia/proessional%20projects/used%20technologies/javascript-logo-transparent-logo-javascript-images-3.png',
  '/sitewebmedia/proessional%20projects/used%20technologies/laravel8530.jpg',
  '/sitewebmedia/proessional%20projects/used%20technologies/PhpMyAdmin_logo.svg.png',
  '/sitewebmedia/proessional%20projects/used%20technologies/pngimg.com%20-%20mysql_PNG6.png',
  '/sitewebmedia/proessional%20projects/used%20technologies/python-5-logo-png-transparent.png',
  '/sitewebmedia/proessional%20projects/used%20technologies/Trello-logo.jpg',
  '/sitewebmedia/proessional%20projects/used%20technologies/xampp_94513.png'
];

const RivezliProjectPage = () => {
  return (
    <>
      <Helmet>
        <title>RIVEZLI - AI-Powered Educational Platform</title>
        <meta
          name="description"
          content="Professional software engineering graduation project: RIVEZLI, an AI-powered educational platform designed with 2TUP, Agile practices, and MVC architecture."
        />
      </Helmet>

      <div className="min-h-screen bg-[#101215] flex flex-col">
        <Header />

        <main className="flex-1 py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="mt-4 mb-8">
              <Link
                to="/professional-projects"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#3ba3ff] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Professional Projects</span>
              </Link>
            </div>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-[#2a2f38] bg-gradient-to-br from-[#151a22] via-[#12161d] to-[#0f1319] p-6 md:p-10 shadow-[0_0_45px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-12">
                <div className="rounded-2xl border border-[#2e3f57] bg-[#0e141d] p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] gap-6 items-center mb-6">
                    <div className="max-w-sm mx-auto lg:mx-0">
                      <img
                        src="/sitewebmedia/proessional%20projects/rivezli/logo2.png"
                        alt="RIVEZLI logo"
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-[#3ba3ff] mb-3">Software Engineering Graduation Project (PFE)</p>
                      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
                        RIVEZLI - AI-Powered Educational Platform
                      </h1>
                      <p className="text-gray-300 text-sm md:text-base">
                        A professional, technical platform engineered to automate personalized learning support and improve student follow-up through AI-driven workflows.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#30435f] bg-[#0a0f16] overflow-hidden max-w-5xl mx-auto">
                    <img
                      src="/sitewebmedia/proessional%20projects/rivezli/hp.png"
                      alt="RIVEZLI dashboard mockup"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-12 grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-6">
                <div className="rounded-xl border border-[#2a313d] bg-[#121821] p-6">
                  <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
                  <p className="text-gray-300 leading-relaxed">
                    RIVEZLI is an AI-driven educational ecosystem designed to automate personalized learning support and track student progress with precision. Built as a full-stack graduation project, the platform combines adaptive assistance, clear analytics, and structured academic management to improve both learner outcomes and administrative efficiency.
                  </p>
                </div>

                <div className="rounded-xl border border-[#35517a] bg-[#111a28] p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Info</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400">Role</p>
                      <p className="text-white font-medium">Full-stack Developer</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400">Methodology</p>
                      <p className="text-white font-medium">2TUP & Agile</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400">Architecture</p>
                      <p className="text-white font-medium">MVC</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Platform Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featureCards.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.article
                        key={feature.title}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="rounded-xl border border-[#2c3442] bg-[#111720] p-5 hover:border-[#3ba3ff] hover:shadow-[0_0_18px_rgba(59,163,255,0.18)] transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <div className="rounded-lg border border-[#365174] bg-[#152234] p-2">
                            <Icon className="w-5 h-5 text-[#62b6ff]" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                            <p className="text-sm text-gray-400">{feature.description}</p>
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </div>

              <div className="mb-12 rounded-xl border border-[#2b3542] bg-[#0f141c] p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Used Technologies</h2>
                <p className="text-sm md:text-base text-gray-300 mb-5">
                  Core tools and technologies used throughout design, development, documentation, and project management.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {usedTechnologies.map((logo, index) => (
                    <motion.div
                      key={logo}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.03 }}
                      className="rounded-xl border border-[#313f51] bg-[#0b1017] p-3 flex items-center justify-center min-h-[90px] hover:border-[#3ba3ff] transition-colors"
                    >
                      <img
                        src={logo}
                        alt={`Technology logo ${index + 1}`}
                        className="max-h-12 w-auto object-contain"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Resources</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <a
                    href="/sitewebmedia/proessional%20projects/rivezli/RAPPORT%20PFE%20IDRISS.docx"
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border border-[#2f3c4d] bg-[#131c27] p-5 hover:border-[#3ba3ff] transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-5 h-5 text-[#74c2ff]" />
                      <h3 className="text-white font-semibold">View Technical Report (Word)</h3>
                    </div>
                    <p className="text-sm text-gray-400">Open the project report and technical documentation.</p>
                  </a>

                  <a
                    href="/sitewebmedia/proessional%20projects/rivezli/Pr%C3%A9sentation%20idriss.pptx"
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border border-[#2f3c4d] bg-[#131c27] p-5 hover:border-[#3ba3ff] transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Presentation className="w-5 h-5 text-[#74c2ff]" />
                      <h3 className="text-white font-semibold">View Final Presentation (PPTX)</h3>
                    </div>
                    <p className="text-sm text-gray-400">Open the graduation defense slide deck.</p>
                  </a>
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

export default RivezliProjectPage;
