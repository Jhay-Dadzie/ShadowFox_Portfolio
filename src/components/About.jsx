import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-700 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-blue-700 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-magenta-500/20 rounded-2xl blur-xl"></div>
              <ImageWithFallback
                src="/me.png"
                alt="Developer workspace"
                className="relative rounded-2xl w-full h-160 object-cover border border-white/10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl text-white mb-6">
              Passionate Developer & Designer
            </h3>
            
            <p className="text-lg text-white/80 leading-relaxed">
              Hi, <span className="font-bold bg-gradient-to-r from-cyan-300 to-blue-700 bg-clip-text text-transparent">I'm Joseph Dadzie.</span> A full-stack developer with 2 years of experience building 
              scalable web applications and mobile apps. I specialize in modern 
              JavaScript frameworks, cloud technologies, and creating seamless 
              user experiences. My background in graphic design gives me a unique eye for clean, 
              intuitive interfaces that blend function with aesthetics.
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or mentoring aspiring developers. 
              I believe in writing clean, maintainable code and following best practices.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 rounded-lg border border-white/10 hover:border-cyan-400/50 transition-colors">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-700 bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-white/60">Projects Completed</div>
              </div>
              <div className="text-center p-4 rounded-lg border border-white/10 hover:border-cyan-400/50 transition-colors">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-700 bg-clip-text text-transparent">
                  2
                </div>
                <div className="text-white/60">Years Experience</div>
              </div>
            </div>

            <a
              href="../../public/MY_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 border border-cyan-500 text-cyan-500 px-6 py-3 rounded-full hover:bg-cyan-400/10 transition-all duration-300"
            >
              <span>Download CV</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}