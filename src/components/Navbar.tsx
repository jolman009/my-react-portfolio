import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Linkedin, Twitter, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`glass flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 ${
            isScrolled ? "bg-glass-bg/80" : "bg-transparent border-transparent shadow-none"
          }`}
        >
          <a href="#" className="text-2xl font-display font-bold text-gradient">
            JD.
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="h-4 w-px bg-surface-border mx-2" />
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl glass glass-hover text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl glass glass-hover text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="text-text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-6 md:hidden"
          >
            <div className="glass rounded-2xl p-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-6 pt-4 border-t border-surface-border">
                <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
