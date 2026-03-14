
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Building2, HeartHandshake } from 'lucide-react';

const categories = [
  {
    id: 'freelance',
    title: 'Freelance Projects',
    description: 'Independent creative work, personal commissions, and bespoke digital content creation.',
    icon: Briefcase,
    path: '/freelance-projects'
  },
  {
    id: 'professional',
    title: 'Professional Projects',
    description: 'Corporate campaigns, brand collaborations, and high-end commercial productions.',
    icon: Building2,
    path: '/professional-projects'
  },
  {
    id: 'associative-projects',
    title: 'Associative Projects',
    description: 'Community-driven initiatives, non-profit work, and impactful social projects.',
    icon: HeartHandshake,
    path: '/associative-projects'
  }
];

const CategoriesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="categories" className="py-16 px-4 md:px-8 lg:px-16 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore my diverse portfolio across different types of engagements and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => navigate(category.path)}
                className="group cursor-pointer bg-[#252525] rounded-2xl p-8 border border-[#333] hover:border-[#00d4ff] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#1a1a1a] border border-[#333] group-hover:border-[#00d4ff] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                  <Icon className="w-10 h-10 text-gray-400 group-hover:text-[#00d4ff] transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00d4ff] transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
