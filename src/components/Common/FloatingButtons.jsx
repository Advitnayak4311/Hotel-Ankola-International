import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

export default function FloatingButtons() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 font-sans">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919380810711?text=Hello%20Hotel%20Ankola%20International,%20I%20would%20like%2520to%20inquire%20about%20room%20availability."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-2xl hover:bg-emerald-400 transition-all duration-300 hover:scale-110 border-2 border-emerald-300/40"
        title={t('whatsapp')}
      >
        <FaWhatsapp className="w-7 h-7" style={{ fontSize: '28px' }} />
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-md whitespace-nowrap origin-right transition-all duration-200 shadow-md">
          {t('whatsapp')}
        </span>
      </a>

      {/* Direct Call Button */}
      <a
        href="tel:+919380810711"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-rose-600 text-white shadow-2xl hover:bg-rose-500 transition-all duration-300 hover:scale-110 border-2 border-rose-400/40"
        title={t('callNow')}
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-rose-600 text-white text-xs font-semibold px-3 py-1.5 rounded-md whitespace-nowrap origin-right transition-all duration-200 shadow-md">
          {t('callNow')}
        </span>
      </a>

      {/* Quick Booking Page Button */}
      <Link
        to="/booking"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-amber-500 text-slate-950 shadow-2xl hover:bg-amber-400 transition-all duration-300 hover:scale-110 border-2 border-amber-300/40"
        title={t('btnBookNow')}
      >
        <Calendar className="w-6 h-6" />
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-md whitespace-nowrap origin-right transition-all duration-200 shadow-md uppercase tracking-wider">
          {t('btnBookNow')}
        </span>
      </Link>
    </div>
  );
}
