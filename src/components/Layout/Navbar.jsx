import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Shield, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('navHome') },
    { path: '/about', label: t('navAbout') },
    { path: '/rooms', label: t('navRooms') },
    { path: '/restaurant', label: t('navRestaurant') },
    { path: '/banquet', label: t('navBanquet') },
    { path: '/gallery', label: t('navGallery') },
    { path: '/attractions', label: t('navAttractions') },
    { path: '/contact', label: t('navContact') },
    { path: '/reviews', label: t('navReviews') },
    { path: '/faqs', label: t('navFaq') },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Gold top accent bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-[60]" />

      <nav
        className={`fixed top-[3px] left-0 w-full z-50 transition-all duration-500 ${
          isScrolled || isOpen
            ? 'bg-[#070d1a]/98 shadow-2xl shadow-black/40 backdrop-blur-xl'
            : 'bg-[#070d1a]/85 backdrop-blur-lg'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px]">

            {/* ── Logo ── */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex flex-col items-start group shrink-0"
            >
              <span className="text-[22px] sm:text-[26px] font-serif font-black tracking-[0.06em] text-white group-hover:text-gold transition-colors duration-300 leading-none">
                HOTEL ANKOLA
              </span>
              <span
                className="text-[10px] sm:text-[12px] font-sans font-semibold uppercase tracking-[0.35em] leading-none mt-[3px]"
                style={{ color: '#D4AF37', letterSpacing: '0.35em' }}
              >
                ✦ International ✦
              </span>
            </Link>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-1.5 xl:px-2.5 py-5 text-[10px] xl:text-[11px] font-bold tracking-[0.08em] xl:tracking-[0.12em] uppercase transition-all duration-200 group ${
                    isActive(link.path)
                      ? 'text-[#D4AF37]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {/* Active underline */}
                  <span
                    className={`absolute bottom-3 left-1.5 xl:left-2.5 right-1.5 xl:right-2.5 h-[2px] rounded-full bg-[#D4AF37] transition-all duration-300 ${
                      isActive(link.path)
                        ? 'opacity-100 scale-x-100'
                        : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* ── Desktop Controls ── */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">

              {/* Language Selector */}
              <div className="relative flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4AF37]/40 rounded-full px-3 py-1.5 transition-all duration-200 cursor-pointer">
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent text-white/90 text-[11px] font-semibold tracking-wider focus:outline-none cursor-pointer appearance-none pr-3"
                >
                  <option value="en" className="bg-[#0a1128]">EN</option>
                  <option value="kn" className="bg-[#0a1128]">ಕನ್ನಡ</option>
                  <option value="hi" className="bg-[#0a1128]">हिंदी</option>
                </select>
                <ChevronDown className="w-3 h-3 text-white/50 absolute right-2" />
              </div>

              {/* Admin */}
              <Link
                to="/admin"
                title={t('navAdmin')}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 text-white/50 hover:text-[#D4AF37] transition-all duration-200"
              >
                <Shield className="w-4 h-4" />
              </Link>

              {/* BOOK NOW */}
              <Link
                to="/booking"
                className="relative overflow-hidden bg-[#D4AF37] text-[#070d1a] px-5 py-2.5 rounded-full font-black text-[11px] uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D4AF37]/30 group"
              >
                <span className="relative z-10">{t('btnBookNow')}</span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>

            {/* ── Mobile Controls ── */}
            <div className="flex items-center gap-2 lg:hidden">
              <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
                <Globe className="w-3 h-3 text-[#D4AF37]" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent text-white/90 text-[10px] font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="en" className="bg-[#0a1128]">EN</option>
                  <option value="kn" className="bg-[#0a1128]">KN</option>
                  <option value="hi" className="bg-[#0a1128]">HI</option>
                </select>
              </div>

              <Link to="/admin" className="text-white/40 hover:text-[#D4AF37] transition-colors">
                <Shield className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-white hover:text-[#D4AF37] transition-all duration-200"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Drawer ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-[#D4AF37]/15 bg-[#070d1a]/98 backdrop-blur-xl px-4 pb-6 pt-2">
            <div className="grid grid-cols-2 gap-1 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-[12px] font-bold tracking-widest uppercase text-center transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30'
                      : 'text-white/70 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-[#D4AF37] text-[#070d1a] py-3.5 rounded-full font-black uppercase tracking-[0.15em] text-sm text-center shadow-lg shadow-[#D4AF37]/20 transition-all hover:opacity-90"
            >
              {t('btnBookNow')}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
