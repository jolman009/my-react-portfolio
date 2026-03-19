import { motion } from "motion/react";
import { Code2, Palette, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 glass rounded-3xl p-8 lg:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-accent-purple/20 blur-[80px]" />
              
              <h2 className="text-4xl font-display font-bold mb-8">
                Crafting Digital <span className="text-gradient">Experiences</span>
              </h2>
              
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                I'm a passionate Full Stack Developer with over 5 years of experience
                building modern web applications. I love turning complex problems
                into simple, beautiful, and intuitive designs.
              </p>
              
              <p className="text-lg text-text-secondary mb-12 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through technical writing.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-display font-bold text-text-primary mb-2">50+</div>
                  <div className="text-sm text-text-secondary uppercase tracking-widest">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-text-primary mb-2">5+</div>
                  <div className="text-sm text-text-secondary uppercase tracking-widest">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 glass rounded-2xl -z-10 rotate-12" />
          </motion.div>

          <div className="grid gap-8">
            {[
              {
                icon: <Code2 className="text-accent-purple" size={32} />,
                title: "Clean Code",
                desc: "I write maintainable, scalable, and efficient code following industry best practices.",
              },
              {
                icon: <Palette className="text-accent-blue" size={32} />,
                title: "Modern Design",
                desc: "Focusing on aesthetics and usability to create engaging user interfaces.",
              },
              {
                icon: <Rocket className="text-accent-cyan" size={32} />,
                title: "Performance",
                desc: "Optimizing every line of code for the fastest possible load times and smooth interactions.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass glass-hover p-8 rounded-2xl flex gap-6 items-start"
              >
                <div className="p-4 rounded-xl bg-surface-bg border border-surface-border">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2 text-text-primary">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
