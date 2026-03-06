import { motion } from 'motion/react';
import { Globe, Layout, RefreshCw, Gauge } from 'lucide-react';

const services = [
  {
    title: 'Website Development',
    description: 'Custom-built websites tailored to your specific needs, ensuring a robust and scalable online presence.',
    icon: <Globe size={32} />,
    glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
    iconColor: 'text-blue-400',
  },
  {
    title: 'Landing Page Design',
    description: 'High-converting landing pages designed to capture leads and drive sales for your campaigns.',
    icon: <Layout size={32} />,
    glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
    iconColor: 'text-purple-400',
  },
  {
    title: 'Website Redesign',
    description: 'Give your outdated website a fresh, modern look with improved user experience and performance.',
    icon: <RefreshCw size={32} />,
    glow: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]',
    iconColor: 'text-pink-400',
  },
  {
    title: 'Website Optimization',
    description: 'Speed up your website, improve SEO, and ensure it runs flawlessly across all devices.',
    icon: <Gauge size={32} />,
    glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
    iconColor: 'text-emerald-400',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900/50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">My Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-slate-950 border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${service.glow}`}
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${service.iconColor}`}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
