import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Bug, Briefcase, Zap } from 'lucide-react';

const integrations = [
  {
    steps: [
      { name: 'AIPME', icon: Briefcase, color: '#311B92' },
      { name: 'CodeCraft Agentic AI', icon: Code2, color: '#8B0000' },
      { name: 'QA AI Agent', icon: Bug, color: '#BF360C' }
    ],
    label: 'Autonomous Delivery Pipeline',
    description: 'AIPME generates specifications, CodeCraft implements the code, and QA AI Agent validates functionality—creating a complete, self-correcting development lifecycle.',
    data: ['User Stories', 'Source Code']
  }
];

export default function EcosystemIntegration() {
  return (
    <section className="py-20 px-6 bg-slate-50 overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#003366] font-semibold text-sm tracking-wider uppercase">Interconnected Intelligence</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Agents That Collaborate
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Our agents share insights in real-time, creating a self-improving ecosystem where knowledge flows seamlessly between development, quality assurance, and management.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          {integrations.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300 w-full max-w-5xl"
            >
              {/* Connection Visual */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full mb-12 relative gap-8 md:gap-4">
                
                {item.steps.map((step, stepIndex) => (
                  <React.Fragment key={stepIndex}>
                    {/* Node */}
                    <div className="flex flex-col items-center gap-4 z-10 w-32 shrink-0">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: step.color }}>
                        <step.icon className="w-10 h-10" />
                      </div>
                      <span className="font-bold text-gray-900 text-base text-center">{step.name}</span>
                    </div>

                    {/* Connector (if not last) */}
                    {stepIndex < item.steps.length - 1 && (
                      <div className="flex-1 w-full md:w-auto flex flex-col items-center justify-center relative min-h-[60px] md:min-h-0">
                        {/* Horizontal Line for Desktop */}
                        <div className="hidden md:block w-full h-[2px] bg-gray-200 relative overflow-hidden rounded-full">
                          <motion.div 
                            className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80"
                            animate={{ x: ['-100%', '300%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: stepIndex * 0.5 }}
                          />
                        </div>
                        
                        {/* Vertical Line for Mobile */}
                        <div className="md:hidden w-[2px] h-12 bg-gray-200 relative overflow-hidden rounded-full">
                           <motion.div 
                            className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-80"
                            animate={{ y: ['-100%', '300%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: stepIndex * 0.5 }}
                          />
                        </div>

                        {/* Label Badge */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded-full border border-gray-100 shadow-sm z-20 whitespace-nowrap">
                           <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-[#003366] uppercase tracking-wide">
                             <Zap className="w-3 h-3 md:w-3.5 md:h-3.5 text-yellow-500 fill-yellow-500" />
                             {item.data[stepIndex]}
                           </div>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}

              </div>

              {/* Description */}
              <div className="text-center relative max-w-3xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.label}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}