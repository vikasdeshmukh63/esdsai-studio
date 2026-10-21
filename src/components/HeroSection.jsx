import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

import { Sparkles, ArrowDown, Bot, Mic, FileSearch, Cpu, Network, Server, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { EXTERNAL_LINKS } from '@/config/links';

export default function HeroSection() {
  const navigate = useNavigate();

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const xPos = (event.clientX - rect.left) / rect.width - 0.5;
    const yPos = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(xPos);
    y.set(yPos);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  return (
    <section className="relative min-h-[650px] flex items-center bg-white overflow-hidden py-20 lg:py-0">


      {/* Dynamic Background Element - Abstract Data Visualization */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-[10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.08] text-[#003366]">
           <motion.svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"
             animate={{ rotate: 360 }}
             transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
           >
             <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.9,32.2C59.6,42.9,48.3,51.4,36.4,58.3C24.5,65.2,12.1,70.5,-1.6,73.3C-15.3,76.1,-28.3,76.4,-40.8,71.2C-53.3,66,-65.3,55.3,-73.8,42.4C-82.3,29.5,-87.3,14.4,-85.2,0.3C-83.1,-13.8,-73.9,-26.9,-63.6,-37.9C-53.3,-48.9,-41.9,-57.8,-29.7,-66.1C-17.5,-74.4,-4.5,-82.1,8.8,-82.9C22.1,-83.7,30.5,-77.6,44.7,-76.4Z" transform="translate(100 100) scale(1.1)" />
           </motion.svg>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#F0F7FF] to-transparent skew-x-12 opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                <span className="text-[#003366]">ESDS AI</span> <span className="text-[#00A0E3]">Studio</span>
              </h1>
              
              <p className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                Next - Gen <br />
                <span className="text-[#003366]">Intelligence</span> <span className="text-[#00A0E3]">Engine.</span>
              </p>

              {/* Tagline - Pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { text: "Secure", color: "bg-blue-50 text-blue-800 border-blue-100" },
                  { text: "Scalable", color: "bg-indigo-50 text-indigo-800 border-indigo-100" },
                  { text: "High-Performance", color: "bg-slate-50 text-slate-700 border-slate-200" }
                ].map((tag, i) => (
                  <span key={i} className={`px-4 py-2 rounded-full text-sm font-bold border ${tag.color} uppercase tracking-wider shadow-sm`}>
                    {tag.text}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-16">
                 <button 
                   onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                   className="px-8 py-4 bg-[#003366] text-white text-base font-semibold rounded-xl shadow-lg shadow-blue-900/20 hover:bg-[#002a55] hover:translate-y-[-2px] transition-all duration-300 flex items-center gap-2"
                 >
                  View AI Solutions <ArrowDown className="w-4 h-4" />
                 </button>
                 <button 
                   onClick={() => window.open(EXTERNAL_LINKS.esdsWebsite, '_blank', 'noopener,noreferrer')}
                   className="px-8 py-4 bg-white text-[#003366] border border-gray-200 text-base font-semibold rounded-xl shadow-sm hover:shadow-md hover:border-[#003366]/30 hover:translate-y-[-2px] transition-all duration-300"
                 >
                  Request Demo
                 </button>
              </div>

              {/* Metrics */}
              <div className="flex flex-col gap-6 border-t border-gray-100 pt-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="block text-3xl font-bold text-[#003366]">03</span>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Active Solutions</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-bold text-[#003366]">LLM Powered</span>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">On-Prem as a Service</span>
                  </div>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-[#003366]">Government, Enterprise & BFSI</span>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Security Standard</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Visual */}
          <div 
            className="relative hidden lg:block h-[500px]"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
          >
             <motion.div
               style={{ 
                 rotateX, 
                 rotateY, 
                 transformStyle: "preserve-3d" 
               }}
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative w-full h-full flex items-center justify-center"
             >
               {/* Abstract Network/Nodes Visualization */}
               <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                  {/* Central Pulse */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#00A0E3]/10 rounded-full blur-xl animate-pulse" style={{ transform: "translateZ(-20px)" }} />

                  {/* Connecting Lines with Active Data Flow */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ transform: "translateZ(-10px)", opacity: 0.3 }}>
                    <motion.path 
                      d="M100,100 Q250,50 400,150 T500,300" 
                      fill="none" 
                      stroke="#00A0E3" 
                      strokeWidth="1"
                      strokeDasharray="15 15"
                      animate={{ strokeDashoffset: [0, -100] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                     <motion.path 
                      d="M50,300 Q200,400 350,250 T550,100" 
                      fill="none" 
                      stroke="#003366" 
                      strokeWidth="1"
                      strokeDasharray="15 15"
                      animate={{ strokeDashoffset: [0, 100] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Extra connections for complexity */}
                    <motion.path 
                      d="M150,400 Q300,300 450,200" 
                      fill="none" 
                      stroke="#2563EB" 
                      strokeWidth="0.8"
                      strokeDasharray="15 15"
                      opacity="0.5"
                      animate={{ strokeDashoffset: [0, -50] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>

                  {/* Product Nodes - Floating Cards with Enhanced Motion */}
                  {[
                    { 
                      id: "esds-ai",
                      name: "ESDS AI", icon: Bot, color: "bg-[#003366]", top: "5%", left: "5%", delay: 0, duration: 15,
                      moveX: [0, 25, -15, 20, -10, 0], moveY: [0, 15, -20, 10, -25, 0]
                    },
                    { 
                      id: "esds-ai-voice",
                      name: "ESDS AI Voice", icon: Mic, color: "bg-[#00A0E3]", top: "40%", left: "10%", delay: 1, duration: 18,
                      moveX: [0, -20, 15, -25, 10, 0], moveY: [0, -15, 25, -10, 20, 0]
                    },
                    { 
                      id: "presale-agentic-ai",
                      name: "Presale Agentic AI", icon: FileSearch, color: "bg-[#4A3B32]", top: "75%", left: "5%", delay: 0.5, duration: 20,
                      moveX: [0, 15, -25, 20, -15, 0], moveY: [0, 20, -10, 25, -15, 0]
                    },
                    { 
                      id: "gpu-superpods",
                      name: "GPU SuperPOD's", icon: Server, color: "bg-[#2563EB]", top: "42%", left: "52%", delay: 0.9, duration: 15,
                      moveX: [0, 20, -20, 15, -15, 0], moveY: [0, -15, 20, -20, 15, 0],
                      link: EXTERNAL_LINKS.esdsWebsite
                    },
                    { 
                      id: "llm-token-portal",
                      name: "LLM Powered", subtext: "On-Prem as a Service", icon: Cpu, color: "bg-[#9C27B0]", top: "72%", left: "62%", delay: 1.2, duration: 16,
                      moveX: [0, -25, 20, -15, 25, 0], moveY: [0, -20, 15, -25, 10, 0],
                      link: EXTERNAL_LINKS.llmTokenPortal
                    },
                    { 
                      id: "multi-agent-system",
                      name: "Multi Agent System", icon: Network, color: "bg-[#00897B]", top: "15%", left: "65%", delay: 1.5, duration: 19,
                      moveX: [0, 30, -20, 15, -25, 0], moveY: [0, -25, 10, -20, 15, 0]
                    }
                    ].map((item, i) => (
                    <motion.div
                      key={i}
                      className={`absolute bg-white/90 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,51,102,0.2)] border border-white/50 backdrop-blur-xl p-4 pr-8 flex items-center gap-4 ${item.id === 'esds-ai-voice' ? 'cursor-default' : 'cursor-pointer hover:scale-110'} transition-transform`}
                      onClick={()=>{
                        if(item.link){
                          window.open(item.link, '_blank', 'noopener,noreferrer');
                        }
                        else if(item.id === 'esds-ai-voice'){
                          return;
                        }
                        else {
                          navigate(createPageUrl(`ProductDetail?id=${item.id}`));
                        }
                      }}
                      style={{
                        top: item.top,
                        left: item.left,
                        zIndex: 10 + i,
                        transform: "translateZ(20px)"
                      }}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ 
                        opacity: 1,
                        scale: [1, 1.03, 1],
                        x: item.moveX,
                        y: item.moveY,
                        rotate: [0, 2, -2, 0]
                      }}
                      whileHover={{ 
                        scale: 1.15,
                        translateZ: 50, 
                        transition: { duration: 0.2 } 
                      }}
                      transition={{ 
                        opacity: { duration: 0.5, delay: i * 0.2 },
                        scale: { duration: item.duration, repeat: Infinity, ease: "easeInOut" },
                        x: { duration: item.duration, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                        y: { duration: item.duration * 1.2, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                        rotate: { duration: item.duration * 1.5, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color} text-white shadow-lg shadow-blue-900/20`}>
                         <motion.div
                           animate={{ rotate: 360 }}
                           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                         >
                           <item.icon className="w-6 h-6" />
                         </motion.div>
                       </div>
                       <div className="flex flex-col gap-1">
                         <div className="flex flex-col leading-none">
                           <span className="text-sm font-bold text-slate-800 whitespace-nowrap tracking-tight">{item.name}</span>
                           {item.subtext && <span className="text-[10px] font-semibold text-slate-500 mt-1">{item.subtext}</span>}
                         </div>
                         <motion.div 
                           className={`h-1.5 rounded-full ${item.color} opacity-60`}
                           initial={{ width: 48 }}
                           animate={{ x: [0, 10, 0] }}
                           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                         />
                       </div>

                       {/* Dynamic pulsing glow effect */}
                       <motion.div 
                         className={`absolute inset-0 -z-10 blur-2xl rounded-full ${item.color}`}
                         animate={{ 
                           opacity: [0.15, 0.4, 0.15],
                           scale: [0.9, 1.2, 0.9] 
                         }}
                         transition={{ 
                           duration: 4, 
                           repeat: Infinity, 
                           ease: "easeInOut",
                           delay: i * 0.7
                         }}
                       />
                    </motion.div>
                  ))}
               </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}