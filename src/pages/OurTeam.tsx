import { AnimatePresence, motion } from 'framer-motion';
import { Award, GraduationCap, Heart, X } from 'lucide-react';
import { useState } from 'react';
import {
  FloatingBubble,
  FloatingDenture,
  FloatingMirror,
  FloatingMolar,
  FloatingSparkle,
  FloatingTooth,
  FloatingToothbrush,
} from '../components/FloatingElements';
import { ImageSlideshow } from '../components/ImageSlideshow';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const galleryImages = [
  { src: '/src/assets/tm1.png', alt: 'Team Member 1' },
  { src: '/src/assets/tm2.png', alt: 'Team Member 2' },
  { src: '/src/assets/tm3.png', alt: 'Team Member 3' },
  { src: '/src/assets/tm4.png', alt: 'Team Member 4' },
  { src: '/src/assets/tm5.png', alt: 'Team Member 5' },
  { src: '/src/assets/tm6.png', alt: 'Team Member 6' },
];

export function OurTeam() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="overflow-hidden">
      <HeroBanner />
      <TazeenSection />
      <DrNaziaSection />
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
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
              onClick={() => setLightbox(null)}
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightbox}
              alt="Gallery"
              className="max-w-full max-h-[85vh] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function HeroBanner() {
  return (
    <section
      className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, rgba(0,165,181,0.12) 0%, rgba(107,191,74,0.1) 50%, rgba(232,168,56,0.1) 100%)',
      }}
    >
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900">
            Our <span className="text-brand-teal">Team</span>
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

  const tazeenImages = ['/src/assets/tazeen1.jpg', '/src/assets/pc2.png', '/src/assets/cd1.png'];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white to-brand-teal/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-[2rem] overflow-hidden shadow-xl border-[6px] border-white h-[400px]">
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

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-medium mb-3">
            <GraduationCap size={12} /> Founder & Lead Hygienist
          </div>
          <h2 className="font-heading text-3xl font-bold text-neutral-900">Tazeen</h2>
          <p className="text-brand-teal font-medium mt-1">Registered Dental Hygienist</p>
          <div className="mt-4 space-y-3 text-neutral-600 text-sm leading-relaxed">
            <p>
              The founder, Tazeen, is a Registered Dental Hygienist and the driving force behind
              Tazeen Dental Care. She built the clinic on a simple guiding belief: comfort is part
              of the cure. With a strong clinical background and daily hands-on experience as a
              hygienist, she understands how important trust and consistency are in patient care.
              She personally helps shape and oversee clinical protocols to ensure every cleaning and
              treatment is thorough, gentle, and educational.
            </p>
            <p>
              Her vision for the clinic is a welcoming, energetic space designed for patients of all
              ages, including children and families. The practice is built to feel approachable and
              stress-free, with a strong focus on comfort, communication, and quality care—values
              that align closely with Dr. Nazia’s patient-centered approach. Together, this creates a
              team environment where patients receive consistent, compassionate care from their first
              visit onward.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-brand-green/10 text-brand-green-dark text-xs font-medium flex items-center gap-1.5">
              <Heart size={12} /> Prevention Focused
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-brand-teal/10 text-brand-teal text-xs font-medium flex items-center gap-1.5">
              <Award size={12} /> GBT Certified
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DrNaziaSection() {
  const { ref, isVisible } = useScrollAnimation();

  const naziaImages = [
    '/src/assets/nazia1.png',
    '/src/assets/pc1.png',
    'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=700',
  ];

  return (
    <section
      ref={ref}
      className="section-padding bg-gradient-to-br from-brand-green/5 via-white to-brand-teal/5"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green-dark text-xs font-medium mb-3">
            <GraduationCap size={12} /> General Dentist
          </div>
          <h2 className="font-heading text-3xl font-bold text-neutral-900">Dr. Nazia Mian</h2>
          <p className="text-brand-green font-medium mt-1">DDS, General Dentist</p>
          <div className="mt-4 space-y-3 text-neutral-600 text-sm leading-relaxed">
            <p>
              Dr. Nazia Mian is a dentist who earned her Doctor of Dental Surgery (DDS) from the
              Schulich School of Medicine & Dentistry at Western University in 2023, following
              earlier training in Bachelor of Dental Surgery. She has been working as an associate
              dentist since August 2023 in Mississauga and Milton, where she serves a diverse patient
              population and continues to focus on staying current with advances in dentistry.
            </p>
            <br />
            <p>
              Her practice emphasizes patient comfort, clear communication, and gentle,
              detail-oriented care, with a strong focus on ensuring patients understand their
              treatment options and feel at ease. She is fluent in multiple languages including
              English, Pashto, Urdu, Hindi, and Punjabi. Outside of work, she enjoys traveling,
              hiking, and spending time with family, and she practices at Tazeen Dental Care, where
              patients describe her as caring, patient, and highly professional.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-brand-green/10 text-brand-green-dark text-xs font-medium flex items-center gap-1.5">
              <Heart size={12} /> Patient-Centered
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-brand-teal/10 text-brand-teal text-xs font-medium flex items-center gap-1.5">
              <Award size={12} /> Conservative Approach
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2 relative"
        >
          <div className="rounded-[2rem] overflow-hidden shadow-xl border-[6px] border-white h-[400px]">
            <ImageSlideshow images={naziaImages} alt="Dr. Nazia" interval={4500} className="h-full" />
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900">
            <span className="text-brand-gold-dark">Gallery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[170px] gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`group relative cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all ${i === 0 ? 'col-span-2 row-span-2' : ''} ${i === 5 ? 'col-span-2 md:col-span-4' : ''}`}
              onClick={() => onOpen(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/25 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
