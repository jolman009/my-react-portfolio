import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import type { Project } from "../types";
import ProjectModal from "./ProjectModal";

// Fade-in-up entrance animation variants for project cards as they scroll into view
const fadeInUpCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      delay: (index % 2) * 0.15,
    },
  }),
};

const projects: Project[] = [
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            href="#contact"
            className="glass glass-hover px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2"
          >
            Request Custom Project
            <ExternalLink size={16} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={fadeInUpCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className="group relative overflow-hidden rounded-3xl glass glass-hover flex flex-col cursor-pointer transition-all hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-accent-purple/50"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold glass text-white flex items-center gap-1.5 backdrop-blur-md">
                    View Details
                    <ArrowUpRight size={14} />
                  </span>
                </div>
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
                
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-accent-purple transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent-purple shrink-0" />
                </h3>
                
                <p className="text-text-secondary mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-surface-border flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-sm font-bold text-text-primary hover:text-accent-purple transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-sm font-bold text-text-primary hover:text-accent-purple transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live
                    </a>
                  </div>

                  <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent-purple group-hover:translate-x-1 transition-transform">
                    View Details
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
