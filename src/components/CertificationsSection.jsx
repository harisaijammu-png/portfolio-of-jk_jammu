import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Factory, LineChart, Cpu, Sun, X, Code, Zap } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "Introduction to IoT",
    provider: "IIT Kharagpur (NPTEL)",
    badge: "IOT",
    icon: <Wifi className="w-6 h-6 text-[#00d2ff]" />,
    image: "/certs/iot-cert.pdf"
  },
  {
    id: 3,
    title: "Electrical Systems using MATLAB",
    provider: "Workshop",
    badge: "MATLAB",
    icon: <LineChart className="w-6 h-6 text-[#00d2ff]" />,
    image: "/certs/matlab-cert.pdf"
  },
  {
    id: 5,
    title: "Designing of Solar PV Systems",
    provider: "Workshop",
    badge: "SOLAR PV",
    icon: <Sun className="w-6 h-6 text-[#00d2ff]" />,
    image: "/certs/solar_pv_systems.pdf"
  },
  {
    id: 6,
    title: "Internship on Embedded Systems",
    provider: "Internship",
    badge: "EMBEDDED",
    icon: <Cpu className="w-6 h-6 text-[#00d2ff]" />,
    image: "/certs/Embedded-Systems.pdf"
  },
  {
    id: 7,
    title: "Python Certification",
    provider: "Certification",
    badge: "PYTHON",
    icon: <Code className="w-6 h-6 text-[#00d2ff]" />,
    image: "/certs/python-cert.pdf"
  },
  {
    id: 8,
    title: "Internship on Electric Vehicles",
    provider: "Internship",
    badge: "EV",
    icon: <Zap className="w-6 h-6 text-[#00d2ff]" />,
    image: "/certs/electric-vechicles.pdf"
  },
  {
    id: 2,
    title: "Industrial Automation (PLC)",
    provider: "SV Technologies, 2024",
    badge: "AUTOMATION",
    icon: <Factory className="w-6 h-6 text-[#00d2ff]" />,
    image: "/certs/industrial-automation.pdf"
  }
];

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="relative min-h-screen flex items-center justify-center py-4 md:py-8 overflow-hidden snap-center bg-transparent">
      


      <div className="w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center h-full translate-y-8 md:translate-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="glass-panel px-6 md:px-8 pb-4 md:pb-6 pt-4 rounded-3xl relative group border-[var(--color-card-border)] bg-black/40 shadow-[inset_0_0_20px_rgba(0,210,255,0.05)]">
            
            {/* Header Layout */}
            <div className="flex justify-between items-end mb-4 border-b border-white/5 pb-3">
              <div className="px-6 py-2 rounded-full border border-[var(--color-brand)]/50 bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-xs md:text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_var(--color-brand-glow)]">
                CERTIFICATIONS
              </div>
            </div>

            <div className="mb-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                Certifications & Workshops
              </h2>
              <p className="text-[#8b9bb4] max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
                Structured learning in IoT, industrial automation, MATLAB, PLC programming, and solar PV systems.
              </p>
            </div>

            <div className="w-full relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 justify-center items-stretch">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedCert(cert)}
                className="glass-panel p-5 md:p-8 rounded-2xl border border-[var(--color-brand)]/20 bg-[#050a14]/80 hover:bg-[#081020]/90 transition-all duration-300 cursor-pointer group hover:shadow-[0_0_40px_rgba(0,210,255,0.2)] hover:border-[var(--color-brand)]/50 flex flex-col relative overflow-hidden"
              >
                {/* Subtle gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d2ff]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[#001829] border border-[#00d2ff]/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.15)] group-hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all duration-300 group-hover:scale-110 origin-top-left">
                    {cert.icon}
                  </div>
                  <span className="inline-block px-4 py-1.5 text-[10px] md:text-xs font-bold tracking-widest text-[#00d2ff] border border-[#00d2ff]/40 rounded-full uppercase bg-[#00d2ff]/10">
                    {cert.badge}
                  </span>
                </div>
                
                <div className="relative z-10 flex-grow flex flex-col justify-end">
                  <h3 className="text-white font-extrabold text-lg md:text-xl mb-2 leading-tight group-hover:text-[var(--color-brand)] transition-colors">
                    {cert.title}
                  </h3>
                  
                  <p className="text-[#8b9bb4] font-medium text-xs md:text-sm leading-relaxed">
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b101a] border border-[var(--color-brand)]/30 rounded-2xl overflow-hidden max-w-[90vw] w-full h-[90vh] flex flex-col relative shadow-[0_0_50px_rgba(0,210,255,0.15)]"
            >
              <div className="flex justify-between items-center p-4 border-b border-white/10 bg-[#060a12]">
                <h3 className="text-white font-bold text-lg">{selectedCert.title}</h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-2 md:p-6 flex-grow overflow-hidden flex items-center justify-center bg-[#020408]">
                {/* PDF container */}
                <div className="relative w-full h-full bg-[#0d1422] rounded-lg border border-white/5 flex items-center justify-center overflow-hidden">
                  <object 
                    data={`${selectedCert.image}#view=Fit`} 
                    type="application/pdf"
                    className="w-full h-full relative z-10"
                  >
                    {/* Fallback placeholder text if PDF fails to load */}
                    <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 text-[#4a5f75]">
                      <div className="w-16 h-16 rounded-full bg-[#1a2b3c] flex items-center justify-center">
                        {selectedCert.icon}
                      </div>
                      <p className="text-sm font-medium tracking-wide">Certificate PDF (Placeholder)</p>
                      <p className="text-xs opacity-60 text-center px-4">
                        Could not load PDF.<br/>
                        Make sure you added <strong className="text-white">{selectedCert.image.split('/').pop()}</strong> to the <strong className="text-white">public/certs</strong> folder.
                      </p>
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
