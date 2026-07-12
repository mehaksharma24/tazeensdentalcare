import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { FloatingBubble, FloatingDenture, FloatingMirror, FloatingMolar, FloatingSparkle, FloatingTooth, FloatingToothbrush } from '../components/FloatingElements';
import { ImageSlideshow } from '../components/ImageSlideshow';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Updated images from src/assets
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
      <HeroBanner />
      <AboutOffice />
      <GallerySlider />
      <PreventionSection />
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

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900">
            Our <span className="text-brand-teal">Clinic</span>
          </h1>
          <p className="mt-3 text-neutral-600 max-w-md mx-auto">
            A fun, colourful space where families actually enjoy coming to the dentist.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function GallerySlider() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white to-brand-teal/5">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-teal/10 h-[300px] md:h-[420px]">
            <ImageSlideshow images={galleryImages} alt="Our Office" interval={3500} className="h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutOffice() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(107,191,74,0.06) 0%, rgba(0,165,181,0.04) 100%)' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-brand-teal/10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Welcome to <span className="text-brand-teal">Tazeen's Dental Care</span></h2>
          <p className="text-neutral-600 text-sm leading-relaxed mb-3">
            Located at 108-400 Bronte Street South, Milton, Ontario,
          </p>
          <p className="text-neutral-600 text-sm leading-relaxed mb-3">
            Welcome to Tazeen Dental Care—a modern, family-focused dental clinic in Milton designed to feel welcoming from the moment you 
            walk in. This is not your typical dental office; it’s a calm, friendly space built for patients of all ages, from young 
            children to seniors, where comfort, communication, and care come first. The clinic combines advanced technology with 
            a gentle approach, including AIRFLOW GBT cleaning systems for a more comfortable, minimally invasive experience. With 
            convenient hours, free parking, and a supportive front desk team, every visit is designed to be smooth and stress-free.
          </p>
          <p className="text-neutral-600 text-sm leading-relaxed">
            At the heart of the clinic is a strong, patient-centered team led by founder Tazeen, a Registered Dental Hygienist 
            who built the practice on the belief that comfort is part of the cure, alongside clinicians such as Dr. Nazia Mian, 
            who brings a gentle, detail-oriented approach and a focus on clear communication. Together, the team delivers consistent, 
            high-quality care in a child-friendly, family-oriented environment. The clinic also proudly supports new patients and 
            participates in programs like the Canadian Dental Care Plan (CDCP), making accessible, compassionate dentistry 
            available to more members of the community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PreventionSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(107,191,74,0.08) 0%, rgba(0,165,181,0.06) 50%, rgba(232,168,56,0.06) 100%)' }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* Updated image to cl6 */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden shadow-xl border-4 border-brand-green/10">
          <img src={cl6} alt="Built on prevention" className="w-full h-[320px] object-cover" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          <h2 className="font-heading text-3xl font-bold text-neutral-900">
            Built on <span className="text-brand-green">Prevention</span>, Not Just Procedures
          </h2>
          <p className="mt-4 text-neutral-600 text-sm leading-relaxed">
            In many traditional dental offices, hygiene appointments are shorter and treated as routine. At Tazeen's, hygiene is the foundation of everything we do.
          </p>
          <ul className="mt-5 space-y-3">
            {[
              'We spend more time on each cleaning for thorough care',
              'We focus on preserving your natural teeth as long as possible',
              'We prioritize gum health, critical for overall oral health',
              'We provide personalized education tailored to your habits',
            ].map((item, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -15 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }} className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-brand-green shrink-0 mt-0.5" />
                <span className="text-neutral-700 text-sm">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
