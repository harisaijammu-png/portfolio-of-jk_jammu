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
          className="max-w-7xl mx-auto w-full px-2 md:px-0"
        >
          <div className="bg-slate-900/40 backdrop-blur-lg border border-white/10 p-5 md:p-6 rounded-3xl relative group shadow-2xl">
            
            {/* Header Layout */}
            <div className="flex justify-between items-end mb-4 border-b border-white/5 pb-3">
              <div className="px-6 py-2 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-300 text-sm md:text-base font-bold tracking-widest uppercase shadow-sm">
                EXPERIENCE
              </div>
            </div>

            {/* Content Layout */}
            <div className="pt-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 md:mb-4">
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
                    25 March 2025 – 24 March 2026
                  </span>
                </div>
              </div>

              <div className="mt-3 space-y-3">
                {[
                  { icon: <Users className="w-4 h-4 text-sky-400" />, text: "Collaborated with senior leadership to establish the company's foundational robotics capabilities from the ground up, accelerating initial product timelines by [X] months." },
                  { icon: <Cpu className="w-4 h-4 text-sky-400" />, text: "Engineered functional Arduino-based prototypes in C/C++, translating founder requirements into [Number] validated hardware systems delivered under tight deadlines." },
                  { icon: <Wifi className="w-4 h-4 text-sky-400" />, text: "Developed real-time automation solutions by integrating ultrasonic, IR, and IMU sensors with actuators via I2C/UART, achieving a [X]% increase in system accuracy." },
                  { icon: <Wrench className="w-4 h-4 text-sky-400" />, text: "Resolved complex hardware faults and software bugs under strict time pressure, improving prototype reliability and reducing system downtime by [X]%." },
                  { icon: <FileText className="w-4 h-4 text-sky-400" />, text: "Standardized development workflows by authoring comprehensive technical documentation, wiring schematics, and test reports to streamline knowledge transfer." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start space-x-4 md:space-x-5 py-1"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mt-1">
                      {item.icon}
                    </div>
                    <div className="text-slate-300 text-[13px] md:text-[15px] font-light leading-snug md:leading-relaxed pt-1.5">
                      {item.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Experience Letter Button */}
              <div className="mt-4 flex justify-center md:justify-start">
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
