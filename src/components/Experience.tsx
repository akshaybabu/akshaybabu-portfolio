import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Layers, Cpu, Code } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { experience } from "../data";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? -1 : idx);
  };

  return (
    <section id="experience" className="relative border-t border-[#1e1135] bg-[#05020c] py-20 md:py-28">
      <div className="absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.03)_0%,transparent_70%)] blur-3xl" />
      
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-[#00f0ff] font-mono tech-bracket">Professional History</h2>
          <h3 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Engineering Milestones
          </h3>
          <p className="text-sm text-slate-400">
            A comprehensive look at my contributions across Fortune-500 clients, automation platform refactors, and full-stack testing workflows.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-[#1e1135] ml-4 md:ml-6 space-y-12">
          {experience.map((job, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div id={`experience-card-${idx}`} key={idx} className="relative pl-8 md:pl-10 group">
                {/* Timeline node */}
                <motion.div 
                  className={`absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300 z-10 ${
                    isExpanded 
                      ? "bg-gradient-to-r from-[#a855f7] to-[#00f0ff] border-[#00f0ff] text-slate-950 scale-125 shadow-md shadow-[#a855f7]/30" 
                      : "bg-slate-950 border-[#1e1135] text-[#00f0ff] group-hover:border-[#a855f7]/40 group-hover:text-[#a855f7]"
                  }`}
                  animate={{ scale: isExpanded ? 1.25 : 1 }}
                >
                  <Briefcase className="h-2.5 w-2.5 text-white" />
                </motion.div>

                {/* Job Card */}
                <div className="rounded-2xl border border-[#1e1135] bg-[#0c0817]/60 p-5 md:p-6 transition-all duration-300 hover:border-[#a855f7]/40 hover:bg-[#0c0817] card-tech">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center space-x-2.5 flex-wrap gap-y-2">
                        <h4 className="font-display text-base font-bold text-white tracking-tight">{job.role}</h4>
                        <span className="inline-flex items-center rounded-md bg-[#a855f7]/10 px-2 py-0.5 text-xs font-mono font-medium text-[#a855f7] ring-1 ring-[#a855f7]/20 border border-[#a855f7]/20">
                          {job.company}
                        </span>
                      </div>
                      
                      {/* Subtitles (Location, duration) */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-3.5 w-3.5 text-slate-500" />
                          <span>{job.period} {job.duration ? `(${job.duration})` : ""}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-3.5 w-3.5 text-slate-500" />
                          <span>{job.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      id={`expand-job-btn-${idx}`}
                      onClick={() => toggleExpand(idx)}
                      className="flex items-center space-x-1.5 self-start md:self-center rounded-lg border border-[#1e1135] bg-slate-950 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-[#a855f7]/30 hover:text-white cursor-pointer font-mono"
                    >
                      <span>{isExpanded ? "Hide Details" : "View Details"}</span>
                      {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                    </button>
                  </div>

                  {/* Active client projects badge bar */}
                  {job.projects && (
                    <div className="flex flex-wrap gap-2 mt-4 items-center">
                      <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mr-1.5">Key Projects:</span>
                      {job.projects.map((proj) => (
                        <span id={`project-badge-${proj.replace(/\s+/g, '-').toLowerCase()}`} key={proj} className="rounded-md bg-slate-950 px-2.5 py-1 text-xs font-mono font-medium text-slate-300 border border-[#1e1135]">
                          {proj}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Expandable details */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        {/* Highlights checklist */}
                        <div className="mt-6 pt-6 border-t border-[#1e1135] space-y-3">
                          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Key Contributions & Achievements:</span>
                          <ul className="space-y-3 text-slate-300 text-xs md:text-sm leading-relaxed">
                            {job.highlights.map((bullet, bIdx) => (
                              <li id={`highlight-bullet-${idx}-${bIdx}`} key={bIdx} className="flex items-start space-x-3">
                                <span className="flex h-1.5 w-1.5 rounded-full bg-[#a855f7] shrink-0 mt-2" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technology badge pile */}
                        <div className="mt-6 pt-5 border-t border-[#1e1135]">
                          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-2">Technologies Handled:</span>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech) => (
                              <span
                                id={`tech-tag-${tech.replace(/\s+/g, '-').toLowerCase()}`}
                                key={tech}
                                className="inline-flex items-center space-x-1 rounded bg-slate-950 px-2 py-0.5 text-xs font-mono text-[#00f0ff] border border-[#1e1135] hover:border-[#a855f7]/30 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
