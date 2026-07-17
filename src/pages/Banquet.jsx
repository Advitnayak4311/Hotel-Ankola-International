import React, { useState } from 'react';
import { Sparkles, Calendar, Users, Music, Award, HelpCircle, ChevronDown } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/Common/PageHero';
import SectionHeader from '../components/Common/SectionHeader';

export default function Banquet() {
  const { addBanquetEnquiry } = useBooking();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: 'Wedding Celebration',
    guests: 150,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  
  // Interactive seating calculator helper
  const [setupType, setSetupType] = useState('roundtable');
  const [setupDropdownOpen, setSetupDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const calculateSuitability = () => {
    let maxCap = 500;
    if (setupType === 'roundtable') maxCap = 250;
    if (setupType === 'theater') maxCap = 450;
    if (setupType === 'ushape') maxCap = 120;
    if (setupType === 'floating') maxCap = 500;

    if (formData.guests > maxCap) {
      return {
        suitable: false,
        message: `For ${setupType === 'roundtable' ? 'Round Table Banquet' : setupType === 'theater' ? 'Theater Lecture' : setupType === 'ushape' ? 'U-Shape Meeting' : 'Floating Reception'} seating, our maximum capacity is ${maxCap} guests. Consider switching to another arrangement.`
      };
    }
    return {
      suitable: true,
      message: `Excellent! The Royal Banquet Hall can comfortably accommodate your event with this seating arrangement.`
    };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? Math.max(1, Number(value)) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      addBanquetEnquiry(formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: 'Wedding Celebration',
        guests: 150,
        message: ''
      });
      setTimeout(() => setSubmitted(false), 8000);
    }
  };

  const suitability = calculateSuitability();

  return (
    <div className="min-h-screen pt-24 bg-slate-50 font-sans">
      
      <PageHero
        image="/hall1.jpg"
        eyebrow="Royal Venue"
        title={t('banquetTitle')}
        subtitle={t('banquetSubtitle')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHeader eyebrow="The Royal Venue" title="Where Memorable Moments Are Created" center={false} />
            <p className="text-slate-600 leading-relaxed">
              Equipped with centralized air conditioning, premium sound acoustics, and customizable layout configurations, the Royal Banquet Hall at Hotel Ankola International is the premier choice for hosting grand gatherings.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We provide catering packages comprising Coastal delicacies, North Indian, and South Indian cuisines. From decoration coordinates to audio-visual system settings, our dedicated event managers ensure absolute peace of mind.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-sm text-slate-700">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-gold shrink-0" />
                <span>Up to 500 Capacity</span>
              </div>
              <div className="flex items-center space-x-2">
                <Music className="w-5 h-5 text-gold shrink-0" />
                <span>Premium JBL Sound System</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-gold shrink-0" />
                <span>Stage & Backdrop Lights</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gold shrink-0" />
                <span>Event Coordinator Services</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/hall2.jpg"
              alt="Banquet Seating Arrangement"
              className="rounded-2xl shadow-xl w-full object-cover h-[380px]"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-gold rounded-bl-2xl -z-10" />
          </div>
        </div>

        {/* Capacity seating planner & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          
          {/* Capacity planner */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-6">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
              <HelpCircle className="w-5 h-5 text-gold" />
              <h3 className="font-serif font-bold text-lg text-slate-900">Seating Planner</h3>
            </div>

            <div className="space-y-4">
              {/* Arrangement selector */}
              <div className="space-y-1.5 relative">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Seating Setup</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setSetupDropdownOpen(!setupDropdownOpen)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm flex items-center justify-between text-left focus:outline-none focus:border-gold hover:bg-slate-100/55 transition-colors"
                  >
                    <span>
                      {setupType === 'roundtable' && 'Round Table Banquet (Max 250)'}
                      {setupType === 'theater' && 'Theater Lecture Style (Max 450)'}
                      {setupType === 'ushape' && 'U-Shape Meeting (Max 120)'}
                      {setupType === 'floating' && 'Floating Reception Party (Max 500)'}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${setupDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {setupDropdownOpen && (
                    <div className="absolute left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl z-35 overflow-hidden font-sans">
                      {[
                        { id: 'roundtable', label: 'Round Table Banquet (Max 250)' },
                        { id: 'theater', label: 'Theater Lecture Style (Max 450)' },
                        { id: 'ushape', label: 'U-Shape Meeting (Max 120)' },
                        { id: 'floating', label: 'Floating Reception Party (Max 500)' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            setSetupType(item.id);
                            setSetupDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm transition-colors hover:bg-gold/10 hover:text-slate-950 flex items-center justify-between ${
                            setupType === item.id ? 'bg-slate-900 text-gold font-semibold' : 'text-slate-700'
                          }`}
                        >
                          <span>{item.label}</span>
                          {setupType === item.id && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Guest Count slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span>Guest Count</span>
                  <span className="text-gold font-bold">{formData.guests} Guests</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="600"
                  step="10"
                  value={formData.guests}
                  onChange={(e) => setFormData(prev => ({ ...prev, guests: Number(e.target.value) }))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-gold"
                />
              </div>

              {/* Suitability Result */}
              <div className={`p-4 rounded-xl border text-xs leading-relaxed ${
                suitability.suitable 
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                  : 'bg-rose-50 border-rose-200 text-rose-800 font-medium'
              }`}>
                <span className="font-bold block mb-1">
                  {suitability.suitable ? '✓ Layout Feasible' : '✗ Layout Warning'}
                </span>
                {suitability.message}
              </div>
            </div>
          </div>

          {/* Inquiry form */}
          <div className="lg:col-span-3 bg-slate-900 text-white p-8 rounded-2xl border border-gold/25 shadow-xl space-y-6">
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-2xl text-white">Event Booking Inquiry</h3>
              <p className="text-xs text-slate-400">Submit your event details and our planner will call you back within 24 hours.</p>
            </div>

            {submitted ? (
              <div className="bg-gold/15 border border-gold/45 text-gold p-6 rounded-xl text-center space-y-2">
                <Sparkles className="w-10 h-10 mx-auto text-gold animate-bounce" />
                <h4 className="font-serif font-bold text-lg">Inquiry Successfully Registered!</h4>
                <p className="text-xs text-slate-300">We have recorded your details. An event manager will contact you on your registered mobile number shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                      placeholder="Enter mobile"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                      placeholder="name@gmail.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400">Tentative Event Date</label>
                    <input
                      type="date"
                      name="eventDate"
                      required
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 relative">
                    <label className="text-xs font-bold text-slate-400 block">Event Category</label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                        className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg px-4 py-2.5 text-sm flex items-center justify-between text-left focus:outline-none focus:border-gold hover:bg-slate-900 transition-colors"
                      >
                        <span>{formData.eventType}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${categoryDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {categoryDropdownOpen && (
                        <div className="absolute left-0 right-0 mt-1 bg-slate-900 border border-slate-800 rounded-xl shadow-xl z-35 overflow-hidden font-sans">
                          {[
                            'Wedding Celebration',
                            'Birthday Party',
                            'Corporate Seminar / Meeting',
                            'Receptions',
                            'Family Anniversary'
                          ].map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, eventType: item }));
                                setCategoryDropdownOpen(false);
                              }}
                              className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm transition-colors hover:bg-gold/10 hover:text-slate-950 flex items-center justify-between ${
                                formData.eventType === item ? 'bg-gold text-slate-950 font-bold' : 'text-slate-350 hover:text-white'
                              }`}
                            >
                              <span>{item}</span>
                              {formData.eventType === item && <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400">Estimated Guest Count</label>
                    <input
                      type="number"
                      name="guests"
                      required
                      min="20"
                      max="600"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400">Specific Event Details / Requirements</label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950 border border-slate-800 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                    placeholder="E.g., require sound system, flower decorations, specific buffet items..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-600 text-slate-950 py-3 rounded-md font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow-lg hover:shadow-gold/25"
                >
                  Submit Banquet Inquiry
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
      
    </div>
  );
}
