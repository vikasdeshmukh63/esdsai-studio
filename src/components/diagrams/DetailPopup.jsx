import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, FileText } from 'lucide-react';

export default function DetailPopup({ detail, onClose }) {
  if (!detail) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b sticky top-0 bg-white/80 backdrop-blur-sm z-10">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-800">{detail.title}</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-slate-600 mt-2">{detail.description}</p>
          </div>

          <div className="p-6 space-y-6">
            {detail.docs && (
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-emerald-600" />
                  Documentation
                </h3>
                <p className="text-slate-600 prose prose-sm max-w-none">{detail.docs}</p>
              </div>
            )}

            {detail.code && (
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <Code className="w-5 h-5 text-emerald-600" />
                  Code Example
                </h3>
                <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-slate-100"><code>{detail.code}</code></pre>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}