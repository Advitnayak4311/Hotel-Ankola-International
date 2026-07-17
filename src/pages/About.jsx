import React from 'react';
import { ShieldCheck, Compass, Heart, Award, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/Common/PageHero';
import SectionHeader from '../components/Common/SectionHeader';

export default function About() {
  const { t } = useLanguage();
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

      </div>
    </div>
  );
}
