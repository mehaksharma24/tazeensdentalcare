import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Award, Baby, CheckCircle, ChevronLeft, ChevronRight, Clock, CreditCard, Globe, Heart, Quote, Sparkles, Star, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import cd1 from '../assets/cd1.png';
import ec1 from '../assets/ec1.png';
import gbt1 from '../assets/gbt1.png';
import home2 from '../assets/home2.png';
import nazia1 from '../assets/nazia1.png';
import pc1 from '../assets/pc1.png';
import pc2 from '../assets/pc2.png';
import tazeen1 from '../assets/tazeen1.jpg';
import tw1 from '../assets/tw1.png';


import { FloatingSparkle, FloatingTooth, FloatingToothbrush, WaveBanner } from '../components/FloatingElements';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Home() {
  return (
    <div className="overflow-hidden">
      <PageBackdrop />
      <HeroSection />
      <TrustStrip />
      <PhilosophySection />
      <ServicesOverview />
      <MeetTeamSection />
      <ReviewsSection />
      <CTASection />
    </div>
  );
}

function PageBackdrop() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      <img
        src="https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt=""
        className="w-full h-full object-cover blur-[2px] scale-105"
      />
      <div className="absolute inset-0 bg-white/70" />
    </div>
  );
}

function Eyebrow({ children, className = 'text-brand-teal' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-[11px] font-body font-semibold uppercase tracking-[0.2em] mb-3 ${className}`}>
      {children}
    </p>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-20 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-brand-green/8 to-brand-gold/10" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-green to-brand-gold" />
      <WaveBanner />
      <FloatingTooth className="top-32 left-[8%]" delay={0} size={32} />
      <FloatingTooth className="top-52 right-[12%]" delay={1.5} size={24} />
      <FloatingToothbrush className="top-36 left-[30%]" delay={0.8} size={30} />
      <FloatingSparkle className="top-44 right-[35%]" delay={1} />
      <FloatingSparkle className="bottom-36 left-[40%]" delay={2.5} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
            At Tazeen's Dental Care,{' '}
            <span className="gradient-text">Your Smile</span>{' '}
            Comes First
          </h1>
          <p className="mt-5 text-lg text-neutral-600 max-w-xl">
          Milton’s GBT-guided dental clinic, focused on preventive care and precision dentistry.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/booking" className="btn-primary text-base px-8 py-4">
              Book Appointment <ArrowRight size={18} className="ml-2" />
            </Link>
            <a href="tel:+19059998144" className="btn-secondary text-base px-8 py-4">
              Call / Text 905-999-8144
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-brand-gold fill-brand-gold" />)}
            </div>
            <p className="text-sm text-neutral-600"><span className="font-semibold text-neutral-800">5-Star Rated</span> · Google Reviews</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
            {/* Replace with your own video: /assets/images/home/hero-video.mp4 */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[400px] lg:h-[480px] object-cover"
              poster="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800"
            >
              {/* <source src="/assets/images/home/hero-video.mp4" type="video/mp4" /> */}
            </video>
          </div>
          <motion.div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-brand-gold/20" animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center">
              <Star size={20} className="text-brand-gold-dark" />
            </div>
            <div>
              <p className="font-semibold text-neutral-800 text-sm">5-Star Rated</p>
              <p className="text-xs text-neutral-500">Google Reviews</p>
            </div>
          </motion.div>
          <motion.div className="absolute -top-4 -right-2 sm:-right-4 bg-white rounded-2xl shadow-xl p-4 hidden sm:flex items-center gap-3 border border-brand-teal/15" animate={{ y: [0, 6, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>
            <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center">
              <Clock size={20} className="text-brand-teal" />
            </div>
            <div>
              <p className="font-semibold text-neutral-800 text-sm">Mon–Thu: 10 AM – 7 PM</p>
              <p className="text-xs text-neutral-500">Fri–Sat: 10 AM – 4 PM</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const { ref, isVisible } = useScrollAnimation();
  const items = [
    { icon: Users, label: 'Welcoming New Patients' },
    { icon: Globe, label: 'Refugee Patients Welcome' },
    { icon: Heart, label: 'CDCP Patients Welcome' },
    { icon: CreditCard, label: 'Direct Insurance Billing' },
    { icon: Baby, label: 'Family-Friendly' },
    { icon: Sparkles, label: 'Modern, Gentle Techniques' },
  ];

  return (
    <section ref={ref} className="relative z-10 -mt-10 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 px-6 py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {items.map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 15 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08, duration: 0.4 }} className="flex flex-col items-center text-center gap-2.5">
              <div className="w-11 h-11 rounded-xl bg-brand-teal/10 flex items-center justify-center">
                <item.icon size={18} className="text-brand-teal" />
              </div>
              <span className="text-xs font-medium text-neutral-700 leading-snug">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-white/85">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900">
            Smiles <span className="text-brand-teal"> That Feel Easier</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-sm leading-relaxed">
          GBT-guided care for every age
          </p>
          <ul className="mt-6 space-y-4">
            {[
            'Detecting issues early before they become serious',
            'Maintaining healthy gums for long-term tooth stability',
            'Reducing the need for fillings, extractions, and major procedures',
            'Helping patients take control of their oral health through education',
            ].map((item, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -15 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle size={14} className="text-brand-green" />
                </span>
                <span className="text-neutral-700 text-sm">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
          <div className="rounded-[2rem] overflow-hidden shadow-xl border-[6px] border-white">
            <img src={home2} alt="Home" className="w-full h-[500px] object-cover" />
          </div>
          <motion.div className="absolute -bottom-5 left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-brand-teal/15" animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center">
              <Award size={20} className="text-brand-teal" />
            </div>
            <p className="font-semibold text-neutral-800 text-sm">GBT Certified</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}



function ServicesOverview() {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    { title: 'Guided Biofilm Therapy', desc: 'Advanced airflow cleaning- painless and fast', image: gbt1, link: '/gbt', badge: 'Signature Service' },
    { title: 'Preventive Care', desc: 'Exams, cleanings, and early detection', image:pc1, link: '/services' },
    { title: 'Periodontal Care', desc: 'Deep cleaning and gum health management', image: pc2, link:'/services' },
    { title: 'Teeth Whitening', desc: 'Professional whitening for a brighter smile', image: tw1 , link: '/services' },
    { title: "Children's Dental", desc: 'Gentle, kid-friendly preventive care', image: cd1, link: '/services' },
    { title: 'Emergency Care', desc: 'Same-day urgent dental treatment', image: ec1, link: '/services' },
  ];

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#052E35]/95 via-[#0A424B]/90 to-[#06343B]/95" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-10">
          <Eyebrow className="text-brand-teal-light">Our Services</Eyebrow>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Complete Dental Services in <span className="text-brand-teal-light">Milton</span></h2>
          <p className="mt-2 text-neutral-300 text-sm">Prevention, restoration, and cosmetic improvement — all under one roof.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link to={service.link} className="group block bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 p-3">
                <div className="relative h-44 overflow-hidden rounded-xl">
                  {/* Replace with: /assets/images/home/service-{i}.jpg */}
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  {service.badge && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold text-white bg-brand-teal/90 backdrop-blur-sm px-2.5 py-1 rounded-full">{service.badge}</span>
                  )}
                  <span className="absolute -bottom-0 left-3 translate-y-1/2 w-10 h-10 rounded-xl bg-brand-teal text-white flex items-center justify-center shadow-lg">
                    <Sparkles size={17} />
                  </span>
                </div>
                <div className="px-3 pt-8 pb-4">
                  <h3 className="font-heading font-semibold text-neutral-900 group-hover:text-brand-teal transition-colors">{service.title}</h3>
                  <p className="mt-1 text-neutral-600 text-sm">{service.desc}</p>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-brand-teal text-xs font-semibold">
                    Learn More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/services" className="btn-primary inline-flex text-sm">View All Services <ArrowRight size={14} className="ml-2" /></Link>
        </div>
      </div>
    </section>
  );
}

function MeetTeamSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeSlide, setActiveSlide] = useState(0);

  const team = [
    {
      name: 'Tazeen',
      role: 'Founder & Lead Hygienist',
      desc: 'She built this practice on a simple belief: comfort is part of the cure. GBT-certified and prevention-focused.',
      image: tazeen1,
      badge: 'GBT Certified',
    },
    {
      name: 'Dr. Nazia Mian',
      role: 'DDS, General Dentist',
      desc: 'Conservative dentistry — preserving natural tooth structure while delivering lasting results. Warm and patient-centered.',
      image: nazia1,
      badge: 'DDS',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % team.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [team.length]);

  return (
    <section ref={ref} className="section-padding bg-white/85">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-10">
          <Eyebrow>Our Team</Eyebrow>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900">
            Meet Our <span className="text-brand-teal">Team</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }} className="relative">
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-neutral-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-5"
              >
                <div className="md:col-span-2 relative h-[350px] md:h-[360px]">
                  <img
                    src={team[activeSlide].image}
                    alt={team[activeSlide].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-medium w-fit mb-3">
                    <Award size={12} /> {team[activeSlide].badge}
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-neutral-900">
                    {team[activeSlide].name}
                  </h3>

                  <p className="text-brand-teal font-medium text-sm mt-1">
                    {team[activeSlide].role}
                  </p>

                  <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
                    {team[activeSlide].desc}
                  </p>

                  <Link to="/about/team" className="btn-secondary mt-5 w-fit text-xs px-4 py-2">
                    Read Full Bio
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-5 gap-3">
            {team.map((member, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  i === activeSlide
                    ? 'bg-brand-teal text-white shadow-md'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
                }`}
              >
                {member.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    { name: 'Ahsan Ahmad', text: '“Great experience. Staff is very cooperative and accomodating. The doctor is very detail oriented and never leaves without satisfaction of the client. I would highly recommend the clinic.”' },
    { name: 'Iman Salman', text: '“Amazing! This dental clinic is amazing. The team is warm and welcoming. The dentist was gentle and explained each step clearly. The clinic is clean, the service is quick, and the care is excellent.”' },
    { name: 'Rehan Altaf', text: '“The dental hygienists are professional and thorough. Another highlight is their reasonable fees for all treatments including Zoom whitening in office. I highly recommend Tazeen’s Dental Care.”' },
    { name: 'Ahsan Ahmad', text: '“Great experience. Staff is very cooperative and accomodating. The doctor is very detail oriented and never leaves without satisfaction of the client. I would highly recommend the clinic.”' },
    { name: 'Iman Salman', text: '“Amazing! This dental clinic is amazing. The team is warm and welcoming. The dentist was gentle and explained each step clearly. The clinic is clean, the service is quick, and the care is excellent.”' },
    { name: 'Rehan Altaf', text: '“The dental hygienists are professional and thorough. Another highlight is their reasonable fees for all treatments including Zoom whitening in office. I highly recommend Tazeen’s Dental Care.”' },

  ];

  const avatarColors = ['bg-brand-teal', 'bg-brand-green', 'bg-brand-gold'];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.pexels.com/photos/4269355/pexels-photo-4269355.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A3038]/95 via-[#123E48]/90 to-[#0A3038]/95" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-end justify-between mb-10">
          <div>
            <Eyebrow className="text-brand-gold">Reviews</Eyebrow>
            <h2 className="font-heading text-3xl font-bold text-white">What Patients Are <span className="text-brand-gold">Saying</span></h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-brand-teal hover:text-white transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-brand-teal hover:text-white transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 0.2, duration: 0.5 }}>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((r, i) => (
              <div key={i} className="snap-start shrink-0 w-[310px]">
                <div className="relative bg-white rounded-2xl shadow-lg p-6 border border-neutral-100">
                  <Quote size={26} className="text-brand-teal/20 absolute top-4 right-4" />
                  <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, j) => <Star key={j} size={13} className="text-brand-gold fill-brand-gold" />)}</div>
                  <p className="text-neutral-600 text-sm leading-relaxed">{r.text}</p>
                  <div className="absolute -bottom-2 left-10 w-4 h-4 bg-white rotate-45 border-b border-r border-neutral-100" />
                </div>
                <div className="mt-5 flex items-center gap-3 pl-4">
                  <div className={`w-11 h-11 rounded-full ${avatarColors[i % avatarColors.length]} text-white flex items-center justify-center font-heading font-bold text-lg shadow-md`}>
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{r.name}</p>
                    <p className="text-xs text-white/60">Google Review</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] px-8 py-12 md:px-14 md:py-14"
          style={{ background: 'linear-gradient(135deg, #00A5B5 0%, #008A97 50%, #4A9E2F 100%)' }}
        >
          <FloatingSparkle className="top-8 right-[20%]" delay={0.5} />
          <div className="relative grid md:grid-cols-[auto_1fr_auto] items-center gap-8">
            <div className="hidden md:flex w-16 h-16 rounded-2xl bg-white/15 items-center justify-center shrink-0">
              <svg width="30" height="36" viewBox="0 0 24 30" fill="white">
                <path d="M12 1C9 1 7 3 6.5 5C6 7 5 7.5 3.5 9C2 10.5 2.5 12.5 3.5 14C4.5 15.5 5 17.5 5.5 20C6 22.5 6.5 25 7.5 27C8.5 29 9.5 29 10.5 27C11.5 25 12 22 12.5 20C13 18 14 18 14.5 20C15 22 15.5 25 16.5 27C17.5 29 18.5 29 19.5 27C20.5 25 21 22.5 21.5 20C22 17.5 22.5 15.5 23.5 14C24.5 12.5 25 10.5 23.5 9C22 7.5 21 7 20.5 5C20 3 18 1 12 1Z" />
              </svg>
            </div>
            <div className="text-white text-center md:text-left">
              <h2 className="font-heading text-2xl md:text-3xl font-bold">Take the First Step Toward Better Oral Health</h2>
              <p className="mt-2 text-white/80 text-sm md:text-base">Preventive care starts with one visit. Experience a different kind of dental care in Milton.</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-3 shrink-0">
              <Link to="/booking" className="btn-accent text-sm md:text-base px-7 py-3.5">Book Appointment <ArrowRight size={16} className="ml-2" /></Link>
              <a href="tel:+19059998144" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all font-medium text-sm md:text-base">Call 905-999-8144</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
