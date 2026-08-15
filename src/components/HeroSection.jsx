import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MessageSquare, FileText } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Typewriter = ({ text, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay }}
      className="inline-block uppercase tracking-widest text-sm text-white font-medium drop-shadow-md"
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, display: 'none' }}
          animate={{ opacity: 1, display: 'inline' }}
          transition={{
            duration: 0.1,
            delay: delay + index * 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const HeroSection = () => {
  const videoRef = useRef(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 20,
      },
    },
  };

  const skills = ["C/C++", "Arduino", "MATLAB/Simulink", "Python", "PLC Programming"];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-start overflow-hidden pt-20 snap-center bg-black">
      
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>
      
      {/* Dark gradient overlay to add depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0 pointer-events-none"></div>

      <div className="w-full px-6 md:px-12 lg:px-24 relative z-10 flex flex-col md:flex-row items-center justify-between pointer-events-none gap-8 md:gap-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start space-y-6 max-w-xl xl:max-w-2xl pointer-events-auto w-full md:w-3/5"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border glow-border glass-panel">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand)] animate-pulse shadow-[0_0_8px_var(--color-brand)]"></span>
            <span className="text-sm font-medium tracking-wider text-[var(--color-brand)] uppercase">OPEN TO WORK</span>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-[-0.5rem] md:mb-[-1rem]">
            <span className="text-xl md:text-2xl font-medium tracking-wide text-[var(--color-brand)]">Hi, I'm</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-black tracking-tighter leading-[1.05] uppercase drop-shadow-lg">
            <span className="text-[var(--color-brand)] drop-shadow-[0_0_15px_rgba(0,210,255,0.4)]">JAYA KRISHNA</span><br />
            <span className="text-white">JAMMU</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="h-6">
            <Typewriter text="ELECTRICAL ENGINEER • JUNIOR ROBOTICS ENGINEER" delay={1} />
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                window.dispatchEvent(new CustomEvent('navigateToSection', { detail: 5 }));
              }}
              className="inline-flex items-center justify-center space-x-2 px-8 py-3 md:py-4 rounded-full bg-black/50 border border-[var(--color-brand)]/50 text-white font-medium glow-btn overflow-hidden relative group backdrop-blur-md"
            >
              <span className="relative z-10 flex items-center tracking-widest text-xs md:text-sm uppercase">
                VIEW ACADEMIC PROJECT <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                // trigger index 7 for contact
                window.dispatchEvent(new CustomEvent('navigateToSection', { detail: 7 }));
              }}
              className="inline-flex items-center justify-center space-x-2 px-8 py-3 md:py-4 rounded-full bg-transparent border border-[var(--color-brand)]/50 text-white font-medium hover:bg-[var(--color-brand)]/10 transition-colors duration-300 backdrop-blur-md"
            >
              <span className="relative z-10 flex items-center tracking-widest text-xs md:text-sm uppercase">
                Contact Me <MessageSquare className="ml-2 w-4 h-4" />
              </span>
            </button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-4">
            <a 
              href="/resume.docx" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center space-x-2 px-8 py-3 md:py-4 rounded-full bg-[#0088ff] hover:bg-[#00a2ff] text-[#001122] font-bold transition-all duration-300 shadow-[0_0_20px_rgba(0,180,255,0.4)] hover:shadow-[0_0_30px_rgba(0,180,255,0.6)]"
            >
              <span className="flex items-center tracking-wide text-sm md:text-base uppercase">
                View Resume <FileText className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Avatar/Image Section (Right Side) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, type: 'spring' }}
          className="hidden md:flex flex-col items-center justify-center pointer-events-auto w-full md:w-1/2 pr-4 lg:pr-12"
        >
           <div className="relative w-full max-w-[550px] lg:max-w-[650px] h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border-2 border-[var(--color-brand)]/60 shadow-[0_0_60px_rgba(0,210,255,0.2)] bg-black/40 backdrop-blur-md flex items-center justify-center group">
              {/* Subtle pulsing background behind the avatar */}
              <div className="absolute inset-0 bg-[var(--color-brand)]/5 animate-pulse pointer-events-none"></div>
              
              <img 
                src="/avatar.png" 
                alt="Avatar"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-[1.02]"
              />
              
              {/* Inner shadow/gradient for depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none"></div>
              
              {/* Sleek bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#02060d] to-transparent pointer-events-none"></div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
