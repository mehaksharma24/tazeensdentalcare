import logo from '../assets/logo.png';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLink {
  to?: string;
  label: string;
  dropdown?: { to: string; label: string }[];
}

const links: NavLink[] = [
  { to: '/', label: 'Home' },
  {
    label: 'About',
    dropdown: [
      { to: '/about/office', label: 'Our Clinic' },
      { to: '/about/team', label: 'Our Team' },
    ],
  },
  {
    label: 'Services',
    dropdown: [
      { to: '/services#gbt', label: 'Guided Biofilm Therapy (GBT)' },
      { to: '/services#periodontal-care', label: 'Periodontal Care' },
      { to: '/services#teeth-whitening', label: 'Teeth Whitening' },
      { to: '/services#childrens-dental', label: "Children's Dental Care" },
      { to: '/services#restorative', label: 'Restorative Dentistry' },
      { to: '/services#invisalign', label: 'Invisalign / Clear Aligners' },
      { to: '/services#emergency', label: 'Emergency Dental Care' },
    ],
  },
  { to: '/gbt', label: 'GBT' },
  { to: '/cdcp', label: 'CDCP' },
  { to: '/promotions', label: 'Promotions' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (link: NavLink) => {
    if (link.to) return location.pathname === link.to;
    if (link.dropdown) return link.dropdown.some((sub) => location.pathname === sub.to.split('#')[0]);
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">

            {/* --- REPLACED LOGO ONLY --- */}
            <div className="w-14 h-14 flex items-center justify-center">
              <img
                src={logo}
                alt="Tazeen's Dental Care Logo"
                className="w-full h-full object-contain"
              />
            </div>
            {/* -------------------------------- */}

            <span className="font-heading font-bold text-lg">
              <span className="text-brand-teal">TAZEEN'S</span>{' '}
              <span className="text-neutral-700">DENTAL CARE</span>
            </span>
          </Link>

          <div ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {links.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                      isActive(link)
                        ? 'text-brand-teal bg-brand-teal/5'
                        : 'text-neutral-600 hover:text-brand-teal hover:bg-neutral-50'
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-neutral-100 py-2 min-w-[250px] z-50 max-h-[70vh] overflow-y-auto"
                      >
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                              location.pathname + location.hash === sub.to
                                ? 'text-brand-teal bg-brand-teal/5'
                                : 'text-neutral-600 hover:text-brand-teal hover:bg-neutral-50'
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to!}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'text-brand-teal bg-brand-teal/5'
                      : 'text-neutral-600 hover:text-brand-teal hover:bg-neutral-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+19059998144"
              className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-brand-teal transition-colors"
            >
              <Phone size={16} />
              905-999-8144
            </a>
            <Link to="/booking" className="btn-primary text-sm">
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-100 shadow-lg max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <p className="px-4 py-2 text-xs font-bold text-neutral-400 uppercase tracking-wide">{link.label}</p>
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        className={`block px-6 py-3 rounded-lg text-sm font-medium ${
                          location.pathname + location.hash === sub.to
                            ? 'text-brand-teal bg-brand-teal/5'
                            : 'text-neutral-600'
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to!}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                      location.pathname === link.to
                        ? 'text-brand-teal bg-brand-teal/5'
                        : 'text-neutral-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-3 border-t border-neutral-100">
                <Link to="/booking" className="btn-primary w-full text-sm text-center">
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
