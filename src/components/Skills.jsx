import { motion } from 'motion/react';
import { Code, Smartphone, Globe, Database, Cpu, PenTool } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: <Globe size={32} />,
      title: "Frontend Development",
      skills: ["React.js", "JavaScript/TypeScript", "Tailwind CSS", "Bootstrap"],
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Code size={32} />,
      title: "Backend Development", 
      skills: ["Node.js", "JavaScript", "Express", "REST APIs"],
      color: "from-magenta-400 to-pink-500"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Development",
      skills: ["React Native", "Expo", "Firebase"],
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: <Database size={32} />,
      title: "Database & Storage",
      skills: ["PostgreSQL", "Supabase", "Firebase", "MySQL"],
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Cpu size={32} />,
      title: "Tools & Technologies",
      skills: ["Git & Github", "VS Code", "Figma", "Vite"],
      color: "from-teal-400 to-cyan-500"
    },
    {
      icon: <PenTool size={32} />,
      title: "Graphic Design & Prototyping",
      skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
      color: "from-amber-400 to-lime-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
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
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-blue-700 mx-auto rounded-full"></div>
          <p className="text-xl text-white/60 mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-gray-900/50 hover:bg-gray-800/50">
                {/* Gradient glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-magenta-500 group-hover:bg-clip-text transition-all duration-300">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-white/10 text-white/80 rounded-full border border-white/20 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Programming languages proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl border border-white/10 bg-gray-900/30"
        >
          <h3 className="text-2xl text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-700 bg-clip-text text-transparent">
              Language Proficiency
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "JavaScript", level: 85 },
              { name: "Python", level: 70 },
              { name: "C++", level: 50 },
              { name: "React.js", level: 85 },
              { name: "Node.js", level: 70 },
              { name: "MySQL", level: 100 },
            ].map((lang) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/80">{lang.name}</span>
                  <span className="text-cyan-400">{lang.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-2 bg-gradient-to-r from-cyan-300 to-blue-700 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}