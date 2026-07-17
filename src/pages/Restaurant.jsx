import React, { useState } from 'react';
import { Search, Clock, PhoneCall, Sparkles } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/Common/PageHero';
import SectionHeader from '../components/Common/SectionHeader';

export default function Restaurant() {
  const { menu } = useBooking();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('veg');
  const [searchQuery, setSearchQuery] = useState('');

  const currentMenuItems = menu && menu[activeTab] ? menu[activeTab] : [];

  const filteredItems = currentMenuItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-24 bg-slate-50 font-sans">
      
      <PageHero
        image="/restro1.jpg"
        eyebrow="Taste of Karavali"
        title={t('restaurantTitle')}
        subtitle={t('restaurantSubtitle')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Intro Section with Ambiance Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHeader eyebrow="Ambiance & Taste" title="A Gastronomic Journey Through Coastal Karnataka" center={false} />
            <p className="text-slate-600 leading-relaxed">
              Step into our premium restaurant and explore the rich culinary heritage of Uttar Kannada. Our chefs use locally sourced fresh catches and stone-ground spices to prepare signature Karavali delicacies.
            </p>
            <p className="text-slate-600 leading-relaxed">
              From our legendary Coastal Kingfish (Anjil) Curry to our sweet and cold Gadbad Ice Cream, each dish is designed to surprise your taste buds. We also serve authentic South Indian breakfast, North Indian tandoor, and Chinese dishes.
            </p>
            
            {/* Timings and Room Service Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Dining Timings</h4>
                  <ul className="text-xs text-slate-500 space-y-1 mt-1">
                    <li>Breakfast: 7:30 AM - 10:30 AM</li>
                    <li>Lunch: 12:30 PM - 3:30 PM</li>
                    <li>Dinner: 7:30 PM - 10:30 PM</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 flex items-start space-x-3">
                <PhoneCall className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Room Service</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Dial Extension <span className="font-bold text-slate-900">9</span> from your room. Available 24/7 for staying guests.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/restro2.jpg"
              alt="Plated Coastal Seafood Curry"
              className="rounded-xl shadow-md w-full h-48 sm:h-64 object-cover"
            />
            <img
              src="/restro1.jpg"
              alt="Restaurant Indoor Seating"
              className="rounded-xl shadow-md w-full h-48 sm:h-64 object-cover mt-6"
            />
          </div>
        </div>

        {/* Dynamic Menu Explorer */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-100 pb-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-2xl font-serif font-bold text-slate-950">Explore Our Menu</h3>
              <p className="text-xs text-slate-500">Search and filter curries, starters, desserts, and coolers</p>
            </div>
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search food item..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-gold"
              />
              <Search className="absolute left-3.5 top-3 w-4.5 h-4.5 text-slate-400" />
            </div>
          </div>

          {/* Menu Categories Tab Links */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-100 pb-4">
            {[
              { id: 'veg', label: 'Vegetarian Delight' },
              { id: 'nonveg', label: 'Coastal Meat & Seafood' },
              { id: 'desserts', label: 'Sweet Treats' },
              { id: 'drinks', label: 'Coolers & Drinks' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSearchQuery(''); }}
                className={`px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-slate-950 text-gold border border-gold shadow-md'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Menu Item Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.length === 0 ? (
              <div className="col-span-2 text-center py-12 text-slate-500">
                No menu items found. Try searching for a different keyword.
              </div>
            ) : (
              filteredItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between gap-4 p-4 rounded-xl border border-slate-100 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 group"
                >
                  <div className="space-y-1.5 flex-grow">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-lg font-serif font-bold text-slate-900 group-hover:text-gold transition-colors">
                        {item.name}
                      </h4>
                      {item.popular && (
                        <span className="bg-gold/15 text-gold border border-gold/45 text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded flex items-center">
                          <Sparkles className="w-2.5 h-2.5 mr-0.5" />
                          Chef Special
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{item.description}</p>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-serif font-bold text-lg text-slate-950">₹{item.price}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
      
    </div>
  );
}
