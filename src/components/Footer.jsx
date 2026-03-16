
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
    <footer className="bg-[#1a1a1a] border-t border-[#333] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:idriss.kacem@yahoo.fr"
                className="flex items-center gap-3 text-gray-400 hover:text-[#00d4ff] transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>idriss.kacem@yahoo.fr</span>
              </a>
              <a
                href="https://www.linkedin.com/in/idrisskacem/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#00d4ff] transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>

          {/* Navigation Menu */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('highlights')}
                className="block text-gray-400 hover:text-[#00d4ff] transition-colors text-sm"
              >
                Highlights
              </button>
              <button
                onClick={() => scrollToSection('categories')}
                className="block text-gray-400 hover:text-[#00d4ff] transition-colors text-sm"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block text-gray-400 hover:text-[#00d4ff] transition-colors text-sm"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('reels')}
                className="block text-gray-400 hover:text-[#00d4ff] transition-colors text-sm"
              >
                Videos
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-gray-400 hover:text-[#00d4ff] transition-colors text-sm"
              >
                Contact
              </button>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Let's Collaborate</h3>
            <p className="text-gray-400 mb-6">
              Ready to bring your vision to life? Let's create something extraordinary together.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] text-white font-semibold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Contact
            </button>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-[#333] text-center"
        >
          <p className="text-gray-500">
            © {new Date().getFullYear()} Idriss KACEM. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
