import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

const FeatureCard = ({ number, title, subtitle, description }) => {
    return (
        <div className="bg-[#0B1120] text-white rounded-3xl p-8 lg:p-12 grid lg:grid-cols-2 gap-12 items-center overflow-hidden border border-sky-900/50 shadow-2xl shadow-sky-500/10">
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <div className="font-bold text-sky-400 mb-4 tracking-widest">{`# ${title}`}</div>
                <h3 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">{subtitle}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
            </motion.div>
            <motion.div 
                className="relative h-96 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-sky-500 to-blue-600 border-2 border-sky-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-sky-500/20 z-10 p-4"
                    animate={{ y: [-5, 5, -5], scale: [1, 1.03, 1], boxShadow: ['0 0 25px rgba(56, 189, 248, 0.2)', '0 0 40px rgba(56, 189, 248, 0.3)', '0 0 25px rgba(56, 189, 248, 0.2)']}}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <div className="text-3xl font-bold text-white">
                        <BrainCircuit className="w-16 h-16" />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default function IntegrationsShowcase() {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
            <FeatureCard 
                number={1}
                title="CONNECT"
                subtitle="Plug ESDS Supermemory into your stack in minutes."
                description="We built SDKs for everything. Seamlessly connect with models from OpenAI, Anthropic, Google Gemini and integrate with tools like Sourcegraph's Cody, Perplexity AI and Notion. Whether you're working with Arc Browser, scripting in Python & JavaScript or collaborating via GitHub and Google Drive."
            />
        </div>
    </section>
  );
}