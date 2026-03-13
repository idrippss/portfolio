
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const videoCards = [
  {
    thumbnail: 'https://images.unsplash.com/photo-1587050007609-d9686b217bd6',
    title: 'Corporate Brand Film',
    description: 'A cinematic journey showcasing modern business innovation and creativity',
    alt: 'Professional corporate video production with modern office setting'
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1687313217063-0f1e74b04139',
    title: 'Product Showcase',
    description: 'Dynamic product visualization with stunning visual effects and motion graphics',
    alt: 'High-quality product videography with professional lighting'
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1614885362836-3f2b2d8e0b03',
    title: 'Event Coverage',
    description: 'Capturing memorable moments with professional event videography',
    alt: 'Professional event videography and live coverage'
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1495488170890-ee9e49ff335d',
    title: 'Documentary Series',
    description: 'Compelling storytelling through documentary-style cinematography',
    alt: 'Documentary-style video production with cinematic quality'
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1686061594212-8904e38bc1f2',
    title: 'Music Video',
    description: 'Creative visual narratives synchronized with musical artistry',
    alt: 'Creative music video production with artistic cinematography'
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1615359340315-f6c9b3106a2a',
    title: 'Commercial Ad',
    description: 'High-impact advertising content designed to captivate and convert',
    alt: 'Professional commercial video advertising production'
  }
];

const VideoShowcase = () => {
  const { toast } = useToast();

  const handlePlayClick = (title) => {
    toast({
      title: "🚧 Video Player Coming Soon",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="videos" className="py-20 px-4 md:px-8 lg:px-16 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Video Work
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore my collection of professional video productions and cinematic storytelling
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoCards.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-[#252525] border border-[#333]"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play Button Overlay */}
                <button
                  onClick={() => handlePlayClick(video.title)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label={`Play ${video.title}`}
                >
                  <div className="w-20 h-20 rounded-full bg-[#00d4ff] flex items-center justify-center hover:bg-[#a855f7] transition-colors duration-300 shadow-2xl">
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </div>
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00d4ff] transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
