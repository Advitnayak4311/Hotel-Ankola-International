import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Sparkles, Filter, CheckCircle2, User } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/Common/PageHero';

export default function Rooms() {
  const { rooms } = useBooking();
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Filters State
  const [maxPrice, setMaxPrice] = useState(6000);
  const [acOnly, setAcOnly] = useState(false);
  const [capacity, setCapacity] = useState('all');

  const filteredRooms = rooms.filter(room => {
    // Price filter
    if (room.price > maxPrice) return false;
    
    // AC filter (assume all rooms have AC except if specified, but in our case they all support AC)
    if (acOnly && !room.features.some(f => f.toLowerCase().includes('ac') || f.toLowerCase().includes('air conditioning'))) return false;

    // Capacity filter
    if (capacity !== 'all') {
      const capNum = parseInt(capacity);
      if (room.maxGuests < capNum) return false;
    }

    return true;
  });

  const handleBookRedirect = (roomId) => {
    navigate(`/booking?room=${roomId}`);
  };

  return (
    <div className="min-h-screen pt-24 bg-slate-50 font-sans">
      
      <PageHero
        image="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=90"
        eyebrow="Your Sanctuary"
        title={t('roomsTitle')}
        subtitle={t('roomsSubtitle')}
      />

      {/* Main Layout Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Panel: Sidebar Filters */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg h-fit space-y-6">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3 text-slate-800">
              <Filter className="w-5 h-5 text-gold" />
              <h3 className="font-serif font-bold text-lg">Filter Rooms</h3>
            </div>

            {/* Price Filter */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium text-slate-700">
                <span>Max Price / Night</span>
                <span className="text-gold font-bold">₹{maxPrice}</span>
              </div>
              <input
                type="range"
                min="2000"
                max="30000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-gold"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>₹2,000</span>
                <span>₹30,000</span>
              </div>
            </div>

            {/* Capacity Filter */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Guests Capacity</label>
              <select
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-gold"
              >
                <option value="all">Any Guest Count</option>
                <option value="2">2+ Guests</option>
                <option value="3">3+ Guests</option>
                <option value="5">5+ Guests</option>
              </select>
            </div>

            {/* AC Filter Toggle */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-4">
              <label htmlFor="acToggle" className="text-sm font-medium text-slate-700 cursor-pointer">AC Only</label>
              <input
                id="acToggle"
                type="checkbox"
                checked={acOnly}
                onChange={(e) => setAcOnly(e.target.checked)}
                className="w-4.5 h-4.5 rounded border-slate-300 text-gold focus:ring-gold accent-gold cursor-pointer"
              />
            </div>
          </div>

          {/* Right Panel: Rooms Grid */}
          <div className="lg:col-span-3 space-y-8">
            {filteredRooms.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 shadow-md">
                <p className="text-slate-500 font-medium text-lg">No rooms match your filter criteria.</p>
                <button
                  onClick={() => { setMaxPrice(30000); setAcOnly(false); setCapacity('all'); }}
                  className="mt-4 inline-block bg-gold hover:bg-gold-600 text-slate-950 px-6 py-2 rounded-md font-sans text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              filteredRooms.map((room) => (
                <div
                  key={room.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col md:flex-row group hover:shadow-2xl transition-all duration-300"
                >
                  {/* Room Image */}
                  <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden min-h-[220px]">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {room.availableCount <= 2 && (
                      <span className="absolute top-4 left-4 bg-rose-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded shadow">
                        Selling Fast!
                      </span>
                    )}
                  </div>

                  {/* Room Details */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h2 className="text-2xl font-serif font-bold text-slate-950 group-hover:text-gold transition-colors">
                          {room.name}
                        </h2>
                        <div className="text-left sm:text-right">
                          <span className="text-2xl font-serif font-bold text-slate-950">₹{room.price}</span>
                          <span className="text-xs text-slate-500"> / Night</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-slate-600 leading-relaxed font-sans">{room.description}</p>
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-700 border-t border-slate-100 pt-4">
                      {room.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Lower Card Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-slate-100 pt-4 gap-4">
                      <div className="flex items-center space-x-6 text-xs text-slate-500">
                        <div className="flex items-center space-x-1.5">
                          <User className="w-4 h-4 text-slate-400" />
                          <span>Max Guests: {room.maxGuests}</span>
                        </div>
                        <span className="text-rose-600 font-semibold bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
                          {room.availableCount} Rooms Available
                        </span>
                      </div>
                      
                      <button
                        onClick={() => handleBookRedirect(room.id)}
                        className="relative overflow-hidden bg-[#D4AF37] text-[#070d1a] px-6 py-3 rounded-full font-black text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D4AF37]/30 flex items-center justify-center gap-2 group"
                      >
                        <Sparkles className="w-4 h-4 relative z-10" />
                        <span className="relative z-10">Reserve Room</span>
                        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
                      </button>
                    </div>
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
