import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Sparkles, ArrowRight } from 'lucide-react';

interface WelcomePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WelcomePopup({ isOpen, onClose }: WelcomePopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 hover:bg-neutral-200 hover:text-neutral-700 transition-colors z-10"
            >
              <X size={16} />
            </button>

            <div className="p-1">
              <div className="bg-gradient-to-br from-brand-teal via-brand-green to-brand-gold rounded-2xl p-6 text-center text-white">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 mb-4"
                >
                  <Sparkles size={28} className="text-white" />
                </motion.div>
                <h2 className="font-heading text-2xl font-bold">Welcome!</h2>
                <p className="mt-2 text-white/90 text-sm">Complete a cleaning & exam and get</p>
                <p className="font-heading text-4xl font-bold mt-1">FREE WHITENING</p>
                <p className="text-white/80 text-xs mt-1">ask us about our whitening offer</p>
              </div>
            </div>

            <div className="p-6 text-center">
              <p className="text-neutral-600 text-sm mb-5">
                Welcoming new patients and refugee patients. Book a complete cleaning and exam and receive free teeth whitening!
              </p>
              <Link
                to="/booking"
                onClick={onClose}
                className="btn-primary w-full text-sm justify-center"
              >
                Book Now & Get Free Whitening <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
