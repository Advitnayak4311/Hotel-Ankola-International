import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useBooking } from '../../context/BookingContext';

export default function Footer() {
  const { t } = useLanguage();
  const { addSubscriber } = useBooking();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      addSubscriber(email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-slate-950 border-t-2 border-gold text-slate-400 font-sans">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & QR Code */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col items-start">
              <span className="text-2xl font-serif font-bold tracking-wide text-white leading-tight">
                HOTEL ANKOLA
              </span>
              <span className="text-xs font-sans text-gold uppercase tracking-[0.2em] font-semibold">
                International
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Experience the pinnacle of luxury, exquisite cuisines, and local Karavali hospitality right on National Highway 66, Ankola.
            </p>
            {/* Clickable Location Map Link */}
            <a
              href="https://www.google.com/maps/place/HOTEL+ANKOLA+INTERNATIONAL/@14.666596,74.3122112,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbe85f56c0ce2d5:0x5aa9107cf90a870!5m2!4m1!1i2!8m2!3d14.666596!4d74.3122112!16s%2Fg%2F11qqqxz8yp"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-3 bg-slate-900 border border-slate-800 p-3 rounded-lg max-w-[200px] hover:border-gold/50 hover:bg-slate-850 transition-all cursor-pointer group"
            >
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FHOTEL%2BANKOLA%2BINTERNATIONAL%2F%4014.666596%2C74.3122112%2C17z%2Fdata%3D%213m1%214b1%214m9%213m8%211s0x3bbe85f56c0ce2d5%3A0x5aa9107cf90a870%215m2%214m1%211i2%218m2%213d14.666596%214d74.3122112%2116s%252Fg%252F11qqqxz8yp"
                alt="Google Maps QR Code"
                className="w-12 h-12 bg-white p-0.5 rounded shrink-0 object-contain"
              />
              <div className="flex flex-col text-[10px] text-slate-350 group-hover:text-white transition-colors">
                <span className="font-semibold text-gold">Open Map Location</span>
                <span className="underline">Ankola, NH66</span>
              </div>
            </a>

            {/* Premium Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-450 hover:text-gold hover:border-gold/50 hover:bg-slate-800 transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/hotelankola/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-450 hover:text-gold hover:border-gold/50 hover:bg-slate-800 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://wa.me/919380810711"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-450 hover:text-gold hover:border-gold/50 hover:bg-slate-800 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-serif font-bold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gold">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-gold transition-colors duration-200">About Our History</Link></li>
              <li><Link to="/rooms" className="hover:text-gold transition-colors duration-200">Deluxe & Family Rooms</Link></li>
              <li><Link to="/restaurant" className="hover:text-gold transition-colors duration-200">Karavali Dining & Menu</Link></li>
              <li><Link to="/banquet" className="hover:text-gold transition-colors duration-200">Royal Banquet Booking</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors duration-200">Photo & Video Gallery</Link></li>
              <li><Link to="/attractions" className="hover:text-gold transition-colors duration-200">Nearby Beaches & Caves</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="text-white text-lg font-serif font-bold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gold">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-gold shrink-0 mt-0.5" />
                <span>National Highway 66 (NH66), Ankola, Uttara Kannada, Karnataka - 581314</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gold shrink-0" />
                <span>+91 93808 10711 / +91 8388 230101</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gold shrink-0" />
                <span>stay@hotelankolainternational.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-serif font-bold relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gold">
              Newsletter
            </h3>
            <p className="text-sm text-slate-400">
              Subscribe to receive exclusive offers, local travel guides, and food festival updates.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-slate-900 border border-slate-800 text-white rounded-md pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-gold transition-all duration-200"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 bg-gold text-slate-950 px-3.5 rounded-md hover:bg-gold-600 transition-colors flex items-center justify-center"
              >
                {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-gold animate-pulse">Thank you! You have successfully subscribed.</p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Footer Area */}
      <div className="bg-slate-950 border-t border-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-550 text-center md:text-left">© {new Date().getFullYear()} {t('hotelName')}. {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
