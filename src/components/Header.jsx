
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (location.pathname === '/' && element) {
      const offset = 100; // Header height offset
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      return;
    }

    navigate(`/#${sectionId}`);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg border-b border-[#333]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl md:text-3xl font-bold text-white hover:text-[#00d4ff] transition-colors"
          >
            Idriss KACEM
          </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('highlights')}
              className="text-white hover:text-[#00d4ff] transition-colors font-medium text-sm"
            >
              Highlights
            </button>
            <button
              onClick={() => scrollToSection('categories')}
              className="text-white hover:text-[#00d4ff] transition-colors font-medium text-sm"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-[#00d4ff] transition-colors font-medium text-sm"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('reels')}
              className="text-white hover:text-[#00d4ff] transition-colors font-medium text-sm"
            >
              Videos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-[#00d4ff] transition-colors font-medium text-sm"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button - Contact */}
          <button
            onClick={() => scrollToSection('contact')}
            className="md:hidden px-4 py-2 bg-[#00d4ff] text-black font-semibold rounded-lg hover:bg-[#00b8e6] transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
