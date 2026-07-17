import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Calendar, Users, Shield, Receipt, CheckCircle2, ChevronRight, Download, Sparkles, ChevronDown } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export default function Booking() {
  const { rooms, addBooking } = useBooking();
  const [searchParams] = useSearchParams();
  const preselectedRoom = searchParams.get('room') || 'deluxe';

  // State Management
  const [step, setStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({
    roomType: preselectedRoom,
    checkIn: '',
    checkOut: '',
    guests: 2,
    specialRequest: '',
    customerName: '',
    email: '',
    phone: ''
  });

  const [nights, setNights] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [customGuestMode, setCustomGuestMode] = useState(false);
  const [pricing, setPricing] = useState({ base: 0, tax: 0, total: 0 });
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const selectedRoomObj = rooms.find(r => r.id === bookingDetails.roomType) || rooms[0];

  // Calculate nights and prices on date changes
  useEffect(() => {
    if (bookingDetails.checkIn && bookingDetails.checkOut) {
      const start = new Date(bookingDetails.checkIn);
      const end = new Date(bookingDetails.checkOut);
      const timeDiff = end.getTime() - start.getTime();
      const calcNights = Math.max(1, Math.ceil(timeDiff / (1000 * 3600 * 24)));
      setNights(calcNights);
    }
  }, [bookingDetails.checkIn, bookingDetails.checkOut]);

  useEffect(() => {
    const basePrice = selectedRoomObj ? selectedRoomObj.price : 2500;
    const baseTotal = basePrice * nights;
    const tax = Math.round(baseTotal * 0.12); // 12% GST
    const total = baseTotal + tax;
    setPricing({ base: baseTotal, tax, total });
  }, [selectedRoomObj, nights]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    if (step === 1) {
      // Validate dates
      if (!bookingDetails.checkIn || !bookingDetails.checkOut) {
        alert("Please select both check-in and check-out dates.");
        return;
      }
      if (new Date(bookingDetails.checkIn) >= new Date(bookingDetails.checkOut)) {
        alert("Check-out date must be after check-in date.");
        return;
      }
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!bookingDetails.customerName || !bookingDetails.email || !bookingDetails.phone) {
      alert("Please fill in all contact details.");
      return;
    }

    const bookingPayload = {
      customerName: bookingDetails.customerName,
      email: bookingDetails.email,
      phone: bookingDetails.phone,
      checkIn: bookingDetails.checkIn,
      checkOut: bookingDetails.checkOut,
      guests: Number(bookingDetails.guests),
      roomType: bookingDetails.roomType,
      specialRequest: bookingDetails.specialRequest,
      totalPrice: pricing.total
    };

    const confirmed = addBooking(bookingPayload);
    setConfirmedBooking(confirmed);
    setStep(3);
  };

  // Simulate brochure download
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen pt-24 bg-slate-50 font-sans">
      
      {/* Upper Progress Indicators */}
      <div className="bg-slate-900 border-b border-gold/15 py-6 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
        <div className="max-w-3xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-gold text-slate-950 font-bold' : 'bg-slate-800'}`}>1</span>
            <span>Room & Dates</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <div className="flex items-center space-x-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-gold text-slate-950 font-bold' : 'bg-slate-800'}`}>2</span>
            <span>Guest Details</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <div className="flex items-center space-x-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? 'bg-gold text-slate-950 font-bold' : 'bg-slate-800'}`}>3</span>
            <span>Confirmation</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Form Area */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Step 1: Selection & Dates */}
            {step === 1 && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md space-y-6">
                <h3 className="font-serif font-bold text-xl text-slate-900 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-gold" />
                  Select Dates & Room
                </h3>

                <div className="space-y-4">
                  {/* Premium Select Room Card Grid */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Select Room Type</label>
                    <div className="grid grid-cols-1 gap-3.5">
                      {rooms.map((room) => {
                        const isSelected = bookingDetails.roomType === room.id;
                        
                        // Custom premium badges
                        let badge = "";
                        if (room.id === 'deluxe') badge = "Best Value";
                        if (room.id === 'executive') badge = "Most Popular";
                        if (room.id === 'family') badge = "Spacious Suite";
                        if (room.id === 'banquet') badge = "Grand Event Venue";

                        return (
                          <div
                            key={room.id}
                            onClick={() => setBookingDetails(prev => ({ ...prev, roomType: room.id }))}
                            className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-300 select-none ${
                              isSelected
                                ? 'bg-slate-900 border-gold shadow-lg shadow-gold/10'
                                : 'bg-slate-50 border-slate-200 hover:border-slate-350 hover:bg-slate-100/70'
                            }`}
                          >
                            {/* Room Image Thumbnail */}
                            <img
                              src={room.image}
                              alt={room.name}
                              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border border-slate-200 shrink-0"
                            />
                            
                            {/* Room Info */}
                            <div className="flex-grow space-y-1.5 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <h4 className={`text-sm sm:text-base font-serif font-bold truncate ${
                                  isSelected ? 'text-white' : 'text-slate-900'
                                }`}>
                                  {room.name}
                                </h4>
                                {badge && (
                                  <span className={`text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                                    isSelected 
                                      ? 'bg-gold/15 text-gold border border-gold/30' 
                                      : 'bg-slate-200 text-slate-700'
                                  }`}>
                                    {badge}
                                  </span>
                                )}
                              </div>
                              
                              <p className={`text-[10px] sm:text-xs truncate ${
                                isSelected ? 'text-slate-400' : 'text-slate-550'
                              }`}>
                                {room.description}
                              </p>

                              <div className="flex items-center justify-between pt-1">
                                <span className={`text-xs sm:text-sm font-serif font-bold ${
                                  isSelected ? 'text-gold' : 'text-slate-900'
                                }`}>
                                  ₹{room.price} <span className="text-[10px] font-sans font-normal opacity-70">/ night</span>
                                </span>

                                <span className={`text-[9px] font-semibold ${
                                  isSelected ? 'text-rose-400' : 'text-rose-600'
                                }`}>
                                  {room.availableCount} Left
                                </span>
                              </div>
                            </div>

                            {/* Radio selector circle */}
                            <div className="shrink-0 pl-1.5">
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                                isSelected ? 'border-gold bg-gold/10' : 'border-slate-350'
                              }`}>
                                {isSelected && (
                                  <div className="w-2.5 h-2.5 rounded-full bg-gold animate-scale-up" />
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Check-in Date</label>
                      <input
                        type="date"
                        name="checkIn"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={bookingDetails.checkIn}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Check-out Date</label>
                      <input
                        type="date"
                        name="checkOut"
                        required
                        min={bookingDetails.checkIn || new Date().toISOString().split('T')[0]}
                        value={bookingDetails.checkOut}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 relative">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Guest Count</label>
                    
                    {!customGuestMode ? (
                      <div className="relative">
                        {/* Custom Dropdown Trigger Button */}
                        <button
                          type="button"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm flex items-center justify-between text-left focus:outline-none focus:border-gold hover:bg-slate-100/55 transition-colors"
                        >
                          <span>{bookingDetails.guests} {bookingDetails.guests === 1 ? 'Guest' : 'Guests'}</span>
                          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Custom Dropdown List */}
                        {dropdownOpen && (
                          <div className="absolute left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl z-30 overflow-hidden animate-scale-up font-sans">
                            {[1, 2, 3, 4, 5].map((g) => (
                              <button
                                key={g}
                                type="button"
                                onClick={() => {
                                  setBookingDetails(prev => ({ ...prev, guests: g }));
                                  setDropdownOpen(false);
                                }}
                                className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-gold/10 hover:text-slate-950 flex items-center justify-between ${
                                  bookingDetails.guests === g ? 'bg-slate-900 text-gold font-semibold' : 'text-slate-700'
                                }`}
                              >
                                <span>{g} {g === 1 ? 'Guest' : 'Guests'}</span>
                                {bookingDetails.guests === g && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                              </button>
                            ))}
                            <button
                              type="button"
                              onClick={() => {
                                setCustomGuestMode(true);
                                setBookingDetails(prev => ({ ...prev, guests: 6 }));
                                setDropdownOpen(false);
                              }}
                              className="w-full text-left px-4 py-3 text-sm text-gold bg-slate-900 hover:bg-slate-950 transition-colors font-semibold border-t border-slate-800"
                            >
                              5+ Guests (Enter Custom...)
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center space-x-3 bg-slate-50 border border-slate-200 rounded-lg p-2 max-w-sm">
                        {/* Minus button */}
                        <button
                          type="button"
                          onClick={() => {
                            const val = Math.max(1, bookingDetails.guests - 1);
                            if (val <= 5) {
                              setCustomGuestMode(false);
                            }
                            setBookingDetails(prev => ({ ...prev, guests: val }));
                          }}
                          className="w-8 h-8 rounded-lg bg-slate-200 text-slate-800 hover:bg-slate-350 font-bold flex items-center justify-center transition-colors focus:outline-none shrink-0"
                        >
                          -
                        </button>
                        
                        {/* Number Input field */}
                        <input
                          type="number"
                          name="guests"
                          min="1"
                          max="30"
                          value={bookingDetails.guests}
                          onChange={(e) => {
                            const val = Math.max(1, Number(e.target.value));
                            setBookingDetails(prev => ({ ...prev, guests: val }));
                          }}
                          className="flex-grow bg-white border border-slate-200 rounded-md p-1.5 text-center text-sm font-bold text-slate-900 focus:outline-none focus:border-gold w-16"
                        />

                        {/* Plus button */}
                        <button
                          type="button"
                          onClick={() => {
                            setBookingDetails(prev => ({ ...prev, guests: bookingDetails.guests + 1 }));
                          }}
                          className="w-8 h-8 rounded-lg bg-slate-200 text-slate-800 hover:bg-slate-300 font-bold flex items-center justify-center transition-colors focus:outline-none shrink-0"
                        >
                          +
                        </button>

                        {/* Back to list trigger */}
                        <button
                          type="button"
                          onClick={() => {
                            setCustomGuestMode(false);
                            setBookingDetails(prev => ({ ...prev, guests: 2 }));
                          }}
                          className="text-[10px] text-slate-500 hover:text-slate-700 underline pr-2 font-semibold shrink-0"
                        >
                          Reset List
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Special Request (Optional)</label>
                    <textarea
                      name="specialRequest"
                      rows="2"
                      value={bookingDetails.specialRequest}
                      onChange={handleInputChange}
                      placeholder="E.g., early check-in, ground floor room..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-gold"
                    />
                  </div>

                  <button
                    onClick={nextStep}
                    className="w-full bg-gold hover:bg-gold-600 text-slate-950 py-3 rounded-md font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow"
                  >
                    Proceed to Guest Info
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Customer details */}
            {step === 2 && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md space-y-6">
                <h3 className="font-serif font-bold text-xl text-slate-900 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-gold" />
                  Guest Contact Details
                </h3>

                <form onSubmit={handleConfirm} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Full Name</label>
                    <input
                      type="text"
                      name="customerName"
                      required
                      value={bookingDetails.customerName}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-gold"
                      placeholder="Enter guest name"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={bookingDetails.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-gold"
                      placeholder="name@gmail.com"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={bookingDetails.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-gold"
                      placeholder="Enter mobile"
                    />
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-500 leading-relaxed flex items-start space-x-2">
                    <Shield className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>By confirming, you agree to our 24-hour cancellation policy. Safe hospitality protocol is enforced at check-in.</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="border border-slate-300 text-slate-600 hover:bg-slate-100 py-3 rounded-md font-sans text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-gold hover:bg-gold-600 text-slate-950 py-3 rounded-md font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 3: Success invoice */}
            {step === 3 && confirmedBooking && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md space-y-6 text-center">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
                
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-2xl text-slate-950">Stay Confirmed!</h3>
                  <p className="text-sm text-slate-500">Thank you, {confirmedBooking.customerName}. Your reservation is confirmed.</p>
                  <span className="inline-block bg-slate-100 border border-slate-200 px-4 py-1.5 rounded-full text-xs font-bold font-mono text-slate-700">
                    Booking ID: {confirmedBooking.id}
                  </span>
                </div>

                {/* Printable Invoice Details */}
                <div className="border border-dashed border-slate-300 rounded-2xl p-6 text-left space-y-4 bg-slate-50 font-mono text-xs">
                  <div className="text-center font-bold font-serif text-sm border-b border-slate-200 pb-3 uppercase tracking-wider text-slate-800">
                    Hotel Ankola International
                  </div>
                  <div className="flex justify-between">
                    <span>Room Reserved:</span>
                    <span className="font-bold uppercase">{confirmedBooking.roomType} Room</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-in:</span>
                    <span className="font-bold">{confirmedBooking.checkIn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-out:</span>
                    <span className="font-bold">{confirmedBooking.checkOut}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Nights:</span>
                    <span className="font-bold">{nights} {nights === 1 ? 'Night' : 'Nights'}</span>
                  </div>
                  <div className="flex justify-between border-t border-dashed border-slate-300 pt-3">
                    <span>Base Amount:</span>
                    <span>₹{pricing.base}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST (12%):</span>
                    <span>₹{pricing.tax}</span>
                  </div>
                  <div className="flex justify-between border-t border-dashed border-slate-300 pt-3 text-sm font-bold">
                    <span>Total Charged:</span>
                    <span className="text-gold">₹{pricing.total}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={handlePrint}
                    className="flex-1 border border-slate-300 text-slate-700 hover:bg-slate-100 py-3 rounded-md font-sans text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <Download className="w-4 h-4" />
                    <span>Print Invoice</span>
                  </button>
                  <Link
                    to="/"
                    className="flex-1 bg-gold hover:bg-gold-600 text-slate-950 py-3 rounded-md font-sans text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center shadow"
                  >
                    <span>Back to Home</span>
                  </Link>
                </div>
              </div>
            )}

          </div>

          {/* Right Panel: Booking Cart Summary */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-gold/20 shadow-xl space-y-6">
            <div className="flex items-center space-x-2 border-b border-white/10 pb-3">
              <Receipt className="w-5 h-5 text-gold" />
              <h3 className="font-serif font-bold text-lg text-white">Summary</h3>
            </div>

            {/* Room mini details */}
            <div className="space-y-4">
              <img
                src={selectedRoomObj.image}
                alt={selectedRoomObj.name}
                className="w-full h-32 object-cover rounded-lg border border-white/5"
              />
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-lg text-white">{selectedRoomObj.name}</h4>
                <p className="text-xs text-slate-400">₹{selectedRoomObj.price} / Night</p>
              </div>

              {/* Price Details */}
              <div className="border-t border-white/10 pt-4 space-y-2 text-xs font-sans text-slate-300">
                <div className="flex justify-between">
                  <span>Room Charge ({nights} Nights):</span>
                  <span>₹{pricing.base}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes (12% GST):</span>
                  <span>₹{pricing.tax}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white border-t border-white/10 pt-3">
                  <span>Estimated Total:</span>
                  <span className="text-gold">₹{pricing.total}</span>
                </div>
              </div>

              {/* Special Note */}
              <div className="bg-slate-950 p-4 rounded-xl border border-white/5 text-[10px] text-slate-400 leading-relaxed flex items-start space-x-2">
                <Sparkles className="w-4 h-4 text-gold shrink-0 mt-0.5 animate-pulse" />
                <span>Complimentary Breakfast, high-speed Wi-Fi, and highway parking are included in this rate.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}
