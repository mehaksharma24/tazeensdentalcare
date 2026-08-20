import { motion } from 'framer-motion';

export function FloatingTooth({ className = '', delay = 0, size = 28 }: { className?: string; delay?: number; size?: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 5, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      <svg width={size} height={size * 1.2} viewBox="0 0 24 30" fill="none" opacity="0.2">
        <path
          d="M12 1C9 1 7 3 6.5 5C6 7 5 7.5 3.5 9C2 10.5 2.5 12.5 3.5 14C4.5 15.5 5 17.5 5.5 20C6 22.5 6.5 25 7.5 27C8.5 29 9.5 29 10.5 27C11.5 25 12 22 12.5 20C13 18 14 18 14.5 20C15 22 15.5 25 16.5 27C17.5 29 18.5 29 19.5 27C20.5 25 21 22.5 21.5 20C22 17.5 22.5 15.5 23.5 14C24.5 12.5 25 10.5 23.5 9C22 7.5 21 7 20.5 5C20 3 18 1 12 1Z"
          fill="#00A5B5"
        />
      </svg>
    </motion.div>
  );
}
export const FloatingStar = () => {
  return (
    <img
      src="/path/to/star.png"
      className="floating-element"
      alt="star"
    />
  );
};

export function FloatingToothbrush({ className = '', delay = 0, size = 28 }: { className?: string; delay?: number; size?: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{ y: [0, -12, 0], rotate: [-15, 15, -15] }}
      transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity="0.18">
        <rect x="4" y="11" width="16" height="3" rx="1.5" fill="#6BBF4A" />
        <rect x="2" y="10" width="4" height="5" rx="2" fill="#6BBF4A" />
        <rect x="18" y="11.5" width="4" height="2" rx="1" fill="#00A5B5" />
        <rect x="5" y="9" width="1.5" height="2" rx="0.5" fill="#6BBF4A" />
        <rect x="7.5" y="9" width="1.5" height="2" rx="0.5" fill="#6BBF4A" />
        <rect x="10" y="9" width="1.5" height="2" rx="0.5" fill="#6BBF4A" />
        <rect x="12.5" y="9" width="1.5" height="2" rx="0.5" fill="#6BBF4A" />
      </svg>
    </motion.div>
  );
}

export function FloatingMirror({ className = '', delay = 0, size = 24 }: { className?: string; delay?: number; size?: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{ y: [0, -10, 0], rotate: [0, -8, 8, 0] }}
      transition={{ duration: 7, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity="0.18">
        <circle cx="12" cy="8" r="6" stroke="#00A5B5" strokeWidth="2" fill="none" />
        <circle cx="12" cy="8" r="4" fill="#00A5B5" opacity="0.3" />
        <rect x="11" y="14" width="2" height="9" rx="1" fill="#E8A838" />
      </svg>
    </motion.div>
  );
}

export function FloatingDenture({ className = '', delay = 0, size = 26 }: { className?: string; delay?: number; size?: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{ y: [0, -18, 0], x: [0, 5, 0] }}
      transition={{ duration: 8, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity="0.15">
        <path d="M4 12C4 8 6 5 12 5C18 5 20 8 20 12C20 14 19 15 18 15C17 15 16.5 14 16 13C15.5 12 15 11 14 11C13 11 12.5 12 12 13C11.5 14 11 15 10 15C9 15 8.5 14 8 13C7.5 12 7 11 6 15C5 19 4 16 4 12Z" fill="#E8A838" />
        <rect x="8" y="7" width="1.5" height="3" rx="0.75" fill="white" />
        <rect x="10.5" y="7" width="1.5" height="3" rx="0.75" fill="white" />
        <rect x="13" y="7" width="1.5" height="3" rx="0.75" fill="white" />
        <rect x="15.5" y="7" width="1.5" height="3" rx="0.75" fill="white" />
      </svg>
    </motion.div>
  );
}

export function FloatingMolar({ className = '', delay = 0, size = 22 }: { className?: string; delay?: number; size?: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 5.5, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity="0.2">
        <path d="M8 4C6 4 5 6 5 8C5 10 6 11 6 13C6 15 5 17 5.5 19C6 21 7 21 8 19C9 17 9.5 15 10 14C10.5 13 11 13 11.5 14C12 15 12.5 17 13.5 19C14.5 21 15.5 21 16 19C16.5 17 16 15 16.5 13C17 11 18 10 18 8C18 6 17 4 15 4C13 4 12.5 5 12 5C11.5 5 11 4 8 4Z" fill="#00A5B5" />
      </svg>
    </motion.div>
  );
}

export function FloatingBubble({ className = '', size = 20, color = '#00A5B5', delay = 0 }: {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none rounded-full ${className}`}
      style={{ width: size, height: size, background: color, opacity: 0.12 }}
      animate={{ y: [0, -20, 0], x: [0, 8, 0], scale: [1, 1.15, 1] }}
      transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  );
}

export function FloatingSparkle({ className = '', delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.3, 0.8], rotate: [0, 180, 360] }}
      transition={{ duration: 3, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="#E8A838" />
      </svg>
    </motion.div>
  );
}

export function WaveBanner({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute bottom-0 left-0 w-[200%] h-24 animate-wave-flow">
        <svg viewBox="0 0 2880 120" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60C1680 20 1920 100 2160 60C2400 20 2640 100 2880 60V120H0V60Z"
            fill="url(#wave-grad)"
            opacity="0.1"
          />
          <path
            d="M0 80C200 50 400 110 600 80C800 50 1000 110 1200 80C1400 50 1600 110 1800 80C2000 50 2200 110 2400 80C2600 50 2800 110 2880 80V120H0V80Z"
            fill="url(#wave-grad)"
            opacity="0.06"
          />
          <defs>
            <linearGradient id="wave-grad" x1="0" y1="0" x2="2880" y2="0">
              <stop stopColor="#00A5B5" />
              <stop offset="0.4" stopColor="#6BBF4A" />
              <stop offset="0.7" stopColor="#E8A838" />
              <stop offset="1" stopColor="#00A5B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
