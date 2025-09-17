import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallBack';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Smart Note Manager",
      description: "Notes taking app built with React, Expo, and AsyncStorage. Features include setting reminders, creating to-do lists, text-to-speech.",
      image: "notes.png",
      tech: ["React Native", "Expo", "AsyncStorage", "Expo Text-to-Speech"],
      github: "https://github.com/Jhay-Dadzie/daily-note",
      demo: "https://expo.dev/artifacts/eas/aS8Shw9M7NYr1E7qFBDpie.apk",
      featured: true
    },
    {
      id: 2,
      title: "Melora - Music Identification App",
      description: "Cross-platform mobile app for music identification with React Native. Includes real-time lyrics, song recommendations, and social sharing features.",
      image: "/melora.png",
      tech: ["React Native", "Expo", "Supabase", "ACR cloud API"],
      github: "https://github.com/KumiAmponsah/Melora",
      featured: true
    },
    {
      id: 3,
      title: "PortalNest - School Management System",
      description: "Comprehensive school management system with features for student enrollment, attendance tracking, and performance analytics. Built with HTML, CSS and JavaScript.",
      image: "/portalnest.png",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Firebase"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
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
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-blue-700 mx-auto rounded-full"></div>
          <p className="text-xl text-white/60 mt-6 max-w-2xl mx-auto">
            A showcase of my work in web and mobile development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-magenta-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="relative rounded-2xl w-full h-80 object-cover border border-white/10 group-hover:border-white/20 transition-colors duration-300"
                  />
                  
                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-black/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-cyan-400 hover:text-cyan-400 text-white transition-all duration-300"
                    >
                      <Github size={24} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-cyan-400 hover:text-cyan-400 text-white transition-all duration-300"
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-magenta-500/20 rounded-full border border-white/20">
                  <span className="text-sm bg-gradient-to-r from-cyan-300 to-blue-700 bg-clip-text text-transparent font-medium">
                    Project
                  </span>
                </div>
                
                <h3 className="text-3xl text-white">
                  {project.title}
                </h3>
                
                <p className="text-lg text-white/70 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-white/10 text-white/80 rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400/10 transition-all duration-300"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-300 to-blue-700 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl text-white mb-4">Other Projects</h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-300 to-blue-700 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-gray-900/50 hover:bg-gray-800/50">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-magenta-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-magenta-500 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h4>
                      <div className="flex space-x-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-cyan-400 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-cyan-400 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-white/70 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-white/10 text-white/70 rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}