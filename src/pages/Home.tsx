import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Award, Baby, CheckCircle, ChevronLeft, ChevronRight, CreditCard, Heart, Sparkles, Star, Users } from 'lucide-react';
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


import { FloatingBubble, FloatingDenture, FloatingMirror, FloatingMolar, FloatingSparkle, FloatingTooth, FloatingToothbrush, WaveBanner } from '../components/FloatingElements';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Home() {
  return (
    <div className="overflow-hidden">
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

function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-brand-green/8 to-brand-gold/10" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-green to-brand-gold" />
      <WaveBanner />
      <FloatingTooth className="top-32 left-[8%]" delay={0} size={32} />
      <FloatingTooth className="top-52 right-[12%]" delay={1.5} size={24} />
      <FloatingToothbrush className="top-36 left-[30%]" delay={0.8} size={30} />
      <FloatingMirror className="bottom-40 left-[15%]" delay={2} size={26} />
      <FloatingMolar className="top-44 right-[30%]" delay={1} size={22} />
      <FloatingDenture className="bottom-28 right-[20%]" delay={3} size={28} />
      <FloatingBubble className="top-40 left-[35%]" size={50} color="#6BBF4A" delay={0.5} />
      <FloatingBubble className="bottom-32 right-[25%]" size={35} color="#00A5B5" delay={2} />
      <FloatingSparkle className="top-44 right-[35%]" delay={1} />
      <FloatingSparkle className="bottom-36 left-[40%]" delay={2.5} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
            At Tazeen's{' '}
            <span className="gradient-text">stay ahead of</span>{' '}
            Dental Problems
          </h1>
          <p className="mt-5 text-lg text-neutral-600 max-w-xl">
          Milton’s only GBT-guided dental clinic, focused on preventive care and precision dentistry.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/booking" className="btn-primary text-base px-8 py-4">
              Book Appointment <ArrowRight size={18} className="ml-2" />
            </Link>
            <a href="tel:+19059998144" className="btn-secondary text-base px-8 py-4">
              Call / Text 905-999-8144
            </a>
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
        </motion.div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const { ref, isVisible } = useScrollAnimation();
  const items = [
    { icon: Users, label: 'Accepting New Patients' },
    { icon: Heart, label: 'CDCP Patients Welcome' },
    { icon: CreditCard, label: 'Direct Insurance Billing' },
    { icon: Baby, label: 'Family-Friendly' },
    { icon: Sparkles, label: 'Modern, Gentle Techniques' },
  ];

  return (
    <section ref={ref} className="py-6 bg-gradient-to-r from-brand-teal/8 via-brand-green/8 to-brand-gold/8 border-y border-brand-teal/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-10">
        {items.map((item, i) => (
          <motion.div key={item.label} initial={{ opacity: 0, y: 15 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08, duration: 0.4 }} className="flex items-center gap-2">
            <item.icon size={16} className="text-brand-teal" />
            <span className="text-xs font-medium text-neutral-700">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function PhilosophySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white to-brand-teal/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900">
            Smiles <span className="text-brand-teal"> That Feel Easier</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-sm leading-relaxed">
          Milton's only GBT-guided care for every age
          </p>
          <ul className="mt-5 space-y-3">
            {[
            'Detecting issues early before they become serious',
            'Maintaining healthy gums for long-term tooth stability',
            'Reducing the need for fillings, extractions, and major procedures',
            'Helping patients take control of their oral health through education',
            ].map((item, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -15 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }} className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-brand-green shrink-0 mt-0.5" />
                <span className="text-neutral-700 text-sm">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="rounded-2xl overflow-hidden shadow-xl border-4 border-brand-teal/10">
         
        <img src={home2} alt="Home" className="w-full h-[500px] object-cover" />

        </motion.div>
      </div>
    </section>
  );
}



function ServicesOverview() {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    { title: 'Guided Biofilm Therapy', desc: 'Advanced airflow cleaning- painless and fast', image: gbt1, link: '/gbt', badge: 'Only in Milton' },
    { title: 'Preventive Care', desc: 'Exams, cleanings, and early detection', image:pc1, link: '/services' },
    { title: 'Periodontal Care', desc: 'Deep cleaning and gum health management', image: pc2, link:'/services' },
    { title: 'Teeth Whitening', desc: 'Professional whitening for a brighter smile', image: tw1 , link: '/services' },
    { title: "Children's Dental", desc: 'Gentle, kid-friendly preventive care', image: cd1, link: '/services' },
    { title: 'Emergency Care', desc: 'Same-day urgent dental treatment', image: ec1, link: '/services' },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-brand-teal/6 via-brand-green/4 to-brand-gold/6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900">Complete Dental Services in <span className="text-brand-teal">Milton</span></h2>
          <p className="mt-2 text-neutral-600 text-sm">Prevention, restoration, and cosmetic improvement — all under one roof.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link to={service.link} className="group block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                <div className="relative h-44 overflow-hidden">
                  {/* Replace with: /assets/images/home/service-{i}.jpg */}
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {service.badge && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold text-white bg-brand-teal/90 backdrop-blur-sm px-2.5 py-1 rounded-full">{service.badge}</span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-neutral-900 group-hover:text-brand-teal transition-colors">{service.title}</h3>
                  <p className="mt-1 text-neutral-600 text-sm">{service.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
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
    <section ref={ref} className="section-padding bg-gradient-to-b from-white to-brand-green/5">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900">
            Meet Our <span className="text-brand-teal">Team</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }} className="relative">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-teal/10">
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
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-brand-gold/8 to-brand-teal/5">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-3xl font-bold text-neutral-900">What Patients Are <span className="text-brand-gold-dark">Saying</span></h2>
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
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((r, i) => (
              <div key={i} className="snap-start shrink-0 w-[290px] bg-white rounded-2xl shadow-lg p-5 border border-brand-gold/10">
                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, j) => <Star key={j} size={13} className="text-brand-gold fill-brand-gold" />)}</div>
                <p className="text-neutral-600 text-sm italic leading-relaxed">"{r.text}"</p>
                <p className="mt-4 font-semibold text-neutral-800 text-sm">{r.name}</p>
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
    <section ref={ref} className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #00A5B5 0%, #008A97 50%, #4A9E2F 100%)' }}>
      <FloatingBubble className="top-8 left-[10%]" size={30} color="rgba(255,255,255,0.2)" delay={0} />
      <FloatingSparkle className="top-16 right-[25%]" delay={0.5} />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="relative max-w-2xl mx-auto text-center text-white">
        <h2 className="font-heading text-3xl md:text-4xl font-bold">Take the First Step Toward Better Oral Health</h2>
        <p className="mt-3 text-white/80">Preventive care starts with one visit. Experience a different kind of dental care in Milton.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/booking" className="btn-accent text-base px-8 py-4">Book Appointment <ArrowRight size={18} className="ml-2" /></Link>
          <a href="tel:+19059998144" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all font-medium">Call 905-999-8144</a>
        </div>
      </motion.div>
    </section>
  );
}
