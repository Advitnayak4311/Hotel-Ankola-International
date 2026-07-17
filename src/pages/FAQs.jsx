import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/Common/PageHero';
import SectionHeader from '../components/Common/SectionHeader';

const faqItems = [
  {
    question: "What are the standard Check-in and Check-out timings?",
    answer: "Our standard check-in time is 12:00 PM (Noon), and check-out time is 11:00 AM. Early check-in or late check-out is subject to room availability and may carry an additional nominal charge."
  },
  {
    question: "What is your booking cancellation policy?",
    answer: "We offer free cancellations up to 24 hours prior to the scheduled check-in date. Cancellations made within 24 hours of arrival will attract a fee equivalent to one night's room charge."
  },
  {
    question: "Do you have parking facilities, and is it secure?",
    answer: "Yes! Hotel Ankola International is situated right on the NH66 highway. We provide a spacious, well-lit, and secure parking area for both cars and tourist buses. The parking is monitored by 24/7 CCTV surveillance and security guards, free of cost for our guests."
  },
  {
    question: "Is high-speed Wi-Fi available, and what are the charges?",
    answer: "We offer complimentary high-speed Wi-Fi throughout the hotel premises, including all guest rooms, lobby, and restaurant. Upon check-in, you will receive a secure login code for seamless internet access."
  },
  {
    question: "Are pets allowed in the hotel?",
    answer: "Currently, we do not allow pets inside our guest rooms or dining areas to ensure the comfort and safety of all guests, except for certified service animals."
  },
  {
    question: "Does the room tariff include breakfast, and can I order room service?",
    answer: "Selected tariffs (such as Executive and Family room bookings) include complimentary breakfast. For other rooms, breakfast can be added. We offer 24/7 room service—simply dial extension '9' from your room phone to order from our dining menu."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useLanguage();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-24 bg-slate-50 font-sans">
      
      <PageHero
        image="/6.jpg"
        eyebrow="Need Help?"
        title={t('faqTitle')}
        subtitle={t('faqSubtitle')}
      />

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-8">
        
        <SectionHeader eyebrow="Your Questions Answered" title="Got Questions? We Have Answers" subtitle="Quick guides regarding reservations, parking, and services" />

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-medium text-slate-950 hover:bg-slate-50 focus:outline-none transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold pr-4">{item.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gold shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
      
    </div>
  );
}
