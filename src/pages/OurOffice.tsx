import { AnimatePresence, motion } from 'framer-motion';
import {
  BadgeCheck,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Expand,
  HeartHandshake,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Plus,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  Timer,
  UserRound,
  Users,
  Waves,
  X,
} from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import {
  FloatingBubble,
  FloatingDenture,
  FloatingMirror,
  FloatingMolar,
  FloatingSparkle,
  FloatingStar,
  FloatingTooth,
  FloatingToothbrush,
} from '../components/FloatingElements';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

import cl1 from '../assets/cl1.png';
import cl2 from '../assets/cl2.png';
import cl3 from '../assets/cl3.png';
import cl4 from '../assets/cl4.png';
import cl5 from '../assets/cl5.png';
import cl6 from '../assets/cl6.png';
import cl7 from '../assets/cl7.png';

const galleryImages = [cl1, cl2, cl3, cl4, cl5, cl6, cl7];

export function OurOffice() {
  return (
    <div className="overflow-hidden">
      <PageBackdrop />
      <HeroBanner />
      <StatsStrip />
      <AboutOffice />
      <FeatureCards />
     
      <GallerySlider />
      <TechnologySection />
    
      <PreventionSection />
      <FaqSection />
    
      <FinalCta />
    </div>
  );
}

/* ---------- Shared page backdrop ---------- */

function PageBackdrop() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      <img
        src={cl5}
        alt=""
        className="w-full h-full object-cover blur-[2px] scale-105 brightness-110 contrast-105 saturate-110"
      />
      <div className="absolute inset-0 bg-white/75" />
    </div>
  );
}

/* ---------- Light section backdrop (used on a few key sections) ---------- */

function SectionBackdrop({ src, overlay = 'bg-white/88' }: { src: string; overlay?: string }) {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      <img src={src} alt="" className="w-full h-full object-cover" />
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}

/* ---------- Hero ---------- */

