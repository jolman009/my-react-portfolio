import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-lg text-text-secondary mb-12 leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to
              discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-8 mb-16">
              {[
                { icon: <Mail className="text-accent-purple" />, label: "Email", value: "hello@johndoe.com" },
                { icon: <Phone className="text-accent-blue" />, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: <MapPin className="text-accent-cyan" />, label: "Location", value: "San Francisco, CA" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6 group">
                  <div className="p-4 rounded-xl glass glass-hover group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-lg font-medium text-text-primary">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              {[
                { icon: <Github />, href: "#" },
                { icon: <Linkedin />, href: "#" },
                { icon: <Twitter />, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-4 rounded-xl glass glass-hover hover:text-accent-purple transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-secondary ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl bg-surface-bg border border-surface-border text-text-primary focus:outline-none focus:border-accent-purple transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-secondary ml-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl bg-surface-bg border border-surface-border text-text-primary focus:outline-none focus:border-accent-purple transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-text-secondary ml-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl bg-surface-bg border border-surface-border text-text-primary focus:outline-none focus:border-accent-purple transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 ${
                  isSubmitted
                    ? "bg-emerald-500 text-white"
                    : "bg-text-primary text-bg-primary hover:scale-[1.02] active:scale-[0.98]"
                }`}
              >
                {isSubmitting ? (
                  <div className="h-5 w-5 border-2 border-bg-primary/20 border-t-bg-primary rounded-full animate-spin" />
                ) : isSubmitted ? (
                  "Message Sent Successfully!"
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
