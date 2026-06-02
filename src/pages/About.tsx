import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Heart, GraduationCap, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FloatingTooth, FloatingToothbrush, FloatingMirror, FloatingMolar, FloatingDenture, FloatingBubble, FloatingSparkle } from '../components/FloatingElements';
import { ImageSlideshow } from '../components/ImageSlideshow';

const galleryImages = [
  { src: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Our Team' },
  { src: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Team in Action' },
  { src: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Treatment Room' },
  { src: 'https://images.pexels.com/photos/6627536/pexels-photo-6627536.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'GBT Machine' },
  { src: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Clinic Interior' },
  { src: 'https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Equipment' },
];

export function About() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="overflow-hidden">
      <HeroBanner />
      <TazeenSection />
      <DrNaziaSection />
      <TeamSection />
      <GallerySection onOpen={setLightbox} />

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white" onClick={() => setLightbox(null)}>
              <X size={20} />
            </button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} src={lightbox} alt="Gallery" className="max-w-full max-h-[85vh] rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function HeroBanner() {
  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(0,165,181,0.12) 0%, rgba(107,191,74,0.1) 50%, rgba(232,168,56,0.1) 100%)' }}>
      <FloatingTooth className="top-28 left-[6%]" delay={0} size={28} />
      <FloatingTooth className="bottom-10 right-[8%]" delay={2} size={22} />
      <FloatingToothbrush className="top-36 right-[12%]" delay={0.5} size={26} />
      <FloatingMirror className="bottom-8 left-[20%]" delay={1.5} size={22} />
      <FloatingMolar className="top-44 left-[45%]" delay={1} size={20} />
      <FloatingDenture className="top-32 right-[35%]" delay={2.5} size={24} />
      <FloatingBubble className="top-32 left-[10%]" size={40} color="#00A5B5" delay={0} />
      <FloatingSparkle className="top-40 right-[20%]" delay={1} />
      <FloatingSparkle className="bottom-6 left-[35%]" delay={2} />

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900">
            Meet Our <span className="text-brand-teal">Team</span>
          </h1>
          <p className="mt-3 text-neutral-600 max-w-md mx-auto">
            Passionate professionals dedicated to your healthiest smile.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TazeenSection() {
  const { ref, isVisible } = useScrollAnimation();

  // Replace these with your own images in /assets/images/about/
  const tazeenImages = [
    'https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=700',
    'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=700',
    'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=700',
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white to-brand-teal/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-brand-teal/10 h-[400px]">
            <ImageSlideshow images={tazeenImages} alt="Tazeen" interval={4000} className="h-full" />
          </div>
          <motion.div
            className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-lg px-4 py-2 border border-brand-gold/20 z-10"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="flex items-center gap-2">
              <Award size={16} className="text-brand-gold-dark" />
              <span className="font-semibold text-xs text-neutral-800">GBT Certified</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-medium mb-3">
            <GraduationCap size={12} /> Founder & Lead Hygienist
          </div>
          <h2 className="font-heading text-3xl font-bold text-neutral-900">Tazeen</h2>
          <p className="text-brand-teal font-medium mt-1">Registered Dental Hygienist</p>
          <div className="mt-4 space-y-3 text-neutral-600 text-sm leading-relaxed">
            <p>After years in dental practices, Tazeen saw patients weren't getting the proactive care they deserved. She opened this clinic to put prevention first.</p>
            <p>As Milton's only GBT-certified clinician, she brings gentle, effective cleaning technology. Every appointment starts with education.</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-brand-green/10 text-brand-green-dark text-xs font-medium flex items-center gap-1.5"><Heart size={12} /> Prevention Focused</span>
            <span className="px-3 py-1.5 rounded-lg bg-brand-teal/10 text-brand-teal text-xs font-medium flex items-center gap-1.5"><Award size={12} /> GBT Certified</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DrNaziaSection() {
  const { ref, isVisible } = useScrollAnimation();

  // Replace these with your own images in /assets/images/about/
  const naziaImages = [
    'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=700',
    'https://images.pexels.com/photos/3952003/pexels-photo-3952003.jpeg?auto=compress&cs=tinysrgb&w=700',
    'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=700',
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-brand-green/5 via-white to-brand-teal/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green-dark text-xs font-medium mb-3">
            <GraduationCap size={12} /> General Dentist
          </div>
          <h2 className="font-heading text-3xl font-bold text-neutral-900">Dr. Nazia Mian</h2>
          <p className="text-brand-green font-medium mt-1">DDS, General Dentist</p>
          <div className="mt-4 space-y-3 text-neutral-600 text-sm leading-relaxed">
            <p>Dr. Nazia combines clinical excellence with warmth. She believes in conservative dentistry — preserving natural tooth structure while delivering lasting results.</p>
            <p>She works closely with Tazeen to ensure seamless, integrated care for every patient.</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-brand-green/10 text-brand-green-dark text-xs font-medium flex items-center gap-1.5"><Heart size={12} /> Patient-Centered</span>
            <span className="px-3 py-1.5 rounded-lg bg-brand-teal/10 text-brand-teal text-xs font-medium flex items-center gap-1.5"><Award size={12} /> Conservative Approach</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="order-1 lg:order-2 relative">
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-brand-green/10 h-[400px]">
            <ImageSlideshow images={naziaImages} alt="Dr. Nazia" interval={4500} className="h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TeamSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="rounded-3xl p-8 md:p-10 text-center" style={{ background: 'linear-gradient(135deg, rgba(0,165,181,0.08) 0%, rgba(107,191,74,0.08) 50%, rgba(232,168,56,0.08) 100%)' }}>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900">Our Team</h2>
          <p className="mt-3 text-neutral-600 text-sm max-w-lg mx-auto">
            From our welcoming front desk to our skilled clinicians, every member is committed to making your visit comfortable and positive.
          </p>
          <div className="mt-6 rounded-2xl overflow-hidden shadow-lg">
            {/* Replace with: /assets/images/about/team.jpg */}
            <img src="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Our dental team" className="w-full h-[250px] md:h-[300px] object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GallerySection({ onOpen }: { onOpen: (src: string) => void }) {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-brand-gold/5 to-brand-teal/5">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900">
            <span className="text-brand-gold-dark">Gallery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              onClick={() => onOpen(img.src)}
            >
              {/* Replace with: /assets/images/about/gallery-{i}.jpg */}
              <img src={img.src} alt={img.alt} className="w-full h-36 md:h-44 object-cover group-hover:scale-110 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