function HeroBanner() {
  return (
    <section
      className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgba(0,165,181,0.14) 0%, rgba(107,191,74,0.1) 50%, rgba(232,168,56,0.1) 100%)' }}
    >
      <FloatingTooth className="top-28 left-[6%]" delay={0} size={28} />
      <FloatingTooth className="bottom-10 right-[8%]" delay={2} size={22} />
      <FloatingToothbrush className="top-36 right-[12%]" delay={0.5} size={26} />
      <FloatingMirror className="bottom-8 left-[20%]" delay={1.5} size={22} />
      <FloatingMolar className="top-44 left-[45%]" delay={1} size={20} />
      <FloatingDenture className="top-32 right-[35%]" delay={2.5} size={24} />
      <FloatingBubble className="top-32 left-[10%]" size={40} color="#00A5B5" delay={0} />
      <FloatingSparkle className="top-40 right-[20%]" delay={1} />

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur border border-brand-teal/20 text-xs font-semibold text-brand-teal-dark mb-5">
            <Sparkles size={13} /> Family dentistry in Milton, ON
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-neutral-900 leading-tight">
            Our <span className="text-brand-teal">Clinic</span>
          </h1>
          <p className="mt-4 text-neutral-600 max-w-lg mx-auto text-base">
            A fun, colourful space where families actually enjoy coming to the dentist. Modern care, gentle hands, and a
            welcoming team for every smile.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a href="#booking" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-teal text-white font-semibold text-lg shadow-lg shadow-brand-teal/30 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              <Calendar size={16} /> Book a visit
            </a>
            <a href="#gallery" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-brand-teal-dark font-semibold text-lg border border-brand-teal/20 hover:border-brand-teal/40 hover:-translate-y-0.5 transition-all">
              <Expand size={16} /> Tour the office
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Stats ---------- */

function StatsStrip() {
  const stats = [
    { value: '10+', label: 'Years of care', icon: Stethoscope },
    { value: '5,000+', label: 'Happy smiles', icon: Smile },
    { value: 'All ages', label: 'Family friendly', icon: Users },
    { value: 'CDCP', label: 'Plan accepted', icon: ShieldCheck },
  ];
  return (
    <section className="relative -mt-10 z-10">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white rounded-3xl shadow-xl border border-brand-teal/10 p-4 md:p-6"
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex flex-col items-center text-center gap-1.5"
              >
                <span className="w-11 h-11 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-1">
                  <Icon size={20} />
                </span>
                <span className="font-heading text-xl md:text-2xl font-bold text-neutral-900">{s.value}</span>
                <span className="text-xs text-neutral-500">{s.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */

function AboutOffice() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section
      ref={ref}
      className="section-padding"
      style={{ background: 'linear-gradient(135deg, rgba(107,191,74,0.06) 0%, rgba(0,165,181,0.04) 100%)' }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-brand-teal/10"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-brand-teal mb-2">Our story</span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Welcome to <span className="text-brand-teal">Tazeen’s Dental Care</span>
          </h2>
          <p className="text-neutral-600 text-2xl leading-relaxed mb-3">Located at 108-400 Bronte Street South, Milton, Ontario.</p>
          <p className="text-neutral-600 text-lg leading-relaxed mb-3">
            Welcome to Tazeen Dental Care — a modern, family-focused dental clinic in Milton designed to feel welcoming from
            the moment you walk in. This is not your typical dental office; it’s a calm, friendly space built for patients of
            all ages, from young children to seniors, where comfort, communication, and care come first. The clinic combines
            advanced technology with a gentle approach, including AIRFLOW GBT cleaning systems for a more comfortable,
            minimally invasive experience. With convenient hours, free parking, and a supportive front desk team, every visit
            is designed to be smooth and stress-free.
          </p>
          <p className="text-neutral-600 text-lg leading-relaxed">
            At the heart of the clinic is a strong, patient-centered team led by founder Tazeen, a Registered Dental Hygienist
            who built the practice on the belief that comfort is part of the cure, alongside clinicians such as Dr. Nazia Mian,
            who brings a gentle, detail-oriented approach and a focus on clear communication. Together, the team delivers
            consistent, high-quality care in a child-friendly, family-oriented environment. The clinic also proudly supports
            new patients and participates in programs like the Canadian Dental Care Plan (CDCP), making accessible,
            compassionate dentistry available to more members of the community.
          </p>

          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            <MiniStat icon={MapPin} label="Milton, ON" sub="Free parking on site" />
            <MiniStat icon={Clock} label="Evening & weekend" sub="Flexible hours" />
            <MiniStat icon={HeartHandshake} label="New patients" sub="Always welcome" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MiniStat({ icon: Icon, label, sub }: { icon: typeof MapPin; label: string; sub: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-brand-teal/5 border border-brand-teal/10 p-3">
      <span className="w-9 h-9 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0">
        <Icon size={16} />
      </span>
      <div>
        <p className="text-sm font-semibold text-neutral-900 leading-tight">{label}</p>
        <p className="text-xs text-neutral-500">{sub}</p>
      </div>
    </div>
  );
}

/* ---------- Features ---------- */

function FeatureCards() {
  const { ref, isVisible } = useScrollAnimation();
  const features = [
    { icon: Sparkles, title: 'AIRFLOW GBT Cleaning', desc: 'A gentler, minimally invasive hygiene experience that is comfortable for sensitive teeth and gums.', color: 'teal' },
    { icon: Users, title: 'Care for All Ages', desc: 'From first checkups for toddlers to senior care, our team adapts to every stage of life.', color: 'green' },
    { icon: ShieldCheck, title: 'CDCP Accepted', desc: 'We proudly participate in the Canadian Dental Care Plan so more families can access quality dentistry.', color: 'amber' },
    { icon: HeartHandshake, title: 'Comfort-First', desc: 'Clear communication, unhurried appointments, and a calming space designed around how you feel.', color: 'teal' },
  ];
  const colorMap: Record<string, string> = {
    teal: 'bg-brand-teal/10 text-brand-teal',
    green: 'bg-brand-green/15 text-brand-green',
    amber: 'bg-brand-amber/15 text-brand-amber',
  };
  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-brand-teal/15 backdrop-blur-md" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Why families choose us"
          title={<>More than a <span className="text-brand-teal">dental visit</span></>}
          subtitle="Thoughtful details that make each appointment calmer, clearer, and genuinely pleasant."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-white border border-neutral-200 p-6 transition-colors hover:border-brand-teal/30 hover:shadow-xl"
              >
                <span className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${colorMap[f.color]} group-hover:scale-110 transition-transform`}>
                  <Icon size={22} />
                </span>
                <h3 className="font-heading text-lg font-bold text-neutral-900 mb-2">{f.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */

function ServicesGrid() {
  const { ref, isVisible } = useScrollAnimation();
  const services = [
    { icon: Sparkles, title: 'Hygiene & Cleaning', desc: 'Thorough AIRFLOW GBT cleanings tailored to your gums and enamel.' },
    { icon: Smile, title: 'Cosmetic Dentistry', desc: 'Whitening, bonding, and smile makeovers for a confident look.' },
    { icon: Stethoscope, title: 'Family Dentistry', desc: 'Comprehensive care for kids, teens, adults, and seniors.' },
    { icon: Syringe, title: 'Restorative Care', desc: 'Fillings, crowns, and bridges to rebuild and protect your teeth.' },
    { icon: ShieldCheck, title: 'Preventive Care', desc: 'Sealants, fluoride, and education to keep problems away.' },
    { icon: HeartHandshake, title: 'Pediatric Visits', desc: 'Gentle first visits in a child-friendly, fun environment.' },
  ];
  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      <SectionBackdrop src="https://images.pexels.com/photos/4269355/pexels-photo-4269355.jpeg?auto=compress&cs=tinysrgb&w=1600" overlay="bg-white/90" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="What we offer"
          title={<>Services for <span className="text-brand-teal">every smile</span></>}
          subtitle="From routine cleanings to complete smile makeovers, your whole family is covered under one roof."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group flex gap-4 rounded-3xl bg-white border border-neutral-200 p-5 hover:border-brand-teal/30 hover:shadow-lg transition-all"
              >
                <span className="w-12 h-12 rounded-2xl bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white transition-all">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-neutral-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */

function GallerySlider() {
  const { ref, isVisible } = useScrollAnimation();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? prev : (prev + galleryImages.length - 1) % galleryImages.length));
  }, []);
  const showNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % galleryImages.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, showPrev, showNext]);

  return (
    <section id="gallery" ref={ref} className="section-padding bg-gradient-to-b from-white to-brand-teal/5">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Take a look around"
          title={<>Inside our <span className="text-brand-teal">clinic</span></>}
          subtitle="A bright, welcoming space designed to put every patient at ease the moment they arrive."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[175px] gap-3"
        >
          {galleryImages.map((img, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setLightboxIndex(i)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className={`group relative overflow-hidden rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-brand-teal ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              } ${i === 5 ? 'md:col-span-2' : ''} ${i === 6 ? 'col-span-2 md:col-span-2' : ''}`}
            >
              <img
                src={img}
                alt={`Our Office ${i + 1}`}
                className="w-full h-full object-cover brightness-110 contrast-110 saturate-125 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/30 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-11 h-11 rounded-full bg-white/90 flex items-center justify-center text-brand-teal shadow-lg">
                  <Expand size={18} />
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" onClick={() => setLightboxIndex(null)}>
              <X size={20} />
            </button>
            <button className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" onClick={(e) => { e.stopPropagation(); showPrev(); }}>
              <ChevronLeft size={22} />
            </button>
            <button className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" onClick={(e) => { e.stopPropagation(); showNext(); }}>
              <ChevronRight size={22} />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              src={galleryImages[lightboxIndex]}
              alt={`Our Office ${lightboxIndex + 1}`}
              className="max-w-full max-h-[70vh] rounded-xl object-contain shadow-2xl brightness-110 contrast-110 saturate-125"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="mt-4 text-white/70 text-sm">{lightboxIndex + 1} / {galleryImages.length}</p>
            <div className="mt-3 flex gap-2 overflow-x-auto max-w-full pb-1" onClick={(e) => e.stopPropagation()}>
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${i === lightboxIndex ? 'border-brand-teal opacity-100' : 'border-transparent opacity-50 hover:opacity-80'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover brightness-110 contrast-110 saturate-125" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------- Technology ---------- */

function TechnologySection() {
  const { ref, isVisible } = useScrollAnimation();
  const tech = [
    { icon: Waves, title: 'AIRFLOW GBT', desc: 'Warm-water powder system for gentle, thorough stain and biofilm removal.' },
    { icon: Monitor, title: 'Digital Imaging', desc: 'Low-radiation digital X-rays with instant, clear results on screen.' },
    { icon: Timer, title: 'Efficient Visits', desc: 'Modern scheduling and on-time appointments that respect your day.' },
    { icon: BadgeCheck, title: 'Sterilization', desc: 'Hospital-grade instrument cleaning and strict safety protocols.' },
  ];
  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-brand-teal/15 backdrop-blur-md" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Modern tools, gentle touch"
          title={<>Technology that <span className="text-brand-teal">cares</span></>}
          subtitle="We invest in equipment that makes visits faster, safer, and more comfortable for you."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tech.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-3xl bg-white border border-neutral-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-teal/15 to-brand-green/15 text-brand-teal flex items-center justify-center mb-4">
                  <Icon size={22} />
                </span>
                <h3 className="font-heading text-base font-bold text-neutral-900 mb-2">{t.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{t.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ---------- Prevention ---------- */

function PreventionSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="section-padding bg-neutral-50">
      <div className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden p-6 md:p-12 grid lg:grid-cols-2 gap-10 items-center" style={{ background: 'linear-gradient(135deg, #052E35 0%, #0A424B 60%, #0E3A2E 100%)' }}>
        <motion.div initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20">
          <img src={cl6} alt="Built on prevention" className="w-full h-[320px] object-cover" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          <h2 className="font-heading text-3xl font-bold text-white">
            Built on <span className="text-brand-green-light">Prevention</span>, Not Just Procedures
          </h2>
          <p className="mt-4 text-neutral-300 text-sm leading-relaxed">
            In many traditional dental offices, hygiene appointments are shorter and treated as routine. At Tazeen’s, hygiene
            is the foundation of everything we do.
          </p>
          <ul className="mt-5 space-y-3">
            {[
              'We spend more time on each cleaning for thorough care',
              'We focus on preserving your natural teeth as long as possible',
              'We prioritize gum health, critical for overall oral health',
              'We provide personalized education tailored to your habits',
            ].map((item, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -15 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-green/25 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle size={14} className="text-brand-green-light" />
                </span>
                <span className="text-neutral-200 text-sm">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function FaqSection() {
  const { ref, isVisible } = useScrollAnimation();
  const faqs = [
    { q: 'Do you see children?', a: 'Yes! We are a family-friendly clinic and welcome patients of every age, from a child first checkup through to senior care.' },
    { q: 'What is AIRFLOW GBT cleaning?', a: 'It is a gentle, minimally invasive hygiene system that uses warm water and powder to clean teeth and gums comfortably — ideal for sensitive patients.' },
    { q: 'Do you accept the Canadian Dental Care Plan (CDCP)?', a: 'We do. We proudly participate in the CDCP to help make quality dental care accessible to more members of our community.' },
    { q: 'Where are you located and is there parking?', a: 'We are at 108-400 Bronte Street South, Milton, Ontario, with free parking on site and convenient evening and weekend hours.' },
    { q: 'How do I book my first appointment?', a: 'Call us or use the booking section above. Our front desk team will help you find a time that fits your schedule.' },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} className="section-padding bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Good to know"
          title={<>Frequently asked <span className="text-brand-teal">questions</span></>}
          subtitle="Everything you might wonder before your first visit."
        />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`rounded-2xl border transition-colors ${isOpen ? 'border-brand-teal/30 bg-brand-teal/5' : 'border-neutral-200 bg-white'}`}>
                <button type="button" onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                  <span className="font-heading text-base font-semibold text-neutral-900">{f.q}</span>
                  <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-brand-teal text-white rotate-180' : 'bg-white text-brand-teal border border-brand-teal/20'}`}>
                    <ChevronDown size={16} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Booking CTA ---------- */

function BookingCTA() {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: '', phone: '', service: 'Hygiene & Cleaning', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" ref={ref} className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #00A5B5 0%, #6BBF4A 100%)' }}
          >
            <FloatingBubble className="top-6 left-[8%]" size={50} color="#ffffff" delay={0} />
            <FloatingBubble className="bottom-8 right-[10%]" size={36} color="#ffffff" delay={1.5} />
            <FloatingSparkle className="top-10 right-[20%]" delay={0.8} />
            <FloatingTooth className="bottom-6 left-[18%]" delay={1} size={24} />

            <div className="relative">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">Book your visit</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
                Ready to visit a clinic that feels different?
              </h2>
              <p className="mt-4 text-white/90 text-sm leading-relaxed max-w-md">
                New patients are always welcome. Send us your details and our front desk team will reach out to confirm your
                appointment time.
              </p>
              <ul className="mt-6 space-y-2.5">
                {['Quick call-back within one business day', 'Evening and weekend slots available', 'Direct insurance billing where possible'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 text-sm">
                    <CheckCircle size={16} className="text-white shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[2.5rem] bg-neutral-50 border border-neutral-200 p-8 md:p-10"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <span className="w-16 h-16 rounded-full bg-brand-green/15 text-brand-green flex items-center justify-center mb-4">
                  <CheckCircle size={32} />
                </span>
                <h3 className="font-heading text-xl font-bold text-neutral-900">Thank you, {form.name || 'friend'}!</h3>
                <p className="mt-2 text-sm text-neutral-600 max-w-xs">
                  Your request has been received. Our team will call you shortly to confirm your appointment.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', service: 'Hygiene & Cleaning', message: '' }); }} className="mt-6 text-sm font-semibold text-brand-teal hover:underline">
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-neutral-900">Request an appointment</h3>
                <Field label="Full name">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal"
                  />
                </Field>
                <Field label="Phone number">
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(905) 000-0000"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal"
                  />
                </Field>
                <Field label="Service needed">
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal"
                  >
                    {['Hygiene & Cleaning', 'Cosmetic Dentistry', 'Family Dentistry', 'Restorative Care', 'Preventive Care', 'Pediatric Visit'].map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Message (optional)">
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us anything we should know..."
                    rows={3}
                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal resize-none"
                  />
                </Field>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-teal text-white font-semibold text-sm shadow-lg shadow-brand-teal/30 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  <Calendar size={16} /> Request appointment
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-neutral-700 mb-1.5">{label}</span>
      {children}
    </label>
  );
}

/* ---------- Contact ---------- */

function ContactInfo() {
  const hours = [
    { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM' },
    { day: 'Saturday', time: '9:00 AM – 4:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ];
  return (
    <section className="section-padding bg-neutral-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-white border border-neutral-200 p-7">
          <span className="w-11 h-11 rounded-2xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-4">
            <MapPin size={20} />
          </span>
          <h3 className="font-heading text-lg font-bold text-neutral-900 mb-1">Visit us</h3>
          <p className="text-sm text-neutral-600">108-400 Bronte Street South</p>
          <p className="text-sm text-neutral-600">Milton, Ontario, Canada</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="tel:+19050000000" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 text-brand-teal-dark text-sm font-medium hover:bg-brand-teal/20 transition-colors">
              <Phone size={14} /> Call us
            </a>
            <a href="mailto:hello@tazeendental.ca" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium hover:bg-brand-green/20 transition-colors">
              <Mail size={14} /> Email us
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-white border border-neutral-200 p-7">
          <span className="w-11 h-11 rounded-2xl bg-brand-amber/15 text-brand-amber flex items-center justify-center mb-4">
            <Clock size={20} />
          </span>
          <h3 className="font-heading text-lg font-bold text-neutral-900 mb-3">Office hours</h3>
          <ul className="space-y-2.5">
            {hours.map((h, i) => (
              <li key={i} className="flex items-center justify-between text-sm border-b border-neutral-100 pb-2.5 last:border-0 last:pb-0">
                <span className="text-neutral-600">{h.day}</span>
                <span className={`font-semibold ${h.time === 'Closed' ? 'text-neutral-400' : 'text-neutral-900'}`}>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */

function FinalCta() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto rounded-[2.5rem] p-8 md:p-14 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #052E35 0%, #0A424B 70%, #0E3A2E 100%)' }}>
        <FloatingBubble className="top-6 left-[8%]" size={50} color="#00A5B5" delay={0} />
        <FloatingBubble className="bottom-8 right-[10%]" size={36} color="#6BBF4A" delay={1.5} />
        <FloatingStar className="top-10 right-[20%]" delay={0.8} />
        <FloatingTooth className="bottom-6 left-[18%]" delay={1} size={24} />

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white/90 mb-5">
            <UserRound size={13} /> New patients welcome
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Your healthiest smile starts here
          </h2>
          <p className="mt-3 text-neutral-300 max-w-lg mx-auto text-sm">
            Book a visit and experience dentistry designed around comfort, clarity, and care for the whole family.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a href="tel:+19050000000" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-teal text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              <Phone size={16} /> Book an appointment
            </a>
            <a href="#booking" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 transition-colors">
              <Plus size={16} /> New patient info
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Shared ---------- */

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center">
      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-brand-teal mb-2">{eyebrow}</span>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900">{title}</h2>
      <p className="mt-3 text-neutral-600 max-w-xl mx-auto text-sm">{subtitle}</p>
    </motion.div>
  );
}