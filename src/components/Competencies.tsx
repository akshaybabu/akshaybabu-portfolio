import React from "react";
import { Cpu, Code, Layers, Monitor, Cloud, Wrench, Shield, Check } from "lucide-react";
import { motion } from "motion/react";
import { competencies } from "../data";

// Match string category to Lucide icons dynamically
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Cpu":
      return <Cpu className="h-5 w-5" />;
    case "Code":
      return <Code className="h-5 w-5" />;
    case "Layers":
      return <Layers className="h-5 w-5" />;
    case "Monitor":
      return <Monitor className="h-5 w-5" />;
    case "Cloud":
      return <Cloud className="h-5 w-5" />;
    case "Wrench":
      return <Wrench className="h-5 w-5" />;
    default:
      return <Shield className="h-5 w-5" />;
  }
};

export default function Competencies() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="competencies" className="relative border-t border-[#1e1135] bg-[#05020c] py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.03),transparent)]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-[#00f0ff] font-mono tech-bracket">Core Expertise</h2>
          <h3 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Engineered for High-Reliability Releases
          </h3>
          <p className="text-sm text-slate-400">
            A comprehensive toolset engineered to maintain 24/7 testing coverage across complex, multi-tier enterprise platforms.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {competencies.map((group, idx) => (
            <motion.div
              id={`competency-group-${idx}`}
              key={group.category}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl border border-[#1e1135] bg-[#0c0817]/60 p-6 transition-all duration-300 hover:border-[#a855f7]/40 hover:bg-[#0c0817] card-tech"
            >
              {/* Card top flare decoration */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#a855f7]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="flex items-center space-x-3.5 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-[#00ff9d] border border-[#1e1135] transition-colors group-hover:border-[#a855f7]/40 group-hover:bg-[#a855f7]/10">
                  {getIcon(group.icon)}
                </div>
                <h4 className="font-display text-base font-bold text-white tracking-tight">{group.category}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    id={`skill-badge-${item.replace(/\s+/g, '-').toLowerCase()}`}
                    key={item}
                    className="inline-flex items-center space-x-1 rounded-lg bg-slate-950/80 px-2.5 py-1 text-xs font-mono text-slate-300 border border-[#1e1135] transition-all duration-200 hover:border-[#00ff9d]/40 hover:text-[#00ff9d] hover:scale-[1.03] select-none"
                  >
                    <Check className="h-3 w-3 text-[#00ff9d] shrink-0" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
