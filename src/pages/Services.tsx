import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cd1 from '../assets/cd1.png';
import ec1 from '../assets/ec1.png';
import gbt1 from '../assets/gbt1.png';
import is1 from '../assets/is1.png';
import pc1 from '../assets/pc1.png';
import tw1 from '../assets/tw1.png';
import { FloatingBubble, FloatingDenture, FloatingMirror, FloatingMolar, FloatingSparkle, FloatingTooth, FloatingToothbrush } from '../components/FloatingElements';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
export const servicesList = [
  {
    id: 'gbt',
    title: 'Guided Biofilm Therapy (GBT)',
    desc: 'Advanced cleaning that removes plaque and bacteria using airflow technology.',
    points: ['More comfortable than traditional methods', 'Less abrasive on teeth and gums', 'Highly effective at reaching difficult areas', 'Ideal for sensitive patients'],
    image: gbt1,
    badge: 'Signature Service',
    link: '/gbt',
  },
  {
    id: 'periodontal-care',
    title: 'Periodontal Care (Gum Treatment)',
    desc: 'Gum disease can develop silently and lead to serious issues if untreated.',
    points: ['Deep cleaning below the gumline', 'Removal of bacteria and plaque buildup', 'Ongoing maintenance to prevent recurrence', 'Early treatment can reverse damage'],
    image: pc1,
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    desc: 'Professional whitening solutions that safely brighten your smile.',
    points: ['Faster and more noticeable results', 'Safe for enamel', 'Customized to your needs'],
    image: tw1,
  },
  {
    id: 'childrens-dental',
    title: "Children's Dental Care",
    desc: 'We make dental visits positive and comfortable for children.',
    points: ['Gentle, kid-friendly care', 'Building healthy habits early', 'Preventing cavities and gum issues'],
    image: cd1,
  },
  {
    id: 'restorative',
    title: 'Restorative Dentistry',
    desc: 'When damage occurs, we restore both function and appearance.',
    points: ['Tooth-colored fillings', 'Durable crowns', 'Bridges for missing teeth', 'Preserve natural tooth structure'],
    image: pc1,
  },
  {
    id: 'invisalign',
    title: 'Invisalign / Clear Aligners',
    desc: 'A discreet way to straighten teeth without metal braces.',
    points: ['Nearly invisible', 'Removable for eating and cleaning', 'More comfortable than traditional braces'],
    image: is1,
  },
  {
    id: 'emergency',
    title: 'Emergency Dental Care',
    desc: 'Dental emergencies require immediate attention. We provide same-day care.',
    points: ['Severe tooth pain', 'Broken or chipped teeth', 'Infections and swelling', 'Prompt treatment prevents complications'],
    image: ec1,
  },
];

export function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      }
    }
  }, [location.hash]);

  return (
    <div className="overflow-hidden">
      <HeroBanner />
      <ServicesList />
      <CTASection />
    </div>
  );
}

function HeroBanner() {
  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(232,168,56,0.1) 0%, rgba(0,165,181,0.08) 50%, rgba(107,191,74,0.1) 100%)' }}>
      <FloatingTooth className="top-28 right-[8%]" delay={0} size={26} />
      <FloatingTooth className="bottom-8 left-[6%]" delay={1.8} size={22} />
      <FloatingToothbrush className="top-36 left-[20%]" delay={0.8} size={28} />
      <FloatingMirror className="bottom-10 right-[15%]" delay={2.2} size={22} />
      <FloatingMolar className="top-44 right-[40%]" delay={1.2} size={20} />
      <FloatingDenture className="top-32 left-[50%]" delay={3} size={24} />
      <FloatingBubble className="top-32 left-[15%]" size={35} color="#E8A838" delay={0} />
      <FloatingSparkle className="top-40 right-[20%]" delay={0.5} />
      <FloatingSparkle className="bottom-6 left-[40%]" delay={2.5} />
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900">Dental Services in <span className="text-brand-teal">Milton</span></h1>
          <p className="mt-3 text-neutral-600 max-w-lg mx-auto">Preventive, Restorative & Emergency Care — keeping your teeth healthy, functional, and beautiful.</p>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesList() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-brand-teal/3 to-brand-green/3">
      <div className="max-w-6xl mx-auto space-y-6">
        {servicesList.map((service, i) => (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 25 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className={`group bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden scroll-mt-24 p-3 ${service.badge ? 'ring-2 ring-brand-teal/20' : ''}`}
          >
            <div className="grid md:grid-cols-5 gap-4 md:gap-6">
              <div className={`md:col-span-2 relative h-52 md:h-auto min-h-[13rem] rounded-xl overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                {/* Replace with: /assets/images/services/service-{i}.jpg */}
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {service.badge && (
                  <span className="absolute top-3 left-3 text-[10px] font-bold text-white bg-brand-teal/90 backdrop-blur-sm px-2.5 py-1 rounded-full">{service.badge}</span>
                )}
              </div>
              <div className={`md:col-span-3 p-4 md:py-6 md:pr-5 ${i % 2 === 1 ? 'md:order-1 md:pl-5' : ''}`}>
                <h3 className="font-heading font-bold text-lg text-neutral-900">{service.title}</h3>
                <p className="mt-1.5 text-neutral-600 text-sm">{service.desc}</p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-2.5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <span className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle size={12} className="text-brand-green" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                {service.link && (
                  <Link to={service.link} className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-brand-teal hover:text-brand-teal-dark transition-colors">
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto rounded-[2rem] p-8 md:p-10 text-center text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #00A5B5 0%, #008A97 50%, #4A9E2F 100%)' }}>
        <FloatingSparkle className="top-5 right-[18%]" delay={0.5} />
        <div className="relative">
          <div className="mx-auto mb-4 w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
            <svg width="22" height="27" viewBox="0 0 24 30" fill="white">
              <path d="M12 1C9 1 7 3 6.5 5C6 7 5 7.5 3.5 9C2 10.5 2.5 12.5 3.5 14C4.5 15.5 5 17.5 5.5 20C6 22.5 6.5 25 7.5 27C8.5 29 9.5 29 10.5 27C11.5 25 12 22 12.5 20C13 18 14 18 14.5 20C15 22 15.5 25 16.5 27C17.5 29 18.5 29 19.5 27C20.5 25 21 22.5 21.5 20C22 17.5 22.5 15.5 23.5 14C24.5 12.5 25 10.5 23.5 9C22 7.5 21 7 20.5 5C20 3 18 1 12 1Z" />
            </svg>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold">Not Sure What You Need?</h2>
          <p className="mt-2 text-white/80 text-sm">Book a comprehensive exam and let our team create a plan for your unique needs.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/booking" className="btn-accent text-sm">Book an Exam <ArrowRight size={14} className="ml-2" /></Link>
            <a href="tel:+19059998144" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all font-medium text-sm">Call 905-999-8144</a>
          </div>
        </div>
      </div>
    </section>
  );
}
