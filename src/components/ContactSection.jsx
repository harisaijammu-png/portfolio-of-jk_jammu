import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, Link, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:jammujayakrishna789@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative h-full w-full flex flex-col items-center justify-center py-12 md:py-24 overflow-hidden snap-center bg-transparent">

      <div className="w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center h-full translate-y-8 md:translate-y-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto w-full"
        >
          <div className="bg-slate-900/40 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-3xl relative group flex flex-col shadow-2xl">
            
            {/* Header Layout */}
            <div className="flex justify-between items-end mb-6 border-b border-white/5 pb-4">
              <div className="px-6 py-2 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-300 text-sm md:text-base font-bold tracking-widest uppercase shadow-sm">
                CONTACT DETAILS
              </div>
            </div>

            {/* Sub Header Text */}
            <div className="mb-6 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 tracking-tight">Let's Build Something Together</h2>
              <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
                Open to working student roles and part-time opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              
              {/* Left Column (Info) */}
              <div className="bg-white/5 rounded-2xl p-5 md:p-6 border border-white/5 shadow-sm flex flex-col justify-between backdrop-blur-sm">
                <div>
                  <h3 className="text-lg font-bold text-slate-100 mb-6">Contact Info</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group/item">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover/item:border-sky-500/40 group-hover/item:bg-sky-500/20 transition-all duration-300 flex-shrink-0 shadow-sm">
                        <Mail size={16} className="text-sky-300" />
                      </div>
                      <span className="text-sm md:text-base text-slate-300 break-all">jammujayakrishna789@gmail.com</span>
                    </div>
                    
                    <div className="flex items-center gap-4 group/item">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover/item:border-sky-500/40 group-hover/item:bg-sky-500/20 transition-all duration-300 flex-shrink-0 shadow-sm">
                        <Phone size={16} className="text-sky-300" />
                      </div>
                      <span className="text-sm md:text-base text-slate-300">+49 155 1105 1412</span>
                    </div>
                    
                    <div className="flex items-center gap-4 group/item">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover/item:border-sky-500/40 group-hover/item:bg-sky-500/20 transition-all duration-300 flex-shrink-0 shadow-sm">
                        <MapPin size={16} className="text-sky-300" />
                      </div>
                      <span className="text-sm md:text-base text-slate-300">Erlangen, Germany</span>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/5">
                  {[
                    { icon: ExternalLink, link: "#" },
                    { icon: Link, link: "#" },
                    { icon: Mail, link: "mailto:jammujayakrishna789@gmail.com" },
                    { icon: Phone, link: "tel:+4915511051412" }
                  ].map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.link}
                      target={social.link.startsWith('http') ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-900/50 border border-white/5 flex items-center justify-center text-slate-400 hover:text-sky-200 hover:border-sky-500/30 hover:bg-sky-500/10 transition-all duration-300 shadow-sm"
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column (Form) */}
              <div className="bg-white/5 rounded-2xl p-5 md:p-6 border border-white/5 shadow-sm backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] text-sky-200/60 font-medium ml-1 tracking-wide uppercase">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-3 py-2.5 text-xs md:text-sm text-slate-200 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all placeholder:text-slate-600"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] text-sky-200/60 font-medium ml-1 tracking-wide uppercase">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-3 py-2.5 text-xs md:text-sm text-slate-200 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] text-sky-200/60 font-medium ml-1 tracking-wide uppercase">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-3 py-2.5 text-xs md:text-sm text-slate-200 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all placeholder:text-slate-600"
                    />
                  </div>

                  <div className="space-y-1.5 flex-grow">
                    <label className="text-[11px] text-sky-200/60 font-medium ml-1 tracking-wide uppercase">Message</label>
                    <textarea 
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity or project..."
                      className="w-full h-16 md:h-20 bg-slate-950/50 border border-white/5 rounded-xl px-3 py-2.5 text-xs md:text-sm text-slate-200 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all resize-none placeholder:text-slate-600"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 font-bold text-sm py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white transition-all duration-300 mt-4 shadow-sm"
                  >
                    <Send size={16} /> Send Message
                  </button>
                </form>
              </div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
