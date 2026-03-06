import { motion } from 'motion/react';
import { Code2, MonitorSmartphone, Paintbrush, Zap } from 'lucide-react';

const skills = [
  { name: 'HTML', icon: <Code2 size={24} />, color: 'text-orange-400' },
  { name: 'CSS', icon: <Paintbrush size={24} />, color: 'text-blue-400' },
  { name: 'JavaScript', icon: <Zap size={24} />, color: 'text-yellow-400' },
  { name: 'Website Design', icon: <MonitorSmartphone size={24} />, color: 'text-purple-400' },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8" />
            <p className="text-lg text-slate-400 leading-relaxed">
              Hi, I'm the developer behind <span className="text-white font-medium">FutureWithMe</span>. 
              I specialize in building high-quality, user-friendly, and visually stunning websites. 
              My goal is to help businesses and creators establish a strong online presence with modern web technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors group"
              >
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  {skill.icon}
                </motion.div>
                <span className="font-medium text-slate-300">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
