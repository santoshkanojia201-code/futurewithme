import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern shopping experience with seamless checkout and inventory management.',
    image: 'https://picsum.photos/seed/ecommerce/800/600?blur=2',
    tags: ['React', 'Tailwind', 'Node.js'],
  },
  {
    title: 'Creative Agency Site',
    description: 'A visually stunning portfolio for a design agency with smooth scroll animations.',
    image: 'https://picsum.photos/seed/agency/800/600?blur=2',
    tags: ['Next.js', 'Framer Motion'],
  },
  {
    title: 'SaaS Dashboard',
    description: 'An intuitive analytics dashboard for a B2B software company.',
    image: 'https://picsum.photos/seed/dashboard/800/600?blur=2',
    tags: ['Vue', 'D3.js', 'Tailwind'],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Featured Work</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-display font-semibold text-white">{project.title}</h3>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
