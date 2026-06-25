/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Competencies from "./components/Competencies";
import Experience from "./components/Experience";
import AutomationLab from "./components/AutomationLab";
import CertificationsAchievements from "./components/CertificationsAchievements";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#05020c] text-slate-100 font-sans selection:bg-[#a855f7]/20 selection:text-[#a855f7] antialiased overflow-x-hidden">
      {/* Visual background noise/grid overlay */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-[#05020c] tech-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      
      {/* Header Navigation */}
      <Header />

      {/* Main Content Layout */}
      <main className="relative">
        {/* Dynamic Hero Section */}
        <Hero />

        {/* Core Competencies (Grid of expertise) */}
        <Competencies />

        {/* Professional Experience Timeline */}
        <Experience />

        {/* Interactive Sandbox Playground Lab */}
        <AutomationLab />

        {/* Certifications, Achievements & Education */}
        <CertificationsAchievements />

        {/* Get in Touch footer cards */}
        <Contact />
      </main>
    </div>
  );
}
