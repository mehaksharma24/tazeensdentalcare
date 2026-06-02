import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="absolute h-1 w-full bg-gradient-to-r from-brand-teal via-brand-green to-brand-gold" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-teal via-brand-green to-brand-gold flex items-center justify-center">
                <svg width="16" height="18" viewBox="0 0 24 30" fill="white">
                  <path d="M12 1C9 1 7 3 6.5 5C6 7 5 7.5 3.5 9C2 10.5 2.5 12.5 3.5 14C4.5 15.5 5 17.5 5.5 20C6 22.5 6.5 25 7.5 27C8.5 29 9.5 29 10.5 27C11.5 25 12 22 12.5 20C13 18 14 18 14.5 20C15 22 15.5 25 16.5 27C17.5 29 18.5 29 19.5 27C20.5 25 21 22.5 21.5 20C22 17.5 22.5 15.5 23.5 14C24.5 12.5 25 10.5 23.5 9C22 7.5 21 7 20.5 5C20 3 18 1 12 1Z" />
                </svg>
              </div>
              <span className="font-heading font-bold text-sm">Tazeen's Dental Care</span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Prevention-first dental care in Milton. We go the extra mile to make you smile.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: '/about/office', label: 'Our Office' },
                { to: '/about/team', label: 'Our Team' },
                { to: '/services', label: 'Services' },
                { to: '/gbt', label: 'GBT' },
                { to: '/cdcp', label: 'CDCP' },
                { to: '/promotions', label: 'Promotions' },
                { to: '/booking', label: 'Book Appointment' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-neutral-400 hover:text-brand-teal transition-colors text-xs">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm mb-4">Contact</h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5 text-neutral-400 text-xs">
                <MapPin size={14} className="mt-0.5 shrink-0 text-brand-green" />
                <span>400 Bronte Street South, Unit 108, Milton, Ontario</span>
              </li>
              <li className="flex items-center gap-2.5 text-neutral-400 text-xs">
                <Phone size={14} className="shrink-0 text-brand-teal" />
                <a href="tel:+19059998144" className="hover:text-white transition-colors">905-999-8144</a>
              </li>
              <li className="flex items-center gap-2.5 text-neutral-400 text-xs">
                <Mail size={14} className="shrink-0 text-brand-gold" />
                <a href="mailto:info@tdentalcare.com" className="hover:text-white transition-colors">info@tdentalcare.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm mb-4">Hours</h3>
            <ul className="space-y-2 text-neutral-400 text-xs">
              <li className="flex items-center gap-2">
                <Clock size={12} className="text-brand-green" />
                Mon-Thu: 10 AM - 7 PM
              </li>
              <li className="flex items-center gap-2">
                <Clock size={12} className="text-brand-green" />
                Fri-Sat: 10 AM - 4 PM
              </li>
              <li className="flex items-center gap-2">
                <Clock size={12} className="text-neutral-600" />
                Sunday: Closed
              </li>
            </ul>
            <div className="flex gap-2 mt-5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-brand-teal transition-colors">
                <Facebook size={14} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-brand-green transition-colors">
                <Instagram size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-neutral-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Tazeen's Dental Care. All rights reserved.</p>
          <a href="https://tdentalcare.com" className="hover:text-brand-teal transition-colors">www.tdentalcare.com</a>
        </div>
      </div>
    </footer>
  );
}
