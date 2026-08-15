import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden snap-center">
      {/* Background Number */}
      <div className="absolute right-[-2%] md:right-[4%] top-[35%] md:top-[40%] text-[15vh] md:text-[22vh] font-black text-white/[0.1] select-none pointer-events-none tracking-tighter z-0">
        01
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 translate-y-8 md:translate-y-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto lg:mr-auto lg:ml-8 w-full"
        >


          <div className="glass-panel px-8 md:px-12 pb-8 md:pb-12 pt-5 md:pt-6 rounded-3xl relative group border-[var(--color-card-border)] bg-black/40 shadow-[inset_0_0_20px_rgba(0,210,255,0.05)]">
            {/* Header Layout */}
            <div className="flex justify-between items-end mb-6 md:mb-8 border-b border-white/5 pb-3 md:pb-4">
              <div className="px-8 py-3 rounded-full border border-[var(--color-brand)]/50 bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-sm md:text-lg font-bold tracking-widest uppercase shadow-[0_0_15px_var(--color-brand-glow)]">
                ABOUT
              </div>
            </div>

            <div className="space-y-8 text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              <p>
                I am an MSc Electrical Engineering student at FAU Erlangen-Nürnberg with hands-on industry experience working as a Junior Robotics Engineer.
              </p>
              <p>
                My expertise spans the full development cycle, including programming in embedded C/C++, sensor and actuator integration, technical documentation, and hardware validation.
              </p>
              <p>
                I adapt quickly to new tools in fast-paced environments and am actively seeking a working student or part-time role focused on embedded systems, robotics, or industrial automation.
              </p>
            </div>
            
            {/* Key Tags */}
            <div className="mt-12 flex flex-wrap gap-4">
              {['EMBEDDED SYSTEMS', 'ROBOTICS & AUTOMATION', 'CIRCUIT DESIGN', 'HARDWARE VALIDATION'].map((tag, idx) => (
                <span key={idx} className="px-5 py-2 text-sm font-bold tracking-widest border border-gray-600 rounded-full text-gray-400 hover:text-[var(--color-brand)] hover:border-[var(--color-brand)] transition-colors duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
