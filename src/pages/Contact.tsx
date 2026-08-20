import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FloatingBubble, FloatingDenture, FloatingMirror, FloatingMolar, FloatingSparkle, FloatingTooth, FloatingToothbrush } from '../components/FloatingElements';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Contact() {
  return (
    <div className="overflow-hidden">
      <HeroBanner />
      <ContactInfo />
      <MapSection />
    </div>
  );
}

function HeroBanner() {
  return (
    <section className="relative pt-20 overflow-hidden">
      <div className="relative h-[40vh] md:h-[45vh]">
        {/* To use a clinic image instead of the gradient, uncomment the line below and comment the gradient div */}
        {/* <img src="/assets/images/contact/clinic-banner.jpg" alt="Visit our clinic" className="w-full h-full object-cover" /> */}
        <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, rgba(107,191,74,0.15) 0%, rgba(0,165,181,0.12) 50%, rgba(232,168,56,0.12) 100%)' }} />
        <FloatingTooth className="top-28 left-[6%]" delay={0} size={26} />
        <FloatingTooth className="bottom-8 right-[8%]" delay={1.5} size={20} />
        <FloatingToothbrush className="top-36 right-[12%]" delay={0.8} size={26} />
        <FloatingMirror className="bottom-12 left-[18%]" delay={2} size={22} />
        <FloatingMolar className="top-40 left-[40%]" delay={1.2} size={18} />
        <FloatingDenture className="bottom-10 right-[30%]" delay={2.5} size={22} />
        <FloatingBubble className="top-32 right-[15%]" size={40} color="#6BBF4A" delay={0} />
        <FloatingSparkle className="top-36 left-[30%]" delay={1} />
        <FloatingSparkle className="bottom-6 right-[40%]" delay={2.2} />

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900">Visit Our Clinic in <span className="text-brand-green">Milton</span></h1>
              <p className="mt-3 text-neutral-600">Convenient location with plenty of free parking.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white to-brand-teal/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { icon: MapPin, title: 'Address', line: '400 Bronte Street South, Unit 108\nMilton, Ontario', color: 'bg-brand-green/10', text: 'text-brand-green' },
            { icon: Phone, title: 'Phone / Text', line: '905-999-8144', link: 'tel:+19059998144', color: 'bg-brand-teal/10', text: 'text-brand-teal' },
            { icon: Clock, title: 'Mon-Thu', line: '10:00 AM - 7:00 PM', color: 'bg-brand-gold/10', text: 'text-brand-gold-dark' },
            { icon: Clock, title: 'Fri-Sat', line: '10:00 AM - 4:00 PM', color: 'bg-brand-teal/10', text: 'text-brand-teal' },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }} className="card border border-neutral-100 text-center hover:-translate-y-1">
              <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-3`}>
                <item.icon size={19} className={item.text} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-neutral-800">{item.title}</h3>
              <p className="mt-1 text-lg text-neutral-600 whitespace-pre-line">
                {item.link ? <a href={item.link} className="hover:text-brand-teal transition-colors">{item.line}</a> : item.line}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 0.5 }} className="max-w-2xl mx-auto">
          <div className="card">
            <h3 className="font-heading font-semibold text-neutral-900 mb-3">Why Visit Us?</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {['Convenient Milton location', 'Plenty of free parking', 'Calm and welcoming environment', 'Easy appointment scheduling'].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-lg text-neutral-700">
                  <span className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0">
                    <CheckCircle size={12} className="text-brand-green" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <Link to="/booking" className="btn-primary inline-flex text-lg">Book Appointment <ArrowRight size={14} className="ml-2" /></Link>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="pb-16 px-4">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden shadow-xl border-[6px] border-white">
        <iframe
          title="Tazeen's Dental Care"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.5!2d-79.88!3d43.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s400+Bronte+Street+South+Milton+ON!5e0!3m2!1sen!2sca!4v1"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </section>
  );
}
