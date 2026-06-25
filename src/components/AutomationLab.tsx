import React, { useState, useEffect, useRef } from "react";
import { Terminal, Play, RotateCcw, CheckCircle, AlertTriangle, Cpu, FileCode, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { testScenarios } from "../data";

export default function AutomationLab() {
  const [selectedScenarioId, setSelectedScenarioId] = useState(testScenarios[0].id);
  const [isRunning, setIsRunning] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [currentStepIdx, setCurrentStepIdx] = useState(-1);
  const [testStatus, setTestStatus] = useState<"idle" | "running" | "success" | "failed">("idle");
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const activeScenario = testScenarios.find((s) => s.id === selectedScenarioId) || testScenarios[0];

  // Auto-scroll terminal logs
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalLogs]);

  // Handle running the test steps sequentially
  useEffect(() => {
    if (!isRunning || currentStepIdx >= activeScenario.steps.length) {
      if (currentStepIdx >= activeScenario.steps.length) {
        setIsRunning(false);
        setTestStatus("success");
      }
      return;
    }

    const delay = activeScenario.steps[currentStepIdx].includes("Waiting") ? 1500 : 700;
    const timer = setTimeout(() => {
      setTerminalLogs((prev) => [...prev, activeScenario.steps[currentStepIdx]]);
      setCurrentStepIdx((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [isRunning, currentStepIdx, activeScenario, selectedScenarioId]);

  const handleStartTest = () => {
    if (isRunning) return;
    setTerminalLogs([
      `[SYSTEM] Initializing pipeline engine core...`,
      `[SYSTEM] Connecting to browser instance... chrome@headless-v124`,
      `[SYSTEM] Spawning target test thread... id=${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      `------------------------------------------------------------------`
    ]);
    setIsRunning(true);
    setTestStatus("running");
    setCurrentStepIdx(0);
  };

  const handleResetTest = () => {
    setIsRunning(false);
    setTerminalLogs([]);
    setCurrentStepIdx(-1);
    setTestStatus("idle");
  };

  const handleSelectScenario = (id: string) => {
    if (isRunning) return;
    setSelectedScenarioId(id);
    handleResetTest();
  };

  // Simple regex-based code highlight generator to make code look stunning in the IDE panel
  const highlightCode = (code: string, lang: string) => {
    if (!code) return "";
    const escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Common expressions
    let highlighted = escaped
      // Comments
      .replace(/(\/\/.*)/g, '<span class="text-slate-500 font-normal">$1</span>')
      .replace(/(#.*)/g, '<span class="text-slate-500 font-normal">$1</span>')
      // Strings
      .replace(/(['"`].*?['"`])/g, '<span class="text-[#00ff9d]">$1</span>')
      // Functions / Class names
      .replace(/\b(function|class|def|public|void|async|await)\b/g, '<span class="text-[#a855f7] font-semibold">$1</span>')
      // Keywords
      .replace(/\b(const|let|var|import|from|try|catch|if|else|return|new|throw)\b/g, '<span class="text-[#00f0ff]">$1</span>')
      // Storage descriptors / Classes Java
      .replace(/\b(String|Pattern|Matcher|Twilio|ResourceSet|Message|Page|SearchFlightPage|ElementMetadata)\b/g, '<span class="text-purple-400 font-medium">$1</span>')
      // Numbers
      .replace(/\b(\d+)\b/g, '<span class="text-amber-400">$1</span>');

    return highlighted;
  };

  return (
    <section id="automation-lab" className="relative border-t border-[#1e1135] bg-[#05020c] py-20 md:py-28 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-0 -z-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.03)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.03)_0%,transparent_70%)] blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-[#a855f7] font-mono tech-bracket">Interactive Sandbox</h2>
          <h3 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Test Automation Simulation Lab
          </h3>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Experience advanced quality engineering concepts in real-time. Choose a scenario below to trigger a live, step-by-step pipeline execution and view the underlying production-grade code.
          </p>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Selector and Controller (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Select Scenario</span>
              <div className="space-y-3">
                {testScenarios.map((scenario) => {
                  const isActive = scenario.id === selectedScenarioId;
                  return (
                    <button
                      id={`lab-scenario-select-${scenario.id}`}
                      key={scenario.id}
                      onClick={() => handleSelectScenario(scenario.id)}
                      disabled={isRunning}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-start space-x-3.5 group cursor-pointer ${
                        isActive
                          ? "bg-[#0c0817] border-[#a855f7]/50 shadow-md shadow-[#a855f7]/5"
                          : "bg-[#0c0817]/40 border-[#1e1135] hover:border-[#1e1135]/80 hover:bg-[#0c0817]/80"
                      } ${isRunning ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                        isActive 
                          ? "bg-[#a855f7]/10 text-[#a855f7] border-[#a855f7]/30" 
                          : "bg-slate-950 text-slate-400 border-[#1e1135] group-hover:text-[#00f0ff]"
                      }`}>
                        <Cpu className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h4 className={`text-xs font-bold font-mono tracking-tight transition-colors ${isActive ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                            {scenario.name}
                          </h4>
                          {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#00ff9d] animate-ping" />}
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal">{scenario.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Controller Buttons Card */}
            <div className="rounded-2xl border border-[#1e1135] bg-[#0c0817]/60 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-[#1e1135] pb-3">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Engine Controller</span>
                <span className={`inline-flex items-center space-x-1.5 rounded-full px-2.5 py-0.5 font-mono text-[9px] font-medium border uppercase tracking-wider ${
                  testStatus === "running"
                    ? "bg-[#a855f7]/10 text-[#a855f7] border-[#a855f7]/20"
                    : testStatus === "success"
                    ? "bg-[#00ff9d]/10 text-[#00ff9d] border-[#00ff9d]/20"
                    : "bg-slate-950 text-slate-400 border-[#1e1135]"
                }`}>
                  <span className={`h-1 w-1 rounded-full ${
                    testStatus === "running" ? "bg-[#a855f7] animate-pulse" : testStatus === "success" ? "bg-[#00ff9d]" : "bg-slate-500"
                  }`} />
                  <span>{testStatus}</span>
                </span>
              </div>

              <div className="flex gap-3">
                <button
                  id="lab-run-pipeline-btn"
                  onClick={handleStartTest}
                  disabled={isRunning}
                  className={`flex-1 inline-flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#00f0ff] px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg transition-all active:scale-98 select-none font-mono ${
                    isRunning 
                      ? "opacity-40 cursor-not-allowed shadow-none" 
                      : "hover:scale-[1.02] hover:shadow-[#a855f7]/10 cursor-pointer"
                  }`}
                >
                  <Play className="h-3.5 w-3.5 fill-slate-950" />
                  <span>{isRunning ? "Running..." : "Run Pipeline"}</span>
                </button>

                <button
                  id="lab-reset-btn"
                  onClick={handleResetTest}
                  disabled={terminalLogs.length === 0}
                  className={`px-4 py-3 rounded-xl border border-[#1e1135] bg-slate-950 text-slate-300 hover:bg-[#0c0817] active:scale-95 transition-all select-none ${
                    terminalLogs.length === 0 ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
                  }`}
                  title="Reset Sandbox"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Bash Terminal + IDE Code Split View (8 cols) */}
          <div className="lg:col-span-8 grid gap-6 md:grid-cols-2 items-stretch">
            
            {/* Real-time Simulated Terminal Card */}
            <div className="rounded-2xl border border-[#1e1135] bg-[#05020c] flex flex-col overflow-hidden shadow-xl min-h-[360px]">
              {/* Terminal Header */}
              <div className="flex items-center justify-between bg-[#0c0817] px-4 py-3 border-b border-[#1e1135] select-none">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="font-mono text-[9px] text-slate-400 font-bold tracking-wider pl-2 uppercase">terminal: pipeline_sim</span>
                </div>
                <Terminal className="h-3.5 w-3.5 text-slate-500" />
              </div>

              {/* Terminal Body Screen */}
              <div className="flex-1 p-4 overflow-y-auto font-mono text-[10px] text-slate-300 space-y-2 leading-relaxed bg-[#05020c] scrollbar-thin max-h-[330px]">
                {terminalLogs.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center text-slate-500 space-y-2 py-10">
                    <Terminal className="h-8 w-8 text-slate-600 animate-pulse" />
                    <p className="text-[11px]">Terminal is in standby state.</p>
                    <p className="text-[9px] uppercase tracking-widest text-slate-600">Click "Run Pipeline" to initialize simulation</p>
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    {terminalLogs.map((log, lIdx) => {
                      let logColor = "text-slate-300";
                      let prefix = "●";

                      if (log.includes("✅") || log.includes("🎉") || log.includes("Passed")) {
                        logColor = "text-[#00ff9d]";
                        prefix = "✔";
                      } else if (log.includes("⚠️") || log.includes("Warning")) {
                        logColor = "text-yellow-400";
                        prefix = "⚠";
                      } else if (log.includes("⚡") || log.includes("Auto-Healing") || log.includes("Invoking")) {
                        logColor = "text-[#00f0ff] font-semibold";
                        prefix = "⚡";
                      } else if (log.includes("[SYSTEM]")) {
                        logColor = "text-purple-400";
                        prefix = "⚙";
                      }

                      return (
                        <motion.div
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.15 }}
                          key={lIdx}
                          className={`flex items-start space-x-1.5 ${logColor}`}
                        >
                          <span className="font-semibold select-none shrink-0 text-[8px] mt-0.5">{prefix}</span>
                          <span className="break-all">{log}</span>
                        </motion.div>
                      );
                    })}
                    {isRunning && (
                      <div className="flex items-center space-x-1 text-[#00f0ff] animate-pulse">
                        <span className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full" />
                        <span className="text-[9px] uppercase tracking-widest">Evaluating DOM state...</span>
                      </div>
                    )}
                    <div ref={terminalEndRef} />
                  </div>
                )}
              </div>
            </div>

            {/* IDE Source Code Viewer Card */}
            <div className="rounded-2xl border border-[#1e1135] bg-[#0c0817]/80 flex flex-col overflow-hidden shadow-xl min-h-[360px]">
              {/* IDE Header Tab bar */}
              <div className="flex items-center justify-between bg-slate-950 px-4 py-2.5 border-b border-[#1e1135] select-none">
                <div className="flex items-center space-x-2">
                  <FileCode className="h-3.5 w-3.5 text-[#00f0ff]" />
                  <span className="font-mono text-[9px] text-slate-300 font-semibold tracking-wide">
                    {activeScenario.id === "auto-healing"
                      ? "clickWithHealing.ts"
                      : activeScenario.id === "otp-retrieval"
                      ? "OTPVerifyTest.java"
                      : "SearchFlightPage.py"}
                  </span>
                </div>
                <span className="font-mono text-[8px] text-slate-500 uppercase tracking-widest font-semibold">{activeScenario.codeSample.language}</span>
              </div>

              {/* IDE Code Area */}
              <div className="flex-1 p-4 overflow-auto font-mono text-[9px] md:text-[10px] text-slate-300 bg-[#0c0817]/40 leading-relaxed scrollbar-thin max-h-[330px]">
                <pre className="whitespace-pre overflow-x-auto text-left">
                  <code
                    dangerouslySetInnerHTML={{
                      __html: highlightCode(activeScenario.codeSample.code, activeScenario.codeSample.language)
                    }}
                  />
                </pre>
              </div>
            </div>

          </div>

        </div>

        {/* Community Automation Practice Platform Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 rounded-2xl border border-[#1e1135] bg-gradient-to-r from-[#0c0817] via-[#100924] to-[#0c0817] p-6 md:p-8 relative overflow-hidden card-tech group"
        >
          {/* Subtle light leak */}
          <div className="absolute -top-24 -right-24 -z-10 h-48 w-48 rounded-full bg-[#00f0ff]/10 blur-2xl group-hover:bg-[#a855f7]/15 transition-colors duration-500" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-4 text-left max-w-3xl">
              <div className="inline-flex items-center space-x-2 rounded-md bg-[#00f0ff]/10 px-2.5 py-1 text-xs font-mono font-medium text-[#00f0ff] border border-[#00f0ff]/20">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
                <span>LIVE PLATFORM: PUBLIC SANDBOX</span>
              </div>
              
              <h4 className="font-display text-xl md:text-2xl font-extrabold text-white tracking-tight">
                Web Automation Practice Ground
              </h4>
              
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                I designed and engineered a full-featured web application specifically created as a practice ground for automated testing tools. Featuring real-world complex DOM setups including dynamic inputs, delayed async elements, nested frames, drop-downs, login bypasses, alerts, and custom shadow-DOM barriers.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-1.5">
                {["Playwright Friendly", "Selenium Optimized", "Cypress Assertions", "No-Flake Selector Tests"].map((badge) => (
                  <span key={badge} className="rounded bg-slate-950 px-2.5 py-1 text-[10px] font-mono text-slate-400 border border-[#1e1135]">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <a
                id="external-practice-platform-btn"
                href="https://web-automation-practice.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto inline-flex items-center justify-center space-x-2.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#a855f7] hover:from-[#a855f7] hover:to-[#00f0ff] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer font-mono font-bold"
              >
                <span>Launch Practice App</span>
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
