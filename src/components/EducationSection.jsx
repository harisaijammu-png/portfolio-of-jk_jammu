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
    <section id="education" className="relative h-full w-full flex items-center justify-center py-12 md:py-16 overflow-hidden snap-center bg-transparent">

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full translate-y-8 md:translate-y-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto w-full"
        >
          <div className="bg-slate-900/40 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-3xl relative group shadow-2xl">
            
            {/* Header Layout */}
            <div className="flex justify-between items-end mb-8 md:mb-10 border-b border-white/5 pb-4 md:pb-6">
              <div className="px-6 py-2 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-300 text-sm md:text-base font-bold tracking-widest uppercase shadow-sm">
                EDUCATION
              </div>
            </div>

            <div className="relative pl-6 md:pl-12">
              {/* Vertical Timeline Line */}
              <div className="absolute left-[12px] md:left-[23px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-sky-500/50 to-transparent"></div>

              <div className="space-y-6 md:space-y-8">
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
                    <div className="absolute -left-[36px] md:-left-[47px] w-10 h-10 md:w-12 md:h-12 bg-sky-500/10 rounded-xl border border-sky-500/20 flex items-center justify-center z-10 group-hover:border-sky-500/40 group-hover:bg-sky-500/20 transition-all duration-300 shadow-md">
                      <GraduationCap className="text-sky-300 w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Content Card */}
                    <div className="w-full bg-white/5 rounded-xl p-6 border border-white/10 group-hover:border-sky-500/30 transition-all duration-300 shadow-sm backdrop-blur-sm">
                       <h3 className="text-[16px] md:text-[20px] font-bold text-slate-100 mb-1">{edu.degree}</h3>
                       <h4 className="text-sky-300/80 text-[13px] md:text-[15px] font-medium mb-4">{edu.institution}</h4>
                       
                       <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-[11px] md:text-[13px] text-slate-400">
                         <div className="flex items-center gap-2">
                           <Calendar size={14} className="opacity-70" />
                           {edu.duration}
                         </div>
                         <div className="flex items-center gap-2">
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
