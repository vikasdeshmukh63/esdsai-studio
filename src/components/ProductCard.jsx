import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { cardTheme } from './data/cardThemes';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function ProductCard({ product, index }) {
  // Refined color palette for enterprise look


  const theme = cardTheme[product.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full group"
    >
      <div className="h-full bg-white rounded-[2rem] overflow-hidden border border-gray-100/60 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1 flex flex-col relative isolate">

        {/* Top Accent */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[var(--card-primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ '--card-primary': theme.primary }} />

        <div className="p-8 lg:p-10 flex flex-col flex-grow z-10">
          <div className="flex justify-between items-start mb-8">
            {/* Icon Box */}
            {['esds-ai', 'presale-agentic-ai', 'multi-agent-system', 'esds-supermemory'].includes(product.id) ? (
              <Link to={createPageUrl(`ProductDetail?id=${product.id}`)} className="block">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 bg-[var(--card-primary)] text-white shadow-lg shadow-[var(--card-primary)]/20 group-hover:scale-110 group-hover:shadow-xl"
                     style={{ '--card-primary': theme.primary }}>
                  <product.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
              </Link>
            ) : (
              <div className="block cursor-not-allowed">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 bg-[var(--card-primary)] text-white shadow-lg shadow-[var(--card-primary)]/20 opacity-80"
                     style={{ '--card-primary': theme.primary }}>
                  <product.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
              </div>
            )}

            {/* Badge & Status */}
            <div className="text-right">
              {product.badge && (
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md bg-gray-100 text-slate-500 group-hover:bg-[var(--card-accent)] group-hover:text-[var(--card-primary)] transition-all duration-300"
                      style={{ '--card-accent': theme.accent, '--card-primary': theme.primary }}>
                  {product.badge}
                </span>
              )}
              {product.status && (
                <p 
                  className="text-[10px] font-bold mt-2 uppercase tracking-widest"
                  style={{ color: theme.primary, opacity: 0.8 }}
                >
                  {product.status}
                </p>
              )}
            </div>
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-[var(--card-primary)] transition-colors duration-300"
              style={{ '--card-primary': theme.primary }}>
            {product.name.split('\n').map((line, i) => (
              <span key={i} className={i > 0 ? "block text-lg font-bold mt-1 opacity-90" : "block"}>
                {line}
              </span>
            ))}
          </h3>

          <p className="text-slate-600 leading-relaxed mb-12 flex-grow text-[15px] font-medium">
            {product.description}
          </p>

          {/* Highlights - Refined */}
          <div className="space-y-4 mb-10">
            {product.highlights.slice(0, 3).map((highlight, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
                <Sparkles className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity group-hover:animate-[spin_3s_linear_infinite]" style={{ color: theme.primary }} />
                <span className="font-medium">{highlight}</span>
              </div>
            ))}
          </div>

          {/* CTA - Button Style */}
          {['esds-ai', 'presale-agentic-ai', 'multi-agent-system', 'esds-supermemory'].includes(product.id) ? (
            <Link 
              to={createPageUrl(`ProductDetail?id=${product.id}`)}
              className="group/btn inline-flex items-center justify-between w-full px-6 py-4 rounded-xl bg-gray-50 hover:bg-[var(--card-primary)] hover:text-white transition-all duration-300"
              style={{ '--card-primary': theme.primary }}
            >
              <span className="text-sm font-bold uppercase tracking-wider text-slate-700 group-hover/btn:text-white transition-colors">Explore Solution</span>
              <ArrowRight className="w-5 h-5 text-[var(--card-primary)] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300" style={{ color: theme.primary }} />
            </Link>
          ) : product.id === 'llm-token-portal' ? (
            <button
              className="group/btn inline-flex items-center justify-between w-full px-6 py-4 rounded-xl bg-gray-50 hover:bg-[var(--card-primary)] hover:text-white transition-all duration-300"
              style={{ '--card-primary': theme.primary }}
              onClick={() => window.open(product.link, '_blank')}
            >
              <span className="text-sm font-bold uppercase tracking-wider text-slate-700 group-hover/btn:text-white transition-colors flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-[#00897B] animate-pulse group-hover/btn:bg-white"/> Live Metrics
              </span>
              <ArrowRight className="w-5 h-5 text-[var(--card-primary)] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300" style={{ color: theme.primary }} />
            </button>
          ) : (
            <div className="w-full px-6 py-4 rounded-xl bg-gray-50/80 text-center cursor-default">
              <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Coming Soon</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}