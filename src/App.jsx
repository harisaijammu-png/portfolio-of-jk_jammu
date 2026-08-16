import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';

const sections = [
  { id: 'hero', label: 'Home', component: <HeroSection /> },
  { id: 'about', label: 'About', component: <AboutSection /> },
  { id: 'skills', label: 'Skills', component: <SkillsSection /> },
  { id: 'education', label: 'Education', component: <EducationSection /> },
  { id: 'experience', label: 'Experience', component: <ExperienceSection /> },
  { id: 'projects', label: 'Projects', component: <ProjectsSection /> },
  { id: 'certifications', label: 'Certifications', component: <CertificationsSection /> },
  { id: 'contact', label: 'Contact', component: <ContactSection /> }
];

const Card3DWrapper = ({ index, activeIndex, children }) => {
  const isActive = index === activeIndex;
  const isPast = index < activeIndex;
  
  const variants = {
    active: {
      y: "0%",
      rotateX: 0,
      opacity: 1,
      zIndex: 10,
      pointerEvents: "auto",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
    past: {
      y: "-50%",
      rotateX: 90,
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
    future: {
      y: "50%",
      rotateX: -90,
      opacity: 0,
      zIndex: 20,
      pointerEvents: "none",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  let state = "future";
  if (isActive) state = "active";
  else if (isPast) state = "past";

  return (
    <motion.div
      variants={variants}
      initial="future"
      animate={state}
      className="absolute inset-0 w-full h-full transform-gpu"
      style={{ transformStyle: 'preserve-3d', transformOrigin: 'center center' }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);

  const handleNext = useCallback(() => {
    if (activeIndex < sections.length - 1) {
      setActiveIndex(prev => prev + 1);
    }
  }, [activeIndex]);

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
  }, [activeIndex]);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling.current) return;

      if (Math.abs(e.deltaY) > 20) {
        isScrolling.current = true;
        if (e.deltaY > 0) {
          handleNext();
        } else {
          handlePrev();
        }
        
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleNext, handlePrev]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isScrolling.current) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        isScrolling.current = true;
        handleNext();
        setTimeout(() => isScrolling.current = false, 1000);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        isScrolling.current = true;
        handlePrev();
        setTimeout(() => isScrolling.current = false, 1000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  useEffect(() => {
    const handleNavigate = (e) => {
      const targetIndex = e.detail;
      if (typeof targetIndex === 'number' && targetIndex >= 0 && targetIndex < sections.length) {
        setActiveIndex(targetIndex);
      }
    };
    window.addEventListener('navigateToSection', handleNavigate);
    return () => window.removeEventListener('navigateToSection', handleNavigate);
  }, []);

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.y < -threshold) {
      handleNext();
    } else if (info.offset.y > threshold) {
      handlePrev();
    }
  };

  return (
    <div className="fixed inset-0 bg-[var(--color-bg-deep)] text-white font-sans selection:bg-[var(--color-brand)]/30 selection:text-white overflow-hidden">
      
      <nav 
        className="fixed top-2 md:top-4 left-1/2 -translate-x-1/2 z-50 flex flex-row items-center gap-1 md:gap-2 bg-[#02060d]/80 backdrop-blur-xl px-3 py-2 md:px-4 md:py-3 rounded-full border border-white/10 max-w-[95vw] overflow-x-auto shadow-2xl"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `nav::-webkit-scrollbar { display: none; }`}} />
        {sections.map((section, idx) => (
          <button
            key={section.id}
            onClick={() => setActiveIndex(idx)}
            className={`relative px-4 py-1.5 md:px-6 md:py-2.5 rounded-full text-[11px] md:text-[14px] font-medium tracking-wide transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
              activeIndex === idx 
                ? 'text-[var(--color-brand)] bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/30 shadow-[0_0_15px_rgba(0,210,255,0.15)]' 
                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
            aria-label={`Go to ${section.label}`}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <motion.main 
        className="relative w-full h-full" 
        style={{ perspective: "1000px" }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
      >
        {sections.map((section, idx) => (
          <Card3DWrapper key={section.id} index={idx} activeIndex={activeIndex}>
            {section.component}
          </Card3DWrapper>
        ))}
      </motion.main>
      
      {activeIndex === sections.length - 1 && (
        <div className="fixed bottom-0 left-0 w-full text-center text-slate-500 text-[10px] md:text-xs z-50 py-2.5 border-t border-white/5 bg-slate-950/80 backdrop-blur-md">
          <p>&copy; {new Date().getFullYear()} JAYAKRISHNA JAMMU. Built with React & Framer Motion.</p>
        </div>
      )}
    </div>
  );
}

export default App;
