import { motion } from 'framer-motion';
import { ArrowRight, Award, CheckCircle, Droplets, Shield, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import gbt1 from '../assets/gbt1.png';
import gbt2 from '../assets/gbt2.png';
import gbt3 from '../assets/gbt3.png';
import { FloatingBubble, FloatingMirror, FloatingMolar, FloatingSparkle, FloatingTooth, FloatingToothbrush } from '../components/FloatingElements';
import { ImageSlideshow } from '../components/ImageSlideshow';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function GBT() {
  return (
    <div className="overflow-hidden">
      <HeroBanner />
      <GbtImageBody>
        <AnimatedIntro />
        <StepsSection />
        <BenefitsSection />
      </GbtImageBody>
      <CTASection />
    </div>
  );
}

function HeroBanner() {
  return (
    <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(0,165,181,0.12) 0%, rgba(107,191,74,0.08) 50%, rgba(232,168,56,0.08) 100%)' }}>
      <FloatingTooth className="top-28 left-[8%]" delay={0} size={30} />
      <FloatingTooth className="top-48 right-[10%]" delay={1.5} size={22} />
      <FloatingToothbrush className="top-32 right-[25%]" delay={0.5} size={28} />
      <FloatingMirror className="bottom-16 left-[12%]" delay={2} size={24} />
      <FloatingMolar className="top-40 left-[40%]" delay={1.2} size={20} />
      <FloatingBubble className="top-32 left-[10%]" size={30} color="#00A5B5" delay={0} />
      <FloatingBubble className="top-40 right-[15%]" size={50} color="#6BBF4A" delay={1} />
      <FloatingSparkle className="top-48 left-[50%]" delay={0.5} />
      <FloatingSparkle className="bottom-12 right-[30%]" delay={2} />

      {/* Animated airflow particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{ left: `${5 + (i * 4.5)}%`, top: `${30 + Math.sin(i * 0.8) * 20}%`, background: i % 3 === 0 ? '#00A5B5' : i % 3 === 1 ? '#6BBF4A' : '#E8A838', opacity: 0.25 }}
            animate={{ y: [0, -40, 0], x: [0, 15, 0], opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 3 + i * 0.2, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}>
        <div className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-brand-gold/15 text-brand-gold-dark text-xl font-bold mb-5 border border-brand-gold/20">   <Star size={14} className="fill-brand-gold-dark" /> GBT Guided Clinic in Milton
          </div>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900">
          Guided Biofilm <span className="text-brand-teal">Therapy</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="mt-5 text-neutral-600 max-w-xl mx-auto text-xl">
          The future of dental cleaning is here.
        </motion.p>
      </div>
    </section>
  );
}

function GbtImageBody({ children }) {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${gbt1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-white/80" />
      <div className="relative">{children}</div>
    </div>
  );
}

function AnimatedIntro() {
  const { ref, isVisible } = useScrollAnimation();

  const lines = [
    { text: 'No scraping, scratching or discomfort', delay: 0 },
   
  ];

  const features = [
    'More comfortable than traditional methods',
    'Less abrasive on teeth and gums',
    'Highly effective at reaching difficult areas',
    'Removes ALL stains and biofilm',
    'Painless and comfortable',
    'Reduces inflammation and bleeding',
  ];

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-6">
            {lines.map((line, i) => (
              <motion.h2
                key={i}
                initial={{ opacity: 0, x: -40 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: line.delay }}
                className="font-heading text-3xl md:text-4xl font-bold text-neutral-900"
              >
                {line.text}
              </motion.h2>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-neutral-600 text-xl leading-relaxed"
          >
            Guided Biofilm Therapy is an advanced cleaning technique that removes plaque and harmful bacteria using airflow technology. Unlike traditional methods, it's gentle yet incredibly effective.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-5 space-y-2"
          >
            {features.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }}
                className="flex items-center gap-2.5 text-lg text-neutral-700"
              >
                <span className="w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0">
                  <CheckCircle size={12} className="text-brand-teal" />
                </span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white h-[380px]">
            {/* Replace with your own images in /assets/images/gbt/ */}
            <ImageSlideshow
              images={[
                gbt1,
                gbt2,
                gbt3,
              ]}
              alt="GBT Treatment"
              interval={4000}
              className="h-full"
            />
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-brand-teal/40"
                style={{ left: `${20 + i * 8}%`, top: '55%' }}
                animate={{ x: [0, 60, 120], y: [0, -10 * Math.sin(i), 0], opacity: [0, 0.7, 0], scale: [0.5, 1, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.25 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StepsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const steps = [
    { step: '01', title: 'ASSESS', desc: 'Disclosing solution reveals invisible biofilm — showing exactly where bacteria hide.', color: '#00A5B5' },
    { step: '02', title: 'AIRFLOW', desc: 'Warm water, air, and fine powder gently removes all biofilm, stains, and soft deposits.', color: '#6BBF4A' },
    { step: '03', title: 'PERIOFLOW', desc: 'For deeper pockets, safely cleans below the gumline where bacteria thrive.', color: '#E8A838' },
    { step: '04', title: 'PIEZON', desc: 'Remaining calculus removed with NO PAIN ultrasonic technology — minimal contact.', color: '#00A5B5' },
    { step: '05', title: 'CHECK', desc: 'Final quality verification ensures complete, thorough clean.', color: '#6BBF4A' },
  ];

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-4xl mx-auto rounded-[2.5rem] overflow-hidden relative p-6 md:p-12" style={{ background: 'linear-gradient(135deg, #052E35 0%, #0A424B 60%, #0E3A2E 100%)' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-white">The <span className="text-brand-green-light">5-Step</span> Protocol</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-teal via-brand-green to-brand-gold opacity-30 hidden md:block" />

          <div className="space-y-4">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 flex items-start gap-4 hover:bg-white/10 hover:-translate-y-0.5 transition-all border border-white/10 md:ml-10"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${item.color}25`, border: `2px solid ${item.color}50` }}>
                  <span className="font-heading font-bold text-lg" style={{ color: item.color === '#00A5B5' ? '#4DD9E5' : item.color === '#6BBF4A' ? '#8FD670' : '#F5C86A' }}>{item.step}</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-sm tracking-wide">{item.title}</h3>
                  <p className="text-neutral-300 text-lg mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const benefits = [
    { icon: Droplets, title: 'Painless & Comfortable', desc: 'No harsh scraping ever' },
    { icon: Zap, title: 'Removes ALL Stains', desc: 'Better than traditional polish' },
    { icon: Shield, title: 'Preserves Enamel', desc: 'Non-abrasive technology' },
    { icon: Star, title: 'Reduces Bleeding', desc: 'Less inflammation' },
  ];

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900">Why <span className="text-brand-teal">GBT</span>?</h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.4, type: 'spring' }}
              className="card border border-neutral-100 text-center hover:-translate-y-1"
            >
              <motion.div
                animate={isVisible ? { rotate: [0, 10, -10, 0] } : {}}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center mx-auto mb-3"
              >
                <item.icon size={22} className="text-brand-teal" />
              </motion.div>
              <h3 className="font-heading font-semibold text-lg text-neutral-800">{item.title}</h3>
              <p className="mt-1 text-lg text-neutral-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto rounded-3xl p-8 md:p-10 text-center text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #00A5B5 0%, #008A97 50%, #4A9E2F 100%)' }}>
        {[...Array(6)].map((_, i) => (
          <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-white/20" style={{ left: `${15 + i * 12}%`, top: '20%' }} animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }} />
        ))}
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-lg font-medium mb-3">
            <Award size={14} /> Advanced GBT Technology
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold">Experience the Future of Dental Cleaning</h2>
          <p className="mt-3 text-white/80 text-lg">Book your GBT appointment today and feel the difference.</p>
          <Link to="/booking" className="btn-accent mt-6 inline-flex">
            Book GBT Appointment <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
