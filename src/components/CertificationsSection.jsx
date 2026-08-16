import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Factory, LineChart, Cpu, Sun, X, Code, Zap } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "Introduction to IoT",
    provider: "IIT Kharagpur (NPTEL)",
    badge: "IOT",
    icon: <Wifi className="w-6 h-6 text-sky-400 group-hover:text-sky-300 transition-colors" />,
    image: "/certs/iot-cert.pdf"
  },
  {
    id: 3,
    title: "Electrical Systems using MATLAB",
    provider: "Workshop",
    badge: "MATLAB",
    icon: <LineChart className="w-6 h-6 text-sky-400 group-hover:text-sky-300 transition-colors" />,
    image: "/certs/matlab-cert.pdf"
  },
  {
    id: 5,
    title: "Designing of Solar PV Systems",
    provider: "Workshop",
    badge: "SOLAR PV",
    icon: <Sun className="w-6 h-6 text-sky-400 group-hover:text-sky-300 transition-colors" />,
    image: "/certs/solar_pv_systems.pdf"
  },
  {
    id: 6,
    title: "Internship on Embedded Systems",
    provider: "Internship",
    badge: "EMBEDDED",
    icon: <Cpu className="w-6 h-6 text-sky-400 group-hover:text-sky-300 transition-colors" />,
    image: "/certs/Embedded-Systems.pdf"
  },
  {
    id: 7,
    title: "Python Certification",
    provider: "Certification",
    badge: "PYTHON",
    icon: <Code className="w-6 h-6 text-sky-400 group-hover:text-sky-300 transition-colors" />,
    image: "/certs/python-cert.pdf"
  },
  {
    id: 8,
    title: "Internship on Electric Vehicles",
    provider: "Internship",
    badge: "EV",
    icon: <Zap className="w-6 h-6 text-sky-400 group-hover:text-sky-300 transition-colors" />,
    image: "/certs/electric-vechicles.pdf"
  },
  {
    id: 2,
    title: "Industrial Automation (PLC)",
    provider: "SV Technologies, 2024",
    badge: "AUTOMATION",
    icon: <Factory className="w-6 h-6 text-sky-400 group-hover:text-sky-300 transition-colors" />,
    image: "/certs/industrial-automation.pdf"
  }
];

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="relative h-full w-full flex items-center justify-center py-12 md:py-16 overflow-hidden snap-center bg-transparent">

      <div className="w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center h-full translate-y-8 md:translate-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto w-full"
        >
          <div className="bg-slate-900/40 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-3xl relative group shadow-2xl">
            
            {/* Header Layout */}
            <div className="flex justify-between items-end mb-8 border-b border-white/5 pb-4 md:pb-6">
              <div className="px-6 py-2 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-300 text-sm md:text-base font-bold tracking-widest uppercase shadow-sm">
                CERTIFICATIONS
              </div>
            </div>

            <div className="mb-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-100 mb-2">
                Certifications & Workshops
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
                Structured learning in IoT, industrial automation, MATLAB, PLC programming, and solar PV systems.
              </p>
            </div>

            <div className="w-full relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 justify-center items-start">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedCert(cert)}
                className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:border-sky-500/30 hover:bg-white/10 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md flex flex-col relative overflow-hidden"
              >
                {/* Subtle gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/5 border border-sky-500/20 flex items-center justify-center transition-all">
                    {cert.icon}
                  </div>
                  <span className="inline-block px-3 py-1 text-[9px] md:text-[10px] font-bold tracking-widest text-sky-200 border border-sky-500/20 rounded-full uppercase bg-sky-500/10 shadow-sm">
                    {cert.badge}
                  </span>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-slate-100 font-bold text-sm md:text-base mb-1.5 leading-tight group-hover:text-sky-300 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <p className="text-slate-400 text-xs md:text-sm leading-snug">
                    {cert.provider}
                  </p>
                </div>
              </motion.div>
            ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-md p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-sky-500/20 rounded-2xl overflow-hidden max-w-[90vw] w-full h-[90vh] flex flex-col relative shadow-2xl"
            >
              <div className="flex justify-between items-center p-5 border-b border-white/5 bg-slate-800/50">
                <h3 className="text-slate-100 font-bold text-lg">{selectedCert.title}</h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-slate-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-4 md:p-6 flex-grow overflow-hidden flex items-center justify-center bg-[var(--color-bg-deep)]">
                {/* PDF container */}
                <div className="relative w-full h-full bg-slate-900 rounded-xl border border-white/5 flex items-center justify-center overflow-hidden shadow-inner">
                  <object 
                    data={`${selectedCert.image}#view=Fit`} 
                    type="application/pdf"
                    className="w-full h-full relative z-10 rounded-xl"
                  >
                    {/* Fallback placeholder text if PDF fails to load */}
                    <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 text-slate-400">
                      <div className="w-16 h-16 rounded-full bg-sky-500/10 flex items-center justify-center">
                        {selectedCert.icon}
                      </div>
                      <p className="text-sm font-medium tracking-wide">Certificate PDF (Placeholder)</p>
                    </div>
                  </object>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsSection;
