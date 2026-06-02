import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import logoImage from '../assets/logo.png';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1800),
      setTimeout(() => onComplete(), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #008A97 0%, #00A5B5 30%, #4DD9E5 60%, #6BBF4A 100%)' }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated bubbles background */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 10 + Math.random() * 30,
              height: 10 + Math.random() * 30,
              left: `${Math.random() * 100}%`,
              bottom: '-10%',
              background: 'rgba(255,255,255,0.15)',
            }}
            animate={{
              y: [0, -(window.innerHeight + 100)],
              x: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeOut',
            }}
          />
        ))}

        <div className="relative flex flex-col items-center">
          {/* Logo image - replace /src/assets/image.png with your logo */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={phase >= 1 ? { scale: 1, rotate: 0 } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="mb-6"
          >
            <motion.img
              src={logoImage}
              alt="Tazeen's Dental Care"
              className="w-48 md:w-60 h-auto drop-shadow-2xl"
              style={{ mixBlendMode: 'screen' }}
              animate={phase >= 2 ? { y: [0, -8, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Sparkles bursting out */}
          {phase >= 2 && (
            <>
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0],
                    x: Math.cos((i * Math.PI * 2) / 12) * 100 - 8,
                    y: Math.sin((i * Math.PI * 2) / 12) * 100 - 8,
                  }}
                  transition={{ duration: 0.8, delay: i * 0.03 }}
                >
                  <GoldSparkle />
                </motion.div>
              ))}
            </>
          )}

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-white/80 mt-2 text-sm tracking-wide text-center"
          >
            We go the extra mile to make you smile
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function GoldSparkle() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="#E8A838" />
    </svg>
  );
}
