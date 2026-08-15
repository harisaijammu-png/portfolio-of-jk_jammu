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
    <section id="contact" className="relative h-full flex flex-col items-center justify-center pt-8 pb-12 overflow-hidden snap-center bg-transparent">
      {/* Background Number */}
      <div className="absolute right-[-2%] md:right-[4%] top-[35%] md:top-[40%] text-[20vh] md:text-[28vh] font-black text-white/[0.1] select-none pointer-events-none tracking-tighter z-0">
        07
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full translate-y-8 md:translate-y-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto lg:mr-auto lg:ml-12 w-full"
        >
          <div className="glass-panel px-5 md:px-8 pb-5 md:pb-8 pt-4 md:pt-5 rounded-3xl relative group border-[var(--color-card-border)] bg-black/40 shadow-[inset_0_0_20px_rgba(0,210,255,0.05)] flex flex-col">
            
            {/* Header Layout */}
            <div className="flex justify-between items-end mb-4 md:mb-5 border-b border-white/5 pb-3 md:pb-4">
              <div className="px-8 py-3 rounded-full border border-[var(--color-brand)]/50 bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-sm md:text-lg font-bold tracking-widest uppercase shadow-[0_0_15px_var(--color-brand-glow)]">
                CONTACT DETAILS
              </div>
            </div>

            {/* Sub Header Text */}
            <div className="mb-6 text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Let's Build Something Together</h2>
              <p className="text-[#8b9bb4] text-[13px] md:text-[15px] max-w-2xl leading-relaxed">
                Open to working student roles and part-time opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              
              {/* Left Column (Info) */}
              <div className="bg-[#0a111a]/80 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-[var(--color-brand)] shadow-[0_5px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-6">Contact Info</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-[#111827] border border-white/10 flex items-center justify-center group-hover:border-[var(--color-brand)] group-hover:shadow-[0_0_15px_var(--color-brand-glow)] transition-all duration-300 flex-shrink-0">
                        <Mail size={16} className="text-[var(--color-brand)]" />
                      </div>
                      <span className="text-base text-gray-300 break-all">jammujayakrishna789@gmail.com</span>
                    </div>
                    
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-[#111827] border border-white/10 flex items-center justify-center group-hover:border-[var(--color-brand)] group-hover:shadow-[0_0_15px_var(--color-brand-glow)] transition-all duration-300 flex-shrink-0">
                        <Phone size={16} className="text-[var(--color-brand)]" />
                      </div>
                      <span className="text-base text-gray-300">+49 155 1105 1412</span>
                    </div>
                    
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-[#111827] border border-white/10 flex items-center justify-center group-hover:border-[var(--color-brand)] group-hover:shadow-[0_0_15px_var(--color-brand-glow)] transition-all duration-300 flex-shrink-0">
                        <MapPin size={16} className="text-[var(--color-brand)]" />
                      </div>
                      <span className="text-base text-gray-300">Erlangen, Germany</span>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-3 mt-10 pt-6 border-t border-white/5">
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
                      className="w-10 h-10 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[var(--color-brand)] hover:border-[var(--color-brand)] hover:shadow-[0_0_15px_var(--color-brand-glow)] transition-all duration-300"
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column (Form) */}
              <div className="bg-[#0a111a]/80 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-[var(--color-brand)] shadow-[0_5px_20px_rgba(0,0,0,0.3)]">
                <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] text-gray-200 font-medium ml-1 tracking-wide uppercase">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-[#111827] border border-white/10 rounded-xl px-3 py-2 text-[12px] text-white focus:outline-none focus:border-[var(--color-brand)] focus:shadow-[0_0_15px_var(--color-brand-glow)] transition-all placeholder:text-gray-600"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] text-gray-200 font-medium ml-1 tracking-wide uppercase">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full bg-[#111827] border border-white/10 rounded-xl px-3 py-2 text-[12px] text-white focus:outline-none focus:border-[var(--color-brand)] focus:shadow-[0_0_15px_var(--color-brand-glow)] transition-all placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] text-gray-200 font-medium ml-1 tracking-wide uppercase">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full bg-[#111827] border border-white/10 rounded-xl px-3 py-2 text-[12px] text-white focus:outline-none focus:border-[var(--color-brand)] focus:shadow-[0_0_15px_var(--color-brand-glow)] transition-all placeholder:text-gray-600"
                    />
                  </div>

                  <div className="space-y-1 flex-grow">
                    <label className="text-[11px] text-gray-200 font-medium ml-1 tracking-wide uppercase">Message</label>
                    <textarea 
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity or project..."
                      className="w-full h-16 md:h-20 bg-[#111827] border border-white/10 rounded-xl px-3 py-2 text-[12px] text-white focus:outline-none focus:border-[var(--color-brand)] focus:shadow-[0_0_15px_var(--color-brand-glow)] transition-all resize-none placeholder:text-gray-600"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00b4ff] to-[#0088ff] text-[#001122] font-bold text-[13px] py-3 rounded-xl shadow-[0_0_20px_rgba(0,180,255,0.4)] hover:shadow-[0_0_30px_rgba(0,180,255,0.6)] transition-all duration-300 mt-2"
                  >
                    <Send size={14} /> Send Message
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
