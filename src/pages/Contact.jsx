import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Sparkles } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/Common/PageHero';

export default function Contact() {
  const { addContactMessage } = useBooking();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      addContactMessage(formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 8000);
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-slate-50 font-sans">
      
      <PageHero
        image="/2.jpg"
        eyebrow="Get in Touch"
        title={t('contactTitle')}
        subtitle={t('contactSubtitle')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Contact Info and Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Info Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <span className="text-gold font-bold tracking-widest text-xs uppercase block">FIND US</span>
              <h2 className="text-3xl font-serif font-bold text-slate-950">Reach Hotel Ankola International</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-sans">
                Located right next to National Highway 66 (NH66) in Ankola, Uttara Kannada. We are accessible to all major coastal transport routes.
              </p>
            </div>

            <div className="space-y-6">
              {/* Card 1: Address */}
              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-slate-200/60 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Hotel Address</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    National Highway 66 (NH66), Ankola Town, Uttara Kannada District, Karnataka - 581314
                  </p>
                </div>
              </div>

              {/* Card 2: Call */}
              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-slate-200/60 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Contact Number</h4>
                  <p className="text-sm text-slate-700 font-semibold">+91 93808 10711</p>
                  <p className="text-xs text-slate-400">Reception desk: +91 8388 230101</p>
                </div>
              </div>

              {/* Card 3: Email */}
              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-slate-200/60 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</h4>
                  <p className="text-sm text-slate-700">stay@hotelankolainternational.com</p>
                  <p className="text-xs text-slate-400">Banquet desk: events@hotelankolainternational.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Details */}
          <div className="lg:col-span-3 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl space-y-6">
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-2xl text-slate-900">Send Us A Message</h3>
              <p className="text-xs text-slate-500">Do you have questions about custom pricing, rooms, or local guides? Send a message.</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center space-y-2">
                <Sparkles className="w-8 h-8 mx-auto text-emerald-600 animate-bounce" />
                <h4 className="font-bold text-lg">Message Sent Successfully!</h4>
                <p className="text-xs text-emerald-700">We have received your message. Our front desk support will revert on email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                      placeholder="Enter mobile"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                      placeholder="E.g., room booking discount"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600">Your Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                    placeholder="Type your message details here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-600 text-slate-950 py-3 rounded-md font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Embedded Google Map */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-xl text-slate-900">Our Highway Location</h3>
            <a
              href="https://www.google.com/maps/place/HOTEL+ANKOLA+INTERNATIONAL/@14.666596,74.3122112,17z/data=!3m1!4b1!4m9!3m8!1s0x3bbe85f56c0ce2d5:0x5aa9107cf90a870!5m2!4m1!1i2!8m2!3d14.666596!4d74.3122112!16s%2Fg%2F11qqqxz8yp"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-gold font-bold hover:underline"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="map-container shadow-lg border border-slate-200 w-full h-96">
            <iframe
              title="Hotel Ankola International Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.0620296767664!2d74.31002251126786!3d14.666595985785085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe85f56c0ce2d5%3A0x5aa9107cf90a870!2sHOTEL%20ANKOLA%20INTERNATIONAL!5e0!3m2!1sen!2sin!4v1721020000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
      
    </div>
  );
}
