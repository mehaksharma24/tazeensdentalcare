import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Sparkles, ArrowRight } from 'lucide-react';

export function FloatingCTA() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-white rounded-2xl shadow-2xl border border-brand-teal/10 w-72 overflow-hidden"
      >
        <div className="p-4">
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-3 right-3 w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            <X size={12} />
          </button>
          <div className="flex items-center gap-2 mb-3">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles size={18} className="text-brand-gold-dark" />
            </motion.div>
            <p className="font-heading font-bold text-sm text-neutral-900">Special Offers</p>
          </div>
          <div className="space-y-2">
            <Link
              to="/cdcp"
              className="block px-4 py-3 rounded-xl bg-brand-teal/5 border border-brand-teal/10 hover:bg-brand-teal/10 transition-colors"
            >
              <p className="font-semibold text-sm text-brand-teal">Learn more about CDCP</p>
              <p className="text-xs text-neutral-500 mt-0.5">Free dental care for eligible Canadians</p>
            </Link>
            <Link
              to="/booking"
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-brand-gold/5 border border-brand-gold/10 hover:bg-brand-gold/10 transition-colors"
            >
              <div>
                <p className="font-semibold text-sm text-brand-gold-dark">Free whitening offer</p>
                <p className="text-xs text-neutral-500 mt-0.5">With a complete cleaning & exam</p>
              </div>
              <ArrowRight size={14} className="text-brand-gold-dark" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
