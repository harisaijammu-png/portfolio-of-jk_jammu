import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  { title: "Languages & Programming", skills: ["C/C++", "Python", "MATLAB", "Embedded C"] },
  { title: "Hardware & Embedded", skills: ["Arduino", "PLC", "Sensors (Ultrasonic, IR, IMU)"] },
  { title: "Core Competencies", skills: ["Robotics & Automation", "Electronics & Circuit Design", "Hardware Testing"] },
  { title: "Tools & Methodologies", skills: ["Simulink", "Data Acquisition", "I2C/UART Integration", "Troubleshooting"] }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden snap-center">


      <div className="container mx-auto px-6 md:px-12 relative z-10 translate-y-8 md:translate-y-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto w-full"
        >
          <div className="glass-panel px-8 md:px-12 pb-6 md:pb-8 pt-4 md:pt-5 rounded-3xl relative group border-[var(--color-card-border)] bg-black/40 shadow-[inset_0_0_20px_rgba(0,210,255,0.05)]">
            {/* Header Layout */}
            <div className="flex justify-between items-end mb-4 md:mb-5 border-b border-white/5 pb-3 md:pb-4">
              <div className="px-8 py-3 rounded-full border border-[var(--color-brand)]/50 bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-sm md:text-lg font-bold tracking-widest uppercase shadow-[0_0_15px_var(--color-brand-glow)]">
                TECHNICAL SKILLS
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-12 mt-4">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="space-y-5">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-200 tracking-wide uppercase border-l-2 border-[var(--color-brand)] pl-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-4 py-2 text-sm font-bold tracking-widest border border-white/10 rounded-full text-gray-400 bg-white/5 hover:text-[var(--color-brand)] hover:border-[var(--color-brand)] hover:bg-[var(--color-brand)]/5 transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
