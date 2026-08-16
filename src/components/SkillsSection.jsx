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
    <section id="skills" className="relative h-full w-full flex items-center justify-center py-24 overflow-hidden snap-center bg-transparent">

      <div className="container mx-auto px-6 md:px-12 relative z-10 translate-y-8 md:translate-y-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto w-full"
        >
          <div className="bg-slate-900/40 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-3xl relative group shadow-2xl">
            {/* Header Layout */}
            <div className="flex justify-between items-end mb-8 md:mb-10 border-b border-white/5 pb-4 md:pb-6">
              <div className="px-6 py-2 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-300 text-sm md:text-base font-bold tracking-widest uppercase shadow-sm">
                TECHNICAL SKILLS
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-12 mt-4">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="space-y-6">
                  <h3 className="text-lg md:text-xl font-bold text-slate-200 tracking-wide uppercase border-l-2 border-sky-500/50 pl-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-4 py-2 text-xs md:text-sm font-medium tracking-wide border border-sky-500/20 rounded-full text-sky-100 bg-sky-500/10 hover:bg-sky-500/20 hover:border-sky-500/40 transition-colors duration-300 cursor-default"
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
