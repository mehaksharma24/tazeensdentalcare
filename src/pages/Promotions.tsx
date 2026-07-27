import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FloatingTooth, FloatingToothbrush, FloatingMolar, FloatingSparkle, FloatingBubble } from '../components/FloatingElements';
import tw1 from '../assets/tw1.png';

export function Promotions() {
  return (
    <div className="overflow-hidden">
      <HeroBanner />
      <PromoCard />
    </div>
  );
}

function HeroBanner() {
  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(232,168,56,0.12) 0%, rgba(0,165,181,0.08) 50%, rgba(107,191,74,0.1) 100%)' }}>
      <FloatingTooth className="top-28 left-[6%]" delay={0} size={26} />
      <FloatingTooth className="bottom-10 right-[10%]" delay={2} size={20} />
      <FloatingToothbrush className="top-36 right-[15%]" delay={0.5} size={26} />
      <FloatingMolar className="top-44 left-[40%]" delay={1.2} size={20} />
      <FloatingBubble className="top-32 left-[15%]" size={35} color="#E8A838" delay={0} />
      <FloatingSparkle className="top-40 right-[25%]" delay={0.5} />
      <FloatingSparkle className="bottom-6 left-[30%]" delay={2} />

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/15 text-brand-gold-dark text-sm font-medium mb-4">
            <Tag size={14} /> Special Offers
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900">
            <span className="text-brand-gold-dark">Promotions</span>
          </h1>
          <p className="mt-3 text-neutral-600 max-w-md mx-auto">
            Take advantage of our current offers and save on quality dental care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PromoCard() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white to-brand-gold/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-gold/10"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <img
                src={tw1}
                alt="Teeth whitening offer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-gold text-white text-xs font-bold shadow-lg">
                <Sparkles size={12} /> Limited Time
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900">
                Ask Us About Our <span className="text-brand-gold-dark">Whitening Offer</span>
              </h2>
              <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
                Complete a full cleaning and exam, and receive <span className="font-semibold text-neutral-800">FREE teeth whitening</span> — a brighter, healthier smile in one visit. Welcoming new patients and refugee patients.
              </p>
              <p className="mt-3 text-neutral-500 text-xs italic">
                Limited time offer. Cannot be combined with other offers. Ask our team for details.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/booking" className="btn-primary text-sm">
                  Book Now <ArrowRight size={14} className="ml-2" />
                </Link>
                <a href="tel:+19059998144" className="btn-secondary text-sm">
                  Call 905-999-8144
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
