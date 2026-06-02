import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { FloatingBubble, FloatingSparkle } from '../components/FloatingElements';

export function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_date: '',
    preferred_time: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const services = [
    'Dental Cleaning',
    'Guided Biofilm Therapy (GBT)',
    'Dental Exam',
    'Teeth Whitening',
    'Fillings & Restorations',
    'Periodontal Care',
    'Emergency Care',
    'CDCP Appointment',
    'Consultation',
    'Other',
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM',
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('appointments').insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      preferred_date: formData.preferred_date,
      preferred_time: formData.preferred_time,
      service: formData.service,
      message: formData.message,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or call us directly.');
      return;
    }

    setStatus('success');
    setFormData({ name: '', email: '', phone: '', preferred_date: '', preferred_time: '', service: '', message: '' });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div className="overflow-hidden">
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 min-h-screen" style={{ background: 'linear-gradient(180deg, rgba(0,165,181,0.08) 0%, rgba(107,191,74,0.05) 50%, rgba(232,168,56,0.05) 100%)' }}>
        <FloatingBubble className="top-32 left-[10%]" size={40} color="#00A5B5" delay={0} />
        <FloatingSparkle className="top-40 right-[20%]" delay={0.5} />
        <FloatingBubble className="bottom-20 right-[10%]" size={30} color="#6BBF4A" delay={1.5} />

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-10">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900">
              Book Your <span className="text-brand-teal">Appointment</span>
            </h1>
            <p className="mt-3 text-neutral-600 max-w-md mx-auto">
              Request a time and we'll confirm within one business day.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="max-w-2xl mx-auto">
            {status === 'success' ? (
              <div className="card text-center py-10">
                <div className="w-14 h-14 rounded-full bg-brand-green/15 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={28} className="text-brand-green" />
                </div>
                <h2 className="font-heading text-xl font-bold text-neutral-900">Request Received!</h2>
                <p className="mt-3 text-neutral-600 text-sm max-w-sm mx-auto">
                  We'll contact you within one business day to confirm your appointment.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-primary mt-6 text-sm">Book Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card border border-brand-teal/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-brand-teal/10 flex items-center justify-center">
                    <Calendar size={18} className="text-brand-teal" />
                  </div>
                  <div>
                    <h2 className="font-heading font-semibold text-neutral-800">Appointment Request</h2>
                    <p className="text-xs text-neutral-500">Fields marked * are required</p>
                  </div>
                </div>

                {status === 'error' && (
                  <div className="mb-5 p-3 rounded-lg bg-red-50 border border-red-100 flex items-center gap-2">
                    <AlertCircle size={16} className="text-red-500 shrink-0" />
                    <p className="text-xs text-red-700">{errorMsg}</p>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">Full Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all text-sm" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">Email *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">Phone *</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all text-sm" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">Preferred Date *</label>
                      <input type="date" name="preferred_date" required value={formData.preferred_date} onChange={handleChange} min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">Preferred Time *</label>
                      <div className="relative">
                        <Clock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                        <select name="preferred_time" required value={formData.preferred_time} onChange={handleChange} className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-neutral-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all text-sm appearance-none bg-white">
                          <option value="">Select</option>
                          {timeSlots.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">Service *</label>
                    <select name="service" required value={formData.service} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all text-sm appearance-none bg-white">
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">Message (optional)</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all text-sm resize-none" />
                  </div>

                  <button type="submit" disabled={status === 'loading'} className="btn-primary w-full py-3 text-sm disabled:opacity-60">
                    {status === 'loading' ? 'Submitting...' : 'Request Appointment'}
                  </button>
                  <p className="text-[11px] text-neutral-400 text-center">Our team will confirm your time by phone or email.</p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
