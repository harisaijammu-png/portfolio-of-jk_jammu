import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, ChevronDown, Zap, Lightbulb, Settings, Leaf, Target, Search } from 'lucide-react';
import evProjectImg from '../assets/ev_project.jpg';

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative h-full w-full flex items-center justify-center py-12 md:py-16 overflow-hidden snap-center bg-transparent">

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
            <div className="flex justify-between items-end mb-8 md:mb-10 border-b border-white/5 pb-4 md:pb-6">
              <div className="px-6 py-2 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-300 text-sm md:text-base font-bold tracking-widest uppercase shadow-sm">
                ACADEMIC PROJECT
              </div>
            </div>

            <div className="flex flex-col lg:flex-row bg-slate-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 shadow-sm w-full relative group/card">
              {/* Left side Image & Overlays */}
              <div className="lg:w-1/2 relative min-h-[250px] lg:min-h-[350px] flex flex-col justify-center overflow-hidden bg-[var(--color-bg-deep)] border-r border-white/5">
                {/* Featured Badge */}
                <div className="absolute top-5 left-5 z-30 bg-sky-500/20 border border-sky-500/30 text-sky-200 text-[9px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 uppercase backdrop-blur-md">
                  <Zap size={11} className="text-sky-400" /> Featured
                </div>
                
                {/* The Image */}
                <img src={evProjectImg} className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 mix-blend-screen scale-105 group-hover/card:scale-110 transition-transform duration-700" alt="EV Chassis Design" />
                
                {/* Complex Gradients for blending */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-deep)]/90 via-transparent to-[var(--color-bg-deep)]/40 pointer-events-none z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-deep)]/90 via-[var(--color-bg-deep)]/20 to-[var(--color-bg-deep)]/40 pointer-events-none z-10" />
                
                {/* Top Text Overlays */}
                <div className="absolute top-6 left-28 z-20 opacity-90">
                  <h4 className="text-slate-200 text-sm md:text-base font-bold tracking-wider mb-0.5">ELECTRIC VEHICLE DESIGN</h4>
                  <p className="text-slate-400 text-[7px] tracking-[0.3em]">SUSTAINABLE • EFFICIENT • FUTURISTIC</p>
                </div>
                
                <div className="absolute top-6 right-5 z-20 opacity-80 text-right">
                  <h4 className="text-slate-300 text-sm md:text-base font-bold tracking-wider mb-0.5">BATTERY</h4>
                  <p className="text-slate-400 text-[7px] tracking-[0.3em]">SYSTEM</p>
                </div>

                {/* Left side vertical text labels */}
                <div className="absolute left-5 top-1/3 z-20 flex flex-col gap-4 opacity-50">
                  <div className="text-[7px] text-slate-300 tracking-widest uppercase">Power<br/>Electronics</div>
                  <div className="text-[7px] text-slate-300 tracking-widest uppercase">Motor<br/>Control</div>
                  <div className="text-[7px] text-slate-300 tracking-widest uppercase">Aerodynamics</div>
                </div>
                
                {/* Bottom Text Overlays */}
                <div className="absolute bottom-5 left-0 right-0 z-20 px-6 flex flex-col items-center">
                  <div className="flex items-center gap-4 text-[8px] text-slate-400 font-medium tracking-widest uppercase mb-2">
                    <div className="flex items-center gap-1.5"><Lightbulb size={10} className="text-slate-500" /> INNOVATION</div>
                    <div className="w-[1px] h-2 bg-slate-700"></div>
                    <div className="flex items-center gap-1.5"><Settings size={10} className="text-slate-500" /> ENGINEERING</div>
                    <div className="w-[1px] h-2 bg-slate-700"></div>
                    <div className="flex items-center gap-1.5"><Leaf size={10} className="text-slate-500" /> SUSTAINABILITY</div>
                    <div className="w-[1px] h-2 bg-slate-700"></div>
                    <div className="flex items-center gap-1.5"><Target size={10} className="text-slate-500" /> IMPACT</div>
                  </div>
                  <div className="text-[8px] text-slate-500 tracking-[0.2em] uppercase font-bold">
                    Designing Intelligent Systems For A Better Tomorrow
                  </div>
                </div>
              </div>

              {/* Right side content */}
              <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center bg-white/5 relative z-20">
                <h3 className="text-[22px] lg:text-[26px] font-bold text-slate-100 mb-4 leading-snug">
                  Integrated Charging System for EV Power & Auxiliary Batteries Using Dual Active Bridge Converter
                </h3>
                
                <p className="text-slate-400 mb-6 text-[14px] leading-relaxed pr-2">
                  Designed an intelligent DC-DC DAB converter control system to efficiently charge and manage both traction and auxiliary EV batteries.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["DC-DC Converter", "Dual Active Bridge (DAB)", "EV Battery Management", "Power Electronics", "Control Systems"].map(tag => (
                    <span key={tag} className="text-[11px] md:text-[12px] text-sky-200 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2.5 bg-slate-900/50 border border-white/5 rounded-lg p-3 mb-6">
                  <CheckCircle className="text-sky-400 w-[14px] h-[14px] flex-shrink-0" />
                  <span className="text-[12px] text-slate-200">Published - DOI: <a href="https://doi.org/10.64771/jsetms.2025.v02.i10.pp42-53" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 hover:underline transition-colors">10.64771/jsetms.2025.v02.i10.pp42-53</a></span>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <a 
                    href="https://www.google.com/search?q=Integrated+Charging+System+for+EV+Power+and+Auxiliary+Batteries+Using+Dual+Active+Bridge+Converter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:bg-sky-500/20 hover:text-sky-100 hover:border-sky-500/30 transition-all text-[12px] md:text-[13px] font-medium shadow-sm"
                  >
                    Read More <Search size={14} className="opacity-70" />
                  </a>
                  
                  <a href="https://doi.org/10.64771/jsetms.2025.v02.i10.pp42-53" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white transition-colors text-[12px] md:text-[13px] font-bold shadow-sm">
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
