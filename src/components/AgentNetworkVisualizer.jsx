import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Brain, Database, Shield, Zap, MessageSquare, CheckCircle2, Circle, TrendingUp, Megaphone, Cpu, Terminal, Bug, Code } from 'lucide-react';

const agents = [
  { id: 'hr', name: 'HR AI Agent', role: 'Talent & Culture', icon: MessageSquare, color: 'bg-rose-500', status: 'idle' },
  { id: 'finance', name: 'Finance AI Agent', role: 'Budget & Audit', icon: Database, color: 'bg-emerald-500', status: 'idle' },
  { id: 'legal', name: 'Legal AI Agent', role: 'Compliance', icon: Shield, color: 'bg-blue-600', status: 'idle' },
  { id: 'ops', name: 'Ops AI Agent', role: 'Resource Allocation', icon: Zap, color: 'bg-amber-500', status: 'idle' },
  { id: 'sales', name: 'Sales AI Agent', role: 'Revenue Growth', icon: TrendingUp, color: 'bg-violet-500', status: 'idle' },
  { id: 'marketing', name: 'Marketing AI Agent', role: 'Brand & Outreach', icon: Megaphone, color: 'bg-pink-500', status: 'idle' },
  { id: 'it', name: 'IT Support AI Agent', role: 'System Health', icon: Cpu, color: 'bg-indigo-500', status: 'idle' },
  { id: 'devops', name: 'DevOps AI Agent', role: 'CI/CD Pipelines', icon: Terminal, color: 'bg-orange-500', status: 'idle' },
  { id: 'qa', name: 'QA AI Agent', role: 'Quality Assurance', icon: Bug, color: 'bg-lime-500', status: 'idle' },
  { id: 'swe', name: 'Engineering AI Agent', role: 'Code Generation', icon: Code, color: 'bg-cyan-500', status: 'idle' },
];

const tasks = [
  "Analyzing quarterly budget variances...",
  "Cross-referencing compliance protocols...",
  "Optimizing resource allocation schedules...",
  "Generating final audit report...",
  "Identifying new market opportunities...",
  "Analyzing campaign performance metrics...",
  "Monitoring system infrastructure health...",
  "Optimizing CI/CD deployment pipelines...",
  "Running automated regression test suites...",
  "Refactoring legacy code modules..."
];

