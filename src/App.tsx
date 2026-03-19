import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Background from "./components/Background";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen selection:bg-accent-purple/30 selection:text-text-primary">
      <Background />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        
        <footer className="py-12 border-t border-white/5 text-center">
          <div className="container mx-auto px-6">
            <p className="text-text-secondary text-sm">
              © {new Date().getFullYear()} John Doe. Built with React, Tailwind & Motion.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
