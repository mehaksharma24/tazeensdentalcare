import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Calculator, CheckCircle, ChevronDown, FileText, Heart, Phone, Shield, Stethoscope } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FloatingMolar, FloatingSparkle, FloatingTooth } from '../components/FloatingElements';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function CDCP() {
  return (
    <div className="overflow-hidden">
      <HeroBanner />
      <IntroSection />
      <OfficialInfoSection />
      <CoverageTable />
      <EligibilityCalculator />
      <WhatCDCPCovers />
      <HowWeHelp />
      <FAQSection />
      <CTASection />
    </div>
  );
}

function CanadaFlag({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="32" height="20" viewBox="0 0 32 20" fill="none">
      <rect width="8" height="20" fill="#FF0000" />
      <rect x="8" width="16" height="20" fill="white" />
      <rect x="24" width="8" height="20" fill="#FF0000" />
      <path d="M16 4L17 7H15L16 4ZM14 8L12 9L13 8L11 10L13 10L12 12L14 11L14 13L16 11L18 13L18 11L20 12L19 10L21 10L19 8L20 9L18 8L19 7H17L16 4" fill="#FF0000" transform="translate(0, 1)" />
    </svg>
  );
}

function HeroBanner() {
  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(100deg, #FFF6EC 0%, #FFD9C4 40%, #F58E75 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 grid md:grid-cols-2 gap-8 items-end">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="pb-10 md:pb-16">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300, delay: 0.3 }} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/70 border border-white text-sm font-medium mb-6">
              <CanadaFlag />
              <span className="text-red-700">Welcoming New & Refugee Patients</span>
            </motion.div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-[1.02]">
              Canadian<br />Dental<br />Care Plan
            </h1>
            <p className="mt-4 font-semibold text-neutral-900 tracking-wide">
              Accessible. Affordable. Essential.
            </p>
            <p className="mt-4 text-neutral-800/80 max-w-md text-sm leading-relaxed">
              No private insurance? No employer benefits? The Canadian Dental Care Plan helps you access essential dental treatment — even if you're not employed.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="hidden md:flex justify-center items-end">
            <img
              src="https://images.pexels.com/photos/5622280/pexels-photo-5622280.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Smiling patient with dental care provider"
              className="w-[420px] h-[340px] object-cover rounded-t-full shadow-2xl border-8 border-white/40 border-b-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white to-red-50/50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-2 mb-3">
            <CanadaFlag />
            <h2 className="font-heading text-3xl font-bold text-neutral-900">CDCP At Tazeen's Dental Care</h2>
          </div>
          <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
            The Canadian Dental Care Plan (CDCP) is a federal program designed to make dental care more accessible for eligible Canadians who do not have private dental insurance — whether you're unemployed, self-employed, or simply don't have benefits through work.
          </p>
          <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
            It helps cover the cost of:
          </p>
          <ul className="mt-3 space-y-2">
            {['Preventive dental care (cleanings, exams)', 'Basic restorative treatments (fillings)', 'Gum health treatments (scaling)'].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-neutral-700">
                <CheckCircle size={15} className="text-red-500 shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="rounded-2xl overflow-hidden shadow-xl border-4 border-red-50">
          <img src="https://images.pexels.com/photos/3952003/pexels-photo-3952003.jpeg?auto=compress&cs=tinysrgb&w=700" alt="CDCP dental care for Canadians" className="w-full h-[300px] object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

function OfficialInfoSection() {
  const { ref, isVisible } = useScrollAnimation();

  const points = [
    'CDCP is a federal dental benefit program for Canadians without access to private dental insurance.',
    'Eligibility is based on your Adjusted Family Net Income (AFNI) from your most recent tax return.',
    'The program is administered through Sun Life on behalf of the Government of Canada.',
    'Coverage amounts depend on your income bracket and follow the CDCP fee guide.',
    'Some dental services may require preauthorization before treatment begins.',
    'Patients may still have co-pays depending on their income level and the type of treatment.',
    'CDCP aims to make preventive and essential dental care more accessible to all eligible Canadians.',
    'No private insurance? The Canadian Dental Care Plan helps you access essential dental treatment.'
  ];

  return (
    <section
      ref={ref}
      className="section-padding"
      style={{
        background:
          'linear-gradient(180deg, rgba(255,0,0,0.02) 0%, rgba(0,165,181,0.04) 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-medium mb-3">
            <FileText size={14} /> Official Program Information
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900">
            About the <span className="text-red-600">CDCP</span> Program
          </h2>
          <p className="mt-2 text-neutral-500 text-sm">
            Summarized from the Government of Canada
          </p>
        </motion.div>

        {/* Animated grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {points.map((point, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl p-4 shadow-sm border border-neutral-100 flex items-start gap-3 hover:shadow-md transition-all duration-300"
            >
              <div className="w-7 h-7 rounded-lg bg-brand-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle size={14} className="text-brand-teal" />
              </div>
              <p className="text-neutral-700 text-sm leading-relaxed">
                {point}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


function CoverageTable() {
  const { ref, isVisible } = useScrollAnimation();

  const rows = [
    { income: 'Under $70,000', cdcp: '100%', patient: '0%', highlight: true },
    { income: '$70,000 – $79,999', cdcp: '60%', patient: '40%', highlight: false },
    { income: '$80,000 – $89,999', cdcp: '40%', patient: '60%', highlight: false },
    { income: '$90,000+', cdcp: 'Not eligible', patient: 'Full cost', highlight: false },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white to-brand-green/5">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900">Coverage <span className="text-brand-teal">Breakdown</span></h2>
          <p className="mt-2 text-neutral-600 text-sm">Based on Adjusted Family Net Income (AFNI)</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="rounded-2xl overflow-hidden shadow-xl border border-brand-teal/10"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-brand-teal via-brand-green to-brand-gold text-white">
                  <th className="px-5 py-4 text-left font-heading font-semibold">Adjusted Family Net Income</th>
                  <th className="px-5 py-4 text-center font-heading font-semibold">CDCP Pays</th>
                  <th className="px-5 py-4 text-center font-heading font-semibold">Patient Pays</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className={`border-t border-neutral-100 ${row.highlight ? 'bg-brand-green/5' : i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}>
                    <td className="px-5 py-4 font-medium text-neutral-800">{row.income}</td>
                    <td className={`px-5 py-4 text-center font-bold ${row.highlight ? 'text-brand-green' : row.cdcp === 'Not eligible' ? 'text-neutral-400' : 'text-brand-teal'}`}>{row.cdcp}</td>
                    <td className={`px-5 py-4 text-center font-medium ${row.patient === '0%' ? 'text-brand-green' : 'text-neutral-600'}`}>{row.patient}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-4 text-xs text-neutral-500 text-center italic px-4"
        >
          Coverage is based on the CDCP fee guide and may differ from the Ontario Dental Association fee guide.
        </motion.p>
      </div>
    </section>
  );
}

function EligibilityCalculator() {
  const { ref, isVisible } = useScrollAnimation();
  const [income, setIncome] = useState('');
  const [hasInsurance, setHasInsurance] = useState<string>('');
  const [isResident, setIsResident] = useState<string>('');
  const [filedTax, setFiledTax] = useState<string>('');
  const [result, setResult] = useState<'eligible' | 'ineligible' | null>(null);

  const checkEligibility = () => {
    const incomeNum = parseFloat(income);
    if (
      hasInsurance === 'no' &&
      isResident === 'yes' &&
      filedTax === 'yes' &&
      !isNaN(incomeNum) &&
      incomeNum < 90000
    ) {
      setResult('eligible');
    } else {
      setResult('ineligible');
    }
  };

  const isFormComplete = income && hasInsurance && isResident && filedTax;

  return (
    <section ref={ref} id="eligibility-calculator" className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(0,165,181,0.06) 0%, rgba(107,191,74,0.04) 50%, rgba(232,168,56,0.04) 100%)' }}>
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 text-brand-gold-dark text-xs font-medium mb-3">
            <Calculator size={14} /> Quick Check
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900">Check Your <span className="text-brand-teal">Eligibility</span></h2>
          <p className="mt-2 text-neutral-600 text-sm">Answer a few quick questions to see if you may qualify.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-brand-teal/10"
        >
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-neutral-800 mb-2">Adjusted Family Net Income</label>
              <input
                type="number"
                value={income}
                onChange={(e) => { setIncome(e.target.value); setResult(null); }}
                placeholder="e.g. 65000"
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-800 mb-2">Do you have private dental insurance?</label>
              <div className="flex gap-3">
                <button onClick={() => { setHasInsurance('yes'); setResult(null); }} className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${hasInsurance === 'yes' ? 'border-brand-teal bg-brand-teal/10 text-brand-teal' : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'}`}>Yes</button>
                <button onClick={() => { setHasInsurance('no'); setResult(null); }} className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${hasInsurance === 'no' ? 'border-brand-teal bg-brand-teal/10 text-brand-teal' : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'}`}>No</button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-800 mb-2">Are you a Canadian resident for tax purposes?</label>
              <div className="flex gap-3">
                <button onClick={() => { setIsResident('yes'); setResult(null); }} className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${isResident === 'yes' ? 'border-brand-teal bg-brand-teal/10 text-brand-teal' : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'}`}>Yes</button>
                <button onClick={() => { setIsResident('no'); setResult(null); }} className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${isResident === 'no' ? 'border-brand-teal bg-brand-teal/10 text-brand-teal' : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'}`}>No</button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-800 mb-2">Have you filed your most recent tax return?</label>
              <div className="flex gap-3">
                <button onClick={() => { setFiledTax('yes'); setResult(null); }} className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${filedTax === 'yes' ? 'border-brand-teal bg-brand-teal/10 text-brand-teal' : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'}`}>Yes</button>
                <button onClick={() => { setFiledTax('no'); setResult(null); }} className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${filedTax === 'no' ? 'border-brand-teal bg-brand-teal/10 text-brand-teal' : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'}`}>No</button>
              </div>
            </div>

            <button
              onClick={checkEligibility}
              disabled={!isFormComplete}
              className={`w-full py-3.5 rounded-xl font-medium text-sm transition-all ${isFormComplete ? 'bg-brand-teal text-white hover:bg-brand-teal-dark shadow-lg' : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'}`}
            >
              Check Eligibility
            </button>
          </div>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                className="mt-6 overflow-hidden"
              >
                {result === 'eligible' ? (
                  <div className="p-5 rounded-xl bg-brand-green/10 border border-brand-green/20">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle size={18} className="text-brand-green" />
                      <p className="font-heading font-bold text-brand-green-dark">You are likely eligible for CDCP coverage.</p>
                    </div>
                    <p className="text-sm text-neutral-600 mb-4">Based on your answers, you may qualify for the Canadian Dental Care Plan. Book an appointment and we'll help verify your coverage.</p>
                    <Link to="/booking" className="btn-primary text-sm">
                      Book Your CDCP Appointment <ArrowRight size={14} className="ml-2" />
                    </Link>
                  </div>
                ) : (
                  <div className="p-5 rounded-xl bg-brand-gold/10 border border-brand-gold/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield size={18} className="text-brand-gold-dark" />
                      <p className="font-heading font-bold text-neutral-800">You may not qualify for CDCP, but we can still help.</p>
                    </div>
                    <p className="text-sm text-neutral-600 mb-4">Don't worry — our team can discuss other options to make dental care affordable for you.</p>
                    <a href="tel:+19059998144" className="btn-secondary text-sm inline-flex">
                      <Phone size={14} className="mr-2" /> Call Us to Discuss Options
                    </a>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function WhatCDCPCovers() {
  const { ref, isVisible } = useScrollAnimation();

  const categories = [
    { icon: Stethoscope, title: 'Preventive Care', items: ['Dental exams', 'Professional cleanings', 'X-rays', 'Oral assessments'], color: 'brand-teal' },
    { icon: Shield, title: 'Basic Treatments', items: ['Fillings', 'Tooth pain relief', 'Simple restorations', 'Extractions'], color: 'brand-green' },
    { icon: Heart, title: 'Gum Care', items: ['Scaling', 'Root planing', 'Periodontal maintenance'], color: 'brand-gold' },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white to-brand-teal/5">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900">What CDCP May <span className="text-red-600">Cover</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.5, type: 'spring' }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-neutral-100 hover:-translate-y-1 transition-transform"
            >
              <motion.div
                animate={isVisible ? { rotate: [0, 8, -8, 0] } : {}}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                className={`w-12 h-12 rounded-xl bg-${cat.color}/10 flex items-center justify-center mb-4`}
              >
                <cat.icon size={22} className={`text-${cat.color}`} />
              </motion.div>
              <h3 className={`font-heading font-semibold text-${cat.color} mb-3`}>{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle size={13} className={`text-${cat.color} shrink-0`} /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeHelp() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding" style={{ background: 'linear-gradient(135deg, rgba(0,165,181,0.06) 0%, rgba(107,191,74,0.04) 100%)' }}>
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900">How Tazeen's Dental Clinic <span className="text-brand-teal">Helps</span> You With CDCP</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-brand-teal/10"
        >
          <p className="text-neutral-700 text-sm leading-relaxed">
            We know the CDCP process can feel confusing — don't worry, we've got you.
          </p>
          <p className="mt-3 text-neutral-700 text-sm leading-relaxed">
            Whether you're unsure about eligibility, paperwork, or what documents you need, we make it simple.
          </p>

          <div className="mt-5 p-4 rounded-xl bg-brand-teal/5 border border-brand-teal/10">
            <p className="text-neutral-800 text-sm font-medium">
              Got questions? Just call us or walk in.
            </p>
            <p className="mt-2 text-neutral-600 text-sm leading-relaxed">
              Our team will help you check your eligibility, understand your coverage, and even guide you through the filing process so you don't have to figure it out alone.
            </p>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0"
            >
              <Heart size={18} className="text-brand-green" />
            </motion.div>
            <div>
              <p className="font-heading font-bold text-neutral-900 text-sm">No stress. No guesswork.</p>
              <p className="text-neutral-600 text-sm">Just clear answers and friendly support every step of the way.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'Do you accept CDCP patients in Milton?', a: 'Yes! We proudly accept CDCP patients and provide direct billing where available.' },
    { q: 'Do I need to pay upfront?', a: 'In most cases, eligible services are billed directly. We explain any costs beforehand.' },
    { q: 'Can I combine CDCP with other insurance?', a: 'It depends on your coverage. Our team will review your benefits with you.' },
    { q: "I'm unemployed — can I still get coverage?", a: 'Absolutely. CDCP is for anyone without dental benefits, whether employed or not.' },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white to-red-50/30 relative">
      <FloatingTooth className="top-8 right-[8%]" delay={0} size={20} />
      <FloatingMolar className="bottom-12 left-[6%]" delay={1.5} size={18} />
      <FloatingSparkle className="top-20 left-[15%]" delay={1} />

      <div className="max-w-3xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900">Frequently Asked <span className="text-red-600">Questions</span></h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              className="bg-white rounded-xl shadow-md border border-neutral-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <FloatingToothIcon />
                  <h3 className="font-heading font-semibold text-neutral-900 text-sm">{faq.q}</h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={18} className="text-neutral-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-4 pl-12">
                      <p className="text-neutral-600 text-sm">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingToothIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 24 30" fill="none" className="shrink-0">
      <path
        d="M12 1C9 1 7 3 6.5 5C6 7 5 7.5 3.5 9C2 10.5 2.5 12.5 3.5 14C4.5 15.5 5 17.5 5.5 20C6 22.5 6.5 25 7.5 27C8.5 29 9.5 29 10.5 27C11.5 25 12 22 12.5 20C13 18 14 18 14.5 20C15 22 15.5 25 16.5 27C17.5 29 18.5 29 19.5 27C20.5 25 21 22.5 21.5 20C22 17.5 22.5 15.5 23.5 14C24.5 12.5 25 10.5 23.5 9C22 7.5 21 7 20.5 5C20 3 18 1 12 1Z"
        fill="#00A5B5"
        opacity="0.5"
      />
    </svg>
  );
}

function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto rounded-3xl p-8 md:p-10 text-center text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #C41E3A 0%, #FF0000 30%, #C41E3A 100%)' }}>
        <FloatingSparkle className="top-4 right-[20%]" delay={0} />
        <FloatingTooth className="bottom-4 left-[15%]" delay={1} size={18} />

        <div className="relative">
          <CanadaFlag className="mx-auto mb-4" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold">Get Started with CDCP Today</h2>
          <p className="mt-3 text-white/85 text-sm max-w-md mx-auto">
            Book your visit and let our team help you access affordable, preventive dental care in Milton.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#eligibility-calculator"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium text-red-700 bg-white hover:bg-neutral-100 transition-all shadow-lg text-sm"
            >
              <Calculator size={14} className="mr-2" /> Check Eligibility
            </a>
            <Link to="/booking" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/40 text-white hover:bg-white/10 transition-all font-medium text-sm">
              Book Appointment <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
