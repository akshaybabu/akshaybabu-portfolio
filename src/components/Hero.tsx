import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Github, Instagram, Linkedin, FileText, Coffee, Terminal, Shield, Play, Layers, CheckCircle2, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { professionalSummary } from "../data";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // State-driven Typewriter effect
  const words = ["Senior SDET", "Automation Architect", "Framework Specialist", "Quality Engineer"];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIdx];
    const typingSpeed = isDeleting ? 30 : 75;
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentWordIdx((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? currentWord.substring(0, displayedText.length - 1)
            : currentWord.substring(0, displayedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIdx]);

  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-36 bg-[#05020c]">
      {/* Decorative gradient backgrounds matching reference colors */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.1)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute top-1/3 left-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.06)_0%,transparent_70%)] blur-3xl" />
      
      {/* Visual background noise/grid overlay */}
      <div className="absolute inset-0 -z-20 h-full w-full tech-grid opacity-30" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Top Pill Greeting */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: -0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2.5 rounded-full border border-[#1e1135] bg-[#0c0817] px-4 py-1.5 text-xs font-medium text-slate-300 ring-1 ring-[#a855f7]/20"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#00f0ff] animate-pulse" />
            <span className="font-mono uppercase tracking-wider text-[10px]">
              ENGINEERING_PORTFOLIO: <span className="text-[#00ff9d]">ACTIVE</span>
            </span>
          </motion.div>

          {/* Reference Illustration & Custom Vector Block */}
          <div className="relative w-full max-w-lg mt-4 flex justify-center">
            {/* Hand-drawn styled label pointer on the top left */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-10 -left-6 md:-left-12 z-20 hidden sm:flex flex-col items-start"
            >
              <span className="font-handwriting text-lg text-[#00f0ff] -rotate-6 transform">
                Hello! I Am Akshay Babu
              </span>
              <svg className="w-14 h-14 text-[#00f0ff] -mt-1 ml-10 transform scale-x-[-1]" fill="none" viewBox="0 0 48 48">
                <path d="M4 4C12 12 20 28 32 32M32 32L24 32M32 32L32 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>

            {/* Glowing Spotlight Base */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-72 rounded-full bg-gradient-to-tr from-[#a855f7]/30 to-[#00f0ff]/20 blur-2xl animate-pulse" />

            {/* Interactive Coder Character Avatar Setup */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex flex-col items-center animate-float"
            >
              {/* Profile Illustration Circle with a simulated coder */}
              <div className="relative w-48 h-48 rounded-full border-2 border-[#1e1135] bg-gradient-to-b from-[#0c0817] to-[#120524] flex items-center justify-center overflow-hidden shadow-2xl shadow-[#a855f7]/10">
                
                {/* Simulated Coder Face / Silhouette using neat SVG */}
                <svg className="w-36 h-36 text-slate-300 mt-6" viewBox="0 0 100 100" fill="none">
                  {/* Backdrop lights */}
                  <circle cx="50" cy="40" r="25" fill="url(#coderGrad)" opacity="0.15" />
                  
                  {/* Hair */}
                  <path d="M25 45 C25 20, 75 20, 75 45 C75 48, 70 48, 68 45 C60 40, 40 40, 32 45 C30 48, 25 48, 25 45 Z" fill="#1e1b4b" />
                  <path d="M30 38 C35 30, 65 30, 70 38" stroke="#312e81" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Face */}
                  <path d="M32 45 C32 45, 32 68, 50 72 C68 68, 68 45, 68 45 Z" fill="#fbcfe8" opacity="0.9" />
                  
                  {/* Eyes */}
                  <circle cx="42" cy="50" r="2.5" fill="#0f172a" />
                  <circle cx="58" cy="50" r="2.5" fill="#0f172a" />
                  
                  {/* Eyebrows */}
                  <path d="M38 45 Q42 42 46 45" stroke="#1e1b4b" strokeWidth="2" strokeLinecap="round" />
                  <path d="M54 45 Q58 42 62 45" stroke="#1e1b4b" strokeWidth="2" strokeLinecap="round" />

                  {/* Smart Developer Glasses */}
                  <rect x="36" y="47" width="10" height="7" rx="2" stroke="#00f0ff" strokeWidth="2.5" fill="rgba(0, 240, 255, 0.1)" />
                  <rect x="54" y="47" width="10" height="7" rx="2" stroke="#00f0ff" strokeWidth="2.5" fill="rgba(0, 240, 255, 0.1)" />
                  <line x1="46" y1="50" x2="54" y2="50" stroke="#00f0ff" strokeWidth="2.5" />
                  
                  {/* Smile */}
                  <path d="M45 60 Q50 64 55 60" stroke="#1e1b4b" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Body / Shirt */}
                  <path d="M20 90 C20 75, 80 75, 80 90" fill="#2563eb" />
                  {/* Tech lanyard collar */}
                  <path d="M42 78 L50 86 L58 78" stroke="#00ff9d" strokeWidth="3" strokeLinecap="round" />

                  <defs>
                    <radialGradient id="coderGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#00f0ff" />
                    </radialGradient>
                  </defs>
                </svg>

                {/* Animated overlay of code characters passing behind */}
                <div className="absolute inset-0 bg-[radial-gradient(transparent_60%,#05020c_100%)] pointer-events-none" />
              </div>

              {/* Custom Overlapping Coder Laptop Chassis - matching reference exactly */}
              <div className="relative -mt-6 z-10 w-52 bg-gradient-to-b from-[#e2e8f0] to-[#94a3b8] rounded-t-lg p-1 shadow-2xl border-b border-[#cbd5e1]">
                {/* Laptop Screen Area showing dynamic code logs */}
                <div className="h-14 w-full bg-[#05020c] rounded border border-slate-950 flex flex-col items-start p-1.5 font-mono text-[6px] text-[#00ff9d] overflow-hidden leading-tight">
                  <div className="flex items-center space-x-1 border-b border-[#1e1135] pb-0.5 w-full mb-1 text-slate-500">
                    <span className="w-1 h-1 rounded-full bg-red-500" />
                    <span className="w-1 h-1 rounded-full bg-yellow-500" />
                    <span className="w-1 h-1 rounded-full bg-green-500" />
                    <span className="text-[5px] text-slate-400 font-semibold uppercase tracking-widest pl-1">TERMINAL: PLAYWRIGHT_CLIENT</span>
                  </div>
                  <div className="space-y-0.5 animate-code-scroll">
                    <p className="text-slate-400"># run pipeline...</p>
                    <p className="text-[#00f0ff]">&gt; npx playwright test</p>
                    <p>✔ search_flights.spec.ts (1.2s)</p>
                    <p className="text-[#a855f7]">⚡ [Auto-Healing] trigger recovery</p>
                    <p>✔ checkout_billing.spec.ts (2.8s)</p>
                    <p className="text-[#00ff9d]">🎉 ASSERTION_PASSED: 100% COVERAGE</p>
                    <p className="text-slate-400"># cooling down socket...</p>
                  </div>
                </div>
                
                {/* Glowing Apple-like branding dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/10 rounded-full blur-xs flex items-center justify-center border border-white/25">
                  <Terminal className="w-2.5 h-2.5 text-slate-200" />
                </div>
              </div>
              {/* Laptop Keyboard shadow */}
              <div className="h-1.5 w-56 bg-gradient-to-b from-slate-400 to-slate-600 rounded-b-xl border-t border-slate-300 shadow-lg" />
              <div className="h-1 w-44 bg-black/40 blur-xs rounded-full" />
            </motion.div>

            {/* Tech Nodes Floating around the coder */}
            {[
              { label: "Playwright", color: "from-[#a855f7] to-[#d946ef]", delay: 0.1, x: "-left-14 md:-left-24", y: "top-8" },
              { label: "TypeScript", color: "from-[#3178c6] to-[#00f0ff]", delay: 0.2, x: "right-0 md:-right-8", y: "top-14" },
              { label: "Selenium 4", color: "from-[#00ff9d] to-[#10b981]", delay: 0.3, x: "-left-12 md:-left-20", y: "bottom-10" },
              { label: "Appium iOS", color: "from-[#a855f7] to-[#6366f1]", delay: 0.4, x: "right-2 md:-right-6", y: "bottom-4" }
            ].map((node, nIdx) => (
              <motion.div
                key={nIdx}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: node.delay }}
                className={`absolute ${node.x} ${node.y} z-10`}
              >
                <div className={`px-2.5 py-1.5 rounded-xl bg-gradient-to-r ${node.color} text-slate-950 font-mono text-[9px] font-bold shadow-lg shadow-black/40 flex items-center space-x-1`}>
                  <CheckCircle2 className="w-3 h-3 text-slate-950" />
                  <span>{node.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Headline Typography Matching Reference Quote Form */}
          <div className="space-y-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#a855f7] font-mono text-xs tracking-widest uppercase"
            >
              &lt; Senior SDET &amp; Automation Architect /&gt;
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-2xl md:text-4xl font-extrabold text-slate-100 max-w-3xl mx-auto leading-snug tracking-tight"
            >
              An Automation Architect who{" "}
              <span className="text-white relative inline-block mx-1">
                judges code
                <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-[#a855f7] opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,9 100,5" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </span>{" "}
              by its{" "}
              <span className="text-[#00ff9d] bg-[#00ff9d]/10 px-3.5 py-1.5 rounded-xl border border-[#00ff9d]/30 font-mono inline-block shadow-sm">
                test coverage...
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-400 font-handwriting text-xl md:text-2xl pt-2 max-w-lg mx-auto"
            >
              Because if the pipeline doesn't pass green, what else can?
            </motion.p>
          </div>

          {/* Typewriter Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center space-x-2 font-mono text-lg md:text-2xl text-slate-300 font-bold"
          >
            <span>I'm a</span>
            <span className="text-[#a855f7] bg-gradient-to-r from-[#a855f7] to-[#00f0ff] bg-clip-text text-transparent">
              {displayedText}
            </span>
            <span className="w-[3px] h-6 bg-[#00f0ff] animate-cursor" />
          </motion.div>

          {/* Professional Bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-2xl mx-auto text-sm md:text-base text-slate-400 leading-relaxed font-sans"
          >
            {professionalSummary.bio}
          </motion.p>

          {/* Metrics Panel - Sleek Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-2 gap-12 border-y border-[#1e1135] py-5 w-full max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-extrabold text-white glow-purple">
                {professionalSummary.yearsOfExperience}
              </div>
              <div className="font-mono text-[10px] text-slate-400 mt-1 uppercase tracking-widest">
                Years of Experience
              </div>
            </div>
            <div className="text-center border-l border-[#1e1135]">
              <div className="font-display text-3xl md:text-4xl font-extrabold text-[#00ff9d] glow-green">
                {professionalSummary.totalProjects}
              </div>
              <div className="font-mono text-[10px] text-slate-400 mt-1 uppercase tracking-widest">
                Client Frameworks
              </div>
            </div>
          </motion.div>

          {/* Actions & Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 w-full"
          >
            <button
              id="cta-contact-btn"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center space-x-2 rounded-xl bg-gradient-to-r from-[#a855f7] via-[#9333ea] to-[#00f0ff] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#a855f7]/20 transition-all hover:scale-[1.02] hover:shadow-[#a855f7]/40 active:scale-95 cursor-pointer font-mono"
            >
              <span>Initialize Connection</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              id="cta-resume-btn"
              href="https://drive.google.com/file/d/1wyWM8hlNsG4lhiX19TCa3U2Dx_47Cdkd/view?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-xl border border-[#1e1135] bg-[#0c0817] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-300 transition-all hover:border-[#a855f7]/40 hover:bg-[#a855f7]/5 cursor-pointer font-mono"
            >
              <FileText className="h-4 w-4 text-[#a855f7]" />
              <span>Download Resume</span>
            </a>
            <a
              id="cta-practice-btn"
              href="https://web-automation-practice.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-xl border border-[#00f0ff]/30 bg-[#00f0ff]/5 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#00f0ff] transition-all hover:border-[#00f0ff]/60 hover:bg-[#00f0ff]/10 cursor-pointer font-mono"
            >
              <Globe className="h-4 w-4 text-[#00f0ff]" />
              <span>Practice Platform</span>
            </a>
            <button
              id="cta-lab-btn"
              onClick={() => scrollToSection("automation-lab")}
              className="inline-flex items-center space-x-2 rounded-xl border border-[#00ff9d]/30 bg-[#00ff9d]/5 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#00ff9d] transition-all hover:border-[#00ff9d]/60 hover:bg-[#00ff9d]/10 cursor-pointer font-mono"
            >
              <Play className="h-4 w-4 text-[#00ff9d]" />
              <span>Run Sandbox Lab</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
