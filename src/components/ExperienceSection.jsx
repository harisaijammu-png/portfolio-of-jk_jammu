import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Users, Cpu, Wifi, Wrench, UserPlus, FileText } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative min-h-screen flex items-center justify-center py-4 md:py-6 overflow-hidden snap-center bg-transparent">


      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full translate-y-8 md:translate-y-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto w-full"
        >
          <div className="glass-panel px-6 md:px-8 pb-5 pt-4 rounded-3xl relative group border-[var(--color-card-border)] bg-black/40 shadow-[inset_0_0_20px_rgba(0,210,255,0.05)]">
            
            {/* Header Layout */}
            <div className="flex justify-between items-end mb-3 border-b border-white/5 pb-3">
              <div className="px-6 py-2 rounded-full border border-[var(--color-brand)]/50 bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-xs md:text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_var(--color-brand-glow)]">
                EXPERIENCE
              </div>
            </div>

            {/* Content Layout */}
            <div className="pt-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Junior Robotics Engineer</h3>
                  <div className="flex items-center space-x-2 text-[var(--color-brand)] mb-2 font-medium text-lg">
                    <Briefcase className="w-5 h-5" />
                    <span>Koding Caravan</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-base md:text-lg">
                    <MapPin className="w-4 h-4" />
                    <span>Singarayakonda, India</span>
                    <span className="italic ml-2">First junior hire, under Senior Robotics Engineer</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-5 py-2 rounded-full border border-[var(--color-brand)]/30 bg-[var(--color-brand)]/5 text-[var(--color-brand)] text-base font-medium">
                    Sep 2025 – Mar 2026
                  </span>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  { icon: <Users className="w-4 h-4 text-[var(--color-brand)]" />, text: "Worked under a Senior Robotics Engineer to help establish the company's robotics development capability from the ground up." },
                  { icon: <Cpu className="w-4 h-4 text-[var(--color-brand)]" />, text: "Designed and built Arduino-based prototypes in C/C++, taking systems from concept through to validated hardware." },
                  { icon: <Wifi className="w-4 h-4 text-[var(--color-brand)]" />, text: "Integrated sensors (ultrasonic, IR, IMU) and actuators via I2C/UART for real-time automation applications." },
                  { icon: <Wrench className="w-4 h-4 text-[var(--color-brand)]" />, text: "Diagnosed hardware faults and software bugs under time pressure, improving system reliability, reducing downtime." },
                  { icon: <UserPlus className="w-4 h-4 text-[var(--color-brand)]" />, text: "Collaborated with founders to translate requirements into working prototypes within tight deadlines." },
                  { icon: <FileText className="w-4 h-4 text-[var(--color-brand)]" />, text: "Authored technical documentation, wiring schematics, and test reports to support ongoing product development." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#070b13] border border-[var(--color-brand)]/20 flex items-center justify-center shadow-[0_0_10px_var(--color-brand-glow)] mt-1">
                      {item.icon}
                    </div>
                    <div className="text-gray-200 text-sm md:text-base font-medium leading-relaxed pt-1">
                      {item.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Experience Letter Button */}
              <div className="mt-6 flex justify-center md:justify-start">
                <a 
                  href="/certs/Exp_Letter.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-2 rounded-full border border-[var(--color-brand)]/50 bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-xs font-bold tracking-widest uppercase hover:bg-[var(--color-brand)] hover:text-[#02060d] transition-all duration-300 shadow-[0_0_15px_var(--color-brand-glow)] group"
                >
                  <FileText className="w-4 h-4 group-hover:text-[#02060d]" />
                  <span>Tap to view experience letter</span>
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
