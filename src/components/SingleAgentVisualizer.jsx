import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, Brain, Sparkles, FileText, Database, Globe, Code, Terminal } from 'lucide-react';

const steps = [
    { text: "Processing input...", icon: Brain },
    { text: "Querying database...", icon: Database },
    { text: "Searching knowledge base...", icon: Globe },
    { text: "Executing code...", icon: Code },
    { text: "Formulating response...", icon: Sparkles },
    { text: "Finalizing output...", icon: FileText }
];

export default function SingleAgentVisualizer() {
  const [currentStep, setCurrentStep] = useState(0);
  const [messages, setMessages] = useState([]);
  const [activeTool, setActiveTool] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
      
      const stepIndex = (currentStep + 1) % steps.length;
      if (stepIndex === 1) setActiveTool('database');
      else if (stepIndex === 2) setActiveTool('web');
      else if (stepIndex === 3) setActiveTool('code');
      else setActiveTool(null);

      setMessages(prev => [{
        id: Date.now(),
        text: steps[stepIndex].text,
        timestamp: new Date().toLocaleTimeString()
      }, ...prev].slice(0, 3));
    }, 2000);
    return () => clearInterval(interval);
  }, [currentStep]);

  const DataParticle = ({ delay }) => (
    <motion.div 
      className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)] z-20"
      animate={{ 
        x: [-10, 90], 
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.5]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: "linear", 
        delay: delay 
      }}
    />
  );

  return (
    <div className="bg-slate-900 rounded-3xl p-6 text-white overflow-hidden relative min-h-[320px] flex flex-col md:flex-row gap-6">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* Left: Visualization */}
      <div className="flex-1 relative z-10 flex items-center justify-center min-h-[300px]">
        {/* Main Alignment Container */}
        <div className="flex items-center gap-6 md:gap-16 w-full justify-center">
          
          {/* User Node */}
          <div className="relative flex flex-col items-center">
            {/* Box */}
            <div className="w-16 h-16 rounded-2xl bg-[#0f172a] border border-slate-700/60 flex items-center justify-center relative shadow-xl z-20 transition-all duration-300 hover:border-slate-500 hover:shadow-slate-500/10 group">
              <User className="w-6 h-6 text-slate-400 group-hover:text-slate-200 transition-colors" />
              
              {/* Connecting Line (Right) */}
              <div className={`absolute top-1/2 -translate-y-1/2 h-[1px] bg-slate-700 hidden md:block overflow-visible transition-all duration-300 ${activeTool === 'code' ? 'w-6 -right-6' : 'w-16 -right-16'}`}>
                 <DataParticle delay={0} />
                 <DataParticle delay={1} />
              </div>
            </div>
            {/* Absolute Label */}
            <div className="absolute top-full mt-4 w-max text-center">
               <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">User Input</span>
            </div>
          </div>

          {/* Central Agent */}
          <div className="relative z-10 flex items-center justify-center mx-2">
            
            {/* Tool Indicators - Adjusted Position */}
            <div className="absolute inset-0 pointer-events-none w-full h-full z-20">
                {/* Database Tool (Top) */}
                <motion.div 
                    className={`absolute -top-10 left-1/2 -translate-x-1/2 p-2 rounded-xl border bg-[#0f172a]/90 backdrop-blur-sm transition-all duration-300 ${activeTool === 'database' ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] scale-110 opacity-100' : 'border-slate-800 opacity-20 scale-90'}`}
                >
                    <Database className={`w-4 h-4 ${activeTool === 'database' ? 'text-blue-400' : 'text-slate-600'}`} />
                </motion.div>

                {/* Web Tool */}
                <motion.div 
                    className={`absolute top-1/2 -right-12 -translate-y-1/2 p-2 rounded-xl border bg-[#0f172a]/90 backdrop-blur-sm transition-all duration-300 ${activeTool === 'web' ? 'border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)] scale-110 opacity-100' : 'border-slate-800 opacity-20 scale-90'}`}
                >
                    <Globe className={`w-4 h-4 ${activeTool === 'web' ? 'text-purple-400' : 'text-slate-600'}`} />
                </motion.div>

                {/* Code Tool */}
                <motion.div 
                    className={`absolute top-1/2 -left-12 -translate-y-1/2 p-2 rounded-xl border bg-[#0f172a]/90 backdrop-blur-sm transition-all duration-300 ${activeTool === 'code' ? 'border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)] scale-110 opacity-100' : 'border-slate-800 opacity-20 scale-90'}`}
                >
                    <Terminal className={`w-4 h-4 ${activeTool === 'code' ? 'text-amber-400' : 'text-slate-600'}`} />
                </motion.div>
            </div>

            {/* Orbiting Rings - Centered */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 pointer-events-none">
                <div className="absolute inset-0 border border-teal-500/10 rounded-full animate-[spin_12s_linear_infinite]" />
                <div className="absolute inset-[10px] border border-teal-500/20 rounded-full animate-[spin_6s_linear_infinite_reverse]" />
            </div>
            
            {/* Main Agent Box */}
            <div className="w-24 h-24 rounded-[20px] bg-[#0f172a] border border-teal-500/50 shadow-[0_0_50px_-10px_rgba(20,184,166,0.15)] flex items-center justify-center relative overflow-hidden group z-10">
              
              {/* Thought Process Animation */}
              <div className="absolute inset-0 opacity-[0.15] flex flex-col items-center justify-center pointer-events-none">
                 <motion.div 
                    className="text-[9px] leading-[11px] text-teal-400 font-mono whitespace-pre text-center"
                    animate={{ y: [-60, 0] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 >
                    {`10101010\n01001011\n00110101\n11100011\n10101010\n01001011\n00110101\n11100011\n10101010\n01001011\n10101010`}
                 </motion.div>
              </div>

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="z-10 relative"
              >
                <div className="relative">
                    <Bot className="w-10 h-10 text-teal-400 drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
                    <div className="absolute inset-0 bg-teal-400/20 blur-xl rounded-full" />
                </div>
              </motion.div>
              
              {/* Status Dot */}
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,1)] animate-pulse" />
            </div>

            {/* Absolute Label */}
            <div className="absolute top-full mt-5 w-48 text-center z-20">
              <h3 className="font-bold text-white text-base">General Assistant</h3>
              <motion.p 
                key={steps[currentStep].text}
                initial={{ opacity: 0, y: -2 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[12px] text-teal-400 font-mono mt-1"
              >
                {steps[currentStep].text}
              </motion.p>
            </div>
          </div>

          {/* Response Node */}
          <div className="relative flex flex-col items-center">
            {/* Box */}
            <div className="w-16 h-16 rounded-2xl bg-[#0f172a] border border-slate-700/60 flex items-center justify-center relative shadow-xl z-20 transition-all duration-300 hover:border-slate-500 hover:shadow-slate-500/10 group">
              <FileText className="w-6 h-6 text-slate-400 group-hover:text-slate-200 transition-colors" />
              
              {/* Connecting Line (Left - Visual only) */}
              <div className={`absolute top-1/2 -translate-y-1/2 h-[1px] bg-slate-700 hidden md:block overflow-visible transition-all duration-300 ${activeTool === 'web' ? 'w-6 -left-6' : 'w-16 -left-16'}`}>
                 <DataParticle delay={1.5} />
                 <DataParticle delay={2.5} />
              </div>
            </div>
            {/* Absolute Label */}
            <div className="absolute top-full mt-4 w-max text-center">
               <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Response</span>
            </div>
          </div>

        </div>
      </div>

      {/* Right: Log Panel */}
      <div className="w-full md:w-72 bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700/50 p-5 flex flex-col z-10 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-teal-500/10 border border-teal-500/20">
                <Bot className="w-3.5 h-3.5 text-teal-400" />
            </div>
            <h3 className="font-bold text-xs tracking-wider text-slate-200">Single Agent System</h3>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="text-[10px] font-bold text-emerald-400 leading-none">ONLINE</span>
          </div>
        </div>

        <div className="flex-1 overflow-hidden relative flex flex-col">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-3 pl-1">System Logs</p>
          <div className="space-y-2.5 flex-1 overflow-hidden">
            <AnimatePresence mode='popLayout'>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-slate-700/40 p-3 rounded-xl text-[11px] border-l-[3px] border-teal-500/50 hover:bg-slate-700/60 transition-colors"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-teal-100">System</span>
                    <span className="text-slate-500 text-[9px] font-medium">{msg.timestamp}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{msg.text}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {/* Fade bottom */}
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-slate-900/10 via-slate-800/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}