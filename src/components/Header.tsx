import React, { useState } from "react";
import { Terminal, Mail, Linkedin, FileText, Github, Instagram } from "lucide-react";
import { motion } from "motion/react";

export default function Header() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("anthoorveettilakshaybabu@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="header-nav" className="sticky top-0 z-50 w-full border-b border-[#1e1135] bg-[#05020c]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3.5"
        >
          <div className="flex flex-col">
            <span className="font-signature text-3xl font-medium text-white hover:text-[#a855f7] transition-colors tracking-wide select-none cursor-pointer">
              Akshay
            </span>
            <div className="flex items-center space-x-1.5 -mt-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ff9d]/70 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00ff9d]"></span>
              </span>
              <span className="font-mono text-[9px] text-slate-400 tracking-widest">TEST_CORE: IDLE</span>
            </div>
          </div>
        </motion.div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          {[
            { id: "hero", label: "Home" },
            { id: "competencies", label: "Expertise" },
            { id: "experience", label: "Experience" },
            { id: "automation-lab", label: "Lab / Playground" },
            { id: "education", label: "Credentials" },
            { id: "contact", label: "Connect" }
          ].map((item) => (
            <button
              id={`nav-link-${item.id}`}
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative py-1 transition-colors hover:text-[#00ff9d] cursor-pointer font-mono text-[11px] tracking-wider uppercase group"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#00ff9d] to-[#00f0ff] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Quick Contact & Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3"
        >
          <button
            id="copy-email-header-btn"
            onClick={copyEmail}
            className="flex items-center space-x-1.5 rounded-lg border border-[#1e1135] bg-[#0c0817]/50 px-3 py-1.5 font-mono text-[11px] text-slate-300 transition-all hover:border-[#a855f7]/30 hover:bg-[#a855f7]/5 hover:text-[#00ff9d]"
          >
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{copied ? "Copied!" : "Copy Email"}</span>
          </button>
          
          <a
            id="linkedin-link-header"
            href="https://linkedin.com/in/anthoorveettilakshaybabu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#1e1135] bg-[#0c0817]/50 text-slate-300 transition-all hover:border-[#a855f7]/30 hover:bg-[#a855f7]/5 hover:text-[#00f0ff]"
            title="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <a
            id="github-link-header"
            href="https://github.com/akshaybabu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#1e1135] bg-[#0c0817]/50 text-slate-300 transition-all hover:border-[#a855f7]/30 hover:bg-[#a855f7]/5 hover:text-[#00f0ff]"
            title="GitHub Profile"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            id="instagram-link-header"
            href="https://www.instagram.com/achu_1215/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#1a233d] bg-[#0d1222]/50 text-slate-300 transition-all hover:border-[#00f0ff]/30 hover:bg-[#00f0ff]/5 hover:text-[#00f0ff]"
            title="Instagram Profile"
          >
            <Instagram className="h-4 w-4" />
          </a>

          <a
            id="resume-link-header"
            href="https://drive.google.com/file/d/1wyWM8hlNsG4lhiX19TCa3U2Dx_47Cdkd/view?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center space-x-1.5 rounded-lg border border-[#00ff9d]/30 bg-[#00ff9d]/5 px-3 py-1.5 font-mono text-[11px] text-[#00ff9d] transition-all hover:border-[#00ff9d]/60 hover:bg-[#00ff9d]/10"
            title="View Resume"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
          </a>

          <button
            id="contact-btn-header"
            onClick={() => scrollToSection("contact")}
            className="hidden lg:flex items-center space-x-1.5 rounded-lg bg-gradient-to-r from-[#00ff9d] to-[#00f0ff] px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-[#00ff9d]/10 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Get In Touch</span>
          </button>
        </motion.div>
      </div>
    </header>
  );
}
