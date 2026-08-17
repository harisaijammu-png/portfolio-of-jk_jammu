import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="relative h-full w-full flex items-center justify-center py-24 overflow-hidden snap-center bg-transparent">

      <div className="container mx-auto px-6 md:px-12 relative z-10 translate-y-8 md:translate-y-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto w-full"
        >
          <div className="bg-slate-900/40 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-3xl relative group shadow-2xl">
            {/* Header Layout */}
            <div className="flex justify-between items-end mb-8 md:mb-10 border-b border-white/5 pb-4 md:pb-6">
              <div className="px-6 py-2 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-300 text-sm md:text-base font-bold tracking-widest uppercase shadow-sm">
                ABOUT
              </div>
            </div>

            <div className="space-y-8 text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed md:leading-[1.7] font-light text-left">
              <p>
                MSc Electromobility student at FAU Erlangen-Nürnberg with hands-on industry experience as the first Junior Robotics Engineer at Koding Caravan, working across the full development cycle — embedded C/C++, sensor and actuator integration, hardware validation, and technical documentation. Adapts quickly to new tools and fast-paced environments. Seeking a working student position in embedded systems, robotics, or automation.
              </p>
            </div>
            
            {/* Key Tags */}
            <div className="mt-12 flex flex-wrap gap-3">
              {['EMBEDDED SYSTEMS', 'ROBOTICS & AUTOMATION', 'CIRCUIT DESIGN', 'HARDWARE VALIDATION'].map((tag, idx) => (
                <span key={idx} className="px-4 py-2 text-xs md:text-sm font-medium tracking-wide bg-sky-500/10 text-sky-200 border border-sky-500/20 rounded-full hover:bg-sky-500/20 hover:border-sky-500/40 transition-colors duration-300">
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
