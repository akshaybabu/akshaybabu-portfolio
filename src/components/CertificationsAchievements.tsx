import React from "react";
import { GraduationCap, Award, CheckCircle, Calendar, MapPin, BadgeCheck, Trophy } from "lucide-react";
import { motion } from "motion/react";
import { certifications, achievements } from "../data";

export default function CertificationsAchievements() {
  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="education" className="relative border-t border-[#1e1135] bg-[#05020c] py-20 md:py-28">
      <div className="absolute top-1/4 left-1/3 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.03)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.03)_0%,transparent_70%)] blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Certifications & Accomplishments */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-[#00f0ff] font-mono tech-bracket">Credentials & Badges</h2>
              <h3 className="font-display text-3xl font-extrabold tracking-tight text-white">
                Certifications & Achievements
              </h3>
            </div>

            {/* Certifications Grid */}
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">Industry Certifications</span>
              <div className="grid gap-4 sm:grid-cols-2">
                {certifications.map((cert, idx) => (
                  <motion.div
                    id={`cert-card-${idx}`}
                    key={idx}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-3 p-4 rounded-xl border border-[#1e1135] bg-[#0c0817]/30 hover:border-[#a855f7]/30 hover:bg-[#0c0817]/60 transition-all card-tech"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20">
                      <BadgeCheck className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h4 className="font-display text-xs font-bold text-white leading-tight">{cert.name}</h4>
                      <p className="font-mono text-[10px] text-slate-500 mt-1">{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements Bullet Cards */}
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">Recognitions & Awards</span>
              <div className="space-y-3">
                {achievements.map((ach, idx) => (
                  <motion.div
                    id={`achievement-card-${idx}`}
                    key={idx}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex items-start space-x-4 p-4 rounded-xl border border-[#1e1135] bg-[#0c0817]/40 card-tech"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Trophy className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-white tracking-tight">{ach.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{ach.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-[#00ff9d] font-mono tech-bracket">Academic Background</h2>
              <h3 className="font-display text-3xl font-extrabold tracking-tight text-white">
                Education
              </h3>
            </div>

            {/* Education Stack */}
            <div className="space-y-6">
              {/* College Card */}
              <motion.div
                id="college-card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative rounded-2xl border border-[#1e1135] bg-[#0c0817]/40 p-6 space-y-4 hover:border-[#a855f7]/30 hover:bg-[#0c0817] transition-all card-tech"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/20">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white tracking-tight">Bachelor of Technology (B.Tech)</h4>
                    <p className="font-mono text-[10px] text-slate-400 mt-0.5">Computer Science & Engineering</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-400 border-t border-[#1e1135] pt-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-slate-500 shrink-0" />
                    <span>Vaagdevi Engineering College (JNTU Hyderabad)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-slate-500 shrink-0" />
                    <span>2017 – 2022</span>
                  </div>
                </div>
              </motion.div>

              {/* School Card */}
              <motion.div
                id="school-card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative rounded-2xl border border-[#1e1135] bg-[#0c0817]/40 p-6 space-y-4 hover:border-[#a855f7]/30 hover:bg-[#0c0817] transition-all card-tech"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-slate-400 border border-[#1e1135]">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white tracking-tight">Intermediate Education (MPC)</h4>
                    <p className="font-mono text-[10px] text-slate-400 mt-0.5">Mathematics, Physics, Chemistry</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-400 border-t border-[#1e1135] pt-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-slate-500 shrink-0" />
                    <span>Narayana Junior College, India</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-slate-500 shrink-0" />
                    <span>2015 – 2017</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
