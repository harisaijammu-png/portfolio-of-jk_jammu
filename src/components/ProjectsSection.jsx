import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, ChevronDown, Zap, Lightbulb, Settings, Leaf, Target, Search } from 'lucide-react';
import evProjectImg from '../assets/ev_project.jpg';

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center py-4 md:py-6 overflow-hidden snap-center bg-[#02060d]">
      {/* Background Number */}
      <div className="absolute right-[-2%] md:right-[4%] top-[35%] md:top-[40%] text-[25vh] md:text-[32vh] font-black text-white/[0.1] select-none pointer-events-none tracking-tighter z-0">
        05
      </div>

      <div className="w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center h-full translate-y-8 md:translate-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto lg:mr-auto lg:ml-12 w-full"
        >
          <div className="glass-panel px-6 md:px-8 pb-5 pt-4 rounded-3xl relative group border-[var(--color-card-border)] bg-black/40 shadow-[inset_0_0_20px_rgba(0,210,255,0.05)]">
            
            {/* Header Layout */}
            <div className="flex justify-between items-end mb-3 border-b border-white/5 pb-3">
              <div className="px-6 py-2 rounded-full border border-[var(--color-brand)]/50 bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-xs md:text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_var(--color-brand-glow)]">
                ACADEMIC PROJECT
              </div>
            </div>

            <div className="flex flex-col lg:flex-row bg-[#080d16] rounded-2xl overflow-hidden border border-[var(--color-brand)]/40 shadow-[0_0_50px_rgba(0,180,255,0.1)] w-full relative">
              {/* Left side Image & Overlays */}
              <div className="lg:w-1/2 relative min-h-[250px] lg:min-h-[350px] flex flex-col justify-center overflow-hidden bg-black border-r border-[#1a2b3c]">
            {/* Featured Badge */}
            <div className="absolute top-5 left-5 z-30 bg-[#00d2ff] text-black text-[9px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-[0_0_15px_rgba(0,210,255,0.5)] tracking-wide uppercase">
              <Zap size={11} className="fill-black" /> Featured
            </div>
            
            {/* The Image */}
            <img src={evProjectImg} className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 mix-blend-screen scale-105" alt="EV Chassis Design" />
            
            {/* Complex Gradients for blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-[#080d16] pointer-events-none z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none z-10" />
            
            {/* Top Text Overlays */}
            <div className="absolute top-6 left-28 z-20 opacity-80">
              <h4 className="text-white text-sm md:text-base font-bold tracking-wider mb-0.5">ELECTRIC VEHICLE DESIGN</h4>
              <p className="text-[#6b8299] text-[7px] tracking-[0.3em]">SUSTAINABLE • EFFICIENT • FUTURISTIC</p>
            </div>
            
            <div className="absolute top-6 right-5 z-20 opacity-60 text-right">
              <h4 className="text-[#00d2ff] text-sm md:text-base font-bold tracking-wider mb-0.5">BATTERY</h4>
              <p className="text-[#6b8299] text-[7px] tracking-[0.3em]">SYSTEM</p>
            </div>

            {/* Left side vertical text labels */}
            <div className="absolute left-5 top-1/3 z-20 flex flex-col gap-4 opacity-40">
              <div className="text-[7px] text-white tracking-widest uppercase">Power<br/>Electronics</div>
              <div className="text-[7px] text-white tracking-widest uppercase">Motor<br/>Control</div>
              <div className="text-[7px] text-white tracking-widest uppercase">Aerodynamics</div>
            </div>
            
            {/* Bottom Text Overlays */}
            <div className="absolute bottom-5 left-0 right-0 z-20 px-6 flex flex-col items-center">
              <div className="flex items-center gap-4 text-[8px] text-[#8b9bb4] font-medium tracking-widest uppercase mb-2">
                <div className="flex items-center gap-1.5"><Lightbulb size={10} className="text-white/40" /> INNOVATION</div>
                <div className="w-[1px] h-2 bg-white/20"></div>
                <div className="flex items-center gap-1.5"><Settings size={10} className="text-white/40" /> ENGINEERING</div>
                <div className="w-[1px] h-2 bg-white/20"></div>
                <div className="flex items-center gap-1.5"><Leaf size={10} className="text-white/40" /> SUSTAINABILITY</div>
                <div className="w-[1px] h-2 bg-white/20"></div>
                <div className="flex items-center gap-1.5"><Target size={10} className="text-white/40" /> IMPACT</div>
              </div>
              <div className="text-[8px] text-[#4a5f75] tracking-[0.2em] uppercase font-bold">
                Designing Intelligent Systems For A Better Tomorrow
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="lg:w-1/2 p-5 lg:p-8 flex flex-col justify-center bg-[#0b101a] relative z-20">
            <h3 className="text-[22px] lg:text-[26px] font-bold text-white mb-3 leading-snug">
              Integrated Charging System for EV Power & Auxiliary Batteries Using Dual Active Bridge Converter
            </h3>
            
            <p className="text-[#8b9bb4] mb-4 text-[14px] leading-relaxed pr-2">
              Designed an intelligent DC-DC DAB converter control system to efficiently charge and manage both traction and auxiliary EV batteries.
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {["DC-DC Converter", "Dual Active Bridge (DAB)", "EV Battery Management", "Power Electronics", "Control Systems"].map(tag => (
                <span key={tag} className="text-[11px] md:text-[12px] text-[#00b4d8] bg-transparent border border-[#1a364b] px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2.5 bg-[#0f1724] border border-[#1a2b3c] rounded-lg p-3 mb-4">
              <CheckCircle className="text-[#00d2ff] w-[14px] h-[14px] flex-shrink-0" />
              <span className="text-[12px] text-white">Published - DOI: <a href="https://doi.org/10.64771/jsetms.2025.v02.i10.pp42-53" target="_blank" rel="noopener noreferrer" className="text-[#00b4d8] hover:underline">10.64771/jsetms.2025.v02.i10.pp42-53</a></span>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-1">
              <a 
                href="https://www.google.com/search?q=Integrated+Charging+System+for+EV+Power+and+Auxiliary+Batteries+Using+Dual+Active+Bridge+Converter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#111827] border border-[#2a3b55] text-white hover:bg-[#1f2937] transition-colors text-[12px] md:text-[13px] font-medium"
              >
                Read More <Search size={14} className="text-gray-400" />
              </a>
              
              <a href="https://doi.org/10.64771/jsetms.2025.v02.i10.pp42-53" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#00b4ff] to-[#0088ff] text-[#001122] shadow-[0_0_20px_rgba(0,180,255,0.4)] hover:shadow-[0_0_30px_rgba(0,180,255,0.6)] transition-all text-[12px] md:text-[13px] font-bold">
                View Publication <ExternalLink size={14} />
              </a>
            </div>
          </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

