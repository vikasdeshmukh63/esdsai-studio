import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Clock } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import SearchFilterBar from '@/components/SearchFilterBar';
import EcosystemIntegration from '@/components/EcosystemIntegration';

import { productsData } from '@/components/data/products';
import { features, categories } from '@/components/data/homePageData';
import { EXTERNAL_LINKS } from '@/config/links';







export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const filteredProducts = useMemo(() => {
    let result = [...productsData];

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) ||
        p.highlights.some(h => h.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'popularity') return b.popularity - a.popularity;
      if (sortBy === 'newest') return new Date(b.releaseDate) - new Date(a.releaseDate);
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* Products Section */}
      <section className="py-20 px-6 bg-white" id="products">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block py-2 px-4 rounded-lg bg-blue-50 text-[#003366] font-bold text-xs tracking-widest uppercase mb-6 border border-blue-100 shadow-sm">AI Ecosystem</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              <span className="text-[#003366]">ESDS AI</span> <span className="text-[#00A0E3]">Studio</span>
            </h2>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              A comprehensive Ecosystem of Intelligent Solution<br />Designed to Secure, Automate and Accelerate your Operations.
            </p>
          </motion.div>

          <SearchFilterBar 
            onSearch={setSearchQuery}
            onFilter={setSelectedCategory}
            onSort={setSortBy}
            categories={categories}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
            <AnimatePresence mode='popLayout'>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={product} index={index} />
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-20 text-gray-500"
                >
                  No solutions found matching your criteria.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Collaborative Intelligence Section */}
      <EcosystemIntegration />

      {/* Features Section */}
      <section className="py-20 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
             <span className="inline-block py-1 px-3 rounded-full bg-white text-[#003366] font-semibold text-xs tracking-widest uppercase mb-4 border border-gray-200 shadow-sm">Trusted By Leaders</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 tracking-tight">
              Built for Government, Enterprise & BFSI
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-10 bg-white rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,51,102,0.1)] hover:-translate-y-1 transition-all duration-300"
                >
                <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-[#003366] flex items-center justify-center shadow-lg shadow-blue-900/20">
                  <feature.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#003366] p-12 md:p-20 text-center shadow-2xl shadow-blue-900/30"
            >
            {/* Background Pattern */}
            <div className="absolute inset-0">
               <div className="absolute inset-0 bg-gradient-to-br from-[#003366] via-[#004080] to-[#00A0E3] opacity-90" />
               <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.5" />
               </svg>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-blue-50 text-xl mb-10 max-w-2xl mx-auto font-medium">
                Get in touch with our team to discover how ESDS AI solutions can drive innovation in your organization.
              </p>
              <button 
                onClick={() => window.open(EXTERNAL_LINKS.esdsWebsite, '_blank', 'noopener,noreferrer')}
                className="px-10 py-5 bg-white text-[#003366] text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}