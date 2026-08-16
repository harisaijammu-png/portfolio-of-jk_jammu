import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Users, Cpu, Wifi, Wrench, UserPlus, FileText } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative h-full w-full flex items-center justify-center py-12 md:py-16 overflow-hidden snap-center bg-transparent">

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
                EXPERIENCE
              </div>
            </div>

            {/* Content Layout */}
            <div className="pt-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 md:mb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-100 mb-3">Junior Robotics Engineer</h3>
                  <div className="flex items-center space-x-2 text-sky-400 mb-3 font-medium text-lg">
                    <Briefcase className="w-5 h-5" />
                    <span>Koding Caravan</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400 text-sm md:text-base">
                    <MapPin className="w-4 h-4" />
                    <span>Singarayakonda, India</span>
                    <span className="italic ml-2 text-slate-500">First junior hire, under Senior Robotics Engineer</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-5 py-2 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-200 text-sm font-medium">
                    Sep 2025 – Mar 2026
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {[
                  { icon: <Users className="w-4 h-4 text-sky-400" />, text: "Worked under a Senior Robotics Engineer to help establish the company's robotics development capability from the ground up." },
                  { icon: <Cpu className="w-4 h-4 text-sky-400" />, text: "Designed and built Arduino-based prototypes in C/C++, taking systems from concept through to validated hardware." },
                  { icon: <Wifi className="w-4 h-4 text-sky-400" />, text: "Integrated sensors (ultrasonic, IR, IMU) and actuators via I2C/UART for real-time automation applications." },
                  { icon: <Wrench className="w-4 h-4 text-sky-400" />, text: "Diagnosed hardware faults and software bugs under time pressure, improving system reliability, reducing downtime." },
                  { icon: <UserPlus className="w-4 h-4 text-sky-400" />, text: "Collaborated with founders to translate requirements into working prototypes within tight deadlines." },
                  { icon: <FileText className="w-4 h-4 text-sky-400" />, text: "Authored technical documentation, wiring schematics, and test reports to support ongoing product development." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start space-x-4 md:space-x-5"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mt-1">
                      {item.icon}
                    </div>
                    <div className="text-slate-300 text-sm md:text-base font-light leading-relaxed md:leading-loose pt-1">
                      {item.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Experience Letter Button */}
              <div className="mt-10 flex justify-center md:justify-start">
                <a 
                  href="/certs/Exp_Letter.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-200 text-xs font-bold tracking-widest uppercase transition-colors duration-300 group shadow-sm hover:shadow-md"
                >
                  <FileText className="w-4 h-4" />
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
