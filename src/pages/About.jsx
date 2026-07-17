import React, { useState } from 'react';
import { ShieldCheck, Compass, Heart, Award, ArrowRight, CheckCircle2, XCircle, Phone, ArrowUpRight, MapPin, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/Common/PageHero';
import SectionHeader from '../components/Common/SectionHeader';

export default function About() {
  const { t } = useLanguage();
  const [showSahanaModal, setShowSahanaModal] = useState(false);
  const [showMantriModal, setShowMantriModal] = useState(false);
  return (
    <div className="min-h-screen pt-24 bg-slate-50 font-sans">
      
      <PageHero
        image="/8.jpg"
        eyebrow="Our Story"
        title={t('aboutTitle')}
        subtitle={t('aboutSubtitle')}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        
        {/* Section 1: Overview and History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/7.jpg"
              alt="Lobby Area"
              className="rounded-2xl shadow-xl w-full object-cover h-[450px]"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/15 -z-10 rounded-2xl" />
          </div>

          <div className="space-y-6">
            <SectionHeader eyebrow="Established 2016" title="A Legacy of Highway Luxury & Warmth" center={false} />
            <p className="text-slate-600 leading-relaxed">
              Located on the National Highway 66 corridor in Ankola, Karnataka, Hotel Ankola International was established to fill the void of premium luxury stays for tourists and corporate travelers heading towards Goa, Mangalore, and Gokarna.
            </p>
            <p className="text-slate-600 leading-relaxed">
              For over a decade, we have been welcoming local and international guests, delivering the highest standards of hospitality. We take pride in our service quality, local food authentic recipes, and state-of-the-art facilities that serve as a home away from home.
            </p>
          </div>
        </div>

        {/* Section 2: Mission, Vision, and Values */}
        <div className="bg-slate-100 border border-slate-200 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {/* Mission */}
            <div className="space-y-4 bg-white p-6 rounded-2xl shadow border border-slate-200/50">
              <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-950">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To offer an unforgettable stay experience by combining premium lodging comfort, Coastal culinary delights, and dedicated local hospitality services.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-4 bg-white p-6 rounded-2xl shadow border border-slate-200/50">
              <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-950">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be the most preferred premium accommodation and dining provider in Uttar Kannada, renowned for hygiene, standard pricing, and guest satisfaction.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-4 bg-white p-6 rounded-2xl shadow border border-slate-200/50">
              <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-950">Core Values</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We believe in transparency, ethical service, absolute cleanliness, and treating every traveler as a divine guest (Atithi Devo Bhava).
              </p>
            </div>

          </div>
        </div>

        {/* Section 3: Facilities Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <SectionHeader eyebrow="Amenities & More" title="Crafted to Ensure Comfort & Convenience" center={false} />
            <p className="text-slate-600 leading-relaxed">
              Whether you are here for a single night pitstop, a week-long beach holiday, or hosting a grand family event, we have everything you require:
            </p>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 text-sm text-slate-750">
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Outdoor Swimming Pool</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Free High-Speed Wi-Fi (Internet)</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Secure Parking Space (Free)</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Coastal Seafood Restaurant</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>24-Hour Front Desk Support</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Full-Service Laundry</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>Local Shuttle Transport</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>24/7 Room Service Dining</span>
                </div>
              </div>

              {/* Exclusions */}
              <div className="border-t border-slate-200 pt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <XCircle className="w-4 h-4 text-slate-300" />
                  <span className="line-through">No Hot Tub</span>
                </div>
                <div className="flex items-center space-x-2">
                  <XCircle className="w-4 h-4 text-slate-300" />
                  <span className="line-through">No Fitness Centre</span>
                </div>
                <div className="flex items-center space-x-2">
                  <XCircle className="w-4 h-4 text-slate-300" />
                  <span className="line-through">No Spa Services</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/booking"
                className="relative overflow-hidden bg-[#D4AF37] text-[#070d1a] px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D4AF37]/30 inline-flex items-center gap-2 group"
              >
                <span className="relative z-10">Book Your Stay Now</span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
              </Link>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <img
              src="/6.jpg"
              alt="Hotel Room Service"
              className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-gold rounded-br-2xl -z-10" />
          </div>
        </div>

        {/* Section 4: Leadership & Group Legacy */}
        <div className="border-t border-slate-200 pt-20 space-y-16">
          <SectionHeader eyebrow="Group Legacy" title="Leadership & Vision" />

          {/* Owner Profile Card */}
          <div className="bg-slate-900 border border-gold/20 rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              
              {/* Owner Photo */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-gold/50 shadow-2xl shadow-black/80">
                  <img
                    src="/owner-nagaraja.jpg"
                    alt="Nagaraj H Nayak"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white">{t('ownerTitle')}</h3>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-gold">{t('ownerRole')}</span>
                </div>
              </div>

              {/* Owner Bio */}
              <div className="lg:col-span-2 space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/45 px-4 py-1.5 rounded-full text-xs font-bold text-gold tracking-wide">
                  <Award className="w-4 h-4" /> {t('ownerPresidentTitle')}
                </div>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {t('ownerBio')}
                </p>
                <div className="border-t border-white/10 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400">
                  <div>
                    <span className="block font-bold text-white uppercase tracking-wider mb-1">Hotels</span>
                    <span className="text-gold font-semibold">3 Properties</span>
                  </div>
                  <div>
                    <span className="block font-bold text-white uppercase tracking-wider mb-1">Credit Bank</span>
                    <span className="text-gold font-semibold">1 Souharda Bank</span>
                  </div>
                  <div>
                    <span className="block font-bold text-white uppercase tracking-wider mb-1">Key Regions</span>
                    <span className="text-gold font-semibold">Ankola &amp; Gokarna</span>
                  </div>
                  <div>
                    <span className="block font-bold text-white uppercase tracking-wider mb-1">Mission</span>
                    <span className="text-gold font-semibold">Premium Hospitality</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Sister Concerns Showcase */}
          <div className="space-y-8">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 text-center">{t('sisterProperties')}</h3>
            <p className="text-center text-slate-600 max-w-3xl mx-auto -mt-4 mb-12 text-sm leading-relaxed">
              Explore the hospitality portfolio of Nagaraj H Nayak, committed to providing standard services across coastal Karnataka.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Hotel 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col group hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src="/4.jpg" alt="Hotel Ankola International" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-white font-serif font-bold text-lg">Hotel Ankola International</span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-gold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> Ankola, NH-66
                    </span>
                    <p className="text-xs text-slate-500 leading-relaxed">{t('hotelAnkolaDesc')}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Flagship Stay</span>
                    <Link to="/" className="text-gold hover:text-gold-600">Currently Viewing</Link>
                  </div>
                </div>
              </div>

              {/* Hotel 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col group hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src="/mantri-stay.jpeg" alt="Mantri Stay" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-white font-serif font-bold text-lg">Mantri Stay</span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <a
                      href="https://www.google.com/maps/place/Mantri+stay+gokarna/@14.5664728,74.3521565,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbe83b8513bd805:0xff9c58b37ffbb7f3!5m2!4m1!1i2!8m2!3d14.5664728!4d74.3521565!16s%2Fg%2F11lcn9bdk_?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-gold flex items-center gap-1 hover:underline"
                    >
                      <MapPin className="w-3.5 h-3.5" /> Gokarna
                    </a>
                    <p className="text-xs text-slate-500 leading-relaxed">{t('mantriStayDesc')}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <button
                      onClick={() => setShowMantriModal(true)}
                      className="text-emerald-700 hover:text-white font-bold bg-emerald-50 hover:bg-emerald-600 border border-emerald-100 px-2 py-0.5 rounded text-[10px] transition-colors cursor-pointer"
                    >
                      View Details
                    </button>
                    <div className="flex flex-col items-end gap-1">
                      <a href="https://mantristaygokarna.com/" target="_blank" rel="noreferrer" className="text-slate-900 hover:text-gold flex items-center gap-0.5 normal-case">
                        Visit Site <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <a href="tel:+918660205501" className="text-slate-900 hover:text-gold flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5" /> Call: 86602 05501
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hotel 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col group hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src="/sahana-palace.jpg" alt="Sahana Palace Lodge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-white font-serif font-bold text-lg">Sahana Palace Lodge</span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <a
                      href="https://www.google.com/travel/search?q=sahana%20palace%20ankola&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764%2C73249150%2C121529350%2C121738283%2C121762713&hl=en-IN&gl=in&ssta=1&ts=CAEaSQopEicyJTB4M2JiZTg2MDhkMjNkNjU5NToweDY0ZTI1MzdkMzI4OGE2ZGUSHBIUCgcI6g8QBxgUEgcI6g8QBxgVGAEyBAgAEAA&qs=CAEyJ0Noa0kzczJpbE5QdmxQRmtHZzB2Wnk4eE1XZHpOWGRvY1hOekVBRTgCQgkJ3qaIMn1T4mRCCQnepogyfVPiZA&ap=KigKEgms-d44QFMtQBGDuOcDnZNSQBISCXB0umEyVC1AEYO4Jwuwk1JAMAA&ictx=111&ved=0CAAQ5JsGahgKEwio8ezEvdmVAxUAAAAAHQAAAAAQwgE"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-gold flex items-center gap-1 hover:underline"
                    >
                      <MapPin className="w-3.5 h-3.5" /> Ankola, Temple Road
                    </a>
                    <p className="text-xs text-slate-500 leading-relaxed">{t('sahanaPalaceDesc')}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <button
                      onClick={() => setShowSahanaModal(true)}
                      className="text-blue-700 hover:text-white font-bold bg-blue-50 hover:bg-blue-600 border border-blue-100 px-2 py-0.5 rounded text-[10px] transition-colors cursor-pointer"
                    >
                      View Details
                    </button>
                    <a href="tel:+919731325543" className="text-slate-900 hover:text-gold flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" /> Call: 97313 25543
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
      {/* Sahana Palace Details Modal */}
      <AnimatePresence>
        {showSahanaModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              onClick={() => setShowSahanaModal(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[85vh] flex flex-col relative z-10 font-sans"
            >
              {/* Header */}
              <div className="relative h-48 bg-slate-900 overflow-hidden">
                <img
                  src="/sahana-palace.jpg"
                  alt="Hotel Sahana Palace"
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <button
                  onClick={() => setShowSahanaModal(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/45 hover:bg-black/75 p-2 rounded-full border border-white/10 transition-colors cursor-pointer z-50"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                  <span className="inline-block text-[9px] text-gold font-bold uppercase tracking-widest bg-gold/10 px-2 py-0.5 rounded border border-gold/30">
                    Lodge & Function Hall
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white text-left">Hotel Sahana Palace</h3>
                  <p className="text-xs text-slate-300 flex items-center gap-1 text-left">
                    <MapPin className="w-3.5 h-3.5 text-gold" /> Ankola, Temple Road
                  </p>
                </div>
              </div>

              {/* Content (Scrollable) */}
              <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-left">
                {/* Overview */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-1">
                    Overview
                  </h4>
                  <div className="space-y-2 text-xs leading-relaxed text-slate-600">
                    <p>
                      Hotel Sahana Palace is a great choice for travellers looking for a star hotel in Ankola. This hotel stands out as one of the highly recommended properties in Ankola and is very popular among tourists seeking budget stays.
                    </p>
                    <p>
                      A smooth check-in/check-out process, flexible policies, and friendly management garner great customer satisfaction for this property.
                    </p>
                    <div className="flex gap-4 pt-1">
                      <span className="bg-slate-100 px-3 py-1.5 rounded-lg font-semibold text-[10px] text-slate-800">
                        Check-In: 02:00 PM
                      </span>
                      <span className="bg-slate-100 px-3 py-1.5 rounded-lg font-semibold text-[10px] text-slate-800">
                        Check-Out: 12:00 PM
                      </span>
                    </div>
                  </div>
                </div>

                {/* Ratings & Guest Love */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-wider">
                      Guest Sentiment
                    </h4>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-serif font-bold text-slate-900">3.2</span>
                      <span className="text-slate-400 text-xs">/ 5</span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[9px] font-bold">
                        Recommended
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500">Based on 92 verified reviews</p>
                    <p className="text-[11px] text-slate-600 leading-normal">
                      Guests love this hotel for its <strong>helpful staff, room cleanliness, clean washrooms, and staff courtesy</strong>.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-wider">
                      Rating Breakdown
                    </h4>
                    <div className="space-y-1 text-[9px]">
                      {/* Excellent */}
                      <div className="space-y-0.5">
                        <div className="flex justify-between font-semibold text-slate-700">
                          <span>Excellent (24%)</span>
                          <span className="text-slate-400 font-normal">Comfort & Hospitality</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
                          <div className="bg-emerald-600 h-full rounded-full" style={{ width: '24%' }} />
                        </div>
                      </div>
                      {/* Good */}
                      <div className="space-y-0.5">
                        <div className="flex justify-between font-semibold text-slate-700">
                          <span>Good (22%)</span>
                          <span className="text-slate-400 font-normal">Service & Amenities</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
                          <div className="bg-teal-600 h-full rounded-full" style={{ width: '22%' }} />
                        </div>
                      </div>
                      {/* Average */}
                      <div className="space-y-0.5">
                        <div className="flex justify-between font-semibold text-slate-700">
                          <span>Average (25%)</span>
                          <span className="text-slate-400 font-normal">Room for Improvement</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
                          <div className="bg-amber-500 h-full rounded-full" style={{ width: '25%' }} />
                        </div>
                      </div>
                      {/* Below Expectations */}
                      <div className="space-y-0.5">
                        <div className="flex justify-between font-semibold text-slate-700">
                          <span>Below Expectations (29%)</span>
                          <span className="text-slate-400 font-normal">Specific Concerns</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
                          <div className="bg-slate-500 h-full rounded-full" style={{ width: '29%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-1">
                    Amenities & Facilities
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-[11px] text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>Air Conditioning</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>Room Service</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>Parking Space</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>Power Backup</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>Housekeeping</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>Doctor on Call</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>Toiletries</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>Television</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>ATM Access</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>Reception Area</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>Cloak Room</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>Daily Newspaper</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="https://www.google.com/travel/search?q=sahana%20palace%20ankola&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764%2C73249150%2C121529350%2C121738283%2C121762713&hl=en-IN&gl=in&ssta=1&ts=CAEaSQopEicyJTB4M2JiZTg2MDhkMjNkNjU5NToweDY0ZTI1MzdkMzI4OGE2ZGUSHBIUCgcI6g8QBxgUEgcI6g8QBxgVGAEyBAgAEAA&qs=CAEyJ0Noa0kzczJpbE5QdmxQRmtHZzB2Wnk4eE1XZHpOWGRvY1hOekVBRTgCQgkJ3qaIMn1T4mRCCQnepogyfVPiZA&ap=KigKEgms-d44QFMtQBGDuOcDnZNSQBISCXB0umEyVC1AEYO4Jwuwk1JAMAA&ictx=111&ved=0CAAQ5JsGahgKEwio8ezEvdmVAxUAAAAAHQAAAAAQwgE"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-gold flex items-center gap-1 hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" /> View on Map
                </a>
                <a
                  href="tel:+919731325543"
                  className="bg-gold hover:bg-gold-600 text-slate-950 text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> Call: 97313 25543
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mantri Stay Details Modal */}
      <AnimatePresence>
        {showMantriModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              onClick={() => setShowMantriModal(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[85vh] flex flex-col relative z-10 font-sans"
            >
              {/* Header */}
              <div className="relative h-48 bg-slate-900 overflow-hidden">
                <img
                  src="/mantri-stay.jpeg"
                  alt="Mantri Stay Gokarna"
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <button
                  onClick={() => setShowMantriModal(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/45 hover:bg-black/75 p-2 rounded-full border border-white/10 transition-colors cursor-pointer z-50"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                  <span className="inline-block text-[9px] text-[#D4AF37] font-bold uppercase tracking-widest bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/30">
                    Beach Resort & Cottages
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white text-left">Mantri Stay Gokarna</h3>
                  <p className="text-xs text-slate-300 flex items-center gap-1 text-left">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Gokarna, Hittalmakki
                  </p>
                </div>
              </div>

              {/* Content (Scrollable) */}
              <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-left">
                {/* Overview */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-1">
                    Overview
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-600">
                    Mantri Stay Gokarna is a serene escape nestled in the heart of Gokarna, Karnataka, offering the perfect blend of comfort and nature. Designed for relaxation and convenience, the property features well-appointed rooms, dormitories, and cozy cottages to suit every traveler. Surrounded by a spacious outdoor area and a peaceful natural setting, it’s an ideal destination for families, couples, and groups seeking to unwind and rejuvenate.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <span className="bg-slate-100 px-3 py-1.5 rounded-lg font-semibold text-[10px] text-slate-800">
                      Check-In: 11:00 AM
                    </span>
                    <span className="bg-slate-100 px-3 py-1.5 rounded-lg font-semibold text-[10px] text-slate-800">
                      Check-Out: 10:00 AM
                    </span>
                    <span className="bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-lg font-semibold text-[10px] text-emerald-800">
                      14 Rooms • 28 Beds (Sleeps up to 85 guests)
                    </span>
                  </div>
                </div>

                {/* Experiences & Activities */}
                <div className="space-y-2.5 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Experiences & Activities ✨
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-xs text-slate-750">
                    <div className="flex items-center gap-2">
                      <span className="text-base">🔥</span>
                      <span>Night Fire Camp</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base">🕺</span>
                      <span>Rain Dance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base">🎶</span>
                      <span>DJ with Party Music</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-base">🏊‍♂️</span>
                      <span>Swimming Pool Access</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500 border-t border-slate-200/65 pt-2 flex items-center gap-1.5">
                    <span>⏰</span> All activities are available until 11:00 PM.
                  </p>
                </div>

                {/* Accommodations */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-1">
                    Our Rooms & Cottages
                  </h4>
                  <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                    {/* Family AC */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900">Family Room (AC)</span>
                          <span className="text-[9px] font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded">2 Rooms Available</span>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-1">2 King Beds + 1 Single Bed • Fits up to 7-8 guests</p>
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium">Wifi, TV, Water, Towels, Soap</div>
                    </div>

                    {/* Family Non-AC */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900">Family Room (Non-AC)</span>
                          <span className="text-[9px] font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded">2 Rooms Available</span>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-1">2 King Beds + 1 Single Bed • Fits up to 7-8 guests</p>
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium">Wifi, TV, Water, Towels, Soap</div>
                    </div>

                    {/* AC Cottage */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900">AC Cottage</span>
                          <span className="text-[9px] font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded">3 Rooms Available</span>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-1">1 King Bed + 1 Single Bed • Fits up to 7-8 guests</p>
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium">Wifi, TV, Water, Towels, Soap</div>
                    </div>

                    {/* Double AC */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900">Double Room (AC)</span>
                          <span className="text-[9px] font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded">4 Rooms Available</span>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-1">1 Double Bed • Fits up to 3-4 guests</p>
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium">Wifi, TV, Water, Towels, Soap</div>
                    </div>

                    {/* Double Non-AC */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900">Double Room (Non-AC)</span>
                          <span className="text-[9px] font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded">2 Rooms Available</span>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-1">1 King Bed • Fits up to 3 guests</p>
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium">Wifi, TV, Water, Towels, Soap</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="https://www.google.com/maps/place/Mantri+stay+gokarna/@14.5664728,74.3521565,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbe83b8513bd805:0xff9c58b37ffbb7f3!5m2!4m1!1i2!8m2!3d14.5664728!4d74.3521565!16s%2Fg%2F11lcn9bdk_?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#D4AF37] flex items-center gap-1 hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" /> View on Map
                </a>
                <div className="flex gap-2">
                  <a
                    href="https://mantristaygokarna.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-900 hover:text-[#D4AF37] text-xs font-bold px-3 py-2 rounded-xl border border-slate-250 flex items-center gap-1 transition-colors"
                  >
                    Visit Site <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="tel:+918660205501"
                    className="bg-[#D4AF37] hover:bg-[#B8962F] text-slate-950 text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call: 86602 05501
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
