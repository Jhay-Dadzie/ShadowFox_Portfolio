import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Neon Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-black to-magenta-500/20"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-magenta-400/30 to-pink-500/30 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          
        >
          <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
            <span className="text-white">Hi there, I'm a </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-700 bg-clip-text text-transparent font-bold">
              Full-Stack Developer & Designer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Crafting beautiful web and mobile experiences with modern technologies. 
            Passionate about clean code, user experience, and innovative solutions.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Jhay-Dadzie"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
            >
              <Github size={24} className="text-white hover:text-cyan-400" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/joseph-dadzie-33a42a263"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
            >
              <Linkedin size={24} className="text-white hover:text-cyan-400" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:josephdadzie0002@gmail.com"
              className="p-3 rounded-full border border-white/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
            >
              <Mail size={24} className="text-white hover:text-cyan-400" />
            </motion.a>
          </div>

          <motion.button
            onClick={scrollToNext}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-blue-700 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View My Work</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"></div>
      </motion.div>
    </section>
  );
}