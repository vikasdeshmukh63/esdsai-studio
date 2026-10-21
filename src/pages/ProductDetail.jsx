import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, MessageCircle, Play, Quote, BookOpen, Users, Activity, Layers, Bot, Mic, FileSearch, Network, BrainCircuit } from 'lucide-react';
import { products } from '@/components/data/products';
import AgentNetworkVisualizer from '@/components/AgentNetworkVisualizer';
import SingleAgentVisualizer from '@/components/SingleAgentVisualizer';
import AIVoicePlayground from '@/components/playgrounds/AIVoicePlayground';
import SupermemoryPlayground from '@/components/playgrounds/SupermemoryPlayground';
import SupermemoryArchitecture from '@/components/diagrams/SupermemoryArchitecture';
import IntegrationsShowcase from '@/components/supermemory/IntegrationsShowcase';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';



export default function ProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'esds-ai';
  const product = products[productId];

  useEffect(() => {
    // Small timeout to allow layout to stabilize
    const timeoutId = setTimeout(() => {
      let elementId;
      if (product?.id === 'multi-agent-system') {
        elementId = 'playground';
      } else if (product?.id === 'esds-supermemory') {
        elementId = 'key-capabilities';
      }

      if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [product?.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Solution not found</p>
      </div>
    );
  }

  const Icon = product.icon || (() => null);

  const DemoSection = (
    <div id="playground" className="max-w-6xl mx-auto mb-8 mt-8">
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
         className="text-center mb-10"
      >
         {product.id !== 'multi-agent-system' && (
           <span className="text-[#003366] font-semibold text-sm tracking-wider uppercase">
             See It In Action
           </span>
         )}
         <h2 className="text-3xl font-bold text-gray-900 mt-3">
           {
            {'multi-agent-system': 'Live ESDS Multi Agent System (MAS)', 
             'esds-ai-voice': 'Demo Sandbox',
             'esds-supermemory': 'Demo Sandbox'
            }[product.id] || 'Solution Demo'
           }
         </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className={`rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white relative group ${!['multi-agent-system', 'esds-ai-voice', 'esds-supermemory'].includes(product.id) ? 'aspect-video' : ''}`}
      >
         {product.id === 'multi-agent-system' ? (
           <AgentNetworkVisualizer />
         ) : product.id === 'esds-ai-voice' ? (
           <AIVoicePlayground />
         ) : product.id === 'esds-supermemory' ? (
           <SupermemoryPlayground />
         ) : (
           <iframe 
             width="100%" 
             height="100%" 
             src={product.demoVideo} 
             title={`${product.name} Demo`}
             frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowFullScreen
             className="w-full h-full"
           ></iframe>
         )}
         </motion.div>

         {product.id === 'multi-agent-system' && (
         <>
           <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-bold text-gray-900 mt-12 mb-6 text-center"
           >
              Live ESDS Single Agent System
           </motion.h3>
           <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white relative group"
           >
            <SingleAgentVisualizer />
           </motion.div>
         </>
         )}
         </div>
         );

  const InfoSection = (
    <div className="grid lg:grid-cols-2 gap-12 items-center pb-12 pt-2">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div 
          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 shadow-lg"
          style={{ backgroundColor: product.color }}
        >
          <Icon className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {product.name}
        </h1>
        <p className="text-xl font-medium mb-4" style={{ color: product.color }}>
          {product.tagline}
        </p>
        
        {product.versionInfo && (
          <div className="flex flex-wrap gap-3 mb-8">
             <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                {product.versionInfo.current}
             </span>
             <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                {product.versionInfo.next}
             </span>
          </div>
        )}

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-4">
          {product.id === 'esds-supermemory' ? (
    <>
      <Button
        className="text-white px-8 py-6 text-lg rounded-lg shadow-lg"
        style={{ backgroundColor: product.color }}
        disabled
      >
        Coming Soon
      </Button>
      <Button 
        variant="outline" 
        className="px-8 py-6 text-lg rounded-lg border-2 hover:text-white"
        style={{ 
          borderColor: product.color, 
          color: product.color,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = product.color; e.currentTarget.style.color = 'white'; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = product.color; }}
        onClick={() => document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <Play className="w-5 h-5 mr-2" />
        Try Demo Sandbox
      </Button>
    </>
  ) : (
    <>
      <Button 
        className="text-white px-8 py-6 text-lg rounded-lg shadow-lg transition-transform hover:-translate-y-1"
        style={{ backgroundColor: product.color }}
        onClick={() => {
            if (['esds-ai-voice'].includes(product.id)) {
              document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' });
            } else if (product.id !== 'multi-agent-system') {
              window.open(product.link, '_blank');
            }
        }}
        disabled={product.id === 'multi-agent-system'}
      >
        {{
          'multi-agent-system': 'Coming Soon',
          'esds-ai-voice': 'Try Demo Sandbox'
        }[product.id] || 'Access Tool'}
      </Button>
      {/* <Button 
        variant="outline" 
        className="px-8 py-6 text-lg rounded-lg border-2 hover:text-white"
        style={{ 
          borderColor: product.color, 
          color: product.color,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = product.color; e.currentTarget.style.color = 'white'; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = product.color; }}
        onClick={() => alert('Opening documentation... (Demo Action)')}
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        Documentation
      </Button> */}
    </>
  )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div 
          className="absolute inset-0 opacity-5 rounded-3xl blur-2xl"
          style={{ backgroundColor: product.color }}
        />
        <div id="key-capabilities" className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 rounded-full" style={{ backgroundColor: product.color }} />
            <h3 className="text-lg font-bold text-gray-900">Key Capabilities</h3>
          </div>
          
          <div className="space-y-6">
            {product.features.slice(0, 6).map((feature, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300"
                  style={{ backgroundColor: `${product.color}15` }} 
                >
                  <Check className="w-5 h-5" style={{ color: product.color }} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{feature.title}</p>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="relative flex items-center justify-center mb-8 h-10">
            <div className="absolute left-0">
              <Link 
                to={createPageUrl('Home')}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-[#003366] hover:border-[#003366] transition-all shadow-sm"
                title="Back to Solutions"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>

            {product.id === 'multi-agent-system' && (
              <span className="text-[#003366] font-semibold text-sm tracking-wider uppercase bg-blue-50 px-4 py-2 rounded-full border border-blue-100 shadow-sm">
                Coming Soon...
              </span>
            )}
          </div>

          {product.id === 'multi-agent-system' ? (
            <>
              {DemoSection}
              {InfoSection}
            </>
          ) : (
            <>
              {InfoSection}
              {DemoSection}
            </>
          )}
        </div>
      </div>

      {product.id === 'esds-supermemory' && <SupermemoryArchitecture />}

      {product.id === 'esds-supermemory' && <IntegrationsShowcase />}

      {/* Testimonials */}
      {!['multi-agent-system', 'esds-supermemory'].includes(product.id) && (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <span className="text-[#003366] font-semibold text-sm tracking-wider uppercase">Testimonials</span>
             <h2 className="text-3xl font-bold text-gray-900 mt-3">Trusted by Experts</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {product.testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 relative"
              >
                <Quote className="w-10 h-10 text-gray-200 absolute top-6 left-6" />
                <p className="text-gray-700 text-lg italic mb-6 relative z-10 pt-4">"{item.quote}"</p>
                <div>
                  {/* Animated Placeholder Line representing "Coming Soon" / Redacted Author */}
                  <motion.div 
                    className="h-3 rounded-full mb-2 opacity-40"
                    style={{ backgroundColor: product.color, width: '120px' }}
                    animate={{ x: [0, 15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Use Cases */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#003366] font-semibold text-sm tracking-wider uppercase">Use Cases</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Real-World Applications
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {product.useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 rounded-full text-white font-medium shadow-lg"
                style={{ backgroundColor: product.color }}
              >
                {useCase}
              </motion.div>
            ))}
          </div>
        </div>
      </section>




    </div>
  );
}