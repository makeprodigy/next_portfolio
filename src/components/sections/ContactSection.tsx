'use client';

import { useState } from 'react';
import AnimatedContent from '@/components/ui/AnimatedContent';
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaLink, FaArrowRight, FaCheck } from 'react-icons/fa';
import { socialLinks } from '@/config/social';

const getIcon = (label: string) => {
  switch (label.toLowerCase()) {
    case 'github': return FaGithub;
    case 'linkedin': return FaLinkedin;
    case 'twitter': return FaTwitter;
    case 'email': return FaEnvelope;
    default: return FaLink;
  }
};

export default function ContactSection() {
  const emailLink = socialLinks.find(s => s.label.toLowerCase() === 'email')?.href || 'mailto:payneparihar13@gmail.com';
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Sharp grid background lines instead of a blurred orb */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
      
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-20">
        <AnimatedContent
          distance={40}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          threshold={0.1}
          delay={0.1}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-start">
            
            {/* Left Column: Heading and Info */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className={cn(typography.sectionTitle, 'mb-8 text-left')}>GET IN TOUCH</h2>
                <p className={cn(typography.body, 'max-w-md text-neutral-400 mb-12')}>
                  Ready to collaborate or have an inquiry? Fill out the form or reach out via my social profiles. I typically respond within 24 hours.
                </p>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-6">
                  {socialLinks.filter(link => link.label.toLowerCase() !== 'twitter').map((link) => {
                    const Icon = getIcon(link.label);
                    return (
                      <a
                        key={link.label}
                        href={link.label.toLowerCase() === 'email' ? emailLink : link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-white transition-colors duration-300"
                        aria-label={link.label}
                      >
                        <Icon className="w-7 h-7" />
                      </a>
                    );
                  })}
                </div>
                
                <p className="text-xs text-neutral-600 uppercase tracking-widest mt-8 lg:mt-auto">
                  Designed & Built by Pushpendra
                </p>
              </div>
            </div>

            {/* Right Column: Sharp Form */}
            <div className="bg-zinc-950 border border-white/10 p-8 md:p-12 shadow-2xl relative">
              {/* Sharp corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/40" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/40" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/40" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/40" />

              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Name Input */}
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Name"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer rounded-none [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_30px_#09090b_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:white]"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-white uppercase tracking-widest cursor-text"
                    >
                      Name
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer rounded-none [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_30px_#09090b_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:white]"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-white uppercase tracking-widest cursor-text"
                    >
                      Email
                    </label>
                  </div>
                </div>
                
                {/* Message Input */}
                <div className="relative group mt-2">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer resize-none rounded-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 -top-5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-white uppercase tracking-widest cursor-text"
                  >
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={cn(
                    "mt-4 inline-flex items-center justify-between w-full px-6 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 border rounded-none group",
                    status === 'idle' ? "bg-transparent text-white border-white/30 hover:bg-white hover:text-black" : "",
                    status === 'loading' ? "bg-transparent border-neutral-600 text-neutral-500 cursor-not-allowed" : "",
                    status === 'success' ? "bg-white text-black border-white" : "",
                    status === 'error' ? "bg-transparent border-red-500 text-red-500 hover:bg-red-500 hover:text-white" : ""
                  )}
                >
                  <span className="flex-1 text-left">
                    {status === 'idle' && "Send Message"}
                    {status === 'loading' && "Sending..."}
                    {status === 'success' && "Message Sent"}
                    {status === 'error' && "Failed. Try Again"}
                  </span>
                  
                  <span className="flex items-center justify-center w-6 h-6">
                    {status === 'idle' && <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />}
                    {status === 'loading' && <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />}
                    {status === 'success' && <FaCheck />}
                  </span>
                </button>
              </form>
            </div>
            
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