export default function AgentNetworkVisualizer() {
  const [activeAgents, setActiveAgents] = useState(['finance', 'ops']);
  const [orderedAgents, setOrderedAgents] = useState(agents);
  const [messages, setMessages] = useState([]);
  const [currentTask, setCurrentTask] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate random agent activation and messaging
      const randomAgent = agents[Math.floor(Math.random() * agents.length)];
      const targetAgent = agents.find(a => a.id !== randomAgent.id);
      
      const newMsg = {
        id: Date.now(),
        from: randomAgent.name,
        to: targetAgent.name,
        content: `Syncing data for ${tasks[currentTask].split(' ')[0]}...`,
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [newMsg, ...prev].slice(0, 2));
      
      // Randomly change active team
      if (Math.random() > 0.7) {
        // Shuffle positions slightly
        setOrderedAgents(prev => [...prev].sort(() => 0.5 - Math.random()));

        const newTeam = [...agents]
          .sort(() => 0.5 - Math.random())
          .slice(0, Math.floor(Math.random() * 5) + 2)
          .map(a => a.id);
        setActiveAgents(newTeam);
        setCurrentTask(prev => (prev + 1) % tasks.length);
      }

    }, 1000);

    return () => clearInterval(interval);
  }, [currentTask]);

  return (
    <div className="bg-slate-900 rounded-3xl p-8 text-white overflow-hidden relative min-h-[600px] flex flex-col md:flex-row gap-8">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* Left: Visualization */}
      <div className="flex-1 relative z-10 flex items-center justify-center min-h-[550px]">
        {/* Central Hub */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            {/* Outer Circle - Rotating with wider gaps */}
            <svg className="w-40 h-40 absolute animate-[spin_3s_linear_infinite] opacity-100" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="49" fill="none" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="4 6" strokeLinecap="round" />
                              </svg>

            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-slate-900/90 backdrop-blur-xl flex items-center justify-center border border-teal-500/30 shadow-2xl shadow-teal-500/10 transition-all duration-300 hover:shadow-teal-500/50 hover:border-teal-400 hover:scale-110 cursor-pointer group">
                <motion.div
                  animate={{ 
                    scale: [1, 1.15, 1], 
                    opacity: [0.6, 1, 0.6],
                    filter: ["brightness(1) drop-shadow(0 0 0px rgba(45, 212, 191, 0))", "brightness(1.5) drop-shadow(0 0 15px rgba(45, 212, 191, 0.6))", "brightness(1) drop-shadow(0 0 0px rgba(45, 212, 191, 0))"]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Brain className="w-10 h-10 text-teal-400 group-hover:text-teal-300 transition-colors" />
                </motion.div>
              </div>
            </div>
         </div>

        {/* Agents Orbiting */}
        {orderedAgents.map((agent, index) => {
          const isActive = activeAgents.includes(agent.id);
          const colorName = agent.color.replace('bg-', '');
          // Calculate position on circle
          const angle = (index / orderedAgents.length) * 2 * Math.PI - (Math.PI / 2); // Start from top
          const radius = 230; // Increased radius for better spacing
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={agent.id}
              className={`absolute flex flex-col items-center gap-2 transition-all duration-700 ${isActive ? 'z-20 scale-110' : 'z-10 scale-100'}`}
              style={{ x, y }}
              animate={{ 
                x: isActive ? x : x * 0.96, 
                y: isActive ? y : y * 0.96,
              }}
            >
              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 border relative group overflow-hidden cursor-pointer
                  ${isActive 
                    ? `${agent.color} border-white/20 shadow-xl shadow-${colorName}/40 hover:shadow-${colorName}/70 hover:scale-105` 
                    : `bg-slate-800/80 border-slate-700 shadow-md shadow-black/20 hover:border-${colorName}/50 hover:shadow-${colorName}/50 hover:text-${colorName}`
                  }`}
                >
                  {isActive && (
                     <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}

                  <agent.icon 
                    className={`w-6 h-6 transition-all duration-500 ${isActive ? 'text-white fill-white/20 scale-110' : 'text-slate-500 group-hover:text-white'}`} 
                    strokeWidth={1.5} 
                  />
                </div>
                
                {/* Active Status Dot */}
                {isActive && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-slate-900 bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                )}
              </div>
              
              <div className="text-center min-w-[100px] mt-1">
                <p className={`text-[11px] font-bold transition-colors duration-500 tracking-wide ${isActive ? 'text-white' : 'text-slate-500'}`}>
                  {agent.name}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Right: Live Feed Panel */}
      <div className="w-full md:w-80 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6 flex flex-col z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Network className="w-5 h-5 text-teal-400" />
            <h3 className="font-bold text-sm tracking-wide">Live Multi Agent System</h3>
          </div>
          <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-mono">ONLINE</span>
        </div>

        {/* Active Task */}
        <div className="mb-6">
          <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Current Objective</p>
          <div className="bg-slate-800 rounded-lg p-3 border-l-2 border-teal-500">
            <p className="text-sm font-medium text-teal-50">{tasks[currentTask]}</p>
          </div>
        </div>

        {/* Message Log */}
        <div className="flex-1 overflow-hidden relative">
          <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Interaction Log</p>
          <div className="space-y-3">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-slate-700/50 p-3 rounded-lg text-xs"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-teal-200">{msg.from}</span>
                    <span className="text-slate-500 text-[10px]">{msg.timestamp}</span>
                  </div>
                  <p className="text-slate-300 mb-1">{msg.content}</p>
                  <div className="flex items-center gap-1 text-[10px] text-slate-500">
                    <CheckCircle2 className="w-3 h-3" /> Verified by {msg.to}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {/* Fade for bottom */}
          <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-slate-800/50 to-transparent" />
        </div>
      </div>
    </div>
  );
}