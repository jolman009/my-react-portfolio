import { motion } from "motion/react";
import { Code, Database, Layout, Server, Settings, Smartphone } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: <Layout className="text-accent-purple" size={24} />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    title: "Backend Development",
    icon: <Server className="text-accent-blue" size={24} />,
    skills: ["Node.js", "Express", "Python", "Django", "Go", "GraphQL"],
  },
  {
    title: "Database & Storage",
    icon: <Database className="text-accent-cyan" size={24} />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Prisma", "Supabase"],
  },
  {
    title: "DevOps & Tools",
    icon: <Settings className="text-accent-purple" size={24} />,
    skills: ["Docker", "Kubernetes", "AWS", "Git", "CI/CD", "Vercel"],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="text-accent-blue" size={24} />,
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
  },
  {
    title: "Languages",
    icon: <Code className="text-accent-cyan" size={24} />,
    skills: ["JavaScript", "TypeScript", "Python", "Rust", "C++", "Java"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Technical <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            I use a modern and diverse set of tools to build high-quality
            applications that are both performant and scalable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass glass-hover p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-surface-bg border border-surface-border">
                  {group.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-text-primary">{group.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-surface-bg border border-surface-border text-sm text-text-secondary hover:text-text-primary hover:border-text-secondary/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
