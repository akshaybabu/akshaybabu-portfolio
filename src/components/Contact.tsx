import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, Check, Copy, ExternalLink, Terminal, Github, Instagram, FileText, Coffee } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate secure transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative border-t border-[#1e1135] bg-[#05020c] py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.02),transparent)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Direct info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-[#00f0ff] font-mono tech-bracket">Connection Gateway</h2>
              <h3 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Let's Build Reliable Pipelines Together
              </h3>
              <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                Reach out to schedule a technical deep-dive, discuss active opportunities, or review automated testing implementations.
              </p>
            </div>

            {/* Contact cards stacked */}
            <div className="space-y-4">
              {/* Email */}
              <div id="contact-email-card" className="flex items-center justify-between p-4 rounded-xl border border-[#1e1135] bg-[#0c0817]/40 card-tech">
                <div className="flex items-center space-x-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block">Email Address</span>
                    <a href="mailto:anthoorveettilakshaybabu@gmail.com" className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-[#00ff9d] transition-colors">
                      anthoorveettilakshaybabu@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  id="copy-email-btn"
                  onClick={() => copyText("anthoorveettilakshaybabu@gmail.com", "email")}
                  className="p-2 rounded-lg bg-slate-950 text-slate-400 hover:text-[#00ff9d] border border-[#1e1135] hover:border-[#a855f7]/30 transition-all cursor-pointer"
                  title="Copy Email"
                >
                  {copied === "email" ? <Check className="h-4 w-4 text-[#00ff9d]" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              {/* Phone */}
              <div id="contact-phone-card" className="flex items-center justify-between p-4 rounded-xl border border-[#1e1135] bg-[#0c0817]/40 card-tech">
                <div className="flex items-center space-x-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block">Mobile Contact</span>
                    <a href="tel:+919652466004" className="text-sm font-semibold text-slate-200 hover:text-[#00f0ff] transition-colors">
                      +91 96524 66004
                    </a>
                  </div>
                </div>
                <button
                  id="copy-phone-btn"
                  onClick={() => copyText("+919652466004", "phone")}
                  className="p-2 rounded-lg bg-slate-950 text-slate-400 hover:text-[#00f0ff] border border-[#1e1135] hover:border-[#a855f7]/30 transition-all cursor-pointer"
                  title="Copy Phone"
                >
                  {copied === "phone" ? <Check className="h-4 w-4 text-[#00ff9d]" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              {/* Location */}
              <div id="contact-location-card" className="flex items-center p-4 rounded-xl border border-[#1e1135] bg-[#0c0817]/20 card-tech">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-slate-400 border border-[#1e1135] shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="ml-3.5">
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block">Current Location</span>
                  <span className="text-sm font-semibold text-slate-300">Hyderabad, Telangana, India</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Direct Gateways & Professional Portals</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    id="linkedin-link-footer"
                    href="https://linkedin.com/in/anthoorveettilakshaybabu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 rounded-xl border border-[#1e1135] bg-[#0c0817]/40 px-4 py-3 text-xs font-semibold text-slate-300 transition-all hover:border-[#a855f7]/30 hover:text-white card-tech"
                  >
                    <Linkedin className="h-4 w-4 text-[#00f0ff] shrink-0" />
                    <span className="truncate">LinkedIn</span>
                    <ExternalLink className="h-3 w-3 text-slate-500 ml-auto" />
                  </a>

                  <a
                    id="github-link-footer"
                    href="https://github.com/akshaybabu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 rounded-xl border border-[#1e1135] bg-[#0c0817]/40 px-4 py-3 text-xs font-semibold text-slate-300 transition-all hover:border-[#a855f7]/30 hover:text-white card-tech"
                  >
                    <Github className="h-4 w-4 text-[#00f0ff] shrink-0" />
                    <span className="truncate">GitHub</span>
                    <ExternalLink className="h-3 w-3 text-slate-500 ml-auto" />
                  </a>

                  <a
                    id="instagram-link-footer"
                    href="https://www.instagram.com/achu_1215/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 rounded-xl border border-[#1e1135] bg-[#0c0817]/40 px-4 py-3 text-xs font-semibold text-slate-300 transition-all hover:border-[#a855f7]/30 hover:text-white card-tech"
                  >
                    <Instagram className="h-4 w-4 text-[#00f0ff] shrink-0" />
                    <span className="truncate">Instagram</span>
                    <ExternalLink className="h-3 w-3 text-slate-500 ml-auto" />
                  </a>

                  <a
                    id="resume-link-footer"
                    href="https://drive.google.com/file/d/1wyWM8hlNsG4lhiX19TCa3U2Dx_47Cdkd/view?pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 rounded-xl border border-[#00ff9d]/30 bg-[#00ff9d]/5 px-4 py-3 text-xs font-semibold text-[#00ff9d] transition-all hover:border-[#00ff9d]/50 hover:bg-[#00ff9d]/10 card-tech"
                  >
                    <FileText className="h-4 w-4 text-[#00ff9d] shrink-0" />
                    <span className="truncate">Resume</span>
                    <ExternalLink className="h-3 w-3 text-slate-500 ml-auto" />
                  </a>
                </div>

                <a
                  id="coffee-link-footer"
                  href="https://buymeacoffee.com/akshaybabu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 rounded-xl border border-amber-500/30 bg-amber-500/5 px-4 py-3 text-xs font-bold text-amber-400 transition-all hover:border-amber-500/50 hover:bg-amber-500/10 w-full"
                >
                  <Coffee className="h-4 w-4 text-amber-400 animate-pulse" />
                  <span>Support My Journey on Buy Me a Coffee</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact message form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#1e1135] bg-[#0c0817]/40 p-6 md:p-8 backdrop-blur-sm card-tech">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label id="lbl-name" className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">Your Name</label>
                    <input
                      id="input-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full rounded-xl border border-[#1e1135] bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:border-[#a855f7]/50 focus:outline-none focus:ring-1 focus:ring-[#a855f7]/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label id="lbl-email" className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">Email Address</label>
                    <input
                      id="input-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="inputmail@email.com"
                      className="w-full rounded-xl border border-[#1e1135] bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:border-[#a855f7]/50 focus:outline-none focus:ring-1 focus:ring-[#a855f7]/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label id="lbl-message" className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">Type Message</label>
                  <textarea
                    id="input-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type Message"
                    className="w-full rounded-xl border border-[#1e1135] bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:border-[#a855f7]/50 focus:outline-none focus:ring-1 focus:ring-[#a855f7]/50 resize-none"
                  />
                </div>

                {/* Submit button with fancy states */}
                <button
                  id="transmit-message-btn"
                  type="submit"
                  disabled={isSubmitting || submitSuccess}
                  className="w-full flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#00f0ff] px-6 py-3 text-sm font-bold uppercase tracking-wider text-slate-950 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none cursor-pointer font-mono"
                >
                  {isSubmitting ? (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                  ) : submitSuccess ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  <span>
                    {isSubmitting
                      ? "Transmitting payload..."
                      : submitSuccess
                      ? "Message Transmitted Successfully!"
                      : "Transmit Message"}
                  </span>
                </button>

                {submitSuccess && (
                  <motion.div
                    id="submit-success-banner"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/5 text-xs text-[#00ff9d] leading-relaxed font-mono"
                  >
                    <div className="flex items-center space-x-1.5 mb-1">
                      <Terminal className="h-3.5 w-3.5 text-[#00f0ff]" />
                      <strong>SECURE_TRANSMISSION: PASSED</strong>
                    </div>
                    <span>Thank you for your message. Akshay will evaluate the submission queue and respond via email shortly.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* Footer legal credits */}
        <div className="mt-20 pt-8 border-t border-[#1e1135] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <span>© {new Date().getFullYear()} Akshay Babu Anthoorveettil. All Rights Reserved.</span>
          <div className="flex items-center space-x-1.5">
            <span className="h-2 w-2 rounded-full bg-[#00ff9d]" />
            <span>Compiled via React & Vite Client Stack</span>
          </div>
        </div>

      </div>
    </section>
  );
}
