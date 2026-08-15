import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: "MSc Electrical Engineering",
    institution: "Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU)",
    duration: "Apr 2026 – Present",
    location: "Erlangen, Germany"
  },
  {
    degree: "B.Tech – Electrical & Electronics Eng.",
    institution: "Rise Krishna Sai Prakasam Group of Institutions (JNTUK)",
    duration: "Nov 2021 – Apr 2025",
    location: "Ongole, India"
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "Board of Intermediate Education, Andhra Pradesh",
    duration: "Jun 2019 – Apr 2021",
    location: "Singarayakonda, India"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="relative min-h-screen flex items-center justify-center py-12 md:py-16 overflow-hidden snap-center bg-transparent">
      {/* Background Number */}
      <div className="absolute right-[-2%] md:right-[4%] top-[35%] md:top-[40%] text-[25vh] md:text-[32vh] font-black text-white/[0.1] select-none pointer-events-none tracking-tighter z-0">
        03
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full translate-y-8 md:translate-y-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto lg:mr-auto lg:ml-8 w-full"
        >
          <div className="glass-panel px-6 md:px-8 pb-6 md:pb-8 pt-4 md:pt-5 rounded-3xl relative group border-[var(--color-card-border)] bg-black/40 shadow-[inset_0_0_20px_rgba(0,210,255,0.05)]">
            
            {/* Header Layout */}
            <div className="flex justify-between items-end mb-4 md:mb-5 border-b border-white/5 pb-3 md:pb-4">
              <div className="px-8 py-3 rounded-full border border-[var(--color-brand)]/50 bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-sm md:text-lg font-bold tracking-widest uppercase shadow-[0_0_15px_var(--color-brand-glow)]">
                EDUCATION
              </div>
            </div>

            <div className="relative pl-6 md:pl-12">
              {/* Vertical Timeline Line */}
              <div className="absolute left-[12px] md:left-[23px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[var(--color-brand)] via-[var(--color-brand)]/40 to-transparent shadow-[0_0_10px_var(--color-brand-glow)]"></div>

              <div className="space-y-4 md:space-y-5">
                {educationData.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="relative flex items-center group"
                  >
                    {/* Timeline Icon */}
                    <div className="absolute -left-[36px] md:-left-[47px] w-10 h-10 md:w-12 md:h-12 bg-[#070b13] rounded-xl border border-[var(--color-brand)]/40 flex items-center justify-center shadow-[0_0_15px_var(--color-brand-glow)] z-10 group-hover:border-[var(--color-brand)] group-hover:shadow-[0_0_25px_var(--color-brand)] transition-all duration-300">
                      <GraduationCap className="text-[var(--color-brand)] w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Content Card */}
                    <div className="w-full bg-[#0a111a]/90 backdrop-blur-md rounded-xl p-5 md:p-6 border border-white/5 group-hover:border-[var(--color-brand)]/30 transition-all duration-300 shadow-md">
                       <h3 className="text-[16px] md:text-[20px] font-bold text-white mb-1">{edu.degree}</h3>
                       <h4 className="text-[var(--color-brand)] text-[13px] md:text-[15px] font-medium mb-3">{edu.institution}</h4>
                       
                       <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-[11px] md:text-[13px] text-[#8b9bb4]">
                         <div className="flex items-center gap-1.5">
                           <Calendar size={14} className="opacity-70" />
                           {edu.duration}
                         </div>
                         <div className="flex items-center gap-1.5">
                           <MapPin size={14} className="opacity-70" />
                           {edu.location}
                         </div>
                       </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
