import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and secure payment integration.",
    detailedDescription: "This platform was built to handle high-traffic retail scenarios. It features a custom-built inventory synchronization engine that ensures stock levels are accurate across multiple warehouses in real-time.",
    challenges: [
      "Handling race conditions during high-volume flash sales.",
      "Integrating multiple third-party logistics providers.",
      "Optimizing image delivery for global users."
    ],
    solutions: [
      "Implemented Redis-based distributed locking for inventory updates.",
      "Developed a unified adapter pattern for logistics APIs.",
      "Used a multi-region CDN with automatic WebP conversion."
    ],
    image: "https://picsum.photos/seed/shop/800/600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and drag-and-drop functionality.",
    detailedDescription: "A productivity suite designed for remote teams. It includes real-time whiteboarding, automated sprint planning, and deep integration with popular communication tools like Slack and Discord.",
    challenges: [
      "Maintaining state consistency across multiple concurrent users.",
      "Implementing complex drag-and-drop interactions on mobile devices.",
      "Scaling the real-time notification system."
    ],
    solutions: [
      "Utilized CRDTs (Conflict-free Replicated Data Types) for collaborative editing.",
      "Built a custom touch-responsive gesture handler using Framer Motion.",
      "Implemented a horizontal scaling strategy for WebSocket servers using Redis Pub/Sub."
    ],
    image: "https://picsum.photos/seed/tasks/800/600",
    tags: ["Next.js", "Firebase", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "Web application that generates images from text descriptions using advanced AI models.",
    detailedDescription: "An intuitive interface for generative AI. Users can fine-tune parameters, upscale images, and organize their creations into searchable galleries. The backend manages a complex queue of GPU-intensive tasks.",
    challenges: [
      "Managing long-running asynchronous GPU tasks without blocking the UI.",
      "Cost optimization for expensive API calls.",
      "Designing an intuitive UI for complex prompt engineering."
    ],
    solutions: [
      "Implemented a robust job queue with BullMQ and background workers.",
      "Built a smart caching layer for frequently requested prompts.",
      "Created a 'Prompt Builder' visual interface with real-time previews."
    ],
    image: "https://picsum.photos/seed/ai/800/600",
    tags: ["React", "Python", "OpenAI API", "AWS"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description: "Personal fitness companion for tracking workouts, nutrition, and progress with data visualization.",
    detailedDescription: "A comprehensive health dashboard that aggregates data from various wearables. It provides personalized insights using machine learning to predict performance trends and suggest recovery periods.",
    challenges: [
      "Normalizing data from diverse wearable API formats.",
      "Rendering complex, interactive charts with large datasets.",
      "Ensuring high data privacy for sensitive health information."
    ],
    solutions: [
      "Developed a data normalization pipeline with automated unit testing.",
      "Optimized D3.js rendering using canvas for high-density data points.",
      "Implemented end-to-end encryption for all user-identifiable health metrics."
    ],
    image: "https://picsum.photos/seed/fitness/800/600",
    tags: ["React Native", "GraphQL", "PostgreSQL", "D3.js"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-text-secondary max-w-xl text-lg">
              A collection of some of my best work, ranging from complex web
              applications to creative experiments.
            </p>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            href="#"
            className="glass glass-hover px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2"
          >
            View All Projects
            <ExternalLink size={16} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass glass-hover flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-surface-bg border border-surface-border text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-accent-purple transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>

                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-surface-border mt-4 space-y-6">
                        <div>
                          <h4 className="text-sm font-bold text-accent-purple uppercase tracking-wider mb-2">Detailed Overview</h4>
                          <p className="text-text-secondary text-sm leading-relaxed">
                            {project.detailedDescription}
                          </p>
                        </div>
                        
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-bold text-accent-blue uppercase tracking-wider mb-3">Challenges</h4>
                            <ul className="space-y-2">
                              {project.challenges.map((challenge, i) => (
                                <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                                  <span className="mt-1.5 h-1 w-1 rounded-full bg-accent-blue shrink-0" />
                                  {challenge}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-accent-cyan uppercase tracking-wider mb-3">Solutions</h4>
                            <ul className="space-y-2">
                              {project.solutions.map((solution, i) => (
                                <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                                  <span className="mt-1.5 h-1 w-1 rounded-full bg-accent-cyan shrink-0" />
                                  {solution}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="mt-8 pt-6 border-t border-surface-border flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm font-bold text-text-primary hover:text-accent-purple transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-sm font-bold text-text-primary hover:text-accent-purple transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live
                    </a>
                  </div>

                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {expandedId === project.id ? (
                      <>
                        Less <ChevronUp size={14} />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown size={14} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
