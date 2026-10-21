import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BrainCircuit, Save, Search, Trash2, Loader2, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};


export default function SupermemoryPlayground() {
  const [memory, setMemory] = useLocalStorage('supermemory_playground', {});
  
  const [storeKey, setStoreKey] = useState('user_name');
  const [storeValue, setStoreValue] = useState('Alex');
  const [retrieveKey, setRetrieveKey] = useState('user_name');
  const [retrievedValue, setRetrievedValue] = useState(null);
  
  const [isStoring, setIsStoring] = useState(false);
  const [isRetrieving, setIsRetrieving] = useState(false);
  const [showStored, setShowStored] = useState(false);

  const handleStore = () => {
    if (!storeKey || !storeValue) return;
    setIsStoring(true);
    setRetrievedValue(null);
    setTimeout(() => {
      setMemory(prev => ({ ...prev, [storeKey]: storeValue }));
      setIsStoring(false);
      setShowStored(true);
      setTimeout(() => setShowStored(false), 2000);
    }, 1000);
  };

  const handleRetrieve = () => {
    if (!retrieveKey) return;
    setIsRetrieving(true);
    setRetrievedValue(null);
    setTimeout(() => {
      const value = memory[retrieveKey] || 'null (not found)';
      setRetrievedValue(value);
      setIsRetrieving(false);
    }, 1000);
  };
  
  const handleClear = () => {
    setMemory({});
    setRetrievedValue(null);
  }

  return (
    <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 h-full flex flex-col gap-6">
       <div className="flex items-center gap-3">
        <BrainCircuit className="w-6 h-6 text-emerald-600" />
        <h3 className="text-xl font-bold text-slate-800">ESDS Supermemory Chat Demo</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Store Section */}
        <div className="space-y-4 p-6 bg-white rounded-lg border">
          <h4 className="font-bold text-slate-700 flex items-center gap-2"><Save className="w-4 h-4"/> Store in Memory</h4>
          <Input 
            placeholder="Memory Key (e.g., user_preference)"
            value={storeKey}
            onChange={(e) => setStoreKey(e.target.value)}
          />
          <Input 
            placeholder="Memory Value (e.g., dark_mode)"
            value={storeValue}
            onChange={(e) => setStoreValue(e.target.value)}
          />
          <Button onClick={handleStore} disabled={isStoring} className="w-full bg-emerald-600 hover:bg-emerald-700">
            {isStoring ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : (
                <AnimatePresence mode="wait" initial={false}>
                    {showStored ? (
                         <motion.div key="stored" initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: 10}} className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4" /> Stored!
                         </motion.div>
                    ) : (
                        <motion.span key="store" className="flex items-center">
                            Store Memory
                        </motion.span>
                    )}
                </AnimatePresence>
            )}
          </Button>
        </div>
        
        {/* Retrieve Section */}
        <div className="space-y-4 p-6 bg-white rounded-lg border">
          <h4 className="font-bold text-slate-700 flex items-center gap-2"><Search className="w-4 h-4"/> Retrieve from Memory</h4>
          <Input
            placeholder="Memory Key to retrieve"
            value={retrieveKey}
            onChange={(e) => setRetrieveKey(e.target.value)}
          />
          <Button onClick={handleRetrieve} disabled={isRetrieving} className="w-full">
            {isRetrieving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Retrieve Memory'}
          </Button>
          {retrievedValue !== null && (
            <div className="p-3 bg-slate-100 rounded text-center">
              <p className="text-sm text-slate-500 mb-1">Retrieved Value:</p>
              <p className="font-mono font-bold text-slate-800 break-all">"{retrievedValue}"</p>
            </div>
          )}
        </div>
      </div>
      
       <div className="border-t pt-4 flex justify-between items-center">
        <p className="text-xs text-slate-500">
          Memory is stored in your browser's local storage for this demo.
        </p>
        <Button onClick={handleClear} variant="ghost" size="sm" className="text-slate-500 hover:bg-slate-200">
            <Trash2 className="w-4 h-4 mr-2" /> Clear All Memories
        </Button>
       </div>
    </div>
  );
}