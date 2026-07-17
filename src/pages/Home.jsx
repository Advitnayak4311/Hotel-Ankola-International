import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Coffee, Wifi, Car, Shield, Award, MapPin, ArrowRight, Utensils, Calendar, Sparkles, CheckCircle2, XCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useBooking } from '../context/BookingContext';
import WeatherWidget from '../components/Common/WeatherWidget';
import SectionHeader from '../components/Common/SectionHeader';

const heroSlides = [
  {
    image: "/1.jpg",
    title: "Experience Premium Hospitality",
    subtitle: "A Luxurious Oasis on NH66 Ankola"
  },
  {
    image: "/2.jpg",
    title: "Indulge in Karavali Delicacies",
    subtitle: "Exquisite Seafood & Multi-cuisine Restaurant"
  },
  {
    image: "/3.jpg",
    title: "Celebrate Royal Moments",
    subtitle: "Spacious AC Banquet Hall for Up to 500 Guests"
  }
];

const aboutImages = ["/4.jpg", "/5.jpg"];

export default function Home() {
  const { t } = useLanguage();
  const { rooms, reviews } = useBooking();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [aboutImgIdx, setAboutImgIdx] = useState(0);

  // Auto-scroll hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Cycle about section images
  useEffect(() => {
    const timer = setInterval(() => {
      setAboutImgIdx((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-slate-50 font-sans">
      
      {/* 1. Hero Section Slider */}
      <section className="relative h-[calc(100vh-80px)] min-h-[500px] overflow-hidden bg-slate-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#070d1a]/60 via-[#070d1a]/20 to-[#070d1a]/70 z-10" />
            <img
              src={heroSlides[currentSlide].image}
              alt="Hotel Banner"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6 max-w-4xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/50 backdrop-blur-sm px-5 py-2 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.25em]">Welcome to Ankola's Finest</span>
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-7xl font-serif font-black text-white tracking-tight leading-[1.05]"
              style={{ textShadow: '0 4px 24px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.9)' }}
            >
              {t('hotelName')}
            </h1>

            {/* Tagline */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-[#D4AF37]/60" />
              <p className="text-white/90 text-[11px] sm:text-sm tracking-[0.2em] uppercase font-semibold">
                {t('tagline')}
              </p>
              <div className="h-px w-10 bg-[#D4AF37]/60" />
            </div>

            {/* CTA Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/booking"
                className="relative overflow-hidden w-full sm:w-auto bg-[#D4AF37] text-[#070d1a] px-10 py-4 rounded-full text-sm font-black uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#D4AF37]/40 group"
              >
                <span className="relative z-10">{t('btnBookNow')}</span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
              </Link>
              <Link
                to="/rooms"
                className="w-full sm:w-auto border-2 border-white/70 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] bg-white/5 backdrop-blur-sm hover:bg-[#D4AF37]/10 px-10 py-4 rounded-full text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105"
              >
                {t('btnViewRooms')}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`rounded-full transition-all duration-400 ${
                currentSlide === idx
                  ? 'bg-[#D4AF37] w-8 h-2.5'
                  : 'bg-white/30 w-2.5 h-2.5 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 2. Weather and Introduction Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2 bg-slate-900 border border-gold/20 p-6 sm:p-8 rounded-2xl shadow-2xl text-white flex flex-col md:flex-row items-center md:items-start gap-6">
            <Award className="w-12 h-12 text-gold shrink-0 mt-1 animate-pulse" />
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-serif font-bold text-white">Prime Location on NH66, Ankola</h3>
              <p className="text-sm text-slate-300">
                Positioned perfectly for travelers touring coastal Karnataka. Just 25 minutes from Gokarna beaches, 30 minutes from historic Karwar, and steps away from Ankola's town center. Secure parking and easy highway accessibility make us the ideal luxury pitstop.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <WeatherWidget />
          </div>
        </div>
      </section>

      {/* 3. About Hotel Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHeader eyebrow="About Hotel" title="Redefining Luxury & Hospitality in Uttar Kannada" center={false} />
            <p className="text-slate-600 leading-relaxed">
              Established with a vision to deliver premium standards of stay and coastal cuisine, Hotel Ankola International stands as the hallmark of hospitality along the NH66 corridor. 
            </p>
            <p className="text-slate-600 leading-relaxed">
              We present carefully designed air-conditioned rooms, a state-of-the-art wedding banquet hall, and an acclaimed multi-cuisine restaurant serving traditional Karavali seafood. Experience comfort like never before.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#D4AF37] border border-[#D4AF37]/40 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 font-bold text-sm uppercase tracking-wider transition-all px-5 py-2.5 rounded-full"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-gold rounded-tl-2xl -z-10" />
            <AnimatePresence mode="wait">
              <motion.img
                key={aboutImgIdx}
                src={aboutImages[aboutImgIdx]}
                alt="Hotel Photo"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full object-cover h-[400px]"
              />
            </AnimatePresence>
            <div className="absolute bottom-4 right-4 bg-gold px-5 py-3 rounded-xl flex items-center space-x-3 shadow-2xl border-2 border-white/30">
              <span className="text-4xl font-bold font-serif text-slate-950 leading-none">6+</span>
              <span className="text-[11px] uppercase font-extrabold tracking-widest leading-tight text-slate-950">Years of<br />Excellence</span>
            </div>
            {/* Image dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5">
              {aboutImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setAboutImgIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    aboutImgIdx === i ? 'bg-gold w-5' : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Rooms */}
      <section className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Your Sanctuary" title="Featured Rooms & Suites" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.slice(0, 3).map((room) => (
              <div key={room.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col group hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-slate-950/85 border border-gold/40 text-gold font-serif font-bold px-4 py-1.5 rounded-full text-sm">
                    ₹{room.price} <span className="text-xs text-slate-300 font-sans">/ Night</span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-gold transition-colors">{room.name}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{room.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 text-[10px] text-slate-600 font-medium">
                    {room.features.slice(0, 3).map((f, i) => (
                      <span key={i} className="bg-slate-100 border border-slate-200 px-2.5 py-1 rounded">
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-rose-600 font-semibold bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
                      {t('roomsLeft', { count: room.availableCount })}
                    </span>
                    <Link
                      to="/booking"
                      className="text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-gold flex items-center transition-colors"
                    >
                      Book Now <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/rooms"
              className="relative overflow-hidden inline-flex items-center gap-2 bg-[#D4AF37] text-[#070d1a] px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D4AF37]/30 group"
            >
              <span className="relative z-10">Explore All Rooms</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Premium Amenities */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="The Experience" title="Luxury Amenities" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
          {/* Category 1: Popular & Internet */}
          <div className="bg-white p-8 rounded-2xl border border-slate-250/60 shadow-md space-y-5 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
              <span>Popular Amenities</span>
              <span className="text-[10px] bg-gold/15 text-gold border border-gold/30 px-2 py-0.5 rounded uppercase font-bold tracking-wider">Key Details</span>
            </h3>
            <ul className="space-y-3.5 text-slate-700">
              <li className="flex items-center space-x-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-semibold">Swimming Pool</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-semibold">Free High-Speed Wi-Fi</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-semibold">Ample Parking (Free)</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-semibold">Multi-Cuisine Restaurant</span>
              </li>
            </ul>
          </div>

          {/* Category 2: Services, Transport, Food */}
          <div className="bg-white p-8 rounded-2xl border border-slate-250/60 shadow-md space-y-5 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
              <span>Services & Dining</span>
              <span className="text-[10px] bg-slate-100 text-slate-655 border border-slate-200 px-2 py-0.5 rounded uppercase font-bold tracking-wider">24/7 Support</span>
            </h3>
            <ul className="space-y-3.5 text-slate-700">
              <li className="flex items-center space-x-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>24-Hour Front Desk Desk</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Full-Service Laundry</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Room Service Support</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Local Shuttle Transport</span>
              </li>
            </ul>
          </div>

          {/* Category 3: Pools & Wellness */}
          <div className="bg-white p-8 rounded-2xl border border-slate-250/60 shadow-md space-y-5 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-serif font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
              <span>Wellness & Pools</span>
              <span className="text-[10px] bg-rose-50 text-rose-700 border border-rose-100 px-2 py-0.5 rounded uppercase font-bold tracking-wider">Exclusions</span>
            </h3>
            <ul className="space-y-3.5 text-slate-700">
              <li className="flex items-center space-x-3 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Outdoor Swimming Pool</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400">
                <XCircle className="w-5 h-5 text-slate-300 shrink-0" />
                <span className="line-through">No Hot Tub</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400">
                <XCircle className="w-5 h-5 text-slate-300 shrink-0" />
                <span className="line-through">No Fitness Centre</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400">
                <XCircle className="w-5 h-5 text-slate-300 shrink-0" />
                <span className="line-through">No Spa Services</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Reviews Slider */}
      <section className="py-20 bg-slate-900 border-y-2 border-gold text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
          <SectionHeader eyebrow="Testimonials" title="What Our Guests Say" light={true} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {reviews.map((rev) => (
              <div key={rev.id} className="glass-card-dark p-6 rounded-2xl border border-white/5 space-y-4 text-left flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex space-x-1 text-gold">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic">"{rev.comment}"</p>
                </div>
                <div className="flex items-center space-x-3 border-t border-white/10 pt-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-8 h-8 rounded-full object-cover border border-gold"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white">{rev.name}</h4>
                    <span className="text-[10px] text-gold">{rev.category} Guest</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              to="/reviews"
              className="inline-block bg-gold hover:bg-gold-600 text-slate-950 px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Write a Review
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Nearby Attractions Snippet */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="/Gokarna-Om-Beach.jpg"
              alt="Gokarna Beach Near Ankola"
              className="rounded-2xl shadow-xl w-full object-cover h-[380px]"
            />
            <div className="absolute top-4 left-4 bg-[#070d1a]/95 text-[#D4AF37] px-4 py-2 rounded-lg text-xs font-black uppercase tracking-[0.15em] border border-[#D4AF37]/45 shadow-lg shadow-black/50">
              25 Mins to Gokarna
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <div className="text-gold font-sans font-bold tracking-widest text-xs uppercase">
              BEAUTIFUL KARNATAKA
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Explore the Mystical Coast & Valleys
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Located on NH66, our hotel serves as a perfect hub for nature lovers. Explore the scenic Om Beach, visit the historical Mirjan Fort, hike up the geological wonder of Yana Caves, or witness the majestic Jog Falls.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center"><MapPin className="w-4 h-4 text-gold mr-2" /> Gokarna Beaches - 26 km (25 Mins)</li>
              <li className="flex items-center"><MapPin className="w-4 h-4 text-gold mr-2" /> Mirjan Fort - 24 km (20 Mins)</li>
              <li className="flex items-center"><MapPin className="w-4 h-4 text-gold mr-2" /> Vibhooti Falls & Yana Caves - 55 km (1.5 Hours)</li>
            </ul>
            <div className="pt-2">
              <Link
                to="/attractions"
                className="inline-flex items-center text-slate-900 hover:text-gold font-bold text-sm uppercase tracking-wider transition-colors"
              >
                View Nearby Attractions <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
