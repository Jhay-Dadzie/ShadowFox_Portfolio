import { motion } from 'motion/react';
import { Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-700 bg-clip-text text-transparent mb-2">
              {"<Personal Portfolio />"}
            </div>
            <p className="text-white/60 text-sm">
              Building digital experiences with passion and precision
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <span>Joseph Dadzie (Son of Jacob)</span>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full border border-white/20 text-white/60 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="text-center text-white/40 text-sm">
            <p>&copy; 2025 Developer Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}